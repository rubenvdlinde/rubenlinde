---
slug: ai-veilig-handelingskaders-rbak-pbak
title: Veilige AI - Handelingskaders en de R-bak/P-bak structuur
authors: [ruben]
tags:
  [ai, beveiliging, handelingskaders, platform-ai, overheid, ethiek, privacy]
---

# Veilige AI: Handelingskaders en de R-bak/P-bak structuur

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

AI moet niet alleen technisch veilig zijn - het moet ook binnen juridische en ethische kaders blijven. Hoe zorgen we ervoor dat AI de spelregels niet overtreedt? En wat is de handelingsbevoegdheid van AI eigenlijk?

<!--truncate-->

## De Uitdaging: AI binnen Grenzen

AI zonder grenzen is gevaarlijk. Maar welke grenzen dan precies? En hoe dwing je die technisch af?

In de Nederlandse overheid kennen we de **R-bak en P-bak** structuur voor gegevensgebruik:

- **R-bak (Registratie)**: Brongegevens, authentieke registraties
- **P-bak (Verwerking)**: Afgeleide gegevens, analyses, verwerkingen

### Waarom Dit Voor AI Belangrijk Is

AI moet:

1. Weten uit welke bak het data mag halen
2. Begrijpen welke privacy-regels gelden
3. Binnen handelingskaders blijven
4. Verantwoording kunnen afleggen

## AI en de R-bak: Toegang tot Brongegevens

### Principe: Restrictieve Toegang

**De R-bak bevat gevoelige brondata:**

- BSN-gegevens (BRP)
- Financiële gegevens
- Medische informatie
- Strafrechtelijke gegevens

**AI moet hier zeer beperkt toegang toe hebben:**

```
❌ AI krijgt vrije toegang tot R-bak
   → Privacy-risico
   → Geen controle op gebruik
   → Compliance problemen

✅ AI krijgt alleen noodzakelijke data via API's
   → Gepseudonimiseerd waar mogelijk
   → Gelogd en geauditeerd
   → Binnen privacy-kaders
```

### Praktijkvoorbeeld: Subsidiecheck

**Scenario:** AI helpt burgers controleren of ze recht hebben op subsidie.

**Onveilig:**

```
AI → Rechtstreeks BRP
   → Leest volledige burger-historie
   → Kan alles zien
   → Privacy-risico
```

**Veilig:**

```
Burger geeft toestemming
   ↓
Applicatie vraagt specifieke gegevens op
   ↓
R-bak geeft alleen: leeftijd, woonplaats, gezinssamenstelling
   ↓
AI analyseert alleen deze noodzakelijke gegevens
   ↓
AI geeft advies: wel/niet in aanmerking
```

## AI en de P-bak: Afgeleide Gegevens

De P-bak is waar AI meer waarde kan toevoegen, maar ook hier gelden regels.

### Wat Mag in de P-bak?

**Toegestaan:**

- Statistische analyses
- Geaggregeerde cijfers
- Trends en patronen
- Geanonimiseerde datasets

**Niet toegestaan:**

- Herleidbare persoonlijke analyses
- Profielen zonder wettelijke grondslag
- Discriminerende classificaties
- Zwarte lijsten

### AI-Verrijking met Waarborgen

**Voorbeeld: Woonlast-analyse**

```python
# AI analyseert woonlasten per wijk
data = {
    "wijk": "Centrum",
    "gemiddelde_woonlasten": 1250,
    "aantal_huishoudens": 450,
    "trend": "stijgend"
}

# ✅ Geen individuele gegevens
# ✅ Wel inzichten voor beleid
# ✅ Privacy-conform
```

## Handelingskaders: Wat Mag AI Doen?

Laten we helder zijn over de handelingsbevoegdheid van AI.

### AI Mag: Voorbereiden

**Toegestaan:**

- Conceptteksten maken
- Data samenvatten
- Analyses voorbereiden
- Opties presenteren

**Voorwaarde:** Altijd controle door ambtenaar

**Voorbeeld:**

```
Burger vraagt vergunning
   ↓
AI analyseert aanvraag
   ↓
AI genereert concept-beoordeling
   ↓
Ambtenaar controleert en past aan
   ↓
Ambtenaar neemt definitief besluit
```

### AI Mag: Adviseren

**Toegestaan:**

- Aanbevelingen doen
- Risico's signaleren
- Alternatieven voorstellen
- Relevante informatie tonen

**Voorwaarde:** Duidelijk als "advies" gemarkeerd

**Voorbeeld:**

```
AI: "Op basis van vergelijkbare gevallen wordt meestal
     optie B gekozen. Overwegingen: ..."

Ambtenaar: Leest advies
          → Beoordeelt zelf
          → Neemt eigen besluit
```

### AI Mag NOOIT: Beslissen

**Verboden:**

- Zelfstandig besluiten nemen
- Burgers verplichtingen opleggen
- Rechten toekennen of ontzeggen
- Geld overmaken
- Juridisch bindende acties

**Waarom niet?**

1. **Juridisch:** Besluit moet herleidbaar zijn tot ambtenaar
2. **Democratisch:** Mens moet verantwoordelijk zijn
3. **Ethisch:** AI heeft geen moreel kompas
4. **Praktisch:** AI kan vergissingen maken

## Technische Implementatie van Grenzen

Hoe dwing je dit technisch af?

### 1. Permission System

**Role-Based Access Control (RBAC) voor AI:**

```yaml
AI_Assistant:
  may_read:
    - public_data
    - anonymized_statistics
    - documents_with_consent
  may_not_read:
    - direct_bsn_access
    - financial_details_without_mask
    - medical_records
  may_write:
    - draft_documents
    - suggestions
    - logs
  may_not_write:
    - official_decisions
    - citizen_records
    - financial_transactions
```

### 2. API Gateway Pattern

**Alle AI-toegang via gecontroleerde gateway:**

```
AI Request → Gateway → Validation
                    ↓
              Permission Check
                    ↓
              Privacy Filter
                    ↓
              Rate Limiting
                    ↓
              Logging
                    ↓
              Response
```

### 3. Audit Trail

**Elke AI-actie wordt vastgelegd:**

```json
{
  "timestamp": "2025-01-18T14:30:00Z",
  "user": "ambtenaar@gemeente.nl",
  "ai_model": "mistral-7b-v2",
  "action": "subsidie_check",
  "input_data": {
    "age": 45,
    "income_bracket": "30k-40k",
    "household": "single"
  },
  "output": "Eligible for subsidy X",
  "reasoning": "Meets criteria A, B, C",
  "human_decision": "Approved",
  "decision_by": "J. de Vries"
}
```

## AI in de Kelder: On-Premise Deployment

**Metafoor:** AI en data zitten samen in het kasteel, veilig binnen de muren.

### Voordelen On-Premise AI

**1. Geen Data-uitwisseling met Derden**

- Data verlaat nooit de gemeente-infrastructuur
- Geen cloud providers met toegang
- Geen risico op datalek bij derde partij

**2. Volledige Controle**

- Eigen servers, eigen beheer
- Updates en wijzigingen controleren
- Uitschakelen kan altijd

**3. Privacy by Design**

- GDPR-compliant door design
- Geen data naar VS of andere jurisdicties
- AVG-proof

**4. Geen Afhankelijkheid**

- Geen abonnementen die kunnen eindigen
- Geen prijsverhogingen
- Geen vendor lock-in

### De Kasteel-Analogie

```
┌─────────────────── Kasteel Gemeente ───────────────────┐
│                                                         │
│  ┌──────────────┐         ┌──────────────┐            │
│  │   R-bak      │←───────→│  AI Engine   │            │
│  │  (Brondata)  │         │ (On-premise) │            │
│  └──────────────┘         └──────────────┘            │
│         ↓                         ↓                    │
│  ┌──────────────┐         ┌──────────────┐            │
│  │   P-bak      │         │ Applications │            │
│  │ (Analyses)   │         │              │            │
│  └──────────────┘         └──────────────┘            │
│                                                         │
│  🔒 Privacy Controls   🔒 Access Logs   🔒 Firewalls  │
└─────────────────────────────────────────────────────────┘
          ↕ Alleen gecontroleerde uitwisseling
     [Andere Overheden via Gestandaardiseerde API's]
```

## Ethische Handelingsbevoegdheid

Techniek alleen is niet genoeg. We moeten ook ethisch nadenken.

### Wanneer is AI-Ondersteuning Ethisch?

**✅ Ethisch verantwoord:**

- AI helpt ambtenaar sneller werken
- AI voorkomt menselijke fouten (tikfouten, vergeten checks)
- AI maakt informatie toegankelijker
- Mens blijft eindverantwoordelijk

**❌ Ethisch problematisch:**

- AI vervangt menselijk oordeelsvermogen
- AI maakt beslissingen die mensen niet begrijpen
- AI discrimineert (ook als dat "statistisch klopt")
- Mensen voelen zich machteloos tegenover AI

### Het Voorbeeld van Risico-Scoring

**Problematisch geval: SyRI**

Het Nederlandse SyRI-systeem werd verboden omdat:

- Geen transparantie over werking
- Geen controle voor burgers
- Mogelijke discriminatie
- Disproportionele inbreuk op privacy

**Wat hadden we anders moeten doen?**

```
❌ Black box systeem dat burgers "scored"

✅ Transparant systeem dat:
   - Ambtenaar ondersteunt met signalen
   - Uitlegbaar is naar burgers
   - Controlemechanismen heeft
   - Proportioneel is ingezet
```

## Kaders voor AI-Handelen

Laten we concrete kaders opstellen:

### Kader 1: Transparantie

**Burgers moeten weten:**

- Dat AI gebruikt is
- Hoe AI is gebruikt
- Welke rol AI had
- Wie verantwoordelijk is

**Praktisch:**

```
Brief: "Deze aanvraag is mede beoordeeld met
        ondersteuning van een AI-systeem. Het
        definitieve besluit is genomen door
        medewerker J. de Vries."
```

### Kader 2: Proportionaliteit

**AI alleen inzetten waar:**

- Het proportioneel is
- De inbreuk op privacy minimaal is
- Er een legitiem doel is
- Er geen minder ingrijpend alternatief is

### Kader 3: Menselijke Controle

**Altijd menselijke controle bij:**

- Besluiten die rechten raken
- Financiële beslissingen
- Persoonlijke situaties
- Uitzonderingsgevallen

### Kader 4: Non-Discriminatie

**AI mag niet:**

- Discrimineren op basis van beschermde kenmerken
- Bestaande ongelijkheid versterken
- Bepaalde groepen structureel benadelen

**Technisch:**

- Bias-testing verplicht
- Diverse trainingsdata
- Fairness metrics
- Regelmatige audits

## Kritische Vraag

Als we AI niet inzetten om burgers door de wirwar van regels te helpen, lopen we dan niet het risico dat alleen de meest digitaal vaardigen profiteren?

Kortom, maken we de kloof niet groter als we het niet doen?

**Antwoord:** Dit is precies waarom we AI wél moeten inzetten - maar dan wel verantwoord, binnen kaders, en met waarborgen voor iedereen.

## Conclusie

**Goed ingerichte AI vergroot bestaanszekerheid, niet bureaucratie.**

Veilige AI betekent:

- Technische waarborgen (R-bak/P-bak, API's, audit trails)
- Juridische kaders (handelingsbevoegdheid, transparantie)
- Ethische grenzen (mens beslist, geen discriminatie)
- On-premise deployment (data en AI in het kasteel)

AI mag voorbereiden en adviseren. De mens beslist.

Met deze waarborgen kunnen we AI inzetten om de overheid toegankelijker, effectiever en menselijker te maken - zonder concessies te doen aan veiligheid, privacy of democratische controle.

---

**Volgende blog:** AI Kansen voor Burgers - De regelgeving-navigator

**Gerelateerd:** [AVG](https://autoriteitpersoonsgegevens.nl) | [Common Ground](https://commonground.nl)
