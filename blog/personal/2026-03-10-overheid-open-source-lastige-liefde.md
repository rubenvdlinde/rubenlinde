---
slug: overheid-open-source-lastige-liefde
title: 'Overheid en Open Source — Een Lastige Liefde'
authors: [ruben]
tags:
  [personal, open-source, soevereiniteit, overheid, vibe-coding, common-ground]
description: 'De overheid omarmt open source, maar bouwt liever zelf dan dat ze aansluit bij bestaande projecten. Vibe coding maakt dat probleem alleen maar erger.'
---

# Overheid en Open Source — Een Lastige Liefde

De overheid houdt van open source. Zolang ze het zelf mogen bouwen.

Dat klinkt cynisch, maar ik meen het. Bij Common Ground lopen we hier dagelijks tegenaan. Het is ook een gevoelig onderwerp. Niemand wil horen dat zijn project een duplicaat is. Daarom vergelijk ik Europa's twee grootste soevereine werkplekprojecten: OpenDesk (Duitsland) en La Suite Numérique (Frankrijk). Zelfs op dat niveau botsen ze niet op functionaliteit maar op aanpak. OpenDesk shopt best-of-breed componenten bij bestaande projecten. La Suite bouwt alles zelf. Niet om Nederlandse collega's op de tenen te trappen, maar om het patroon zichtbaar te maken. Want het patroon is overal hetzelfde.

Overheden die open source omarmen als de toekomst, die soevereiniteit en samenwerking prediken, en die vervolgens hun eigen versie bouwen van iets dat al bestaat. Met eigen standaarden. Eigen integraties. Eigen eilandjes. Het is een beetje alsof je Narcissus Product Owner maakt.

Het resultaat? Een landschap van open source projecten die niet met elkaar praten, geld dat verdampt aan duplicatie, en bestaande communities die verzwakken terwijl overheden hun eigen weg gaan.

Laten we eerlijk zijn: het probleem is niet dat overheden open source willen. Het probleem is _hoe_ ze het doen.

<!--truncate-->

## Waarom wil de overheid open source?

De motivaties zijn oprecht en valide. Ik schreef er een [apart stuk](/blog/open-source-voor-beleidsmakers) over. Ze zijn tegelijk onze lat. Aan het einde vergelijk ik de twee grootste Europese open source werkplekprojecten en houd ze tegen deze criteria. Dan wordt zichtbaar wat de gevolgen zijn van de keuze tussen aansluiten en zelf bouwen. In het kort:

- **Soevereiniteit** — Geen kill switch in handen van een ander land. Het ICC-incident bewees dat dit geen theorie is.[^1]
- **Veiligheid** — Open code kun je inspecteren; proprietary code moet je vertrouwen.[^2]
- **Democratische verantwoording** — Burgers hebben het recht te weten hoe overheidssoftware werkt.
- **Innovatie** — Code hergebruiken, community-input krijgen, samen sneller bouwen.
- **Kostenreductie** — Alleen als je aansluit bij bestaande projecten.
- **Vendor diversiteit** — Open code = echte marktwerking in plaats van schijnkeuze.
- **Publieke functionaliteit** — Niet alleen "public code" maar herbruikbare functionaliteit.[^3]

En daar begint het probleem. Want ondanks al deze nobele motivaties zien we in de praktijk iets heel anders.

## Zelf bouwen vs. aansluiten

Bijna elke overheid heeft een officieel wegingsproces. Voordat je iets bouwt, check je: kan het met bestaande software? Is er een open source alternatief? Kan ik aansluiten bij een bestaand project? In Nederland kennen we "Open, tenzij", de richtlijn dat overheidssoftware open source moet zijn tenzij er gegronde redenen zijn om dat niet te doen.[^4]

In theorie.

In de praktijk valt die weging bijna altijd uit in het voordeel van zelf bouwen. Ik heb het tientallen keren zien gebeuren, en de redenen zijn deprimerend voorspelbaar:

- **NIH-syndroom** — Not Invented Here. "Dat project past niet precies bij onze situatie." Natuurlijk niet. Geen enkel project past ooit precies. Bijdragen aan een project dat voor 80% past is bijna altijd slimmer dan 100% zelf bouwen. Toch kiest men keer op keer voor dat laatste.
- **Politieke druk** — Nationale soevereiniteit vertaalt zich naar "wij bouwen het zelf". Niet omdat het beter is, maar omdat het lekker staat in een beleidsbrief. "Minister opent eigen digitale werkplek" klinkt beter dan "Minister sluit aan bij Duits project".
- **Onwetendheid** — Simpelweg niet weten wat er al bestaat. Het open source landschap is groot en onoverzichtelijk. Het EU Open Source Solutions Catalogue (gelanceerd maart 2025, 640+ oplossingen) is een stap in de goede richting, maar wie kent het?[^5]
- **Budgetten beschermen** — Een project dat aansluit bij bestaande software kost minder. En minder budget betekent minder invloed. Minder invloed betekent minder bestaansrecht voor de afdeling. Ik heb het letterlijk horen zeggen in vergaderingen: "Als we aansluiten bij project X, wat doen wij dan nog?" Perverse prikkels die bouwen belonen en samenwerken bestraffen.
- **De illusie van controle** — Eigen code is code die je volledig beheerst. Tenminste, dat is de illusie. In werkelijkheid bouw je een systeem dat je in je eentje moet onderhouden, beveiligen en doorontwikkelen. Toch _voelt_ het als controle, en in bureaucratieën is dat gevoel soms belangrijker dan de werkelijkheid.

Het resultaat is overal hetzelfde: overheden die zeggen dat ze samenwerken, maar in werkelijkheid eilandjes bouwen.

Het is alsof je op een feest bent waar iemand in de hoek alleen met zichzelf staat te praten. Hij drinkt wel de drank op, hij gebruikt het terras, hij profiteert van de muziek, maar hij praat met niemand. Hij luistert naar niemand. Hij draagt niks bij. En aan het einde van de avond is hij ervan overtuigd dat hij het meest intellectuele gesprek van de avond heeft gevoerd. Open source als feest, overheden als die gast in de hoek.

En dat brengt me bij het meest veelzeggende voorbeeld van dit hele probleem.

## Case Study: OpenDesk vs. La Suite Numérique

Nergens is dit patroon zo zichtbaar als in het Europese speelveld rondom soevereine werkplekken. Duitsland en Frankrijk. Twee landen die allebei digitale soevereiniteit nastreven, allebei investeren in open source, maar het fundamenteel anders aanpakken. Het verschil zegt alles over wat er misgaat.

### Duitsland: OpenDesk, bouwen mét het ecosysteem

OpenDesk is het Duitse antwoord op de Microsoft-afhankelijkheid.[^6] Gebouwd door ZenDiS (Zentrum für Digitale Souveränität) met een budget van 45 miljoen euro. Het uitgangspunt: **best of breed**. Neem bestaande, bewezen open source tools en integreer ze tot een samenhangend geheel.

Het resultaat is een suite die bestaat uit componenten die je kent:

- **Nextcloud** voor opslag en samenwerking
- **Collabora Online** voor documentbewerking
- **Element** (Matrix-protocol) voor chat
- **OpenTalk** voor videoconferencing — een Berlijnse open source oplossing onder EUPL-licentie, al ingezet door de deelstaat Thüringen[^17]
- **OpenProject** voor projectmanagement
- **XWiki** voor kennisdeling
- **Univention** voor identity en access management

De architectuurprincipes zijn helder: modulariteit, interoperabiliteit, uitwisselbaarheid.[^7] Elk component kan worden vervangen zonder het geheel te breken. Open standaarden (CalDAV, CardDAV, IMAP, WebDAV, Matrix) vormen de lijm.

En het werkt. De Bundeswehr tekende een zevenjarig contract. Het Robert Koch-instituut rolde het uit voor 7.000 gebruikers. Het ICC stapte over na de Microsoft-sancties. In januari 2026 begonnen de Deutsche Rentenversicherung en de Bundesagentur für Arbeit met pilots. Het doel: meer dan 160.000 gebruikers bij Duitse overheidsinstellingen.[^8]

Het mooie van OpenDesk zit niet in de suite zelf. Het zit in het ecosysteem.

Nextcloud heeft een app store. Dat betekent dat je volledige applicaties kunt bouwen op de OpenDesk-datalaag. Elke ontwikkelaar, elk bedrijf, elke overheid kan aansluiten zonder toestemming te vragen. Je bouwt een app voor Nextcloud, en die werkt automatisch in elke OpenDesk-installatie. Het platform groeit door bijdragen van buitenaf. Precies zoals open source hoort te werken.

**Dit is het verschil tussen een platform en een eiland.**

### Frankrijk: La Suite Numérique, bouwen tégen het ecosysteem

En dan Frankrijk.

La Suite Numérique is het Franse equivalent, gebouwd door DINUM met een budget van 23 miljoen euro.[^9] Op papier klinkt het vergelijkbaar: soevereine werkplek, open source, 500.000+ ambtenaren. De aanpak is fundamenteel anders.

Waar Duitsland bestaande projecten integreert, bouwt Frankrijk alles zelf:

- **Docs**: custom frontend (React/Next.js) op BlockNote en Y.js — in plaats van Collabora of een ander bestaand project dat al jarenlang door duizenden organisaties wordt gebruikt
- **Visio**: custom videoconferencing op LiveKit — in plaats van OpenTalk, een Europees alternatief onder EUPL-licentie dat al wordt ingezet door Duitse deelstaten en Deense gemeenten (overigens ook op LiveKit)
- **Tchap**: eigen Matrix-client — in plaats van Element, de standaard Matrix-client die ook Duitsland gebruikt
- **Drive**: eigen file-sharing (Django + React) — in plaats van Nextcloud, het platform dat OpenDesk als kern gebruikt en dat tientallen miljoenen gebruikers wereldwijd bedient
- **Messages**: eigen mailclient from scratch — in plaats van OX App Suite, dat ironisch genoeg wél door DINUM zelf wordt gebruikt voor ministerie-email
- **AI-assistent**: eigen integratie met Mistral AI — in plaats van aansluiting bij bestaande open source AI-frameworks

Ja, de _bouwstenen_ zijn open source. Maar de producten die erop gebouwd worden zijn custom. En dat verschil is het verschil tussen bijdragen aan het ecosysteem en het ecosysteem ondermijnen.

| Aspect                 | OpenDesk (Duitsland)                                      | La Suite (Frankrijk)                                      |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Filosofie**          | Best of breed: integreer bestaande tools                  | Custom-built op open source bouwstenen                    |
| **Componenten**        | Nextcloud, Collabora, Element, OpenTalk, OX App Suite     | Eigen Docs, Visio, Tchap, Drive, Messages                 |
| **Ecosysteem**         | Open — app stores, standaard-API's, externe bijdragen     | Gesloten — custom integraties vereist                     |
| **Budget**             | EUR 45M                                                   | EUR 23M                                                   |
| **Aanbouwbaarheid**    | Elke ontwikkelaar kan apps bouwen via Nextcloud app store | Alles wat je wilt koppelen vereist custom integratie-werk |
| **Interoperabiliteit** | Standaard open protocollen                                | Eigen implementaties van open protocollen                 |

Het probleem met La Suite is niet dat het slecht is gebouwd. Het is technisch en visueel indrukwekkend.

**Het probleem is dat het een eiland is.**

En dat merk je. Laten we de cijfers naast elkaar leggen.

**La Suite Numérique (Frankrijk)**

|                  | **Docs**       | **Visio/Meet** | **Tchap**        | **Drive**      | **Messages**     |
| ---------------- | -------------- | -------------- | ---------------- | -------------- | ---------------- |
| **Commits**      | 1.841          | ~1.700         | ~4.239 eigen     | ~902           | ~657             |
| **Contributors** | 60             | 35             | ~10-20 echt      | 18             | 14               |
| **Commits/week** | ~18            | ~12            | n.v.t. (fork)    | ~16            | ~13              |
| **Forks**        | 552            | 167            | ~74              | 56             | 21               |
| **Gebruikers**   | Deel van 500K+ | ~60.000/mnd    | ~375.000/mnd     | Beta           | Onbekend         |
| **Leeftijd**     | 2 jaar         | 1,5 jaar       | 8 jaar (fork)    | 13 maanden     | 11 maanden       |
| **Licentie**     | MIT            | MIT            | AGPL-3.0         | MIT            | MIT              |
| **Stack**        | Django + React | Django + React | Fork van Element | Django + React | Django + Next.js |

**OpenDesk (Duitsland) — de bestaande projecten**

|                  | **Collabora Online** | **OpenTalk**  | **Element**        | **Nextcloud**        | **OX App Suite**  |
| ---------------- | -------------------- | ------------- | ------------------ | -------------------- | ----------------- |
| **Commits**      | 34.031               | 9.100         | tienduizenden      | 86.256               | 87.000+           |
| **Contributors** | 296                  | ~30           | 791                | ~350                 | 270+ medewerkers  |
| **Commits/week** | ~113                 | n.b. (mirror) | honderden          | ~123                 | actief            |
| **Forks**        | 981                  | 0 (OpenCoDE)  | ~4.968             | 4.747                | 19 (mirror)       |
| **Gebruikers**   | Miljoenen            | Thüringen, DK | Miljoenen          | Tientallen miljoenen | 220M+ mailboxen   |
| **Leeftijd**     | 5,5 jaar             | 3 jaar        | 6+ jaar            | 9,75 jaar            | 21 jaar           |
| **Licentie**     | MPLv2                | EUPL-1.2      | AGPL-3.0           | AGPL-3.0             | AGPL-3.0          |
| **Stack**        | C++ (LibreOffice)    | Rust + React  | TypeScript + React | PHP + Vue.js         | Java + JavaScript |

De getallen spreken voor zich, en een paar dingen springen er extra uit. Bij Visio zijn 1.377 van de ~1.700 commits door één persoon gedaan ([lebaudantoine](https://github.com/lebaudantoine)), 81% van het hele project. Bij Docs komt 57% van alle commits van één developer ([AntoLC](https://github.com/AntoLC)). Tchap is een fork van Element. De 848 "contributors" die GitHub toont zijn grotendeels Element-developers wiens commits zijn meegekopieerd. Slechts ~10-20 mensen werken daadwerkelijk aan Tchap-specifieke code.

En dan de functionaliteit. Docs is in wezen een markdown-editor op BlockNote.js, terwijl Collabora een volledig office-pakket is met Writer, Calc en Impress. Drive is een simpele file-sharing applicatie in versie 0.14, terwijl Nextcloud een compleet platform is met app store, federatie en honderden integraties, archivering, metadatering noem het maar op. Messages ondersteunt niet eens IMAP of POP3. Het is 11 maanden oud met 14 contributors, tegenover OX App Suite dat al 21 jaar draait en 220 miljoen mailboxen bedient.[^18] Overigens gebruikt DINUM voor de ministeries wél gewoon OX App Suite als webmail — wat eigenlijk alleen maar bewijst dat ze het alternatief al in huis hadden.

Dan is er ook nog een licentieprobleem. Vier van de vijf La Suite-componenten gebruiken MIT, de licentie die het makkelijkst maakt om code te sluiten en commercieel te exploiteren zonder iets terug te geven. OpenTalk gebruikt EUPL-1.2, Collabora MPLv2, Nextcloud en Element AGPL-3.0. Licenties die expliciet ontworpen zijn om open source open te houden.

Vijf componenten. Vijf keer hetzelfde verhaal. La Suite forkt of herbouwt wat er al is, met een fractie van de mankracht en een fractie van de functionaliteit. Frankrijk heeft inmiddels 23 miljoen euro uitgegeven aan minder functionaliteit, gebouwd door een handvol developers. Hiermee heeft het geen onafhankelijk soeverein ecosysteem opgebouwd, maar een risico op de continuïteit van de staat. Het Franse eilandje is extreem dun bevolkt.

### Het eiland-effect

Wil je iets bouwen dat aansluit op La Suite? Dan ben je custom integratie-werk aan het doen. Er is geen app store. Er is geen plug-in ecosysteem. Er is geen manier om een applicatie te bouwen op de La Suite datalaag zoals je dat bij Nextcloud in OpenDesk wél kunt. Alles wat je tegen La Suite wilt aanbouwen is maatwerk.

Vergelijk dat eens met Nextcloud. Een developer bouwt een app. Publiceert die in de app store. En ineens is die beschikbaar voor elke OpenDesk-installatie in Duitsland, elke Nextcloud-installatie wereldwijd. Dat is exponentieel bereik met lineaire inspanning. Bij La Suite? Eén integratie, voor één platform, in één land.

Dat is geen soevereiniteit. **Dat is digitale isolatie verpakt als nationale trots.**

### De schade aan het ecosysteem

La Suite trekt geld en aandacht weg bij goed lopende open source projecten. Denk er eens over na: waarom zou een Franse overheidsinstelling investeren in Collabora als DINUM een eigen documentbewerker bouwt? Waarom bijdragen aan OpenTalk als er een nationaal Visio-project is? Waarom Element verbeteren als Tchap de standaard wordt?

Het resultaat: bestaande open source projecten verliezen bijdragen, verliezen gebruikers, verliezen momentum. Terwijl er een Frans alternatief naast komt te staan dat niet met de rest van Europa communiceert. De ironie is perfect: in naam van open source en soevereiniteit creëert Frankrijk exact de vendor lock-in die het wil bestrijden. Alleen is de vendor nu de eigen overheid.

En het zijn niet alleen de directe bijdragen die wegvallen. Het gaat ook om het signaal. Als een grote Europese overheid besluit om Collabora te negeren en zelf iets te bouwen, dan zegt dat tegen de markt: "Dit project is niet goed genoeg." Dat ondermijnt het vertrouwen van andere potentiële gebruikers. Het trekt talent weg. Het verdeelt de community.

Weet je nog die gast op het feest die alleen met zichzelf staat te praten? La Suite is die gast. Het drinkt de drank op. Het gebruikt de open source bouwstenen, de protocollen, de standaarden. Het profiteert van het feest. Maar het praat met niemand. Het luistert naar niemand. Het draagt niks bij. En aan het einde van de avond is het ervan overtuigd dat het de beste werkplek van Europa heeft gebouwd. Het Europese open source ecosysteem is er niks mee opgeschoten.

### De interoperabiliteits-farce

En het wordt nog absurder. Tchap (La Suite) en Element (OpenDesk) zijn allebei gebouwd op het Matrix-protocol. Ze spreken letterlijk dezelfde taal. Maar een Franse ambtenaar op Tchap kan niet communiceren met een Duitse collega op Element.[^10] Twee landen die samenwerken aan digitale soevereiniteit (er is zelfs een trilaterale overeenkomst tussen Frankrijk, Duitsland en Nederland[^11]) maar wiens chat-systemen niet met elkaar praten.

Je kunt het niet verzinnen. Het is alsof twee buurlanden allebei een telefoonnetwerk bouwen, allebei op dezelfde technologie, maar weigeren om hun centrales met elkaar te verbinden. Technisch triviaal. Politiek blijkbaar onmogelijk.

Frankrijk investeerde ook nog eens 23 miljoen euro in drie concurrerende private consortiums onder het France 2030-programma[^12], nog meer fragmentatie, nog meer eilandjes, nog meer geld naar projecten die niet met de rest van Europa communiceren.

### En Nederland?

Nederland zit er tussenin met MijnBureau, een initiatief van het Ministerie van BZK dat elementen van beide benaderingen combineert.[^13] En op lokaal niveau zien we hetzelfde patroon bij Common Ground: officieel een weging, maar in de praktijk bouwen gemeenten regelmatig eigen varianten van dingen die al bestaan.[^14]

Ik zeg dit niet om Common Ground af te branden. Het uitgangspunt is goed en er zijn waardevolle resultaten geboekt. Het illustreert wel het bredere patroon: zelfs binnen één land, zelfs binnen een expliciet samenwerkingsverband, is de neiging om zelf te bouwen sterker dan de discipline om aan te sluiten.

Het Nederlandse OSPO (Open Source Program Office) bij BZK laat gelukkig zien dat het ook anders kan. Zij kozen bewust voor Forgejo als basis voor het overheids-codeplatform. Niet zelf bouwen, maar aansluiten en bijdragen.[^15] Gina Plat, de kwartiermaker, zei expliciet tegen de Forgejo-community dat ze "niet alleen willen nemen, maar ook middelen willen inbrengen." Dat is precies de houding die nodig is.

## Waarom blijven overheden dit doen?

Het probleem is structureler dan slechte keuzes van individuele politici. Overheden zijn gewend aan maatwerk. "Onze situatie is uniek" is het standaardargument. En eerlijk: overheidsprocessen _zijn_ complex. Toch is 80% van de functionaliteit identiek. Het is die 20% maatwerk waarvoor je de 100% zelf bouwt.

Daarbovenop komen perverse prikkels. Wie budget heeft, bestaat. Een team dat aansluit bij een bestaand project verbruikt minder budget, heeft minder mensen nodig, en heeft dus minder invloed. De prikkel is om te bouwen, niet om aan te sluiten.

En laten we eerlijk zijn: sommige landen bouwen liever een middelmatig eigen product dan een excellent buitenlands project te adopteren. Protectionisme vermomd als soevereiniteit. Van de Europese Commissie tot Nederlandse gemeenten: het gevoel van controle wint het van de logica van samenwerking.

## Naar een betere balans: wat moet er veranderen?

Dit is geen onoplosbaar probleem. Het vereist wel een fundamentele verschuiving in hoe overheden over open source denken. Van "wij bouwen open source" naar "wij dragen bij aan open source". Dat klinkt subtiel, maar het is een wereld van verschil.

### 1. Een echte weging, geen ritueel

Overheden moeten hun wegingsproces serieus nemen. Dat betekent: als je besluit om zelf te bouwen terwijl er een bestaand alternatief is, moet je **onderbouwen** waarom dat alternatief niet werkt. Niet met vage argumenten ("past niet bij onze architectuur"), maar met concrete, toetsbare criteria. En die onderbouwing moet openbaar zijn, zodat andere overheden ervan kunnen leren en het verhaal kunnen toetsen.

### 2. Bijdragen boven bouwen

De standaard moet zijn: bijdragen aan bestaande projecten, niet zelf bouwen. Investeer in upstream contributions. Zet developers in om Nextcloud, Collabora of Element beter te maken in plaats van een eigen variant te starten. Elke euro die je investeert in een bestaand project met een actieve community levert meer op dan een euro in een project dat je in je eentje moet onderhouden.

Dit betekent ook: accepteer dat je niet alles bepaalt. In een open source project heb je invloed, niet controle. Dat is voor overheden moeilijk te accepteren. Het alternatief is erger: volledige controle over een project dat niemand anders gebruikt.

### 3. Europese coördinatie die echt werkt

De trilaterale samenwerking tussen Duitsland, Frankrijk en Nederland is een begin.[^16] De European Summit on Digital Sovereignty in november 2025, met keynotes van Merz en Macron, was veelbelovend. Zolang Tchap niet met Element praat terwijl beide op Matrix draaien, is het symboolpolitiek.

Interoperabiliteit moet geen ambitie zijn. Het moet een eis zijn. Een harde eis. In contracten, in subsidievoorwaarden, in beleidskaders. Als je EU-subsidie krijgt voor een soeverein digitaal project, dan moet dat project _praten_ met de rest van Europa. Punt.

### 4. Van "Public Code" naar "Public Functionality"

Stop met je te verschuilen achter het publiceren van code. Richt je op het leveren van herbruikbare functionaliteit: gedocumenteerd, getest, met API's, met een community die bijdragen welkom heet. Code op GitHub zonder documentatie en zonder community is geen open source. Het is een dumpplaats. En daar hebben we er genoeg van.

### 5. Vibe coding governance

Overheden moeten beleid ontwikkelen voor AI-gegenereerde code. Dat betekent niet: AI verbieden, dat zou contraproductief zijn. Het betekent wel: kwaliteitscontroles, security reviews, en het besef dat "snel gebouwd" niet hetzelfde is als "goed gebouwd".

Een simpele regel zou al helpen: voordat je een nieuw project start met AI-tools, moet je aantonen dat je hebt onderzocht of er een bestaand open source project is waar je aan kunt bijdragen. Een halve dag onderzoek. Dat kan maanden aan duplicatie voorkomen.

## De lakmoesproef: hoe scoren ze op hun eigen motivaties?

Laten we eerlijk zijn. De motivaties voor open source bij de overheid zijn helder. Hoe scoren OpenDesk en La Suite als we ze toetsen aan die motivaties?

| Motivatie                        | OpenDesk (Duitsland)                                         | La Suite (Frankrijk)                                         |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Soevereiniteit**               | ✅ Volledige controle, geen Foreign Tech                     | ✅ Volledige controle, geen Foreign Tech                     |
| **Veiligheid**                   | ✅ Mature projecten, grote communities, actief onderhoud     | ⚠️ Jonge projecten, 1-2 developers, beperkte review          |
| **Democratische verantwoording** | ✅ Open, grote community die meekijkt                        | ⚠️ Open code, maar nauwelijks externe reviewers              |
| **Innovatie & samenwerking**     | ✅ Bouwt voort op ecosysteem, app stores, externe bijdragen  | ❌ Eiland, custom integratie vereist, geen extern ecosysteem |
| **Kostenreductie**               | ✅ Deelt ontwikkelkosten met mondiale community              | ❌ Betaalt alles zelf: €23M voor minder functionaliteit      |
| **Vendor diversiteit**           | ✅ Elk component vervangbaar, meerdere leveranciers mogelijk | ⚠️ Afhankelijk van DINUM als enige ontwikkelpartij           |
| **Publieke functionaliteit**     | ✅ Herbruikbaar door andere landen en organisaties           | ❌ Custom, niet herbruikbaar zonder integratie-werk          |
| **Interoperabiliteit**           | ✅ Open standaarden, communiceert met andere installaties    | ❌ Tchap praat niet met Element ondanks zelfde protocol      |

Zes van de acht motivaties scoort La Suite slechter dan OpenDesk. Alleen op soevereiniteit, het vermijden van Foreign Tech, scoren ze gelijk. En dat is ironisch, want soevereiniteit is juist het argument dat Frankrijk gebruikt om de hele aanpak te rechtvaardigen. Veiligheid, democratie, innovatie, kosten, diversiteit, publieke functionaliteit, interoperabiliteit: op al deze criteria levert zelf bouwen een slechter resultaat dan aansluiten bij bestaande projecten.

### Teruggeven aan de markt

En dat verschil vertaalt zich direct naar de markt. OpenDesk kun je vandaag al afnemen bij meerdere commerciële partijen: B1 Systems als general contractor, STACKIT voor cloud hosting, Bechtle, DACHS IT, GECKO en Medialine als managed service providers.[^19] In Nederland biedt ProcoliX managed Nextcloud, The Good Cloud privacy-first hosting, en office.eu een compleet Europees alternatief voor Microsoft 365.[^20] KPN en Centric tekenden samenwerkingsovereenkomsten met Nextcloud voor soevereine werkplekken bij vitale Nederlandse organisaties.[^21] Je hebt als overheid, inwoner of ondernemer echte keuze bij wie je je soevereine werkplek plus eventuele apps afneemt. Dat is logisch: het bestaande ecosysteem van leveranciers kan dit product direct uitleveren.

La Suite is bij mijn weten momenteel alleen commercieel verkrijgbaar via Mosa Cloud en de coöperatie LaSuite.coop.[^22] En zelfs dan krijg je een werkplek, geen ecosysteem van apps.

## De keuze

De overheid hoeft niet alles zelf te bouwen om soeverein te zijn. Sterker nog: door alles zelf te bouwen, ondermijn je precies de open source ecosystemen waarvan je afhankelijk wilt zijn.

Duitsland laat zien dat het anders kan. OpenDesk bewijst dat je een soevereine werkplek kunt bouwen door bestaande open source tools te integreren, in plaats van ze te vervangen. Dat versterkt het ecosysteem, verlaagt de kosten, en creëert een platform waar anderen op kunnen voortbouwen. Elke app in de Nextcloud app store maakt OpenDesk waardevoller zonder dat ZenDiS er een cent aan uitgeeft.

Frankrijk laat zien wat er misgaat als je dat niet doet. La Suite is technisch indrukwekkend, maar het is een eiland. Een duur, gepolijst eiland dat geld en aandacht wegtrekt bij de projecten die het Europese open source ecosysteem daadwerkelijk dragen. Een eiland waar je niet tegenaan kunt bouwen zonder custom integratie-werk.

Dit symboliseert de keuze waar we in Nederland en binnen het programma Common Ground ook voor staan. Gaan we het ecosysteem versterken of verzwakken. Samenwerken of dupliceren. Bijdragen of bouwen.

**Begin met bijdragen. Stop met bouwen. De rest volgt vanzelf.**

## Gerelateerd

- [Waarom Open Source voor de Overheid?](/blog/open-source-voor-beleidsmakers) — Zeven redenen waarom overheden open source omarmen
- [Vibe Coding en de Toekomst van Open Source](/blog/vibe-coding-open-source) — Hoe vibe coding het open source ecosysteem ondermijnt
- [Open source lost jouw lock-in niet op](/blog/open-source-lost-jouw-lock-in-niet-op) — Waarom open source alleen niet genoeg is om vendor lock-in op te lossen
- [Van Public Code naar Public Functionality](/blog/open-source-mkb-public-functionality) — Hoe overheidsinvesteringen in open source het MKB ten goede komen
- [Volwassenheid van Open Source](/blog/volwassenheid-open-source-overheid) — Het volwassenheidsargument tegen open source ontkracht
- [Coalitieakkoord 2026: Mooie Woorden of Echte Transitie?](/blog/coalitieakkoord-2026-digitale-soevereiniteit-analyse) — Analyse van de digitale ambities in het coalitieakkoord
- [Het Einde van Pax Americana](/blog/einde-pax-americana-digitale-soevereiniteit) — Waarom digitale soevereiniteit niet langer optioneel is

---

[^1]: **OpenDesk** - [Open-source momentum in de publieke sector](https://www.opendesk.eu/en/blog/open-source-migration-public-sector) — Het ICC stapte in oktober 2025 over naar OpenDesk nadat Amerikaanse sancties de aanklager afsloten van Microsoft-diensten.

[^2]: **NIST** - [Software Security in Supply Chains](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-security-supply-chains-open) — De EU Cyber Resilience Act (CRA) eist SBOM's, signed commits en continue monitoring. Bij mature open source projecten zijn deze al standaard.

[^3]: **EUR-Lex** - [Interoperable Europe Act (EU 2024/903)](https://eur-lex.europa.eu/EN/legal-content/summary/interoperable-europe-act.html) — De Interoperable Europe Act verplicht publieke organisaties om interoperabiliteitsoplossingen te delen en hergebruiken.

[^4]: **Rijksoverheid** - [Overwegingen bij Open tenzij](https://www.rijksoverheid.nl/documenten/publicaties/2020/04/17/overwegingen-bij-open-tenzij-en-aanpak-open-source) — Het Nederlandse "Open, tenzij" principe: overheidssoftware moet open source zijn tenzij er gegronde redenen zijn om dat niet te doen.

[^5]: **Interoperable Europe Portal** - [EU Open Source Solutions Catalogue](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor) — Gelanceerd maart 2025, met 640+ oplossingen. Expliciet ontworpen om overheden bestaande interoperabele oplossingen te laten vinden in plaats van zelf te bouwen.

[^6]: **ZenDiS** - [OpenDesk: de soevereine werkplek](https://www.opendesk.eu/en) — Het Duitse Zentrum für Digitale Souveränität, een publiek gefinancierde GmbH die OpenDesk ontwikkelt als open source alternatief voor Microsoft-werkplekken.

[^7]: **OpenProject** - [The rise of the Sovereign Workplace](https://www.openproject.org/blog/sovereign-workplace/) — De architectuurprincipes van OpenDesk: modulariteit, interoperabiliteit en uitwisselbaarheid als kernwaarden.

[^8]: **OpenProject** - [Digital sovereignty in Government: Germany's openDesk](https://www.openproject.org/blog/digital-sovereignty-government-germany-opendesk/) — Overzicht van OpenDesk-adopties: Bundeswehr (zevenjarig contract), Robert Koch-instituut (7.000 gebruikers), ICC, Deutsche Rentenversicherung en Bundesagentur für Arbeit.

[^9]: **La Suite Numérique** - [Suite numérique de l'État](https://lasuite.numerique.gouv.fr/en) — Het Franse DINUM-project voor een soevereine digitale werkplek. 500.000+ gebruikers verspreid over 15 ministeries. Custom-built producten op open source bouwstenen.

[^10]: **Clubic** - [L'Europe n'arrive pas à accorder ses violons sur la bureautique souveraine](https://www.clubic.com/actualite-603871-office-eu-lasuite-opendesk-la-france-et-le-reste-de-l-europe-n-arrivent-pas-a-accorder-leurs-violons-sur-la-bureautique-souveraine.html) — Analyse van de interoperabiliteitsproblemen tussen Europese soevereine werkplekken: Tchap en Element communiceren niet met elkaar ondanks het gedeelde Matrix-protocol.

[^11]: **OpenDesk** - [Strategic partnerships for digital autonomy](https://www.opendesk.eu/en/blog/strategic-partnerships-for-digital-autonomy) — Over de trilaterale samenwerking tussen Duitsland, Frankrijk en Nederland, inclusief de "100-day challenges" die in mei 2024 van start gingen.

[^12]: **Heise** - [France replaces MS Teams and Zoom](https://www.heise.de/en/news/France-replaces-MS-Teams-and-Zoom-with-its-own-video-conferencing-software-11155347.html) — De Franse aanpak inclusief de EUR 23M investering in drie concurrerende private consortiums (Wimi, Interstis, Jamespot) onder het France 2030-programma.

[^13]: **MinBZK** - [MijnBureau op GitHub](https://github.com/MinBZK/mijn-bureau-infra) — Het Nederlandse Ministerie van BZK's initiatief voor een soevereine digitale werkplek, beschikbaar als open source op GitHub.

[^14]: **VNG** - [Common Ground: zonder samenwerking redden we het niet](https://vng.nl/artikelen/common-ground-zonder-samenwerking-redden-we-het-niet) — VNG's analyse van de uitdagingen rondom Common Ground, waaronder het gebrek aan brede adoptie en de noodzaak van betere samenwerking.

[^15]: **Forgejo / Hacker News** - [Meeting notes between Forgejo and the Dutch government](https://news.ycombinator.com/item?id=45929247) — Het Nederlandse OSPO koos bewust voor Forgejo als basis voor het overheids-codeplatform. Gina Plat, de kwartiermaker, gaf aan dat de overheid niet alleen wil nemen, maar ook middelen wil inbrengen aan het project.

[^16]: **Element** - [Element at the Summit on European Digital Sovereignty](https://element.io/blog/element-at-the-summit-on-european-digital-sovereignty/) — De eerste European Summit on Digital Sovereignty in Berlijn (november 2025), met keynotes van Merz en Macron over Europese digitale onafhankelijkheid.

[^17]: **OpenTalk** - [OpenTalk: open source videoconferencing onder EUPL](https://opentalk.eu/en/news/opentalk-now-open-source-under-eu-public-licence) — Berlijnse enterprise-grade videoconferencing oplossing, ontwikkeld door Heinlein Support GmbH. Gepubliceerd onder de European Union Public License (EUPL). Ingezet door de deelstaat Thüringen en Deense gemeenten als soeverein alternatief voor Zoom en Teams.

[^18]: **Open-Xchange** - [OX App Suite](https://www.open-xchange.com/) — 's Werelds grootste onafhankelijke e-mailplatform met 220+ miljoen mailboxen. Gebruikt door telecomproviders als 1&1/IONOS, Vodafone en KPN. Opgericht in 2005, 270+ medewerkers, AGPL-3.0 licentie. DINUM gebruikt OX App Suite als webmail voor de ministeries.

[^19]: **ZenDiS** - [Vertriebspartnerprogramm](https://www.zendis.de/en/newsroom/press/vertriebspartnerprogramm-news) en [OpenDesk operating models](https://www.opendesk.eu/en/operating-models) — B1 Systems won de EU-aanbesteding als general contractor, STACKIT levert BSI C5-gecertificeerde cloud hosting. Bechtle, DACHS IT, GECKO en Medialine bieden managed services.

[^20]: **Nextcloud** - [ProcoliX Platinum Partner](https://nextcloud.com/blog/press_releases/nextcloud-procolix-partner-netherlands/) en [office.eu](https://office.eu) — ProcoliX is Nextcloud Platinum Partner met hosting vanuit Nederlandse datacenters. office.eu lanceerde maart 2026 als volledig Europees alternatief voor Microsoft 365, gebouwd op Nextcloud en Collabora.

[^21]: **Nextcloud** - [Powering digital sovereignty in the Netherlands](https://nextcloud.com/blog/powering-digital-sovereignty-in-the-netherlands-nextcloud-expands-dutch-ecosystem/) — KPN en Centric tekenden samenwerkingsovereenkomsten met Nextcloud op Enterprise Day Den Haag (december 2025). Ook Bossers & Cnossen, Shock Media en SURF zijn onderdeel van het groeiende Nederlandse ecosysteem.

[^22]: **Mosa Cloud** - [La Suite als managed service](https://mosa.cloud/) en **LaSuite.coop** - [coöperatie voor La Suite](https://lasuite.coop/a-propos/) — Mosa Cloud (Maastricht) levert La Suite als volledig beheerde werkplek. LaSuite.coop is een Franse coöperatie (SCIC) die La Suite-componenten aanbiedt aan verenigingen en instellingen.
