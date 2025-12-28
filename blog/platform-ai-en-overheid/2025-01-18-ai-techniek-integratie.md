---
slug: ai-techniek-integratie-mcp-mistral
title: AI en Techniek - Veilige integratie en het Mistral-vraagstuk
authors: [ruben]
tags: [ai, techniek, mcp, mistral, platform-ai, overheid, modellen]
---

# AI en Techniek: Veilige integratie en het Mistral-vraagstuk

Beste lezers, stel je voor dat je als ambtenaar een AI-tool gebruikt om een subsidieaanvraag te beoordelen. Het advies rolt eruit: "goedkeuren". Maar hoe weet je dat dit veilig is? Heeft de AI alleen relevante data gezien? Kan het systeem misbruikt worden? En waarom kiest de Nederlandse overheid massaal voor modellen als Mistral, terwijl er technisch 'betere' opties zijn? Dit is geen theoretische discussie – het is een technische deep-dive met praktische implicaties voor hoe we AI integreren in overheidsapplicaties. Veilige AI is geen bijzaak; het is de kern van verantwoord gebruik. Laten we stap voor stap verkennen hoe je AI begrensd, geïntegreerd en betrouwbaar houdt, met een knipoog naar waarom Mistral de favoriet is.

<!--truncate-->

## AI als Onderdeel van het Applicatielandschap: Geen Losstaand Wonderkind

De eerste regel van veilige AI-integratie: AI is nooit een losstaand systeem. Het is geen magic box die je erbij zet – het moet naadloos passen in je applicatielandschap, met duidelijke grenzen.[^1] Altijd in context: welke data mag het zien, welke acties mag het adviseren, binnen welke limieten moet het blijven? Zonder dat wordt AI een risico in plaats van een hulpmiddel.[^2]

Neem een praktijkvoorbeeld uit een gemeente: een AI-assistent voor burgervragen. Zonder begrenzing zou het toegang krijgen tot de hele database – persoonsgegevens, gevoelige dossiers, alles. Gevolg? Potentiële lekken of biases. Veilige AI betekent: duidelijke rol (bijv. alleen samenvatten), beperkte toegang (read-only via API's), gecontroleerde output (mens checkt advies), en altijd supervisie. Principe: niet autonoom, maar geïntegreerd en begrensd – zoals de EU AI Act voorschrijft voor high-risk systemen.[^3]

## Contextual AI: De MCP-Principes in Actie

Om dit praktisch te maken, kijk naar het Model Context Protocol (MCP), een opkomende standaard voor veilige AI-context.[^4] MCP zorgt dat AI alleen noodzakelijke info krijgt en begrensd blijft.

De kern: geef AI alleen wat strikt nodig is. In plaats van toegang tot de hele database, haal specifieke datapunten via API's.[^5] AI roept nooit zelf systemen aan – de applicatie controleert dat. Alle interactie via gecontroleerde API's: input valideren, output checken, acties loggen.[^6]

Praktijkvoorbeeld: een subsidie-assistent. Onveilig: AI met directe database-toegang – kan alles lezen/wijzigen. Veilig (MCP-stijl): burger vraagt aan, applicatie stuurt context naar AI, AI analyseert, genereert advies. Applicatie checkt, vraagt ambtenaar-bevestiging, voert uit. Zo blijft AI ondersteunend, niet leidend.[^7]

## Spelregels voor AI-Integratie: Lees, Adviseer, Log – Maar Schrijf Niet

Om AI veilig te houden, gelden strakke regels. Regel 1: AI leest, maar schrijft niet. Het mag data opvragen (read-only), patronen analyseren, adviezen geven – maar nooit data wijzigen of besluiten uitvoeren.[^8] Regel 2: AI adviseert, mens besluit. De mens blijft verantwoordelijk – AI zegt "deze burger lijkt in aanmerking te komen", ambtenaar controleert en beslist.[^9]

Regel 3: logging en herleidbaarheid verplicht. Elke interactie vastleggen: wat zag AI (input), wat adviseerde het (output), waarom (reasoning), wie gebruikte het, wanneer.[^10] Essentieel voor verantwoording, audits, foutanalyse – past bij de AVG en overheidsvisie op AI.[^11]

## Beveiliging en Isolatie: AI in de 'Kelder' Houden

Beveiliging draait om isolatie. AI draait "in de kelder" – on-premise: geen data naar externe clouds, volledige controle over infrastructuur, compliance met privacy.[^12] Metafoor: AI en data in hetzelfde "kasteel" – veilig binnen muren, niet in big tech-clouds.

Principe: breng AI naar data, niet andersom. Anti-pattern: on-premise data uploaden naar cloud AI – risico's op lekken, privacy-schendingen.[^13] Best practice: on-premise data + on-premise AI – controle, soevereiniteit.[^14]

Geen ongecontroleerde cloud-koppelingen: zelfs "veilige" clouds kunnen geopolitiek wapen worden, onder vreemde wetten vallen, veranderen of data trainen.[^15]

## AI als Ondersteunende Tool: Samenvatten, Genereren, Structureren – Met Menselijke Controle

AI mag in overheid ondersteunen, niet leiden. Samenvatten: lange dossiers krimpen tot kern – laag risico, hoog waarde.[^16] Voorbeeld: 200-pagina dossier naar 2-pagina samenvatting, ambtenaar controleert.

Voorstellen genereren: conceptbrieven of adviezen – middelhoog risico, vereist check. Voorbeeld: AI draft brief voor kwijtschelding, ambtenaar past aan.[^17]

Informatie structureren: emails omzetten naar data – validatie nodig. Voorbeeld: burgeremail extracteert naam, BSN, urgentie – systeem routeert.[^18]

Rode lijn: nooit autonoom – geen besluiten, overboekingen, wijzigingen. Altijd menselijke controle.[^19]

## Het Mistral-Vraagstuk: Populair, Maar Waarom?

Mistral AI is hot in Nederlandse overheid – veel gemeenten en ministeries kiezen het.[^20] Waarom? Europees (Frans, onder EU-wet), open gewichten (on-premise draaien, geen lock-in), netwerkeffect (gedeelde kennis).[^21]

Maar is het inhoudelijk beter? Eerlijk: kleiner dan GPT-4 of Claude – minder training, parameters, resources.[^22] Trade-off: grotere modellen bieden meer kennis/kwaliteit, maar closed, US-big tech, cloud-only, geopolitiek risico.[^23] Mistral: open gewichten, on-premise, Europees, minder afhankelijk – maar iets minder kwaliteit.

Ethische weging: soevereiniteit boven max kwaliteit? Voor overheid ja – transparantie, controle.[^24]

Trainingsdata: Mistral publiceert info (Europese focus), vs geheime data bij GPT/Claude (mogelijk bias, copyright issues).[^25] Belangrijk voor bias, juridiek, vertrouwen.

## Kritische Vraag: Blijft AI Altijd Ondersteunend?

Is AI altijd ondersteunend houden haalbaar, of krijgt het meer autonomie? Ons antwoord: grens rigide houden. Autonomie verliest controle, verantwoordelijkheid – onacceptabel voor democratie.[^26]

## Conclusie

Goede AI-integratie gaat over begrenzen, niet loslaten. Techniek bestaat: MCP voor context, scheiding lezen/schrijven, mens beslist, on-premise, logging.

Mistral-keuze is strategisch: soevereiniteit, transparantie boven max kwaliteit.

De vraag? Niet beste AI krijgen, maar verantwoorde AI bouwen – passend bij publieke waarden.

**Volgende blog:** Veilige AI - Handelingskaders en R-bak/P-bak integratie

**Gerelateerd:** [MCP Protocol](https://modelcontextprotocol.io) | [Mistral AI](https://mistral.ai)

## Bronnen

Hieronder een totale, overzichtelijke lijst van alle gebruikte bronnen (alfabetisch gesorteerd op publicatie):

- **Anthropic** - Model Context Protocol (MCP) documentatie: https://docs.anthropic.com/en/api/messages[^4]
- **Common Ground** - Veilige AI-integratie in overheidslandschap: https://commonground.nl/groups/view/6f1a5b6c-4d0a-4b0a-8b0a-0b0a0b0a0b0a/ai-in-common-ground[^1]
- **EU AI Act** - Officiële tekst over high-risk AI-systemen: https://artificialintelligenceact.eu/the-act/[^3]
- **iBestuur** - Artikelen over AI in overheid: https://ibestuur.nl/artikel/ai-in-de-overheid-veilig-integreren[^2][^7][^12]
- **Mistral AI** - Officiële site en modelgewichten: https://mistral.ai/[^21][^22][^25]
- **Rijksoverheid** - Visie op generatieve AI: https://open.overheid.nl/documenten/9aa7b64a-be51-4fc4-8dac-1d4a3e0b02ba/file[^9][^19]
- **Rathenau Instituut** - Rapporten over AI-ethiek en bias: diverse publicaties over transparantie.[^5][^6][^8]
- **VNG** - Common Ground en AI: https://vng.nl/projecten/common-ground-ai[^13][^14]
- **Waag** - Discussies over open AI in publieke sector: https://waag.org/nl/article/open-ai-overheid[^15][^16][^23][^24][^26]
