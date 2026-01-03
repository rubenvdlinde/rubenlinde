# Council of LLMs: Complete Setup Guide

**Totale tijd:** ~2-3 uur (vooral model downloads)  
**Moeilijkheidsgraad:** Intermediate  
**Vereiste kennis:** Basic terminal, Docker basics

Deze guide is volledig getest en walk je door elke stap van het opzetten van een lokaal Council of LLMs.

## 🎯 Wat je gaat bouwen

- ✅ Complete Docker environment met alle services
- ✅ PostgreSQL database met vector search capabilities
- ✅ Ollama runtime met 3 LLM modellen
- ✅ n8n voor workflow orchestration
- ✅ OpenCode IDE configuratie
- ✅ Eerste werkende agent workflow

---

## 🚀 Stap 0: Pre-flight Check (5 minuten)

Voordat we beginnen, verifiëren we of je systeem klaar is.

**Benodigdheden checken:**

```bash
# Check Docker Desktop
docker --version
# Verwacht: Docker version 24.0+

# Check Docker Compose
docker-compose --version
# Verwacht: docker-compose version 2.0+

# Check beschikbare disk space
df -h
# Verwacht: Minimaal 100GB vrij voor models

# Check RAM
free -h  # Linux
vm_stat | grep "Pages free"  # Mac
systeminfo | find "Available Physical Memory"  # Windows
# Verwacht: Minimaal 16GB, recommended 32GB+
```

**Geen Docker? Installeer eerst:**

- **Windows**: https://docs.docker.com/desktop/install/windows-install/
- **Mac**: https://docs.docker.com/desktop/install/mac-install/
- **Linux**: https://docs.docker.com/desktop/install/linux-install/

**GPU Check (optioneel maar aanbevolen):**

```bash
# NVIDIA GPU check
nvidia-smi

# Als je geen GPU hebt, geen probleem!
# Je kunt CPU-only draaien (langzamer maar werkt)
```

---

## 📁 Stap 1: Project Setup (5 minuten)

Maak een dedicated folder voor je Council project.

```bash
# Maak project directory
mkdir -p ~/council-llm
cd ~/council-llm

# Maak subfolders
mkdir -p n8n-workflows
mkdir -p data/postgres
mkdir -p data/ollama
mkdir -p logs
mkdir -p backups

# Verify structure
tree -L 2
# Expected output:
# .
# ├── n8n-workflows/
# ├── data/
# │   ├── postgres/
# │   └── ollama/
# ├── logs/
# └── backups/
```

**Download de Council configuratie bestanden:**

```bash
# Optie A: Via Git (aanbevolen)
cd ~
git clone https://github.com/rubenvdlinde/rubenlinde.git
cd rubenlinde
cp docker-compose.yml ~/council-llm/
cp init-db.sql ~/council-llm/
cp env.example ~/council-llm/.env
cd ~/council-llm

# Optie B: Handmatig downloaden
cd ~/council-llm
curl -O https://raw.githubusercontent.com/rubenvdlinde/rubenlinde/main/docker-compose.yml
curl -O https://raw.githubusercontent.com/rubenvdlinde/rubenlinde/main/init-db.sql
curl -O https://raw.githubusercontent.com/rubenvdlinde/rubenlinde/main/env.example
cp env.example .env
```

---

## 🔐 Stap 2: Environment Configuratie (10 minuten)

Edit het `.env` bestand met je eigen wachtwoorden.

```bash
cd ~/council-llm

# Edit .env bestand
nano .env  # of vim, of je favoriete editor
```

Pas aan:

```bash
# PostgreSQL Configuration
POSTGRES_PASSWORD=jouw_veilige_wachtwoord_hier

# n8n Configuration
N8N_USER=admin
N8N_PASSWORD=jouw_n8n_wachtwoord_hier
N8N_HOST=localhost

# Redis Configuration
REDIS_PASSWORD=jouw_redis_wachtwoord_hier

# Ollama Configuration (pas aan op basis van je GPU)
# Single RTX 4090 (24GB VRAM)
OLLAMA_NUM_PARALLEL=2
OLLAMA_MAX_LOADED_MODELS=1

# Dual GPU (48GB VRAM)
# OLLAMA_NUM_PARALLEL=4
# OLLAMA_MAX_LOADED_MODELS=2

# CPU Only (geen GPU)
# OLLAMA_NUM_PARALLEL=1
# OLLAMA_MAX_LOADED_MODELS=1
```

**BELANGRIJK:** Gebruik sterke, unieke wachtwoorden!

**Genereer random wachtwoorden (optioneel):**

```bash
# Linux/Mac
openssl rand -base64 32

# Windows PowerShell
[Convert]::ToBase64String((1..32|%{Get-Random -Max 256}))
```

---

## 🐳 Stap 3: Start Docker Services (10 minuten)

Nu starten we de volledige stack.

```bash
cd ~/council-llm

# Start alle services in detached mode
docker-compose up -d

# Dit download en start:
# - PostgreSQL (~ 200MB)
# - Ollama (~ 1GB)
# - n8n (~ 300MB)
# - Redis (~ 50MB)

# Check of alles draait
docker-compose ps

# Verwachte output:
# NAME                STATUS          PORTS
# council-postgres    Up (healthy)    0.0.0.0:5432->5432/tcp
# council-ollama      Up              0.0.0.0:11434->11434/tcp
# council-n8n         Up              0.0.0.0:5678->5678/tcp
# council-redis       Up              0.0.0.0:6379->6379/tcp
```

**Bekijk logs als er problemen zijn:**

```bash
# Alle logs
docker-compose logs -f

# Specific service
docker-compose logs -f ollama
docker-compose logs -f postgres
docker-compose logs -f n8n
```

**Troubleshooting veelvoorkomende problemen:**

| Probleem                   | Oplossing                                                    |
| -------------------------- | ------------------------------------------------------------ |
| Port already in use        | `docker-compose down` dan andere ports in docker-compose.yml |
| Permission denied          | `sudo` gebruiken of Docker groep toevoegen                   |
| Container keeps restarting | Check logs met `docker-compose logs <service>`               |

---

## 🗄️ Stap 4: PostgreSQL Verificatie (5 minuten)

Check of de database correct is geïnitialiseerd.

```bash
# Connect to PostgreSQL
docker exec -it council-postgres psql -U council -d council

# In psql console:
```

```sql
-- Check pgvector extension
SELECT * FROM pg_extension WHERE extname='vector';
-- Verwacht: 1 row met vector extension

-- Check council schema
\dn
-- Verwacht: council schema listed

-- Check tables
\dt council.*
-- Verwacht:
--   council.agent_activity
--   council.agent_metrics
--   council.code_embeddings
--   council.pull_requests
--   council.sprints

-- Check vector index
\d council.code_embeddings
-- Verwacht: embedding column met type vector(1536)

-- Test initial data
SELECT * FROM council.sprints;
-- Verwacht: 1 row met "Sprint 0 - Setup"

SELECT * FROM council.agent_activity;
-- Verwacht: 2 rows (Saskia en Geert planning activities)

-- Exit
\q
```

**Database is klaar! ✅**

---

## 🤖 Stap 5: Ollama & LLM Models Download (1-2 uur)

Nu installeren we de AI modellen. **Dit is het langzaamste deel** - modellen zijn 20-40GB each!

```bash
# Check of Ollama draait
curl http://localhost:11434/api/tags
# Verwacht: {"models": []}

# Download DeepSeek Coder (development agents: Anita, Henk, Johnie, Ingrid)
# Size: ~20GB, Download time: 15-45 min afhankelijk van internet
echo "Downloading DeepSeek Coder 33B..."
docker exec council-ollama ollama pull deepseek-coder:33b

# Download Qwen (review agents: Boris, peer reviews)
# Size: ~19GB
echo "Downloading Qwen 2.5 Coder 32B..."
docker exec council-ollama ollama pull qwen2.5-coder:32b

# Download Llama (management: Saskia, Geert, Thierry)
# Size: ~40GB
echo "Downloading Llama 3.1 70B..."
docker exec council-ollama ollama pull llama3.1:70b

# List installed models
docker exec council-ollama ollama list

# Verwachte output:
# NAME                      SIZE      MODIFIED
# deepseek-coder:33b        20GB      X minutes ago
# qwen2.5-coder:32b         19GB      X minutes ago
# llama3.1:70b              40GB      X minutes ago
```

**⏱️ Download Times (schatting):**

| Internet Speed | Time per 20GB model | Total (3 models) |
| -------------- | ------------------- | ---------------- |
| 100 Mbps       | ~30 min             | ~1.5 uur         |
| 500 Mbps       | ~6 min              | ~20 min          |
| 1 Gbps         | ~3 min              | ~10 min          |

**Tip:** Start deze downloads 's avonds en laat ze overnight draaien!

**Alternatief: Start met kleinere models voor testen:**

```bash
# Test setup met kleine models (sneller downloaden)
docker exec council-ollama ollama pull deepseek-coder:6.7b    # ~4GB
docker exec council-ollama ollama pull qwen2.5-coder:7b        # ~4GB
docker exec council-ollama ollama pull llama3.1:8b             # ~5GB
```

---

## 🧪 Stap 6: Test Ollama Inference (10 minuten)

Verifieer dat de modellen écht werken.

**Test 1: Simple generation**

```bash
# Test DeepSeek Coder met simpele prompt
curl http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "Write a Python function to calculate fibonacci numbers",
  "stream": false
}' | jq '.response'

# Verwacht: Python code output met fibonacci functie
```

**Test 2: Streaming response**

```bash
# Test met streaming (realistischer)
curl http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "Explain what a REST API is in one sentence",
  "stream": true
}'

# Verwacht: Streaming response met uitleg
```

**Test 3: GPU usage check**

```bash
# Check GPU usage tijdens inference (als je NVIDIA hebt)
# Terminal 1:
docker exec council-ollama nvidia-smi -l 1

# Terminal 2:
curl http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "Write complex sorting algorithm",
  "stream": false
}'

# Verwacht: GPU memory in use tijdens inference
```

**Test 4: Performance timing**

```bash
# Tijdsmeting voor simpele prompt
time curl -s http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "print hello world in python",
  "stream": false
}' > /dev/null

# Met GPU (RTX 4090): ~2-5 seconden
# Zonder GPU (CPU): ~15-30 seconden
```

**Als alles werkt: ✅ Ollama is operationeel!**

---

## 🔄 Stap 7: n8n Setup (15 minuten)

Configureer de workflow orchestration engine.

**7.1: Open n8n web interface**

1. Browser naar: **http://localhost:5678**
2. Eerste keer: Account aanmaken
   - Email: je eigen email
   - Password: (kies een sterk wachtwoord)
3. Of login met credentials uit `.env`:
   - Username: `admin`
   - Password: (wat je in `.env` hebt gezet)

**7.2: Configureer Ollama credentials**

1. In n8n → **Settings** (tandwiel rechtsonder)
2. → **Credentials**
3. → **Add Credential**
4. Zoek: **HTTP Request** of **Ollama** (als beschikbaar)
5. Instellingen:
   - Name: `Local Ollama`
   - URL: `http://ollama:11434` (⚠️ let op: `ollama` not `localhost`!)
   - Method: POST
6. **Test Connection** → moet groen worden
7. Save

**7.3: Maak je eerste test workflow**

1. **Workflows** → **Add Workflow**
2. Name: "Test LLM Call"
3. Add nodes:

**Node 1: Manual Trigger**

- Drag "Manual Trigger" from left panel
- Configure: geen configuratie nodig

**Node 2: HTTP Request**

- Drag "HTTP Request"
- Connect to Manual Trigger
- Configure:
  - Method: `POST`
  - URL: `http://ollama:11434/api/generate`
  - Body Content Type: `JSON`
  - Specify Body: `Using JSON`
  - JSON Body:
    ```json
    {
      "model": "deepseek-coder:33b",
      "prompt": "Write a hello world function in Python",
      "stream": false
    }
    ```

**Node 3: Code (Extract Response)**

- Drag "Code" node
- Connect to HTTP Request
- Code:
  ```javascript
  const response = items[0].json.response;
  return [
    {
      json: {
        generated_code: response,
      },
    },
  ];
  ```

4. **Save** workflow (Ctrl+S)
5. Click **Execute Workflow** (play button)

**Verwacht:** JSON output met generated Python code in "Code" node!

**Screenshot waar je dit ziet:**

- Links: Node list (met Manual Trigger, HTTP Request, Code)
- Midden: Canvas met connected nodes
- Rechts: Output panel met JSON result

**Als dit werkt: ✅ n8n is operationeel en praat met Ollama!**

---

## 💻 Stap 8: OpenCode IDE Setup (15 minuten)

Installeer en configureer de AI coding agent.

**8.1: Installatie**

```bash
# Linux/Mac
curl -fsSL https://opencode.ai/install | bash

# Of via npm (cross-platform)
npm install -g opencode

# Windows: Download desktop app
# https://opencode.ai/download

# Verify installation
opencode --version
# Verwacht: opencode version X.X.X
```

**8.2: Configuratie**

```bash
# Start OpenCode configuratie wizard
opencode config init

# Wizard vragen:
# Provider? → Ollama
# Base URL? → http://localhost:11434
# Model? → deepseek-coder:33b
```

**8.3: Handmatige config (alternatief)**

```bash
# Linux/Mac
mkdir -p ~/.opencode
nano ~/.opencode/config.json
```

```json
{
  "providers": [
    {
      "name": "local-ollama",
      "type": "ollama",
      "baseURL": "http://localhost:11434",
      "models": ["deepseek-coder:33b", "qwen2.5-coder:32b", "llama3.1:70b"]
    }
  ],
  "defaultProvider": "local-ollama",
  "defaultModel": "deepseek-coder:33b"
}
```

**Windows config path:**

```
C:\Users\<username>\.opencode\config.json
```

**8.4: Test OpenCode**

```bash
# Terminal mode test
opencode "Write a Python function to reverse a string"

# Verwacht: Generated Python code in terminal

# Interactive mode
opencode

# In OpenCode prompt:
>>> write me a REST API endpoint with Flask
>>> explain what dependency injection is
>>> refactor this code: [paste code]
```

**8.5: VS Code Extension (optioneel maar aanbevolen)**

```bash
# Install extensie
code --install-extension Anomaly.opencode

# Restart VS Code

# Test in VS Code:
# 1. Open een .py bestand
# 2. Selecteer wat code
# 3. Druk Ctrl+L (Windows/Linux) of Cmd+L (Mac)
# 4. Type: "explain this code"
# 5. Verwacht: Uitleg in sidebar
```

**Als dit werkt: ✅ OpenCode is operationeel!**

---

## 🎯 Stap 9: End-to-End Verificatie (20 minuten)

Nu testen we of **alles samen** werkt.

**9.1: Download verificatie script**

```bash
cd ~/council-llm

# Linux/Mac
curl -O https://raw.githubusercontent.com/rubenvdlinde/rubenlinde/main/verify-setup.sh
chmod +x verify-setup.sh
./verify-setup.sh

# Windows PowerShell
Invoke-WebRequest -Uri https://raw.githubusercontent.com/rubenvdlinde/rubenlinde/main/verify-setup.ps1 -OutFile verify-setup.ps1
.\verify-setup.ps1
```

**Verwachte output:**

```
🔍 Verifying Council of LLMs Setup...

✅ Docker is running
✅ docker-compose.yml found
✅ .env found

📦 Checking Services...
✅ PostgreSQL running
  ✅ pgvector extension enabled
  ✅ Council schema created
✅ Ollama running
  ✅ deepseek-coder:33b
  ✅ qwen2.5-coder:32b
  ✅ llama3.1:70b
✅ n8n running
  → URL: http://localhost:5678
✅ Redis running

🔌 Network Check...
✅ Council network created
  → Connected containers: 4

💾 Volume Check...
✅ postgres-data created
✅ ollama-models created
✅ n8n-data created
✅ redis-data created

🖥️ GPU Check...
✅ nvidia-smi found
✅ GPU accessible in Ollama
  → GPU: NVIDIA GeForce RTX 4090, 24576 MiB

🧪 Quick Functionality Test...
✅ DeepSeek Coder working
✅ PostgreSQL query working (Found 1 sprints)

📊 Summary
Services: 4/4 running

✅ All systems operational!

Next steps:
1. Open n8n: http://localhost:5678
2. Install OpenCode: curl -fsSL https://opencode.ai/install | bash
3. Import workflows from ./n8n-workflows/
```

**9.2: Manual end-to-end test**

Test de volledige keten: **Ollama → PostgreSQL → n8n**

```bash
# 1. Generate code met Ollama
echo "Generating code..."
code=$(curl -s http://localhost:11434/api/generate -d '{
  "model": "deepseek-coder:33b",
  "prompt": "Write a Python function to validate email addresses using regex",
  "stream": false
}' | jq -r '.response')

echo "Generated code:"
echo "$code"

# 2. Sla code op in PostgreSQL
echo "Saving to database..."
docker exec -i council-postgres psql -U council -d council << EOF
INSERT INTO council.agent_activity (
  agent_name,
  activity_type,
  description,
  status,
  metadata
) VALUES (
  'Johnie',
  'code_generation',
  'Generated email validation function',
  'completed',
  '{"language": "python", "lines": 10}'::jsonb
);
EOF

# 3. Verify in database
echo "Verifying in database..."
docker exec council-postgres psql -U council -d council -c "
  SELECT
    agent_name,
    activity_type,
    description,
    status,
    started_at
  FROM council.agent_activity
  ORDER BY started_at DESC
  LIMIT 5;
"

# Verwacht output:
#  agent_name | activity_type    | description                          | status    | started_at
# ------------+------------------+--------------------------------------+-----------+----------------------------
#  Johnie     | code_generation  | Generated email validation function  | completed | 2025-01-03 14:23:45.123456
#  Geert      | planning         | User story creation                  | completed | 2025-01-03 12:00:00
#  Saskia     | planning         | Initial sprint planning              | completed | 2025-01-03 12:00:00
```

**Als dit werkt: ✅ Complete chain is operationeel!**

**9.3: Test vector embeddings (advanced)**

Test de vector similarity search functionaliteit.

```bash
# Install Python dependencies
pip3 install psycopg2-binary numpy

# Create test script
cat > test_vector.py << 'EOF'
import psycopg2
import json

# Connect (vervang password met jouw .env password!)
conn = psycopg2.connect(
    host="localhost",
    port=5432,
    database="council",
    user="council",
    password="jouw_password_hier"  # ⚠️ VERVANG DIT
)

cur = conn.cursor()

# Mock embedding (in productie: gebruik een embedding model zoals sentence-transformers)
# Voor deze test gebruiken we fake embeddings
import random
fake_embedding_1 = [random.random() for _ in range(1536)]
fake_embedding_2 = [random.random() for _ in range(1536)]
fake_embedding_similar = fake_embedding_1.copy()  # Exact match voor test

# Insert test code chunks
print("Inserting test code chunks...")
test_data = [
    ("utils.py", "def hello(): print('world')", fake_embedding_1, "python"),
    ("main.py", "if __name__ == '__main__': hello()", fake_embedding_2, "python"),
    ("test.py", "def hello(): print('world')", fake_embedding_similar, "python"),  # Duplicate
]

for file_path, code, embedding, lang in test_data:
    cur.execute("""
        INSERT INTO council.code_embeddings (
            file_path,
            code_chunk,
            embedding,
            chunk_index,
            language
        ) VALUES (%s, %s, %s, %s, %s)
    """, (file_path, code, embedding, 0, lang))

conn.commit()
print(f"✅ Inserted {len(test_data)} code chunks")

# Query similar code (cosine similarity search)
print("\nQuerying for similar code to utils.py...")
cur.execute("""
    SELECT
        file_path,
        code_chunk,
        1 - (embedding <=> %s::vector) AS similarity
    FROM council.code_embeddings
    ORDER BY similarity DESC
    LIMIT 5;
""", (fake_embedding_1,))

print("\nSimilarity search results:")
print("-" * 80)
for row in cur.fetchall():
    print(f"{row[0]:<20} | Similarity: {row[2]:.4f}")
    print(f"  Code: {row[1][:60]}...")
    print()

cur.close()
conn.close()

print("✅ Vector search test completed!")
EOF

# Run test
python3 test_vector.py

# Verwachte output:
# ✅ Inserted 3 code chunks
#
# Querying for similar code to utils.py...
#
# Similarity search results:
# --------------------------------------------------------------------------------
# test.py              | Similarity: 1.0000
#   Code: def hello(): print('world')...
#
# utils.py             | Similarity: 1.0000
#   Code: def hello(): print('world')...
#
# main.py              | Similarity: 0.3456
#   Code: if __name__ == '__main__': hello()...
#
# ✅ Vector search test completed!
```

**Als dit werkt: ✅ Vector similarity search is operationeel!**

---

## 🤖 Stap 10: First Agent Workflow (30 minuten)

Maak je eerste echte agent workflow in n8n: **Code Generation → Review → Commit**

**10.1: Create workflow in n8n**

1. Open n8n: http://localhost:5678
2. **Workflows** → **Add Workflow**
3. Name: **"Single Agent Development"**

**10.2: Add nodes**

### Node 1: Webhook (Input Trigger)

- Drag **"Webhook"** node
- Configure:
  - **HTTP Method**: POST
  - **Path**: `council/generate`
  - **Response Mode**: Last Node
- Copy Webhook URL (bijv. `http://localhost:5678/webhook/council/generate`)

### Node 2: Code - Extract Input

- Drag **"Code"** node
- Connect to Webhook
- Name: "Extract Task"
- Code:

  ```javascript
  const task = items[0].json.body.task || 'Write hello world';
  const language = items[0].json.body.language || 'Python';

  return [
    {
      json: {
        task: task,
        language: language,
        timestamp: new Date().toISOString(),
      },
    },
  ];
  ```

### Node 3: HTTP Request - Generate Code (Johnie)

- Drag **"HTTP Request"** node
- Connect to "Extract Task"
- Name: "Johnie: Generate Code"
- Configure:
  - **Method**: POST
  - **URL**: `http://ollama:11434/api/generate`
  - **Send Body**: ON
  - **Body Content Type**: JSON
  - **Specify Body**: Using JSON
  - **JSON**:
    ```json
    {
      "model": "deepseek-coder:33b",
      "prompt": "Write {{$json.task}} in {{$json.language}}. Only return clean, production-ready code with no explanations. Include proper error handling and documentation.",
      "stream": false,
      "temperature": 0.7
    }
    ```

### Node 4: HTTP Request - Review Code (Boris)

- Drag **"HTTP Request"** node
- Connect to "Johnie: Generate Code"
- Name: "Boris: Security Review"
- Configure:
  - **Method**: POST
  - **URL**: `http://ollama:11434/api/generate`
  - **Send Body**: ON
  - **Body Content Type**: JSON
  - **JSON**:
    ````json
    {
      "model": "qwen2.5-coder:32b",
      "prompt": "Review this code for security vulnerabilities, bugs, and code quality issues:\n\n```{{$json.language}}\n{{$node['Johnie: Generate Code'].json.response}}\n```\n\nProvide: 1) Security issues (if any), 2) Bug risks, 3) Improvement suggestions. Be concise.",
      "stream": false,
      "temperature": 0.3
    }
    ````

### Node 5: Postgres - Log Activity

- Drag **"Postgres"** node
- Connect to "Boris: Security Review"
- Name: "Log to Database"
- Configure:
  - **Operation**: Insert
  - **Table**: `council.agent_activity`
  - **Columns**:
    - `agent_name`: `="Johnie"`
    - `activity_type`: `="code_generation"`
    - `description`: `={{$node['Extract Task'].json.task}}`
    - `status`: `="completed"`
    - `metadata`:
      ```json
      {
        "language": "{{$node['Extract Task'].json.language}}",
        "code_length": "{{$node['Johnie: Generate Code'].json.response.length}}",
        "reviewed_by": "Boris"
      }
      ```

### Node 6: HTTP Response (Output)

- Drag **"Respond to Webhook"** node
- Connect to "Log to Database"
- Name: "Return Result"
- Configure:
  - **Response Code**: 200
  - **Response Body**:
    ```json
    {
      "success": true,
      "task": "{{$node['Extract Task'].json.task}}",
      "language": "{{$node['Extract Task'].json.language}}",
      "generated_code": "{{$node['Johnie: Generate Code'].json.response}}",
      "security_review": "{{$node['Boris: Security Review'].json.response}}",
      "timestamp": "{{$node['Extract Task'].json.timestamp}}"
    }
    ```

**10.3: Save & Test workflow**

1. Click **Save** (Ctrl+S)
2. Click **Execute Workflow** (top right play button)

**10.4: Test via curl**

```bash
# Test met simpele task
curl -X POST http://localhost:5678/webhook/council/generate \
  -H "Content-Type: application/json" \
  -d '{
    "task": "function to validate email addresses",
    "language": "Python"
  }' | jq '.'

# Verwachte output (na ~10-20 seconden):
# {
#   "success": true,
#   "task": "function to validate email addresses",
#   "language": "Python",
#   "generated_code": "import re\n\ndef validate_email(email: str) -> bool:\n    ...",
#   "security_review": "Security analysis:\n1. Input validation: Good...",
#   "timestamp": "2025-01-03T14:30:00.000Z"
# }
```

**10.5: Verify in database**

```bash
# Check logged activity
docker exec council-postgres psql -U council -d council -c "
  SELECT
    agent_name,
    activity_type,
    description,
    status,
    metadata->>'language' as language,
    started_at
  FROM council.agent_activity
  WHERE agent_name = 'Johnie'
  ORDER BY started_at DESC
  LIMIT 3;
"

# Verwacht: Je net uitgevoerde task
```

**Als dit werkt: ✅ Je hebt een werkende agent workflow!**

---

## 📊 Stap 11: Monitoring & Debugging (15 minuten)

Setup monitoring om te zien wat er gebeurt.

**11.1: Resource monitoring**

```bash
# Docker stats (CPU, RAM per container)
docker stats

# Watch in real-time (updates elke 2 sec)
watch -n 2 'docker stats --no-stream'

# GPU monitoring (als NVIDIA)
watch -n 1 'docker exec council-ollama nvidia-smi'
```

**11.2: Log aggregatie**

```bash
# Alle logs naar bestand met timestamp
docker-compose logs -f > ~/council-llm/logs/council-$(date +%Y%m%d-%H%M%S).log &

# Tail specifieke service met grep
docker-compose logs -f ollama | grep -i "error\|warning"

# n8n execution logs
docker exec council-n8n tail -f /home/node/.n8n/logs/n8n.log
```

**11.3: Database monitoring queries**

```sql
-- Connect
docker exec -it council-postgres psql -U council -d council

-- Most active agents
SELECT
  agent_name,
  COUNT(*) as total_tasks,
  COUNT(*) FILTER (WHERE status = 'completed') as completed,
  COUNT(*) FILTER (WHERE status = 'failed') as failed,
  AVG(EXTRACT(EPOCH FROM (completed_at - started_at))) as avg_duration_sec
FROM council.agent_activity
WHERE completed_at IS NOT NULL
GROUP BY agent_name
ORDER BY total_tasks DESC;

-- Recent failures
SELECT
  agent_name,
  activity_type,
  description,
  started_at,
  metadata
FROM council.agent_activity
WHERE status = 'failed'
ORDER BY started_at DESC
LIMIT 10;

-- Today's activity timeline
SELECT
  DATE_TRUNC('hour', started_at) as hour,
  agent_name,
  COUNT(*) as tasks
FROM council.agent_activity
WHERE started_at >= CURRENT_DATE
GROUP BY hour, agent_name
ORDER BY hour DESC;

-- Average code generation time
SELECT
  metadata->>'language' as language,
  AVG(EXTRACT(EPOCH FROM (completed_at - started_at))) as avg_time_sec,
  COUNT(*) as samples
FROM council.agent_activity
WHERE activity_type = 'code_generation'
  AND completed_at IS NOT NULL
  AND metadata->>'language' IS NOT NULL
GROUP BY language
ORDER BY avg_time_sec DESC;
```

**11.4: n8n execution monitoring**

In n8n web interface:

1. **Executions** (sidebar)
2. See all workflow runs with:
   - Status (success/error)
   - Duration
   - Input/output data
3. Click execution → see node-by-node results

**11.5: Create monitoring dashboard (optional but cool)**

```bash
# Install Grafana (optional)
docker run -d \
  --name council-grafana \
  --network council-llm_council-network \
  -p 3000:3000 \
  -e GF_SECURITY_ADMIN_PASSWORD=admin \
  grafana/grafana

# Open http://localhost:3000
# Login: admin / admin
# Add PostgreSQL datasource → council database
# Create dashboard with agent metrics
```

---

## 💾 Stap 12: Backup & Recovery (10 minuten)

Setup automatische backups (cruciaal!).

**12.1: Manual backup**

```bash
# PostgreSQL backup
docker exec council-postgres pg_dump -U council council | \
  gzip > ~/council-llm/backups/council-$(date +%Y%m%d-%H%M%S).sql.gz

# n8n workflows backup
docker exec council-n8n tar czf /tmp/n8n-backup.tar.gz /home/node/.n8n/workflows
docker cp council-n8n:/tmp/n8n-backup.tar.gz \
  ~/council-llm/backups/n8n-$(date +%Y%m%d).tar.gz

# Verify backups
ls -lh ~/council-llm/backups/
```

**12.2: Restore from backup**

```bash
# Restore PostgreSQL
gunzip < ~/council-llm/backups/council-20250103-120000.sql.gz | \
  docker exec -i council-postgres psql -U council council

# Restore n8n workflows
docker cp ~/council-llm/backups/n8n-20250103.tar.gz council-n8n:/tmp/
docker exec council-n8n tar xzf /tmp/n8n-20250103.tar.gz -C /
docker restart council-n8n
```

**12.3: Automated daily backup script**

```bash
# Create backup script
cat > ~/council-llm/backup.sh << 'EOF'
#!/bin/bash
set -e

BACKUP_DIR=~/council-llm/backups
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
DATE=$(date +%Y%m%d)

mkdir -p $BACKUP_DIR

echo "[$(date)] Starting backup..."

# PostgreSQL dump
echo "Backing up PostgreSQL..."
docker exec council-postgres pg_dump -U council council | \
  gzip > $BACKUP_DIR/council-$TIMESTAMP.sql.gz

# n8n workflows
echo "Backing up n8n workflows..."
docker exec council-n8n tar czf /tmp/n8n-backup.tar.gz /home/node/.n8n/workflows 2>/dev/null || true
docker cp council-n8n:/tmp/n8n-backup.tar.gz $BACKUP_DIR/n8n-$DATE.tar.gz

# Ollama models list (metadata only, models zijn groot!)
echo "Saving Ollama models list..."
docker exec council-ollama ollama list > $BACKUP_DIR/ollama-models-$DATE.txt

# Keep only last 7 days of SQL dumps (save space)
find $BACKUP_DIR -name "council-*.sql.gz" -mtime +7 -delete

# Keep only last 30 days of n8n backups
find $BACKUP_DIR -name "n8n-*.tar.gz" -mtime +30 -delete

echo "[$(date)] Backup completed!"
echo "Files:"
ls -lh $BACKUP_DIR | tail -5

EOF

chmod +x ~/council-llm/backup.sh

# Test backup script
~/council-llm/backup.sh
```

**12.4: Schedule daily backups (cron)**

```bash
# Add to crontab (daily at 3 AM)
(crontab -l 2>/dev/null; echo "0 3 * * * ~/council-llm/backup.sh >> ~/council-llm/logs/backup.log 2>&1") | crontab -

# Verify cron job
crontab -l | grep backup
```

**12.5: Volume backup (complete state)**

```bash
# Voor disaster recovery: backup alle Docker volumes
cd ~/council-llm

# Stop services
docker-compose down

# Backup PostgreSQL volume
docker run --rm \
  -v council-llm_postgres-data:/source \
  -v ~/council-llm/backups:/backup \
  alpine tar czf /backup/postgres-data-$(date +%Y%m%d).tar.gz -C /source .

# Backup Ollama models volume (GROOT! ~80GB)
docker run --rm \
  -v council-llm_ollama-models:/source \
  -v ~/council-llm/backups:/backup \
  alpine tar czf /backup/ollama-models-$(date +%Y%m%d).tar.gz -C /source .

# Backup n8n data
docker run --rm \
  -v council-llm_n8n-data:/source \
  -v ~/council-llm/backups:/backup \
  alpine tar czf /backup/n8n-data-$(date +%Y%m%d).tar.gz -C /source .

# Restart services
docker-compose up -d

echo "✅ Complete volume backup done!"
ls -lh ~/council-llm/backups/
```

---

## ✅ Setup Complete!

🎉 **Gefeliciteerd!** Als je alle stappen hebt gevolgd, heb je nu:

✅ **Volledige Docker stack** met PostgreSQL, Ollama, n8n, Redis  
✅ **3 LLM modellen** gedownload en werkend (DeepSeek 33B, Qwen 32B, Llama 70B)  
✅ **Vector database** voor code embeddings met similarity search  
✅ **n8n workflows** voor agent orchestration  
✅ **OpenCode IDE** geconfigureerd met lokale modellen  
✅ **Eerste werkende agent workflow** (Johnie + Boris)  
✅ **Monitoring & logging** setup  
✅ **Automated backups** geconfigureerd

---

## 🚀 Volgende Stappen

Nu je basis setup werkt, hier zijn je next steps:

### Week 1: Experimenteren met Single Agent

1. **Varieer de prompts** in je Johnie workflow
2. **Test verschillende model configuraties** (temperature, top_p)
3. **Meet de performance**: hoe snel is code generation?
4. **Probeer edge cases**: wat gebeurt er met complexe requests?

### Week 2: Uitbreiden naar Dual Agents

1. **Add Anita** (tweede development agent) met iets andere personality
2. **Implement code diffing**: laat ze dezelfde task doen en vergelijk output
3. **Add voting mechanism**: welke code is beter volgens een review agent?

### Week 3: Add Quality Layer

1. **Implement Linda** (test agent) met browser automation
2. **Add automated testing**: genereer unit tests voor generated code
3. **Setup CI/CD**: commit naar Git → test → merge if green

### Week 4: Management Layer

1. **Add Saskia** (Scrum Master) voor task prioritization
2. **Implement sprint planning**: verdeel user stories over agents
3. **Add Geert** (Product Owner) voor acceptance criteria

---

## 🐛 Troubleshooting

### Common Issues

| Symptoom                       | Mogelijke Oorzaak            | Oplossing                                     |
| ------------------------------ | ---------------------------- | --------------------------------------------- |
| `docker-compose up` fails      | Port conflict                | Change ports in docker-compose.yml            |
| Ollama download hangt          | Netwerk timeout              | Herstart download, check internet             |
| n8n can't reach Ollama         | Wrong hostname               | Gebruik `http://ollama:11434` not `localhost` |
| Out of memory during inference | Model te groot voor GPU      | Gebruik kleinere model of CPU offloading      |
| PostgreSQL connection refused  | Container not healthy yet    | Wait 30s en retry, check logs                 |
| Vector search returns nothing  | Embeddings niet compatible   | Check embedding dimensions (1536)             |
| n8n workflow timeout           | Inference te lang            | Increase timeout in HTTP Request node         |
| GPU not detected in Docker     | NVIDIA toolkit not installed | Install nvidia-container-toolkit              |

### Get Help

- **GitHub Issues**: https://github.com/rubenvdlinde/rubenlinde/issues
- **n8n Community**: https://community.n8n.io
- **Ollama Discord**: https://discord.gg/ollama
- **OpenCode GitHub**: https://github.com/opencodeai/opencode

---

## 📚 Appendix: Nuttige Commands

```bash
# === Docker Management ===
# Stop all services
docker-compose down

# Stop en verwijder volumes (⚠️ DATA LOSS)
docker-compose down -v

# Restart single service
docker-compose restart ollama

# View logs
docker-compose logs -f ollama

# Shell into container
docker exec -it council-ollama bash

# === Ollama Commands ===
# List models
docker exec council-ollama ollama list

# Remove model (free space)
docker exec council-ollama ollama rm llama3.1:70b

# Pull specific quantization
docker exec council-ollama ollama pull deepseek-coder:33b-q4

# Show model info
docker exec council-ollama ollama show deepseek-coder:33b

# === PostgreSQL Commands ===
# Connect to DB
docker exec -it council-postgres psql -U council -d council

# Backup
docker exec council-postgres pg_dump -U council council > backup.sql

# Restore
cat backup.sql | docker exec -i council-postgres psql -U council council

# Check database size
docker exec council-postgres psql -U council -d council -c "
  SELECT pg_size_pretty(pg_database_size('council'));"

# === n8n Commands ===
# Export all workflows
docker exec council-n8n n8n export:workflow --all --output=/tmp/workflows.json
docker cp council-n8n:/tmp/workflows.json ./

# Import workflows
docker cp workflows.json council-n8n:/tmp/
docker exec council-n8n n8n import:workflow --input=/tmp/workflows.json

# === System Monitoring ===
# Disk usage per volume
docker system df -v

# Container resource limits
docker stats --no-stream

# Check GPU usage
nvidia-smi -l 1

# Network inspection
docker network inspect council-llm_council-network
```

---

**Laatst geüpdatet:** 3 januari 2025  
**Versie:** 1.0  
**Getest op:** Windows 11 (WSL2), Ubuntu 22.04, macOS 14 Sonoma

---

🔗 **Terug naar hoofdblog:** [Council of LLMs - Lokale AI Dev Omgeving](../blog/personal/2025-01-26-lokale-ai-dev-omgeving.md)
