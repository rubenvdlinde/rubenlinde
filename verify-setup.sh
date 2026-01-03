#!/bin/bash

# Council of LLMs - Setup Verification Script
# This script verifies that all services are running correctly

set -e

echo "🔍 Verifying Council of LLMs Setup..."
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is running
echo -n "Checking Docker... "
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Docker is running${NC}"

# Check if docker-compose.yml exists
echo -n "Checking docker-compose.yml... "
if [ ! -f "docker-compose.yml" ]; then
    echo -e "${RED}❌ docker-compose.yml not found${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Found${NC}"

# Check if .env exists
echo -n "Checking .env file... "
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env not found (using defaults)${NC}"
else
    echo -e "${GREEN}✅ Found${NC}"
fi

echo ""
echo "📦 Checking Services..."
echo ""

# Check PostgreSQL
echo -n "PostgreSQL... "
if docker exec council-postgres pg_isready -U council > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Running${NC}"
    
    # Check pgvector extension
    echo -n "  - pgvector extension... "
    if docker exec council-postgres psql -U council -d council -c "SELECT * FROM pg_extension WHERE extname='vector';" | grep -q "vector"; then
        echo -e "${GREEN}✅ Enabled${NC}"
    else
        echo -e "${RED}❌ Not enabled${NC}"
    fi
    
    # Check tables
    echo -n "  - Council schema... "
    if docker exec council-postgres psql -U council -d council -c "SELECT schema_name FROM information_schema.schemata WHERE schema_name='council';" | grep -q "council"; then
        echo -e "${GREEN}✅ Created${NC}"
    else
        echo -e "${RED}❌ Not created${NC}"
    fi
else
    echo -e "${RED}❌ Not running${NC}"
fi

# Check Ollama
echo -n "Ollama... "
if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Running${NC}"
    
    # Check models
    echo "  - Models installed:"
    models=$(docker exec council-ollama ollama list | tail -n +2)
    if [ -z "$models" ]; then
        echo -e "    ${YELLOW}⚠️  No models installed yet${NC}"
        echo "    Run: docker exec council-ollama ollama pull deepseek-coder:33b"
    else
        echo "$models" | while read -r line; do
            model_name=$(echo "$line" | awk '{print $1}')
            echo -e "    ${GREEN}✅${NC} $model_name"
        done
    fi
else
    echo -e "${RED}❌ Not running${NC}"
fi

# Check n8n
echo -n "n8n... "
if curl -s http://localhost:5678/healthz > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Running${NC}"
    echo "  - URL: http://localhost:5678"
else
    echo -e "${RED}❌ Not running${NC}"
fi

# Check Redis
echo -n "Redis... "
if docker exec council-redis redis-cli ping > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Running${NC}"
else
    echo -e "${YELLOW}⚠️  Not running (optional service)${NC}"
fi

echo ""
echo "🔌 Network Check..."
echo ""

# Check network
echo -n "Council network... "
if docker network inspect council-llm_council-network > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Created${NC}"
    
    # Count connected containers
    container_count=$(docker network inspect council-llm_council-network | grep -c "council-")
    echo "  - Connected containers: $container_count"
else
    echo -e "${RED}❌ Not created${NC}"
fi

echo ""
echo "💾 Volume Check..."
echo ""

# Check volumes
volumes=("postgres-data" "ollama-models" "n8n-data" "redis-data")
for vol in "${volumes[@]}"; do
    echo -n "$vol... "
    if docker volume inspect "council-llm_${vol}" > /dev/null 2>&1; then
        size=$(docker system df -v | grep "council-llm_${vol}" | awk '{print $3}' || echo "Unknown")
        echo -e "${GREEN}✅ Created${NC} (Size: $size)"
    else
        echo -e "${RED}❌ Not found${NC}"
    fi
done

echo ""
echo "🖥️  GPU Check..."
echo ""

# Check NVIDIA GPU
if command -v nvidia-smi &> /dev/null; then
    echo -e "${GREEN}✅ nvidia-smi found${NC}"
    
    # Check GPU in Docker
    echo -n "GPU accessible in Ollama container... "
    if docker exec council-ollama nvidia-smi > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Yes${NC}"
        
        # Show GPU info
        gpu_info=$(docker exec council-ollama nvidia-smi --query-gpu=name,memory.total --format=csv,noheader)
        echo "  - GPU: $gpu_info"
    else
        echo -e "${RED}❌ No (running on CPU)${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  No NVIDIA GPU detected (CPU mode)${NC}"
fi

echo ""
echo "🧪 Quick Functionality Test..."
echo ""

# Test Ollama generation (if models are installed)
if docker exec council-ollama ollama list | grep -q "deepseek-coder"; then
    echo -n "Testing DeepSeek Coder... "
    response=$(curl -s http://localhost:11434/api/generate -d '{
        "model": "deepseek-coder:33b",
        "prompt": "print hello world in python",
        "stream": false
    }' | jq -r '.response' 2>/dev/null || echo "")
    
    if [ -n "$response" ]; then
        echo -e "${GREEN}✅ Working${NC}"
    else
        echo -e "${RED}❌ Failed${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Skipping model test (no models installed)${NC}"
fi

# Test PostgreSQL query
echo -n "Testing PostgreSQL query... "
if sprint_count=$(docker exec council-postgres psql -U council -d council -t -c "SELECT COUNT(*) FROM council.sprints;" 2>/dev/null); then
    echo -e "${GREEN}✅ Working${NC} (Found $sprint_count sprints)"
else
    echo -e "${RED}❌ Failed${NC}"
fi

echo ""
echo "📊 Summary"
echo ""

# Count running containers
running=$(docker-compose ps --services --filter "status=running" | wc -l)
total=$(docker-compose ps --services | wc -l)

echo "Services: $running/$total running"
echo ""

if [ "$running" -eq "$total" ]; then
    echo -e "${GREEN}✅ All systems operational!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Open n8n: http://localhost:5678"
    echo "2. Install OpenCode: curl -fsSL https://opencode.ai/install | bash"
    echo "3. Download models: docker exec council-ollama ollama pull deepseek-coder:33b"
    echo "4. Import n8n workflows from ./n8n-workflows/"
else
    echo -e "${YELLOW}⚠️  Some services are not running${NC}"
    echo ""
    echo "Try:"
    echo "  docker-compose up -d"
    echo "  docker-compose logs -f"
fi

echo ""

