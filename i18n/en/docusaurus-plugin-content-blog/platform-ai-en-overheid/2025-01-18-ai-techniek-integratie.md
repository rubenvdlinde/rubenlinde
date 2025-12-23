---
slug: ai-techniek-integratie-mcp-mistral
title: AI en Techniek - Veilige integratie en het Mistral-vraagstuk
authors: [ruben]
tags: [ai, techniek, mcp, mistral, platform-ai, overheid, modellen]
---

# AI en Techniek: Veilige integratie en het Mistral-vraagstuk

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

Hoe integreer je AI veilig in overheidsapplicaties? En waarom is Mistral zo populair in de Nederlandse overheid - is het echt beter, of gaat het om andere overwegingen? Een technische deep-dive met praktische implicaties.

<!--truncate-->

## AI als Onderdeel van het Applicatielandschap

De eerste regel van veilige AI-integratie: **AI is nooit een losstaand systeem**.

### Altijd in Context

AI moet altijd werken binnen een gedefinieerde context:

- Welke data mag het zien?
- Welke acties mag het adviseren?
- Binnen welke grenzen moet het blijven?

### Altijd Begrensd

AI zonder grenzen is een gevaar. Veilige AI betekent:

- Duidelijke rol
- Beperkte toegang
- Gecontroleerde output
- Menselijke supervisie

**Principe:** Niet losstaand, niet autonoom, maar geïntegreerd en begrensd.

## Contextual AI: MCP-principes

MCP (Model Context Protocol) is een emerging standard voor hoe AI-systemen veilig context krijgen en begrensd blijven.

### De Kern van MCP

**1. Alleen Noodzakelijke Context**
AI krijgt alleen de informatie die strikt noodzakelijk is:

```
❌ Toegang tot hele database
✅ Specifieke datapunten via API
```

**2. Geen Vrije Toegang tot Systemen**
AI kan niet zelf systemen aanroepen:

```
❌ AI roept direct APIs aan
✅ Applicatie controleert en roept APIs aan
```

**3. API-Gedreven Integratie**
Alle interactie verloopt via gecontroleerde APIs:

- Input wordt gevalideerd
- Output wordt gecontroleerd
- Acties worden gelogd

### Praktisch Voorbeeld: Subsidie-assistent

**Onveilig:**

```
AI → Directe database toegang
   → Kan alles lezen
   → Kan alles wijzigen
   → Geen controle
```

**Veilig (MCP-stijl):**

```
Burger → Applicatie → AI met context
                    ↓
AI analyseert situatie
                    ↓
AI genereert advies
                    ↓
Applicatie → Controleert advies
          → Vraagt bevestiging ambtenaar
          → Pas dan uitvoeren
```

## Spelregels voor AI-Integratie

### Regel 1: AI Leest, maar Schrijft Niet

**AI mag:**

- Data opvragen (read-only)
- Patronen analyseren
- Adviezen genereren

**AI mag NIET:**

- Direct data wijzigen
- Zelfstandig besluiten uitvoeren
- Permanente acties ondernemen

### Regel 2: AI Adviseert, Mens Besluit

De **mens blijft verantwoordelijk**:

```
AI: "Op basis van de gegevens lijkt deze burger
     in aanmerking te komen voor regeling X"

Ambtenaar: Controleert
          → Besluit
          → Voert uit (of niet)
```

### Regel 3: Logging en Herleidbaarheid Verplicht

Elke AI-interactie moet worden vastgelegd:

- **Wat** heeft de AI gezien? (input)
- **Wat** heeft de AI geadviseerd? (output)
- **Waarom** deze conclusie? (reasoning)
- **Wie** heeft het gebruikt? (gebruiker)
- **Wanneer** is het gebruikt? (timestamp)

Dit is essentieel voor:

- Verantwoording
- Audit trails
- Foutanalyse
- Juridische controle

## Beveiliging en Isolatie

### AI Draait "in de Kelder"

**On-premise AI betekent:**

- Geen data naar externe cloud
- Volledige controle over infrastructure
- Geen dependency op externe partijen
- Compliance met privacy-regelgeving

**Metafoor:** AI en data zitten samen in het "kasteel" - veilig binnen de muren, niet in de cloud van big tech.

### Data en AI in Hetzelfde Trust-Domain

**Principe:** Breng AI naar de data, niet andersom.

❌ **Anti-pattern:**

```
On-premise data → Upload naar cloud AI
```

Risico's: datalek, privacy-schending, afhankelijkheid

✅ **Best practice:**

```
On-premise data + On-premise AI
```

Voordelen: controle, privacy, soevereiniteit

### Geen Ongecontroleerde Cloud-koppelingen

**Waarschuwing:** Zelfs "veilige" cloud AI kan:

- Geopolitiek wapen worden (zie Pax Americana blog)
- Onderhevig zijn aan vreemde wetgeving
- Plotseling verdwijnen of veranderen
- Gebruikt worden voor training (tenzij expliciet uitgesloten)

## AI als Ondersteunende Tool

Wat mag AI dan wel doen in de overheid?

### 1. Samenvatten

**Taak:** Lange documenten, notities, of dossiers samenvatten
**Risico:** Laag (geen besluiten)
**Waarde:** Hoog (tijdsbesparing)

**Voorbeeld:**

```
Input: Dossier van 200 pagina's
AI: Genereert samenvatting van 2 pagina's
Ambtenaar: Leest samenvatting + controleert belangrijke details
```

### 2. Voorstellen Genereren

**Taak:** Conceptteksten maken voor besluiten, brieven, adviezen
**Risico:** Middel (vereist controle)
**Waarde:** Hoog (sneller werken)

**Voorbeeld:**

```
Input: "Burger vraagt kwijtschelding gemeentebelasting"
AI: Genereert conceptbrief met standaard-clausules
Ambtenaar: Past aan, controleert, en verstuurt
```

### 3. Informatie Structureren

**Taak:** Ongestructureerde data omzetten naar gestructureerde data
**Risico:** Middel (validatie nodig)
**Waarde:** Zeer hoog (maakt data bruikbaar)

**Voorbeeld:**

```
Input: Email van burger met vraag
AI: Extraheert: naam, BSN, vraagtype, urgentie
Systeem: Valideert + routeert naar juiste afdeling
```

### 4. Nooit Zelfstandig Handelen

**Rode lijn:** AI mag NOOIT autonoom:

- Besluiten nemen
- Geld overboeken
- Brieven versturen
- Data wijzigen
- Burgers contacteren

**Altijd menselijke controle vereist.**

## Het Mistral-vraagstuk

Mistral AI is enorm populair in de Nederlandse overheid. Maar waarom eigenlijk?

### Waarom Mistral Populair Is

**1. Europees**

- Frans bedrijf
- Valt onder EU-wetgeving
- Minder geopolitiek risico

**2. Open gewicht modellen**

- Modelgewichten zijn publiek
- Kan on-premise draaien
- Geen vendor lock-in

**3. Nederlandse voorkeur**

- Veel gemeenten en ministeries gebruiken het
- Netwerkeffect
- Gedeelde kennis

### De Kritische Vraag

**Maar is Mistral echt _inhoudelijk_ beter?**

Laten we eerlijk zijn:

- **Minder training:** Kleiner dan GPT-4, Claude 3, etc.
- **Minder parameters:** Beperktere capaciteit
- **Minder resources:** Kleinere organisatie

**De trade-off:**

```
Grotere modellen (GPT-4, Claude):
  ✅ Meer kennis
  ✅ Betere kwaliteit
  ❌ Closed source
  ❌ Amerikaanse big tech
  ❌ Cloud-only
  ❌ Geopolitiek risico

Mistral:
  ✅ Open gewichten
  ✅ On-premise mogelijk
  ✅ Europees
  ✅ Minder afhankelijkheid
  ❌ Iets minder kwaliteit
  ❌ Kleinere training data
```

### De Ethische Weging

De echte vraag is niet "Welk model is het beste?" maar:

**"Welke trade-offs zijn we bereid te maken voor soevereiniteit en transparantie?"**

**Scenario 1: Kies het beste model**

- Hoogste kwaliteit AI
- Maar: Amerikaanse big tech
- Maar: Cloud-only
- Maar: Black box
- Maar: Geopolitiek risico

**Scenario 2: Kies het meest soevereine model**

- Iets minder kwaliteit
- Maar: Europees
- Maar: On-premise mogelijk
- Maar: Open gewichten
- Maar: Minder afhankelijkheid

**Voor de overheid lijkt scenario 2 de juiste keuze.**

### Transparantie van Trainingsdata

Een cruciaal punt: **op welke data is een model getraind?**

**Mistral:**

- ✅ Publiceert info over dataset
- ✅ Europese focus in training
- ⚠️ Nog niet 100% transparant

**GPT-4, Claude, etc:**

- ❌ Trainingsdata grotendeels geheim
- ❌ Mogelijk copyrighted materiaal
- ❌ Onbekende bias

**Waarom dit belangrijk is:**

- Training data bepaalt bias
- Bepaalt juridische risico's
- Bepaalt kwaliteit voor specifieke use cases
- Bepaalt of we het kunnen vertrouwen

## Kritische Vraag

Is het echt haalbaar om AI altijd alleen maar als ondersteunende tool te houden, of is het onvermijdelijk dat AI ooit wat meer autonomie krijgt?

En hoe gaan we dan om met die grens?

**Ons antwoord:** De grens moet rigide blijven. Zodra we AI autonomie geven, verliezen we controle en verantwoordelijkheid. En dat kan een democratische overheid zich niet veroorloven.

## Conclusie

**Goede AI-integratie gaat over begrenzen, niet over loslaten.**

De techniek bestaat om AI veilig te integreren in overheidsprocessen:

- MCP-principes voor contextuele AI
- Strikte scheiding van lezen en schrijven
- Mens blijft beslisser
- On-premise deployment
- Volledige logging

De keuze voor modellen als Mistral is geen compromis, maar een weloverwogen strategische beslissing:

- Soevereiniteit boven maximale kwaliteit
- Transparantie boven closed source
- Europese waarborgen boven big tech

De vraag is niet of we de beste AI kunnen krijgen, maar of we verantwoorde AI kunnen bouwen die past bij onze publieke waarden.

---

**Volgende blog:** Veilige AI - Handelingskaders en R-bak/P-bak integratie

**Gerelateerd:** [MCP Protocol](https://modelcontextprotocol.io) | [Mistral AI](https://mistral.ai)
