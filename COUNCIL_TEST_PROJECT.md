# Council Test Project: Contact Form API

Een eenvoudig maar realistisch project om de Council of LLMs te testen.

## 🎯 Project Doel

Bouw een REST API voor een contact form met:

- Input validatie
- Email verzending
- Database opslag
- Rate limiting
- Security best practices

## 📋 Requirements

### Functionele Requirements

**User Story 1: Contact Form Submission**
Als bezoeker wil ik een contact formulier kunnen invullen met mijn naam, email, onderwerp en bericht, zodat ik contact kan opnemen met de website eigenaar.

Acceptance Criteria:

- Formulier accepteert: name (string), email (email), subject (string), message (text)
- Validatie: alle velden zijn verplicht
- Email moet valid email format zijn
- Message moet minimaal 10 karakters zijn
- Returns 201 Created bij succes
- Returns 400 Bad Request bij validatie fouten

**User Story 2: Email Notification**
Als website eigenaar wil ik een email ontvangen wanneer iemand het contact formulier invult, zodat ik snel kan reageren.

Acceptance Criteria:

- Email wordt verzonden naar geconfigureerd adres
- Email bevat alle formulier velden
- Email heeft duidelijke subject line
- Gebruikt email template voor goede formatting

**User Story 3: Opslag in Database**
Als website eigenaar wil ik dat alle contact form submissions worden opgeslagen, zodat ik een historie heb en kan nakijken wie contact heeft opgenomen.

Acceptance Criteria:

- Submissions worden opgeslagen in PostgreSQL
- Includes timestamp
- Includes IP address (voor spam detectie)
- Includes status (new, read, archived)

**User Story 4: Rate Limiting**
Als website eigenaar wil ik rate limiting op het contact formulier, zodat spam bots niet het formulier misbruiken.

Acceptance Criteria:

- Maximum 3 submissions per IP per uur
- Returns 429 Too Many Requests bij overschrijding
- Clear error message met retry-after header

**User Story 5: API Documentation**
Als developer wil ik duidelijke API documentatie, zodat ik de API kan integreren in mijn frontend.

Acceptance Criteria:

- OpenAPI/Swagger spec beschikbaar
- Includes request/response examples
- Includes error codes en messages

## 🏗️ Tech Stack

- **Backend**: Python met Flask (of FastAPI)
- **Database**: PostgreSQL (we hebben al een council database)
- **Email**: SMTP (configureerbaar)
- **Rate Limiting**: Redis (we hebben al Redis draaiend)
- **Validation**: Pydantic of marshmallow
- **Testing**: pytest
- **Documentation**: Swagger/OpenAPI

## 📁 Project Structuur

```
contact-form-api/
├── src/
│   ├── __init__.py
│   ├── app.py              # Flask/FastAPI app
│   ├── models.py           # Database models
│   ├── schemas.py          # Validation schemas
│   ├── routes.py           # API endpoints
│   ├── email_service.py    # Email logic
│   ├── rate_limiter.py     # Rate limiting
│   └── config.py           # Configuration
├── tests/
│   ├── __init__.py
│   ├── test_routes.py
│   ├── test_validation.py
│   ├── test_rate_limiting.py
│   └── test_email.py
├── docs/
│   └── openapi.yaml        # API spec
├── requirements.txt
├── README.md
├── .env.example
└── docker-compose.yml      # Optional: voor standalone testing
```

## 🤖 Agent Rollen

### Johnie (Backend Developer)

- Implementeert de Flask/FastAPI routes
- Database models en migrations
- Basis input validatie

### Anita (Backend Developer)

- Email service implementatie
- Configuration management
- Error handling

### Henk (Backend Developer)

- Rate limiting implementatie
- Security features (CORS, headers)
- Logging en monitoring

### Ingrid (Backend Developer)

- OpenAPI documentation
- Request/response schemas
- Integration met frontend

### Boris (Security LLM)

- Review alle code op security issues
- Check input validation
- SQL injection preventie
- XSS preventie in email templates
- Environment variable handling

### Linda (Test LLM)

- Write unit tests
- Write integration tests
- Test edge cases
- Verify API documentation matches implementation

### Saskia (Scrum Master)

- Prioriteer user stories
- Assign stories to agents
- Track progress
- Resolve blockers

### Geert (Product Owner)

- Verify acceptance criteria
- Approve/reject implementations
- Manage backlog
- Stakeholder communication

### Thierry (Lead Tech)

- Architecture decisions
- Code review
- Performance optimization
- Tech debt management

## 🎯 Success Criteria

Het project is succesvol als:

1. ✅ Alle 5 user stories zijn geïmplementeerd
2. ✅ Alle acceptance criteria worden gehaald
3. ✅ Code coverage > 80%
4. ✅ Security review door Boris is approved
5. ✅ API documentatie is compleet
6. ✅ Alle tests zijn groen
7. ✅ Code is production-ready (error handling, logging, etc.)

## 📊 Sprint Planning

### Sprint 1 (Week 1): Foundation

- Setup project structure
- Database schema
- Basic Flask/FastAPI app
- Health check endpoint
- User Story 1: Contact Form Submission (basic)

### Sprint 2 (Week 2): Core Features

- User Story 2: Email Notification
- User Story 3: Database Storage
- Unit tests voor core features

### Sprint 3 (Week 3): Security & Performance

- User Story 4: Rate Limiting
- Security hardening
- Integration tests
- Performance testing

### Sprint 4 (Week 4): Documentation & Polish

- User Story 5: API Documentation
- Error handling improvements
- Logging setup
- Deployment documentation

## 🧪 Testing Strategy

### Unit Tests

- Input validation logic
- Email formatting
- Rate limiting calculations
- Database operations

### Integration Tests

- Full POST /contact flow
- Email sending end-to-end
- Database persistence
- Rate limiting enforcement

### Security Tests

- SQL injection attempts
- XSS in form fields
- CORS validation
- Invalid input handling

### Load Tests (optional)

- 100 concurrent requests
- Rate limiting under load
- Database connection pooling

## 🚀 How to Test with Council

### Phase 1: Setup Test Environment

```bash
# Create test project directory
mkdir -p ~/council-test-project
cd ~/council-test-project

# Initialize git repo
git init
echo "# Contact Form API - Council Test Project" > README.md
git add README.md
git commit -m "Initial commit"

# Add project description
cp ~/council-llm/COUNCIL_TEST_PROJECT.md .
git add COUNCIL_TEST_PROJECT.md
git commit -m "Add project requirements"
```

### Phase 2: Configure n8n Workflow

Import the "Council Sprint Workflow" (zie n8n-workflows folder)

### Phase 3: Execute Sprint

1. Open n8n: http://localhost:5678
2. Execute "Council Sprint Workflow"
3. Input: Project path, Sprint number, User stories
4. Watch the agents work!

### Phase 4: Verify Output

```bash
# Check generated code
ls -la src/

# Run tests
pytest tests/

# Check security review
cat reviews/boris-security-review.md

# Check test results
cat reviews/linda-test-results.md
```

## 📈 Expected Timeline

| Agent     | Task                       | Estimated Time | Dependencies |
| --------- | -------------------------- | -------------- | ------------ |
| Johnie    | Project structure + routes | 30 min         | None         |
| Anita     | Email service              | 20 min         | Johnie       |
| Henk      | Rate limiting              | 25 min         | Johnie       |
| Ingrid    | OpenAPI docs               | 15 min         | All devs     |
| Boris     | Security review            | 20 min         | All code     |
| Linda     | Test suite                 | 30 min         | All code     |
| Saskia    | Sprint management          | 10 min         | Continuous   |
| Geert     | Acceptance verification    | 15 min         | After tests  |
| Thierry   | Architecture review        | 20 min         | After code   |
| **Total** |                            | **~3 uur**     |              |

**Realistic expectation met lokale LLMs:** 6-8 uur (models zijn langzamer dan mensen)

## 💡 Learning Objectives

Door dit project te draaien leren we:

1. **Workflow Orchestration**: Hoe agents elkaar triggeren in n8n
2. **Context Management**: Hoe agents elkaars output gebruiken
3. **Code Quality**: Of de generated code echt werkt
4. **Review Process**: Of Boris daadwerkelijk security issues vindt
5. **Testing**: Of Linda comprehensive tests schrijft
6. **Bottlenecks**: Waar het proces vast loopt
7. **Improvements**: Wat we moeten optimaliseren

## 🎓 Wat We Verwachten Te Leren

### Successes

- Agents kunnen individuele taken goed uitvoeren
- Code generatie is syntactisch correct
- Security reviews vinden echte issues
- Tests dekken happy path scenarios

### Challenges (Verwacht)

- Context sharing tussen agents is complex
- Merge conflicts als meerdere agents aan zelfde file werken
- Test execution vereist real environment (niet alleen code generatie)
- Edge cases worden gemist zonder human oversight

### Solutions

- Start met **single agent** (Johnie only) voor User Story 1
- Add agents **incrementeel**
- Use **Git branches** per agent
- Implement **code review** tussen agents
- Add **human-in-the-loop** voor final approval

## 🔄 Iteration Plan

### Iteration 1: Proof of Concept

- **Goal**: Johnie genereert werkende code voor User Story 1
- **Scope**: Single file, basic Flask route, geen tests
- **Success**: Code runs zonder errors

### Iteration 2: Add Review

- **Goal**: Boris reviewt Johnie's code
- **Scope**: Security check, feedback loop
- **Success**: Boris finds issues, Johnie fixes them

### Iteration 3: Add Testing

- **Goal**: Linda schrijft tests voor bestaande code
- **Scope**: Unit tests, pytest setup
- **Success**: Tests pass

### Iteration 4: Full Sprint

- **Goal**: Complete User Story 1 met alle agents
- **Scope**: Dev → Review → Test → Approve cycle
- **Success**: Production-ready feature

## 📝 Documentation

We documenteren:

- Agent interactions (wie triggert wie)
- Code quality metrics (complexity, coverage)
- Performance metrics (inference time, total time)
- Issues encountered
- Human interventions needed

Deze data gebruiken we om:

- Workflows te optimaliseren
- Prompts te verbeteren
- Agent rollen te verfijnen
- Bottlenecks te identificeren

## 🎯 Next Steps

Na dit test project:

1. **Evaluate**: Was het succesvol?
2. **Iterate**: Wat moet beter?
3. **Scale**: Meer complexe projecten
4. **Productionize**: Real-world use cases

---

**Start Date**: TBD (na Council setup compleet)  
**Project Owner**: Geert (LLM)  
**Scrum Master**: Saskia (LLM)  
**Lead Tech**: Thierry (LLM)
