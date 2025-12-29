---
slug: ai-werking-bubbels
title: 'AI en Werking: Wat is AI eigenlijk?'
authors: [ruben]
tags: [ai, llm, overheid]
---

# AI en Werking: Wat is AI eigenlijk?

Vanuit overheden krijgen we vaak de vraag : welke AI moet ik kiezen? Mistral, Cursor, ChatGPT? Wat is het meest ethische en wat is het beste?

Een logische vraag, maar het antwoord is grappig: **Kies de AI die bij je social bubbel past.** Huh, die bubbels weer? Ja, AI's volgen net zo goed sociale media-bubbels, of althans ze zijn onderhevig aan "waarden, normen en wereldbeelden" aan de hand van de informatie die ze tot zich nemen of juist negeren. In die zin zijn ze niet heel anders dan een social media gebruiker. Maar om te begrijpen hoe dit werkt (en waarom je er op moet letten) moeten we eerst even duiken in wat AI eigenlijk is.

## Wat is AI Eigenlijk?

Laten we het mysterie ontrafelen: **AI is geen magie, maar een tekstvoorspeller**.

Een LLM (Large Language Model) is een rekenmodel dat getraind is op enorme hoeveelheden tekst. Het heeft patronen geleerd uit die voorbeelden. Wanneer je iets invoert, voorspelt het model stap voor stap wat de meest logische volgende tekst zou zijn - puur op basis van waarschijnlijkheden en patronen en (met name) de gestelde vraag.

AI **denkt niet na** zoals een mens. Het geeft simpelweg de meest waarschijnlijke volgende tekst terug op basis van wat het heeft geleerd. En dus die gestelde vraag. Met name dat laatste maakt het zo fijn om mee te werken. Het geeft in feite het meest wenselijke antwoord op je vraag en is dus in zekere zin een digitale psychopaat. En dat levert ook een acuut probleem op.

## AI is net zo Ethisch als de Data

Hier wordt het interessant: **AI heeft per definitie geen ethisch, moreel of sociaal wegingskader**. Het voorspelt alleen maar op basis van de data die het heeft gezien. Met andere woorden: Training = Opvoeding = Gedrag.

Het trainen van AI betekent dat je het model voedt met voorbeelden en data, zodat het daar patronen in kan herkennen. Je laat het model als het ware oefenen, zodat het steeds beter wordt in voorspellen. De antwoorden zijn dus net zo ethisch of moreel als de data waarmee je het traint. En daar ligt de kern van het probleem: op welke data is een model getraind?

### De Valkuil van het Internet

Als je AI traint op het hele internet of Twitter, of een klassiek voorbeeld de commentsectie van nu.nl, dan neemt het ook alle vooroordelen, ruis en minder fraaie kanten over. Het creëert immers een voorspellend patroon voor dat soort comments. De bron van je trainingsdata bepaalt de bias van je AI.

Ethiek betekent dus: zorgen dat de patronen waar AI uit leert komen uit een zorgvuldig samengestelde, moreel verantwoorde dataset. Maar dat creëert grappig genoeg weer andere problemen.

## There are three kinds of lies: lies, damned lies, and statistics.

Ook in wetenschappelijk verband is het maar net de vraag welke data je kiest en in welke context die je plaatst, er zijn genoeg cijfers te vinden waar afkomst (hetzij etnisch of economisch) aan toekomstperspectief of crimineel gedrag kan worden gekoppeld. En zelfs dan nog is er een reden dat we een Tweede Kamer puur bestaande uit hoogopgeleide blanke mannen onwenselijk vinden. Het mist gevoel met de realiteit, en het wetenschappelijk of economisch meest wijze is niet per definitie het sociaalste of wenselijkste. Sterker nog, als we puur sturen op wetenschappelijke data en statistische eerlijkheid, kan AI conclusies trekken die statistisch correct zijn maar sociaal onwenselijk. Wat statistisch "eerlijk" lijkt, kan in de praktijk discriminerend aanvoelen.

Een tweede probleem met "ethische" AI's is kennisdeficiëntie. Heel flauw, maar het uitsluiten van auteursrechtelijk beschermd materiaal leidt tot minder kennis. En is hoewel normatief goed te verantwoorden vanuit het concept AI als assistent, gek vanuit het concept van kennis. Een mens put ook uit alle kennis die hij ooit is tegengekomen zonder te wegen of dit uit een bepaald boek of artikel kwam.

Maar goed, daarmee komen we op een fundamenteel probleem: de neutrale AI bestaat net zo min als de neutrale mens. Het levert per definitie een gekleurd beeld op aan de hand van keuzes van de trainer. Daarbij is een AI getraind op wetenschappelijke artikelen net zo min ethisch als een getrainde op de onderstroom van tweets. Maar wat moeten we dan wel?

## Hou op met het jagen op eenhoorns

Een perfecte AI ga je niet vinden, iedere filosoof had je dat op voorhand kunnen vertellen. Wat je ook traint en hoe je het in elkaar schroeft, als de data het geheel van de mensheid is dan krijg je iets menselijks. De vraag is hoe je hiermee omgaat. En dat is eigenlijk verdomd simpel, we doen het al jaren. Iedere ambtelijke organisatie bestaat uit menselijke mensen die we ooit hebben aangenomen in de volste overtuiging dat ze nooit 100% neutraal zijn. En daarop hebben we toetsing, bezwaar en een legio aan beheersmaatregelen genomen.

Los daarvan denkt AI in patronen, niet in feitelijke data. Als veel teksten naar een wetstekst verwijzen dan is dat een patroon, maar als ergens een wet of precedent logisch in het patroon past (doch niet feitelijk bestaat) dan wordt het een hallucinatie. Een AI die ervan overtuigd is dat wetten of precedenten bestaan inclusief bronvermelding, zonder dat ze er daadwerkelijk zijn. Zelfs puur trainen op waarheid voorkomt dus nog geen onwaarheden.

Waar we met AI dus op moeten letten is zorgen dat we advies niet als neutraal ervaren, niet klakkeloos overnemen en niet als absolute waarheid zien.

## Dus weer even terug naar de Bubbel

En zo komen we terug bij waar we begonnen: AI leeft in een bubbel, waar kunnen we dan wel op letten bij inhoudelijke keuzes voor een AI-model? Daar is eigenlijk iets heel simpels over te zeggen: we willen dat zijn bubbel een beetje matcht met de onze.

- We willen vertrouwen hebben in de trainers van de AI
- We willen inzicht hebben in de trainingsdata van de AI
- We willen dat de AI een brede set heeft aan trainingsdata (niet alleen nu.nl, niet alleen wetenschappelijk)
- We willen de AI lokaal kunnen draaien

(Dat laatste is trouwens cruciaal om gigantische datalekken te voorkomen, maar daar hebben we het een andere keer verder over.) Het zou natuurlijk helpen als het model zelf ook open source is zodat we het kunnen testen in gedrag. Oké, dan komen we op het volgende uit.

### Vergelijking Populaire AI-Modellen

| Model                  | Trainer Vertrouwen                | Inzicht Trainingsdata  | Breedte Dataset          | Lokaal Draaien        | Open Source Model       |
| ---------------------- | --------------------------------- | ---------------------- | ------------------------ | --------------------- | ----------------------- |
| **Mistral**            | ✅ Europees bedrijf, transparant  | ⚠️ Deels transparant   | ✅ Breed, Europese focus | ✅ Ja, open gewichten | ✅ Ja                   |
| **ChatGPT (OpenAI)**   | ⚠️ Amerikaans, Microsoft-invloed  | ❌ Volledig gesloten   | ✅ Zeer breed            | ❌ Nee, cloud-only    | ❌ Nee                  |
| **Claude (Anthropic)** | ⚠️ Amerikaans, "ethical AI" focus | ⚠️ Beperkt transparant | ✅ Breed, gefilterd      | ❌ Nee, cloud-only    | ❌ Nee                  |
| **Llama (Meta)**       | ⚠️ Amerikaans, Facebook-eigendom  | ⚠️ Deels transparant   | ✅ Zeer breed            | ✅ Ja, open gewichten | ✅ Ja (met restricties) |
| **Gemini (Google)**    | ⚠️ Amerikaans, Google             | ❌ Volledig gesloten   | ✅ Zeer breed            | ❌ Nee, cloud-only    | ❌ Nee                  |

**Legenda:**

- ✅ = Goed / Mogelijk
- ⚠️ = Gedeeltelijk / Met kanttekeningen
- ❌ = Slecht / Niet mogelijk

**Kanttekening bij "Cursor":** Cursor is geen AI-model, maar een editor die gebruik maakt van verschillende onderliggende modellen (zoals GPT-4, Claude). De keuze hangt dus af van welk model je via Cursor gebruikt.

**Voor de Nederlandse overheid** scoort Mistral dus relatief goed op onze criteria: Europees, deels transparant, en lokaal te draaien. Maar ook Mistral is niet perfect - volledig inzicht in trainingsdata ontbreekt nog steeds.

Het belangrijkste is echter dat we ons bewust zijn van deze randjes van AI. We kunnen AI er nooit meer op vertrouwen om zelfstandig namens de overheid te opereren in casussen zoals zaakorchestratie etc. Het gaat in die zin nooit de inhoudelijke medewerker vervangen. Waar het echter wel een wereld van verschil kan maken is de snelheid waarmee het data doorzoekt en voorstelt aan die inhoudelijke medewerker. Daarover meer in het volgende blog.
