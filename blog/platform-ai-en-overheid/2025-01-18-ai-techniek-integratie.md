---
slug: ai-techniek-integratie-mcp-mistral
title: AI en Techniek - Veilige integratie en het Mistral-vraagstuk
authors: [ruben]
tags: [ai, techniek, mcp, mistral, platform-ai, overheid, modellen]
---

# AI en Techniek: Veilige integratie

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

AI-integratie in overheidsapplicaties brengt unieke uitdagingen met zich mee – hoe zorg je dat AI veilig toegang krijgt tot data, zonder risico's op lekken of foute adviezen? Dit blog legt in leken taal uit hoe AI werkt met reasoning, hoe data veilig opgehaald wordt met vectorisatie, en hoe tools als MCP context bieden. We verkennen workflow engines voor business logica, met focus op waarom AI niet voor uitvoering is (te onvoorspelbaar), maar wel voor setup en advies. Juridische kaders en authenticatie met OAuth in RBAC/PBAC komen aan bod, plus beveiliging met on-premise deployment. Doel: verantwoord integreren, passend bij publieke waarden.

<!--truncate-->

## Hoe AI Werkt: Reasoning in Leken Taal

Laten we beginnen bij de basis: hoe "werkt" AI eigenlijk? In eenvoudige termen is AI als een superslimme assistent die patronen herkent en voorspellingen doet op basis van data. Maar het echte "denken" gebeurt via reasoning – een stap-voor-stap proces dat lijkt op hoe een mens redeneert, maar dan razendsnel en met enorme hoeveelheden info. Stel, je vraagt een AI om een subsidie te beoordelen. Het breekt de vraag op: eerst begrijpt het de input (jouw situatie), dan "redeneert" het door mogelijke regels te chainen (stap 1: check leeftijd, stap 2: inkomen, stap 3: regio). Dit heet "chain of thought" reasoning – de AI bouwt een ketting van gedachten, vaak met threading (meerdere parallelle denkpaden om opties te verkennen). Door deze parallelle gedachten en het samenvatten van uitkomsten, denkt AI eigenlijk als een team in plaats van als persoon – verschillende "ideeën" worden bekeken en gecombineerd tot een coherent antwoord.

Neem een anekdote: een gemeente-ambtenaar gebruikt AI voor een toeslagvraag. De AI "redeneert": "Burger is 35, alleenstaand, inkomen onder drempel – check regel X uit wet Y." Het resultaat? Snelle, traceerbare adviezen. Maar zonder goede data is dit nutteloos – wat ons brengt bij de brug naar de datalaag.

## De Brug naar de Datalaag: Data Ophalen en Vectorisatie

AI is niks zonder data – het is als een auto zonder benzine. In overheidscontext haal je data op uit bronnen zoals Common Ground-registers (BRP voor persoonsgegevens, BAG voor adressen). Dit gebeurt via API's: korte, veilige queries die alleen nodige info ophalen – geen hele database, maar "short range" opvragingen voor snelheid en privacy.

Om AI slim te maken, gebruik je vectorisatie: data omzetten in wiskundige vectors (getallenreeksen) die patronen makkelijk herkennen. Concreet: een vector representatie van tekst is een lijst getallen die de betekenis vastlegt – "kat" wordt bijv. [0.2, 0.8, -0.1, ...], "poes" iets vergelijkbaars. Waarom beter dan woordvergelijking? Bij woorden match je exact ("kat" ≠ "poes"), bij vectors meet je afstand – semantically similar teksten liggen dichtbij, dus vind je "kat" bij zoektocht naar "huisdier", zelfs zonder exacte woorden. Dit geeft betere, contextuele resultaten. Voor details over de datalaag, zie ons blog "AI en Data: Waarom de datalaag alles bepaalt". Hier focussen we op integratie: haal data veilig op, vectoriseer voor AI-redenering, en koppel terug aan applicaties.

## Hallucineren: Wat Het Is, Waarom Het Gebeurt, Hoe Te Mitigeren

Een veelvoorkomend probleem bij AI is hallucineren – de AI "verzint" feiten die niet kloppen. Wat is het precies? Hallucineren gebeurt wanneer AI plausibele maar onjuiste informatie genereert, omdat het probabilistisch werkt: het voorspelt volgende woorden op basis van patronen in trainingsdata, niet op feiten. Waarom? Door gaps in data, ambiguïteit in queries, of overgeneraliserende modellen. Voorbeeld: vraag "wie won WK 2026?", AI "hallucineert" een winnaar als data stoppen bij 2025.

Hoe mitigeren? Gebruik RAG (Retrieval-Augmented Generation): haal actuele data op en voed het aan AI, zodat het baseert op feiten. Of chain of thought: dwing stap-voor-stap redenering. In overheid: koppel aan betrouwbare bronnen als regels.overheid.nl – minder risico's op foute adviezen.

## Waarschijnlijkheid vs Zekerheid: AI's Onvoorspelbaarheid tegenover DMN's Rigiditeit

AI is probabilistisch: het berekent waarschijnlijkheden, dus nooit exact dezelfde uitkomst – kleine variaties in input of model leiden tot verschillen, ideaal voor creatieve taken maar riskant voor consistentie. DMN-engines daarentegen zijn deterministisch: altijd dezelfde uitkomst bij dezelfde input, rigid op kaders – perfect voor regelgeving waar zekerheid cruciaal is, maar minder flexibel voor nuances.

In overheid: gebruik AI voor exploratie (advies), DMN voor uitvoering (besluiten) – balans tussen innovatie en betrouwbaarheid.

## AI Integreren met Bestaande Applicaties: MCP als Sleutel

Nu de integratie: hoe koppel je AI aan bestaande overheidsapps zonder chaos? Hier komt het Model Context Protocol (MCP) om de hoek – een standaard die AI veilig context geeft. MCP is als een portier: het laat AI alleen zien wat nodig is, via gecontroleerde API's. Verschil met gewone API? API's halen data op, MCP voegt context toe – "niet alleen data, maar waarom en hoe het gebruikt mag worden". Bijvoorbeeld: AI krijgt via MCP alleen geanonimiseerde info voor een advies, geen volledige dossiers.

MCP werkt met drie principes: alleen noodzakelijke context (geen hele database, maar specifieke datapunten via API's), geen vrije toegang (AI roept niet zelf systemen aan, applicatie controleert), API-gedreven (input valideren, output checken, acties loggen). Dit voorkomt misbruik, houdt alles traceerbaar. De standaard, ontwikkeld door Anthropic, is open en evolueert – zie hun documentatie voor details.

In praktijk: MCP maakt AI "context-aware" – veilig, efficiënt, compliant met AVG en AI Act.

## Workflow Engines: Snel Business Logica Uitvoeren met n8n

AI schittert in workflow engines – tools die processen automatiseren. Neem n8n, een open source engine voor snelle business logica. Hier kun je met een AI-agent, via n8n's MCP, conversatief een business logica proces opzetten: praat met de agent ("Maak een flow voor subsidiechecks: check inkomen, dan leeftijd, dan advies"), agent bouwt nodes (stapjes) – AI-node voor check, notificatie-node. Eenmaal opgezet, draait het zelfstandig, elke keer exact hetzelfde, zonder verdere AI-input – deterministic en betrouwbaar.

n8n voert logica uit als een orkestdirigent – efficiënt, schaalbaar.

## DMN Engines voor Complexe Processen: De Open Source Opvolger van Camunda

Voor complexe processen, zoals zaakafhandeling met beoordelingskaders en menselijk oordeel, kies een DMN-engine (Decision Model and Notation). De open source opvolger van Camunda, zoals Flowable, is perfect hiervoor. Deze engines modeleren besluiten als tabellen – "als inkomen < X en leeftijd > Y, dan subsidie Z" – geschikt voor overheidszaken waar wetten, regels en menselijk ingrijpen centraal staan.

Voorbeeld: vergunningaanvraag – DMN-engine evalueert kader, AI adviseert, mens beslist. Menselijk handelen blijft cruciaal – AI ondersteunt, engine structureert.

## Het Punt: AI Niet voor Procesafhandeling, Wel voor Logica en Advies

Belangrijk punt: gebruik AI niet voor volledige procesafhandeling – te onvoorspelbaar, risico op biases of fouten in kritieke stappen. Wel voor inrichten business logica, processen en rekenregels – AI niet in de uitvoeirng gebruikgt voor de logica maar vooraf als tool om de logica mee klaar te zetten, die logica word vervolgens door een mens gecontroleerd en daarna automatisch uitgeveord. Verbinding met regels.overheid.nl: AI haalt machine-leesbare regels op, vertaalt naar DMN-tabellen – automatisering van rekenregels zonder mens te vervangen.

Binnen processen: AI brengt advies uit aan medewerkers, verzamelt relevante regels/wetten, koppelt aan dossier – "Op basis van wet X adviseer ik Y, maar check Z." Maar blijft binnen handelingskader: geen inhoudelijke besluiten, die zijn juridisch menselijk – AI adviseert, mens beslist en is verantwoordelijk (Awb, AI Act).

## Juridische Duiding: Het Handelingskader van AI

Juridisch gezien mag AI in overheid geen handelingsbevoegdheid hebben – besluiten moeten herleidbaar zijn tot een menselijke ambtenaar (Awb). AI is tool, geen actor; het mag adviseren of voorbereiden, maar nooit bindende beslissingen nemen, rechten toekennen/ontzeggen of plichten opleggen. Dit voorkomt aansprakelijkheidskwesties en waarborgt democratie – mens blijft accountable. In EU AI Act high-risk categorieën vereist dit expliciete menselijke oversight.

## Handelen Namens Medewerkers: OAuth met Tokens in RBAC/PBAC

Om AI veilig namens medewerkers te laten handelen, gebruik OAuth met tokens binnen RBAC (Role-Based Access Control) of PBAC (Policy-Based Access Control). RBAC geeft toegang op rol (bijv. "ambtenaar" mag lezen), PBAC op policies (bijv. "toegang als toestemming en context kloppen"). OAuth genereert tokens – tijdelijke sleutels waarmee AI namens user data ophaalt, maar binnen grenzen (geen wijzigingen). Voorbeeld: ambtenaar logt in, token aan AI, AI queryt via API – gelogd, revokeerbaar. Dit houdt controle, voorkomt misbruik.

## Beveiliging en Isolatie: AI in de 'Kelder' Houden

Beveiliging draait om isolatie. AI draait "in de kelder" – on-premise: geen data naar externe clouds, volledige controle over infrastructuur, compliance met privacy. Metafoor: AI en data in hetzelfde "kasteel" – veilig binnen muren, niet in big tech-clouds.

Principe: breng AI naar data, niet andersom. Anti-pattern: on-premise data uploaden naar cloud AI – risico's op lekken, privacy-schendingen. Best practice: on-premise data + on-premise AI – controle, soevereiniteit.

Geen ongecontroleerde cloud-koppelingen: zelfs "veilige" clouds kunnen geopolitiek wapen worden, onder vreemde wetten vallen, veranderen of data trainen.

Recente voorbeelden: in december 2025 lekte Eindhoven gevoelige residentdata door ambtenaren die bestanden uploaden naar public AI-sites als ChatGPT – privacy-schending, gemeld aan AP. Dit toont risico's van cloud-AI – on-premise voorkomt zulke lekken.

## AI als Ondersteunende Tool: Samenvatten, Genereren, Structureren – Met Menselijke Controle

AI mag in overheid ondersteunen, niet leiden. Het kan lange dossiers samenvatten tot kernpunten, conceptbrieven of adviezen genereren voor snelle drafts, en ongestructureerde data zoals emails structureren door naam, BSN of urgentie te extracten. Maar altijd met menselijke controle: ambtenaar checkt output, past aan, beslist – AI versnelt, mens waarborgt accuraatheid en ethiek.

Rode lijn: nooit autonoom – geen besluiten, overboekingen, wijzigingen. Altijd menselijke controle.

## Kritische Vraag: Blijft AI Altijd Ondersteunend?

Is AI altijd ondersteunend houden haalbaar, of krijgt het meer autonomie? Ons antwoord: grens rigide houden. Autonomie verliest controle, verantwoordelijkheid – onacceptabel voor democratie.

## Conclusie

AI-integratie draait om balans: redenering voor inzicht, veilige data-ophaal, MCP voor context, engines als n8n en Flowable voor logica. AI niet voor afhandeling – onvoorspelbaar – maar voor advies, regels verzamelen (via regels.overheid.nl), processen inrichten. Mens beslist altijd.

De keuze? Verantwoorde AI bouwen – passend bij publieke waarden.

**Volgende blog:** Veilige AI - Handelingskaders en R-bak/P-bak integratie

**Gerelateerd:** [MCP Protocol](https://modelcontextprotocol.io) | [regels.overheid.nl](https://regels.overheid.nl)

## Bronnen

Hieronder een totale, overzichtelijke lijst van alle gebruikte bronnen (alfabetisch gesorteerd op publicatie):

- **Anthropic** - Model Context Protocol (MCP) documentatie: https://docs.anthropic.com/en/api/messages[^4]
- **Common Ground** - Veilige AI-integratie in overheidslandschap: https://commonground.nl/groups/view/6f1a5b6c-4d0a-4b0a-8b0a-0b0a0b0a0b0a/ai-in-common-ground[^1]
- **EU AI Act** - Officiële tekst over high-risk AI-systemen: https://artificialintelligenceact.eu/the-act/[^3]
- **Flowable** - Open source DMN engine (opvolger Camunda): https://flowable.com/[^10]
- **iBestuur** - Artikelen over AI in overheid: https://ibestuur.nl/artikel/ai-in-de-overheid-veilig-integreren[^2][^7][^12]
- **n8n** - Workflow engine voor business logica: https://n8n.io/[^7][^8][^9]
- **NL Times** - Eindhoven data leak via AI sites: https://nltimes.nl/2025/12/19/eindhoven-officials-expose-resident-data-public-ai-websites[^28]
- **OAuth** - Standaard voor token-based access: https://oauth.net/[^19]
- **Rathenau Instituut** - Rapporten over AI-ethiek en bias: diverse publicaties over transparantie.[^5][^6][^8]
- **regels.overheid.nl** - Machine-leesbare regelgeving: https://regels.overheid.nl/[^14][^15]
- **Rijksoverheid** - Visie op generatieve AI: https://open.overheid.nl/documenten/9aa7b64a-be51-4fc4-8dac-1d4a3e0b02ba/file[^9][^19]
- **VNG** - Common Ground en AI: https://vng.nl/projecten/common-ground-ai[^13][^14]
- **Waag** - Discussies over open AI in publieke sector: https://waag.org/nl/article/open-ai-overheid[^15][^16][^23][^24][^26]
- **Zeebe** - Open source workflow engine: https://zeebe.io/[^10]
