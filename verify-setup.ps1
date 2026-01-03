# Council of LLMs - Setup Verification Script (Windows)
# This script verifies that all services are running correctly

$ErrorActionPreference = "Stop"

Write-Host "🔍 Verifying Council of LLMs Setup..." -ForegroundColor Cyan
Write-Host ""

# Check if Docker is running
Write-Host "Checking Docker... " -NoNewline
try {
    docker info | Out-Null
    Write-Host "✅ Docker is running" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not running" -ForegroundColor Red
    exit 1
}

# Check if docker-compose.yml exists
Write-Host "Checking docker-compose.yml... " -NoNewline
if (-Not (Test-Path "docker-compose.yml")) {
    Write-Host "❌ docker-compose.yml not found" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Found" -ForegroundColor Green

# Check if .env exists
Write-Host "Checking .env file... " -NoNewline
if (-Not (Test-Path ".env")) {
    Write-Host "⚠️  .env not found (using defaults)" -ForegroundColor Yellow
} else {
    Write-Host "✅ Found" -ForegroundColor Green
}

Write-Host ""
Write-Host "📦 Checking Services..." -ForegroundColor Cyan
Write-Host ""

# Check PostgreSQL
Write-Host "PostgreSQL... " -NoNewline
try {
    docker exec council-postgres pg_isready -U council | Out-Null
    Write-Host "✅ Running" -ForegroundColor Green
    
    # Check pgvector extension
    Write-Host "  - pgvector extension... " -NoNewline
    $pgvector = docker exec council-postgres psql -U council -d council -c "SELECT * FROM pg_extension WHERE extname='vector';"
    if ($pgvector -match "vector") {
        Write-Host "✅ Enabled" -ForegroundColor Green
    } else {
        Write-Host "❌ Not enabled" -ForegroundColor Red
    }
    
    # Check tables
    Write-Host "  - Council schema... " -NoNewline
    $schema = docker exec council-postgres psql -U council -d council -c "SELECT schema_name FROM information_schema.schemata WHERE schema_name='council';"
    if ($schema -match "council") {
        Write-Host "✅ Created" -ForegroundColor Green
    } else {
        Write-Host "❌ Not created" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Not running" -ForegroundColor Red
}

# Check Ollama
Write-Host "Ollama... " -NoNewline
try {
    $response = Invoke-WebRequest -Uri "http://localhost:11434/api/tags" -UseBasicParsing -TimeoutSec 5
    Write-Host "✅ Running" -ForegroundColor Green
    
    # Check models
    Write-Host "  - Models installed:"
    $models = docker exec council-ollama ollama list
    $modelLines = $models -split "`n" | Select-Object -Skip 1
    
    if ($modelLines.Count -eq 0 -or $modelLines[0] -eq "") {
        Write-Host "    ⚠️  No models installed yet" -ForegroundColor Yellow
        Write-Host "    Run: docker exec council-ollama ollama pull deepseek-coder:33b"
    } else {
        foreach ($line in $modelLines) {
            if ($line.Trim() -ne "") {
                $modelName = ($line -split "\s+")[0]
                Write-Host "    ✅ $modelName" -ForegroundColor Green
            }
        }
    }
} catch {
    Write-Host "❌ Not running" -ForegroundColor Red
}

# Check n8n
Write-Host "n8n... " -NoNewline
try {
    $response = Invoke-WebRequest -Uri "http://localhost:5678/healthz" -UseBasicParsing -TimeoutSec 5
    Write-Host "✅ Running" -ForegroundColor Green
    Write-Host "  - URL: http://localhost:5678"
} catch {
    Write-Host "❌ Not running" -ForegroundColor Red
}

# Check Redis
Write-Host "Redis... " -NoNewline
try {
    docker exec council-redis redis-cli ping | Out-Null
    Write-Host "✅ Running" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Not running (optional service)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🔌 Network Check..." -ForegroundColor Cyan
Write-Host ""

# Check network
Write-Host "Council network... " -NoNewline
try {
    docker network inspect council-llm_council-network | Out-Null
    Write-Host "✅ Created" -ForegroundColor Green
    
    # Count connected containers
    $networkInfo = docker network inspect council-llm_council-network | ConvertFrom-Json
    $containerCount = ($networkInfo[0].Containers | Measure-Object).Count
    Write-Host "  - Connected containers: $containerCount"
} catch {
    Write-Host "❌ Not created" -ForegroundColor Red
}

Write-Host ""
Write-Host "💾 Volume Check..." -ForegroundColor Cyan
Write-Host ""

# Check volumes
$volumes = @("postgres-data", "ollama-models", "n8n-data", "redis-data")
foreach ($vol in $volumes) {
    Write-Host "$vol... " -NoNewline
    try {
        docker volume inspect "council-llm_$vol" | Out-Null
        Write-Host "✅ Created" -ForegroundColor Green
    } catch {
        Write-Host "❌ Not found" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "🖥️  GPU Check..." -ForegroundColor Cyan
Write-Host ""

# Check NVIDIA GPU
if (Get-Command nvidia-smi -ErrorAction SilentlyContinue) {
    Write-Host "✅ nvidia-smi found" -ForegroundColor Green
    
    # Check GPU in Docker
    Write-Host "GPU accessible in Ollama container... " -NoNewline
    try {
        docker exec council-ollama nvidia-smi | Out-Null
        Write-Host "✅ Yes" -ForegroundColor Green
        
        # Show GPU info
        $gpuInfo = docker exec council-ollama nvidia-smi --query-gpu=name,memory.total --format=csv,noheader
        Write-Host "  - GPU: $gpuInfo"
    } catch {
        Write-Host "❌ No (running on CPU)" -ForegroundColor Red
    }
} else {
    Write-Host "⚠️  No NVIDIA GPU detected (CPU mode)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🧪 Quick Functionality Test..." -ForegroundColor Cyan
Write-Host ""

# Test Ollama generation (if models are installed)
$modelList = docker exec council-ollama ollama list
if ($modelList -match "deepseek-coder") {
    Write-Host "Testing DeepSeek Coder... " -NoNewline
    try {
        $body = @{
            model = "deepseek-coder:33b"
            prompt = "print hello world in python"
            stream = $false
        } | ConvertTo-Json
        
        $response = Invoke-RestMethod -Uri "http://localhost:11434/api/generate" -Method Post -Body $body -ContentType "application/json" -TimeoutSec 30
        if ($response.response) {
            Write-Host "✅ Working" -ForegroundColor Green
        } else {
            Write-Host "❌ Failed" -ForegroundColor Red
        }
    } catch {
        Write-Host "❌ Failed" -ForegroundColor Red
    }
} else {
    Write-Host "⚠️  Skipping model test (no models installed)" -ForegroundColor Yellow
}

# Test PostgreSQL query
Write-Host "Testing PostgreSQL query... " -NoNewline
try {
    $sprintCount = docker exec council-postgres psql -U council -d council -t -c "SELECT COUNT(*) FROM council.sprints;"
    Write-Host "✅ Working (Found $($sprintCount.Trim()) sprints)" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed" -ForegroundColor Red
}

Write-Host ""
Write-Host "📊 Summary" -ForegroundColor Cyan
Write-Host ""

# Count running containers
$running = (docker-compose ps --services --filter "status=running").Count
$total = (docker-compose ps --services).Count

Write-Host "Services: $running/$total running"
Write-Host ""

if ($running -eq $total) {
    Write-Host "✅ All systems operational!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "1. Open n8n: http://localhost:5678"
    Write-Host "2. Install OpenCode: npm install -g opencode"
    Write-Host "3. Download models: docker exec council-ollama ollama pull deepseek-coder:33b"
    Write-Host "4. Import n8n workflows from .\n8n-workflows\"
} else {
    Write-Host "⚠️  Some services are not running" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Try:"
    Write-Host "  docker-compose up -d"
    Write-Host "  docker-compose logs -f"
}

Write-Host ""

