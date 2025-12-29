---
slug: ai-data-datalaag-basis
title: AI en Data - Waarom de datalaag alles bepaalt
authors: [ruben]
tags: [ai, data, common-ground, overheid]
---

# AI en Data: Waarom de datalaag alles bepaalt

:::info Platform AI en Overheid
Deze blog is geschreven in het kader van [Platform AI en Overheid](https://www.platformaienoverheid.nl/), een initiatief gericht op verantwoorde AI-adoptie binnen de publieke sector.
:::

AI is niet beter dan de data waarop het draait. Een slimme datalaag is geen nice-to-have, maar de absolute basis voor verantwoorde AI in de overheid. En die datalaag moet je nu goed inrichten – niet pas als je AI wilt toevoegen.

<!--truncate-->

## AI is Geen Oplossing voor Slechte Data

Laten we beginnen met een harde waarheid: AI verzint niets nieuws. Het extrapoleert, zoekt patronen en voorspelt, maar creëert geen feiten uit het niets.[^1] Als data inconsistent zijn, versterkt AI die tegenstrijdigheden en levert onbetrouwbare voorspellingen. Bias zit niet in de AI zelf, maar wordt gespiegeld uit de trainingsdata – garbage in, garbage out.[^1] Een enkele fout in brondata verspreidt zich door alle AI-toepassingen, met één verkeerde aanname die leidt tot vele verkeerde conclusies. AI versterkt dataproblemen, het lost ze niet op.[^1]

## De Common Ground Datalaag

Common Ground begon niet voor niets met het op orde brengen van de datalaag. De architectuur draait om registraties als single source of truth: elk gegeven heeft één autoritatieve bron, zonder duplicatie of tegenstrijdige versies. Denk aan de BRP voor persoonsgegevens of de BAG voor adressen, aangevuld met domeinspecifieke registers. Data scheiden van applicaties betekent dat informatie in gecontroleerde registers blijft, toegankelijk via API's – herbruikbaar, consistent en met kwaliteit geborgd op één plek. Open standaarden zorgen voor eenduidige definities, gestandaardiseerde API's en herbruikbare bouwblokken die gezamenlijk ontwikkeld worden. Dit alles maakt de datalaag robuust en toekomstbestendig.[^2]

## Waarom AI Andere Eisen Stelt aan Data

Traditionele applicaties werken vaak prima met redelijk goede data, omdat mensen inconsistencies kunnen corrigeren met gezond verstand. AI niet – het vraagt om meer context: wat betekent een veld precies, hoe actueel is de informatie, welke privacy-restricties gelden en hoe betrouwbaar is de bron.[^3][^4] Relaties zijn essentieel: koppelingen tussen gestructureerde data en documenten, verbanden tussen registers, historische tijdlijnen. Een AI die subsidieaanvragen ondersteunt, moet bijvoorbeeld weten wie de aanvrager is (uit de BRP), waar het bedrijf gevestigd is (BAG plus Handelsregister), welke eerdere aanvragen er waren (zaaksysteem) en welke regels gelden (regelingenregister).[^2][^3] Metadata over wanneer data aangemaakt of gewijzigd is, door wie, waarvoor het gebruikt mag worden en hoe lang het geldig is, maakt data betekenisvol in plaats van alleen opslag.[^4]

## AI Meenemen in Nieuwe Registers

De cruciale boodschap is: ontwerp registers nu al met AI in gedachten.[^4][^5] Bouw niet zoals altijd en probeer later AI toe te voegen – dat leidt tot problemen. Denk in plaats daarvan na over hergebruik, documenteer de betekenis van velden, bouw metadata en herkomst in, maak data geschikt voor zowel analyse als uitvoering en leg relaties expliciet vast.[^4]

Een praktisch voorbeeld maakt dit duidelijk: een traditioneel subsidieregister slaat basisinfo op zoals id, naam en bedrag. Een AI-proof ontwerp is rijker – volledige beschrijvingen, machine-leesbare voorwaarden, gedetailleerde status met datum en reden, relaties naar aanvrager, locatie en regelgeving, plus metadata over geldigheid en privacy-niveau.[^3][^4] Dit maakt context expliciet, relaties traceerbaar, herkomst bekend en voorwaarden machine-leesbaar – precies wat AI nodig heeft voor betrouwbare analyses.[^4]

## De Strategische Keuze

Verkeerd ontwerpen leidt tot jaren achterstand: later herbouwen kost geld en tijd, AI-adoptie vertraagt, toepassingen blijven suboptimaal en vendor lock-in loert.[^5] Goed ontwerpen opent toekomstige innovatie: AI toevoegen wordt makkelijk, data werkt voor mens en machine, kwaliteit stijgt door betere input en je behoudt flexibiliteit in keuzes.[^4][^5] Wie nu verkeerd ontwerpt, beperkt AI voor jaren. Wie nu goed ontwerpt, maakt toekomstige innovatie mogelijk.[^5]

## OpenRegister: AI-Proof Data-opslag

Bij Conduction ontwikkelen we OpenRegister – een open source oplossing voor Nextcloud waarin documenten en gestructureerde data beheerd worden, aan elkaar gerelateerd en vectoriseerbaar voor AI. Dit toont hoe data vanaf het begin AI-ready in te richten is.[^6]

## Kritische Vraag

Als we onze datalaag niet van meet af aan AI-proof maken, bouwen we dan niet aan een digitaal fundament dat niet toekomstbestendig is?[^5] Moeten we nu niet wat meer investeren om straks geen dure inhaalslag te hoeven maken?[^5]

Het antwoord is duidelijk: ja. Investeren in een goede datalaag nu bespaart tien keer zoveel later.[^5]

## Conclusie

AI begint niet bij modellen, maar bij datakeuzes.[^1][^5] De meest geavanceerde AI ter wereld is nutteloos op slechte data. De eenvoudigste AI kan waardevol zijn met goede data.[^1]

Common Ground biedt de architectuur.[^2] Open standaarden bieden de interoperabiliteit.[^2][^3] Registers die vanaf het begin AI-proof ontworpen worden, bieden de basis.[^4]

De boodschap aan iedereen die nu registers of data-oplossingen bouwt: denk nu al aan AI. Niet als optie, maar als ontwerpprincipe.[^4][^5]

Want de datalaag die je vandaag bouwt, bepaalt de AI-mogelijkheden van morgen.[^5]

**Volgende blog:** AI en Techniek - Veilige integratie

**Gerelateerd:** [Common Ground](https://commonground.nl) | [OpenRegister](https://github.com/ConductionNL/openregister)

## Componenten

Hieronder verwijzingen naar toepasbare EuroStack-componenten en gerelateerde open source tools:

- **SovereignAI**: AI-as-a-Service voor soevereiniteit – ideaal voor on-premise models.
- **DataCommons**: Federated data exchange – voor veilige data-ophaal in integraties.
- **EuroOS**: Open source OS voor infrastructuur – basis voor datalagen.
- **OpenRegister**: Open source data-oplossing voor Nextcloud – AI-proof opslag en vectorisatie.[^6]

Deze componenten en tools passen perfect bij veilige, soevereine AI-integratie in overheidscontext.

[^1]: **Common Ground** - [AI en Data: Garbage in, garbage out](https://commonground.nl/)

[^2]: **Common Ground** - [Architectuur en principes](https://commonground.nl/)

[^3]: **VNG** - [Common Ground implementatie](https://vng.nl/projecten/common-ground)

[^4]: **NORA** - [Richtlijnen voor datalaag en AI-ready ontwerp](https://www.noraonline.nl/)

[^5]: **Rijksoverheid** - [Overheidsbrede visie Generatieve AI](https://open.overheid.nl/documenten/9aa7b64a-be51-4fc4-8dac-1d4a3e0b02ba/file)

[^6]: **Conduction** - [OpenRegister op GitHub](https://github.com/ConductionNL/openregister)
