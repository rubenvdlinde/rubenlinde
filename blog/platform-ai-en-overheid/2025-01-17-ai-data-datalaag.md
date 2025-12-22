---
slug: ai-data-datalaag-basis
title: AI en Data - Waarom de datalaag alles bepaalt
authors: [ruben]
tags: [ai, data, common-ground, platform-ai, overheid, registers]
---

# AI en Data: Waarom de datalaag alles bepaalt

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

AI is niet beter dan de data waarop het draait. Een slimme datalaag is geen nice-to-have, maar de absolute basis voor verantwoorde AI in de overheid. En die datalaag moet je NU goed inrichten - niet pas als je AI wilt toevoegen.

<!--truncate-->

## AI is Geen Oplossing voor Slechte Data

Laten we beginnen met een harde waarheid: **AI verzint niets nieuws**. Het extrapoleert, het zoekt patronen, het voorspelt - maar het creëert geen feiten uit het niets.

### Wat gebeurt er met slechte data?

**Inconsistenties worden versterkt**
- Als je data tegenstrijdigheden bevat, leert AI die patronen
- Resultaat: onbetrouwbare voorspellingen

**Bias komt uit data, niet uit "AI"**
- AI heeft geen eigen vooroordelen
- Het spiegelt de vooroordelen in de trainingsdata
- Garbage in, garbage out

**Extrapolatie van fouten**
- Een fout in brondata verspreidt zich door AI-toepassingen
- Eén verkeerde aanname → vele verkeerde conclusies

**Argument:** AI versterkt dataproblemen, het lost ze niet op.

## De Common Ground Datalaag

Common Ground is niet voor niets begonnen met het op orde brengen van de datalaag. De architectuurprincipes zijn:

### 1. Registraties als Bron

**Single source of truth**
- Elk gegeven heeft één autoritatieve bron
- Geen duplicatie van data
- Geen tegenstrijdige versies

**Bronregistraties**
- BRP voor persoonsgegevens
- BAG voor adressen  
- Specifieke registers voor specifieke domeinen

### 2. Scheiding van Data en Applicaties

**Data in bronnen**
- Applicaties hebben geen eigen data-opslag
- Data blijft in gecontroleerde registers
- API's voor toegang

**Voordelen:**
- Data is herbruikbaar
- Consistentie gegarandeerd
- Eén plek om kwaliteit te borgen

### 3. Standaardisatie en Hergebruik

**Open standaarden**
- Afspraken over datamodellen
- Gestandaardiseerde API's
- Eenduidige definities

**Common Ground componenten**
- Herbruikbare bouwblokken
- Gedeelde definities
- Gezamenlijke ontwikkeling

## Waarom AI Andere Eisen Stelt aan Data

Traditionele applicaties kunnen vaak prima werken met "redelijk goede" data. AI vraagt om meer:

### 1. Context is Cruciaal

AI moet begrijpen in welke context data gebruikt mag worden:
- Wat betekent dit veld?
- Hoe actueel is deze informatie?
- Welke privacy-restricties zijn er?
- Hoe betrouwbaar is de bron?

### 2. Relaties Tussen Data en Documenten

AI profiteert enorm van relaties:
- Koppeling tussen gestructureerde data en documenten
- Verbanden tussen verschillende registers
- Historische context en tijdlijnen

**Voorbeeld:** Een AI die helpt met subsidieaanvragen moet weten:
- Wie de aanvrager is (BRP)
- Waar het bedrijf gevestigd is (BAG + Handelsregister)
- Welke eerdere aanvragen er waren (Zaaksysteem)
- Welke regels van toepassing zijn (Regelingenregister)

### 3. Metadata, Herkomst en Actualiteit

Voor verantwoorde AI is metadata essentieel:
- **Wanneer** is deze data aangemaakt/gewijzigd?
- **Door wie** is het ingevoerd?
- **Waarvoor** mag het gebruikt worden?
- **Hoe lang** is het geldig?

**Argument:** AI vraagt om betekenisvolle data, niet alleen opslag.

## AI Meenemen in Nieuwe Registers

Hier komt de cruciale boodschap: **ontwerp registers nu al met AI in gedachten**.

### Niet: AI als Laagje Achteraf

❌ Register bouwen zoals altijd  
❌ Data opslaan in eigen formaat  
❌ Later proberen AI toe te voegen  
❌ Tegen problemen aanlopen  

### Wel: AI-Proof van Grond Af

✅ Denk na over hergebruik  
✅ Documenteer betekenis van velden  
✅ Bouw in metadata en herkomst  
✅ Maak data geschikt voor analyse én uitvoering  
✅ Leg relaties expliciet vast  

### Praktisch Voorbeeld: Een Subsidieregister

**Traditioneel ontwerp:**
```
Subsidie {
  id: 12345
  naam: "Subsidie duurzaam bedrijf"
  bedrag: 50000
  status: "Toegekend"
}
```

**AI-proof ontwerp:**
```
Subsidie {
  id: 12345
  naam: "Subsidie duurzaam bedrijf"
  beschrijving: "Volledige tekst van regeling..."
  voorwaarden: ["zzp", "duurzaamheid", "max-omzet-100k"]
  bedrag: {
    waarde: 50000,
    valuta: "EUR",
    type: "eenmalig"
  }
  status: {
    huidige: "Toegekend",
    datum: "2025-01-10",
    door: "ambtenaar@gemeente.nl",
    reden: "Voldoet aan criteria"
  }
  relaties: {
    aanvrager: "bsn:123456789",
    locatie: "bag:id",
    regelgeving: "regeling:id",
    besluiten: ["zaak:id"]
  }
  metadata: {
    geldig_van: "2025-01-01",
    geldig_tot: "2025-12-31",
    herkomst: "Gemeenteraadsbesluit 2024-12",
    privacy_niveau: "vertrouwelijk"
  }
}
```

**Waarom is dit beter voor AI?**
- Context is expliciet
- Relaties zijn traceerbaar
- Herkomst is bekend
- Machine-leesbare voorwaarden
- Rijke metadata

## De Strategische Keuze

### Verkeerd Ontwerpen = Jaren Achterstand

Als je nu registers bouwt zonder AI in gedachten:
- Kosten: Later compleet herbouwen
- Tijd: Jaren vertraging in AI-adoptie
- Kwaliteit: Suboptimale AI-toepassingen
- Risico: Vendor lock-in bij AI-oplossingen

### Goed Ontwerpen = Toekomstige Innovatie

Als je nu AI-proof bouwt:
- Toekomst: Makkelijk AI toevoegen
- Hergebruik: Data werkt voor mens én machine
- Kwaliteit: Betere AI door betere data
- Flexibiliteit: Vrijheid in AI-keuzes

**Argument:** Wie nu verkeerd ontwerpt, beperkt AI voor jaren. Wie nu goed ontwerpt, maakt toekomstige innovatie mogelijk.

## OpenRegister: AI-Proof Data-opslag

Bij Conduction ontwikkelen we OpenRegister - een open source data-oplossing voor Nextcloud waar je:
- Documenten kunt opslaan
- Gestructureerde data kunt beheren
- Documenten en data aan elkaar kunt relateren
- Het geheel kunt vectoriseren voor AI

Dit is een voorbeeld van hoe je data vanaf het begin AI-ready kunt inrichten.

## Kritische Vraag

Als we onze datalaag niet van meet af aan AI-proof maken, bouwen we dan niet aan een digitaal fundament dat niet toekomstbestendig is? 

Moeten we nu niet wat meer investeren om straks geen dure inhaalslag te hoeven maken?

Het antwoord is duidelijk: ja. Investeren in een goede datalaag nu bespaart tien keer zoveel later.

## Conclusie

**AI begint niet bij modellen, maar bij datakeuzes.**

De meest geavanceerde AI ter wereld is nutteloos op slechte data. De eenvoudigste AI kan waardevol zijn met goede data.

Common Ground biedt de architectuur. Open standaarden bieden de interoperabiliteit. Registers die vanaf het begin AI-proof worden ontworpen bieden de basis.

De boodschap aan iedereen die nu registers of data-oplossingen bouwt: **denk nu al aan AI**. Niet als optie, maar als ontwerpprincipe.

Want de datalaag die je vandaag bouwt, bepaalt de AI-mogelijkheden van morgen.

---

**Volgende blog:** AI en Techniek - Veilige integratie met MCP

**Gerelateerd:** [Common Ground](https://commonground.nl) | [OpenRegister](https://github.com/ConductionNL/openregister)

