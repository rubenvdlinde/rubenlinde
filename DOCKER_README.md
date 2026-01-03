# Council of LLMs - Docker Setup

Complete Docker Compose setup voor het Council of LLMs project.

## 🎯 Wat is dit?

Deze Docker setup bevat alle benodigde services voor een lokaal draaiend "Council of LLMs" - een team van 9 gespecialiseerde AI agents die samenwerken aan software development.

## 📦 Services

- **PostgreSQL + pgvector**: Vector database voor code embeddings en agent data
- **Ollama**: LLM runtime voor lokale modellen (DeepSeek, Qwen, Llama)
- **n8n**: Workflow orchestration voor agent coördinatie
- **Redis**: Caching en job queues

## ⚡ Quick Start

### Vereisten

- Docker Desktop geïnstalleerd
- NVIDIA GPU (aanbevolen) met Container Toolkit
- Minimaal 32GB RAM
- Minimaal 100GB vrije disk space

### Stap 1: Clone en Configureer

```bash
# Clone of maak project folder
mkdir council-llm && cd council-llm

# Copy docker files (of clone deze repo)
# - docker-compose.yml
# - env.example
# - init-db.sql

# Maak .env bestand
cp env.example .env

# Pas wachtwoorden aan in .env
nano .env
```

### Stap 2: Start Services

```bash
# Start alle services in background
docker-compose up -d

# Check status
docker-compose ps

# Bekijk logs
docker-compose logs -f
```

### Stap 3: Download LLM Models

```bash
# Development agents (Anita, Henk, Johnie, Ingrid)
docker exec council-ollama ollama pull deepseek-coder:33b

# Review agents (Boris - security, partner reviews)
docker exec council-ollama ollama pull qwen2.5-coder:32b

# Management agents (Saskia, Geert, Thierry)
docker exec council-ollama ollama pull llama3.1:70b

# Check gedownloade models
docker exec council-ollama ollama list
```

### Stap 4: Verifieer Setup

```bash
# Test Ollama API
curl http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "Write a Python hello world",
  "stream": false
}'

# Open n8n web interface
open http://localhost:5678
# Login met credentials uit .env

# Check PostgreSQL
docker exec council-postgres psql -U council -d council -c "SELECT * FROM council.sprints;"
```

## 🔧 Configuratie

### GPU Configuratie

**Single GPU (RTX 4090 24GB):**

```env
OLLAMA_NUM_PARALLEL=2
OLLAMA_MAX_LOADED_MODELS=1
```

**Dual GPU (48GB VRAM):**

```env
OLLAMA_NUM_PARALLEL=4
OLLAMA_MAX_LOADED_MODELS=2
```

**Quad GPU (96GB VRAM):**

```env
OLLAMA_NUM_PARALLEL=8
OLLAMA_MAX_LOADED_MODELS=4
```

### CPU Only (Geen GPU)

Pas `docker-compose.yml` aan en verwijder de GPU sectie:

```yaml
ollama:
  # ... andere config ...
  # Verwijder deze sectie:
  # deploy:
  #   resources:
  #     reservations:
  #       devices:
  #         - driver: nvidia
```

Gebruik kleinere models:

```bash
docker exec council-ollama ollama pull deepseek-coder:6.7b
```

## 🚀 Usage

### n8n Workflows

1. Open http://localhost:5678
2. Login met je credentials
3. Importeer workflows vanuit `./n8n-workflows/` folder
4. Configure Ollama credentials in workflows:
   - URL: `http://ollama:11434`
   - Model: `deepseek-coder:33b`

### Database Access

```bash
# Via psql
docker exec -it council-postgres psql -U council -d council

# Bekijk agent activity
SELECT agent_name, activity_type, status, started_at
FROM council.agent_activity
ORDER BY started_at DESC
LIMIT 10;

# Bekijk sprints
SELECT * FROM council.sprints;
```

### OpenCode Integration

Installeer OpenCode en configureer:

```bash
# Install OpenCode
curl -fsSL https://opencode.ai/install | bash

# Configure voor lokale Ollama
opencode config set provider ollama
opencode config set base_url http://localhost:11434
opencode config set model deepseek-coder:33b
```

## 📊 Monitoring

### Resource Usage

```bash
# Docker stats
docker stats

# GPU usage (NVIDIA)
nvidia-smi

# Ollama specifiek
docker exec council-ollama nvidia-smi
```

### Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f ollama
docker-compose logs -f n8n
docker-compose logs -f postgres
```

## 🛠 Troubleshooting

### Ollama out of memory

```bash
# Stop services
docker-compose down

# Adjust in .env
OLLAMA_NUM_PARALLEL=2
OLLAMA_MAX_LOADED_MODELS=1

# Restart
docker-compose up -d
```

### n8n can't connect to Ollama

```bash
# Check network
docker network inspect council-llm_council-network

# Verify Ollama health
docker exec council-ollama curl http://localhost:11434/api/tags
```

### PostgreSQL permission denied

```bash
# Reset volume
docker-compose down -v
docker-compose up -d
```

### Models download too slow

```bash
# Download models buiten Docker (sneller)
ollama pull deepseek-coder:33b

# Copy naar Docker volume
docker cp ~/.ollama/models council-ollama:/root/.ollama/
```

## 🔄 Updates

```bash
# Update images
docker-compose pull

# Recreate containers
docker-compose up -d --force-recreate

# Keep data (volumes blijven intact)
```

## 🗑 Cleanup

```bash
# Stop services (keep data)
docker-compose down

# Stop en verwijder volumes (WAARSCHUWING: verlies alle data!)
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

## 📈 Performance Tips

1. **SSD/NVMe**: Zet Docker volumes op snelle opslag
2. **RAM**: Minimaal 32GB, aanbevolen 64GB+
3. **Network**: Gebruik Docker bridge network (standaard)
4. **GPU**: NVIDIA drivers up-to-date houden
5. **Models**: Download alle models vooraf, niet tijdens gebruik

## 🔐 Security

Voor productie gebruik:

1. **Verander alle wachtwoorden** in `.env`
2. **Gebruik HTTPS** voor n8n (reverse proxy zoals Traefik)
3. **Firewall**: Exposeer alleen benodigde ports
4. **Backups**: Maak regelmatig backups van PostgreSQL
5. **Updates**: Houd images up-to-date

## 📚 Meer Informatie

- Blog: [Council of LLMs - Lokale AI Development](https://rubenlinde.nl/blog/lokale-ai-dev-omgeving-council-of-llms)
- OpenCode: https://opencode.ai
- n8n Docs: https://docs.n8n.io
- Ollama Docs: https://ollama.ai/docs
- pgvector: https://github.com/pgvector/pgvector

## 🤝 Contributing

Vragen of suggesties? Open een issue of PR!

## 📄 License

MIT License - gebruik vrij voor persoonlijke en commerciële projecten.
