---
slug: overheid-open-source-lastige-liefde
title: 'Overheid en Open Source — Een Lastige Liefde'
authors: [ruben]
tags:
  [personal, open-source, soevereiniteit, overheid, vibe-coding, common-ground]
description: 'De overheid omarmt open source, maar bouwt liever zelf dan dat ze aansluit bij bestaande projecten. Vibe coding maakt dat probleem alleen maar erger.'
---

# Overheid en Open Source — Een Lastige Liefde

De overheid houdt van open source — zolang ze het zelf mogen bouwen.

Dat klinkt cynisch, maar ik meen het. Ik zie het steeds weer gebeuren. In vergaderingen, in aanbestedingen, in Europese samenwerkingsverbanden. Overheden die open source omarmen als de toekomst, die soevereiniteit en samenwerking prediken, en die vervolgens hun eigen versie bouwen van iets dat al bestaat. Met eigen standaarden. Eigen integraties. Eigen eilandjes. Het is een beetje alsof je Narcissus Product Owner maakt.

Het resultaat? Een Europees landschap van open source projecten die niet met elkaar praten, geld dat verdampt aan duplicatie, en bestaande communities die verzwakken terwijl overheden hun eigen weggaan.

Laten we eerlijk zijn: het probleem is niet dat overheden open source willen. Het probleem is _hoe_ ze het doen.

<!--truncate-->

## Waarom Wil de Overheid Open Source?

Voordat ik de kritiek induik, is het fair om te erkennen dat de motivatie achter open source bij overheden oprecht is. Er zijn meer redenen dan je zou denken — en ze zijn allemaal valide.

### Soevereiniteit — De Grote Drijfveer

Dit is de motor achter alles. De geopolitieke werkelijkheid van de afgelopen jaren — handelsoorlogen, de Cloud Act, sancties — heeft pijnlijk duidelijk gemaakt hoe afhankelijk Europa is van Foreign Tech. Het meest sprekende voorbeeld: het Internationaal Strafhof (ICC) dat in oktober 2025 overstapte naar OpenDesk nadat de aanklager door Amerikaanse sancties werd afgesloten van zijn Microsoft-mail.[^1] Als je e-mail kan worden afgepakt door een buitenlandse overheid, heb je een soevereiniteitsprobleem. Ik schreef hier eerder uitgebreid over in mijn post over [het einde van Pax Americana](/blog/einde-pax-americana-digitale-soevereiniteit).

Open source biedt de belofte van controle. Controle over je data, je systemen, je digitale infrastructuur. Geen kill switch in handen van een ander land. Dat resoneerde enorm na het ICC-incident — ik merkte het in gesprekken met gemeenten, met ministeries, met Europese collega's. Iedereen had het erover.

### Veiligheid en Controleerbaarheid

Open source code kun je inspecteren. Je kunt zien wat het doet, hoe het werkt, welke data het verwerkt. Bij proprietary software vertrouw je op de leverancier. Bij open source vertrouw je op de wiskundige waarheid van de broncode.

Dat is niet alleen theorie. De EU Cyber Resilience Act (CRA) eist Software Bills of Materials (SBOM's), signed commits en continue monitoring — dingen die bij mature open source projecten al standaard zijn.[^2] De OpenSSF (Open Source Security Foundation) biedt frameworks als SLSA en Sigstore die gevestigde projecten al implementeren. Probeer dat maar eens te vragen aan je proprietary leverancier.

Maar — en hier zit de spanning — die beveiligingsvoordelen gelden voor _bestaande_, _mature_ open source projecten met actieve communities. Niet voor de snel-in-elkaar-gehackte overheidsprojectjes die na drie jaar stilletjes verweesd achterblijven op een vergeten GitLab-instantie.

### Democratische Verantwoording

Er is een fundamenteel democratisch argument: burgers hebben het recht om te weten hoe overheidssoftware werkt. Niet omdat iedere burger broncode gaat lezen — laten we realistisch zijn. Maar omdat onafhankelijke auditors, journalisten, onderzoekers en civic tech-organisaties het _kunnen_ controleren. Die transparantie is essentieel in een democratie.

Platforms als Decidim (Barcelona) en DemocracyOS laten zien dat open source niet alleen een technische keuze is — het is een democratische keuze.[^3]

### Innovatie en Samenwerking

Open source belooft dat je niet alles alleen hoeft te doen. Code hergebruiken, community-input krijgen, samen sneller innoveren. Voor bureaucratische organisaties die van nature traag zijn, klinkt dat als een droom.

En het _kan_ ook werken. Ik heb het zien werken. Als je het goed doet — als je echt samenwerkt met bestaande communities, als je bijdraagt in plaats van forkt — dan is open source een ongelooflijke force multiplier. Het probleem is dat "goed doen" discipline vereist die overheden zelden opbrengen.

### Kostenreductie

Een studie van de London School of Economics voor het UK Cabinet Office toonde significante besparingen door open source-adoptie.[^4] De Spaanse regio Andalusië bespaart miljoenen per jaar met 250.000 ambtenaren op open source. En de Europese Commissie concludeerde dat "in bijna alle gevallen een transitie naar open source op lange termijn besparingen oplevert."

Maar — en dit is cruciaal — die besparingen gelden als je _aansluit_ bij bestaande projecten. Als je zelf bouwt, betaal je het volle pond aan ontwikkeling, onderhoud en beveiliging. Met als bonus dat je het in je eentje moet doen.

### Vendor Diversiteit en Marktwerking

Overheidsinkopers besteden naar schatting 14% van het EU-BBP via aanbestedingen.[^5] Open source is een wapen tegen monopolievorming: als de code open is, kan elke competente leverancier support, hosting of doorontwikkeling bieden. Dat creëert echte marktwerking in plaats van de schijnkeuze tussen twee proprietary aanbieders.

### Publiek Geld, Publieke Code... of Publieke Functionaliteit?

De FSFE-campagne "Public Money? Public Code!" heeft inmiddels meer dan 31.000 handtekeningen en brede politieke steun.[^6] Het idee is simpel: wat met publiek geld wordt ontwikkeld, moet publiek beschikbaar zijn. Zwitserland heeft het zelfs in wetgeving vastgelegd. In Duitsland is het inmiddels politiek onomstreden — alle democratische fracties in de Bundestag onderschrijven het principe.[^7]

Maar ik denk dat het mantra een update verdient. "Public money, public code" is niet genoeg. Het zou moeten zijn: **public money, public functionality**. Het gaat niet alleen om code op GitHub gooien. Het gaat om herbruikbare functionaliteit creëren die anderen daadwerkelijk kunnen inzetten. Code zonder documentatie, zonder community, zonder interoperabiliteit is geen publiek goed — het is een digitaal graf.

Ik heb hier eerder over geschreven in mijn post over [open source en het MKB](/blog/open-source-mkb-public-functionality). En het Interoperable Europe Act (EU 2024/903) codificeert dit in wetgeving: publieke organisaties moeten interoperabiliteitsoplossingen _delen en hergebruiken_, niet opnieuw bouwen.[^8]

En daar begint het probleem. Want ondanks al deze nobele motivaties — soevereiniteit, veiligheid, democratie, kosten, marktwerking — zien we in de praktijk iets heel anders.

## Zelf Bouwen vs. Aansluiten — Het Eeuwige Dilemma

Bijna elke overheid heeft een officieel wegingsproces. Voordat je iets bouwt, check je: kan het met bestaande software? Is er een open source alternatief? Kan ik aansluiten bij een bestaand project? In Nederland kennen we "Open, tenzij" — de richtlijn dat overheidssoftware open source moet zijn tenzij er gegronde redenen zijn om dat niet te doen.[^9]

In theorie.

In de praktijk valt die weging bijna altijd uit in het voordeel van zelf bouwen. Ik heb het tientallen keren zien gebeuren, en de redenen zijn deprimerend voorspelbaar:

- **NIH-syndroom** — Not Invented Here. "Dat project past niet precies bij onze situatie." Natuurlijk niet. Geen enkel project past ooit precies. Maar bijdragen aan een project dat voor 80% past is bijna altijd slimmer dan 100% zelf bouwen. Toch kiest men keer op keer voor dat laatste.
- **Politieke druk** — Nationale soevereiniteit vertaalt zich naar "wij bouwen het zelf". Niet omdat het beter is, maar omdat het lekker staat in een beleidsbrief. "Minister opent eigen digitale werkplek" klinkt beter dan "Minister sluit aan bij Duits project".
- **Onwetendheid** — Simpelweg niet weten wat er al bestaat. Het open source landschap is groot en onoverzichtelijk. Het EU Open Source Solutions Catalogue (gelanceerd maart 2025, 640+ oplossingen) is een stap in de goede richting, maar wie kent het?[^10]
- **Budgetten beschermen** — Een project dat aansluit bij bestaande software kost minder. En minder budget betekent minder invloed. Minder invloed betekent minder bestaansrecht voor de afdeling. Ik heb het letterlijk horen zeggen in vergaderingen: "Als we aansluiten bij project X, wat doen wij dan nog?" Perverse prikkels die bouwen belonen en samenwerken bestraffen.
- **De illusie van controle** — Eigen code is code die je volledig beheerst. Tenminste, dat is de illusie. In werkelijkheid bouw je een systeem dat je in je eentje moet onderhouden, beveiligen en doorontwikkelen. Maar het _voelt_ als controle, en in bureaucratieën is dat gevoel soms belangrijker dan de werkelijkheid.

Het resultaat is overal hetzelfde: overheden die zeggen dat ze samenwerken, maar in werkelijkheid eilandjes bouwen.

Het is alsof je op een feest bent waar iemand in de hoek alleen met zichzelf staat te praten. Hij drinkt wel de drank op, hij gebruikt het terras, hij profiteert van de muziek — maar hij praat met niemand. Hij luistert naar niemand. Hij draagt niks bij aan het feest. En aan het einde van de avond is hij ervan overtuigd dat hij het meest intellectuele gesprek van de avond heeft gevoerd. Open source als feest, overheden als die gast in de hoek.

En dat brengt me bij het meest veelzeggende voorbeeld van dit hele probleem.

## Case Study: OpenDesk vs. La Suite Numérique

Nergens is dit patroon zo zichtbaar als in het Europese speelveld rondom soevereine werkplekken. Duitsland en Frankrijk — twee landen die allebei digitale soevereiniteit nastreven, allebei investeren in open source, maar het fundamenteel anders aanpakken. Het verschil zegt alles over wat er misgaat.

### Duitsland: OpenDesk — Bouwen mét het Ecosysteem

OpenDesk is het Duitse antwoord op de Microsoft-afhankelijkheid.[^11] Gebouwd door ZenDiS (Zentrum für Digitale Souveränität) met een budget van 45 miljoen euro. Het uitgangspunt: **best of breed**. Neem bestaande, bewezen open source tools en integreer ze tot een samenhangend geheel.

Het resultaat is een suite die bestaat uit componenten die je kent:

- **Nextcloud** voor opslag en samenwerking
- **Collabora Online** voor documentbewerking
- **Element** (Matrix-protocol) voor chat
- **OpenTalk** voor videoconferencing — een Berlijnse open source oplossing onder EUPL-licentie, al ingezet door de deelstaat Thüringen[^29]
- **OpenProject** voor projectmanagement
- **XWiki** voor kennisdeling
- **Univention** voor identity en access management

De architectuurprincipes zijn helder: modulariteit, interoperabiliteit, uitwisselbaarheid.[^12] Elk component kan worden vervangen zonder het geheel te breken. Open standaarden — CalDAV, CardDAV, IMAP, WebDAV, Matrix — vormen de lijm.

En het werkt. De Bundeswehr tekende een zevenjarig contract. Het Robert Koch-instituut rolde het uit voor 7.000 gebruikers. Het ICC stapte over na de Microsoft-sancties. In januari 2026 begonnen de Deutsche Rentenversicherung en de Bundesagentur für Arbeit met pilots. Het doel: meer dan 160.000 licenties bij Duitse overheidsinstellingen.[^13]

Maar het mooie van OpenDesk zit niet in de suite zelf. Het zit in het ecosysteem.

Nextcloud heeft een app store. Dat betekent dat je volledige applicaties kunt bouwen op de OpenDesk-datalaag. Elke ontwikkelaar, elk bedrijf, elke overheid kan aansluiten zonder toestemming te vragen. Je bouwt een app voor Nextcloud, en die werkt automatisch in elke OpenDesk-installatie. Het platform groeit door bijdragen van buitenaf — precies zoals open source hoort te werken.

**Dit is het verschil tussen een platform en een eiland.**

### Frankrijk: La Suite Numérique — Bouwen tégen het Ecosysteem

En dan Frankrijk.

La Suite Numérique is het Franse equivalent, gebouwd door DINUM met een budget van 23 miljoen euro.[^14] Op papier klinkt het vergelijkbaar: soevereine werkplek, open source, 500.000+ ambtenaren. Maar de aanpak is fundamenteel anders.

Waar Duitsland bestaande projecten integreert, bouwt Frankrijk alles zelf:

- **Docs**: custom frontend (React/Next.js) op BlockNote en Y.js — in plaats van Collabora of een ander bestaand project dat al jarenlang door duizenden organisaties wordt gebruikt
- **Visio**: custom videoconferencing op LiveKit — in plaats van OpenTalk, een Europees alternatief onder EUPL-licentie dat al wordt ingezet door Duitse deelstaten en Deense gemeenten
- **Tchap**: eigen Matrix-client — in plaats van Element, de standaard Matrix-client die ook Duitsland gebruikt
- **AI-assistent**: eigen integratie met Mistral AI — in plaats van aansluiting bij bestaande open source AI-frameworks

Ja, de _bouwstenen_ zijn open source. Maar de producten die erop gebouwd worden zijn custom. En dat verschil is het verschil tussen bijdragen aan het ecosysteem en het ecosysteem ondermijnen.

| Aspect                 | OpenDesk (Duitsland)                                      | La Suite (Frankrijk)                                      |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Filosofie**          | Best of breed: integreer bestaande tools                  | Custom-built op open source bouwstenen                    |
| **Componenten**        | Nextcloud, Collabora, Element, OpenTalk, OpenProject      | Eigen Docs, eigen Visio, eigen Tchap                      |
| **Ecosysteem**         | Open — app stores, standaard-API's, externe bijdragen     | Gesloten — custom integraties vereist                     |
| **Budget**             | EUR 45M                                                   | EUR 23M                                                   |
| **Aanbouwbaarheid**    | Elke ontwikkelaar kan apps bouwen via Nextcloud app store | Alles wat je wilt koppelen vereist custom integratie-werk |
| **Interoperabiliteit** | Standaard open protocollen                                | Eigen implementaties van open protocollen                 |

Het probleem met La Suite is niet dat het slecht is gebouwd. Het is technisch indrukwekkend.

**Het probleem is dat het een eiland is.**

### Het Eiland-Effect

Wil je iets bouwen dat aansluit op La Suite? Dan ben je custom integratie-werk aan het doen. Er is geen app store. Er is geen plug-in ecosysteem. Er is geen manier om een applicatie te bouwen op de La Suite datalaag zoals je dat bij Nextcloud in OpenDesk wél kunt. Alles wat je tegen La Suite wilt aanbouwen is maatwerk.

Vergelijk dat eens met Nextcloud. Een developer bouwt een app. Publiceert die in de app store. En ineens is die beschikbaar voor elke OpenDesk-installatie in Duitsland, elke Nextcloud-installatie wereldwijd. Dat is exponentieel bereik met lineaire inspanning. Bij La Suite? Eén integratie, voor één platform, in één land.

Dat is geen soevereiniteit. **Dat is digitale isolatie verpakt als nationale trots.**

### De Schade aan het Ecosysteem

La Suite trekt geld en aandacht weg bij goed lopende open source projecten. Denk er eens over na: waarom zou een Franse overheidsinstelling investeren in Collabora als DINUM een eigen documentbewerker bouwt? Waarom bijdragen aan OpenTalk als er een nationaal Visio-project is? Waarom Element verbeteren als Tchap de standaard wordt?

Het resultaat: bestaande open source projecten verliezen bijdragen, verliezen gebruikers, verliezen momentum — terwijl er een Frans alternatief naast komt te staan dat niet met de rest van Europa communiceert. De ironie is perfect: in naam van open source en soevereiniteit creëert Frankrijk exact de vendor lock-in die het wil bestrijden — alleen is de vendor nu de eigen overheid.

En het zijn niet alleen de directe bijdragen die wegvallen. Het gaat ook om het signaal. Als een grote Europese overheid besluit om Collabora te negeren en zelf iets te bouwen, dan zegt dat tegen de markt: "Dit project is niet goed genoeg." Dat ondermijnt het vertrouwen van andere potentiële gebruikers. Het trekt talent weg. Het verdeelt de community.

Weet je nog die gast op het feest die alleen met zichzelf staat te praten? La Suite is die gast. Het drinkt de drank op — het gebruikt de open source bouwstenen, de protocollen, de standaarden. Het profiteert van het feest. Maar het praat met niemand. Het luistert naar niemand. Het draagt niks bij. En aan het einde van de avond is het ervan overtuigd dat het de beste werkplek van Europa heeft gebouwd. Maar het feest — het Europese open source ecosysteem — is er niks mee opgeschoten.

### De Interoperabiliteits-Farce

En het wordt nog absurder. Tchap en Element zijn allebei gebouwd op het Matrix-protocol. Ze spreken letterlijk dezelfde taal. Maar een Franse ambtenaar op Tchap kan niet communiceren met een Duitse collega op Element.[^15] Twee landen die samenwerken aan digitale soevereiniteit — er is zelfs een trilaterale overeenkomst tussen Frankrijk, Duitsland en Nederland[^16] — maar wiens chat-systemen niet met elkaar praten.

Je kunt het niet verzinnen. Het is alsof twee buurlanden allebei een telefoonnetwerk bouwen, allebei op dezelfde technologie, maar weigeren om hun centrales met elkaar te verbinden. Technisch triviaal. Politiek blijkbaar onmogelijk.

Frankrijk investeerde ook nog eens 23 miljoen euro in drie concurrerende private consortiums onder het France 2030-programma[^17] — nog meer fragmentatie, nog meer eilandjes, nog meer geld naar projecten die niet met de rest van Europa communiceren.

### En Nederland?

Nederland zit er tussenin met MijnBureau, een initiatief van het Ministerie van BZK dat elementen van beide benaderingen combineert.[^18] En op lokaal niveau zien we hetzelfde patroon bij Common Ground: officieel een weging, maar in de praktijk bouwen gemeenten regelmatig eigen varianten van dingen die al bestaan. Na acht jaar is het project nog steeds zoekende naar breed gedragen hergebruik.[^19]

Ik zeg dit niet om Common Ground af te branden — het uitgangspunt is goed en er zijn waardevolle resultaten geboekt. Maar het illustreert het bredere patroon: zelfs binnen één land, zelfs binnen een expliciet samenwerkingsverband, is de neiging om zelf te bouwen sterker dan de discipline om aan te sluiten.

Het Nederlandse OSPO (Open Source Program Office) bij BZK laat gelukkig zien dat het ook anders kan. Zij kozen bewust voor Forgejo als basis voor het overheids-codeplatform — niet zelf bouwen, maar aansluiten en bijdragen.[^20] Boris van Hoytema, de kwartiermaker, zei expliciet tegen de Forgejo-community dat ze "niet alleen willen nemen, maar ook middelen willen inbrengen." Dat is precies de houding die nodig is.

## Enter Vibe Coding — Het Probleem op Steroïden

Alsof het niet genoeg was dat overheden institutioneel de neiging hebben om zelf te bouwen, is er nu een technologie die dat nog véél makkelijker maakt. En dat maakt het probleem niet alleen groter — het maakt het exponentieel gevaarlijker.

In februari 2025 bedacht Andrej Karpathy — medeoprichter van OpenAI, voormalig hoofd AI bij Tesla — de term "vibe coding".[^21] Zijn beschrijving: je geeft je volledig over aan de AI, klikt overal "Accept All", leest geen diffs, en praat tegen je editor alsof het een collega is. Code? Welke code? Je vibet. De post ging viral — meer dan 4,5 miljoen views — en Collins Dictionary maakte het Woord van het Jaar 2025.

Karpathy noemde het zelf een aanpak voor "throwaway weekend projects". Maar de wereld nam het serieuzer dan hij bedoelde. Y Combinator rapporteerde dat 25% van de startups in hun Winter 2025-batch codebases had die voor 95% door AI waren gegenereerd.

En ik snap het. Ik gebruik zelf dagelijks AI bij het ontwikkelen. Het is verleidelijk. Het is snel. Het voelt productief. Maar er is een verschil tussen AI als hulpmiddel bij het bijdragen aan bestaande projecten, en AI als excuus om alles zelf te bouwen.

### Het NIH-Syndroom op Steroïden

Vibe coding verlaagt de drempel om zelf te bouwen tot nul. Letterlijk nul. Een ambtenaar met een prompt en een AI-tool kan in een middag iets in elkaar klikken dat er op het eerste gezicht professioneel uitziet. Waarom zou je dan nog aansluiten bij een bestaand open source project? Waarom door documentatie worstelen? Waarom je conformeren aan andermans architectuur als je het "even snel" kunt bouwen?

Dit is het NIH-syndroom, maar dan niet meer op organisatieniveau — op _individueel_ niveau. Niet meer een organisatie die besluit om zelf te bouwen, maar een developer of team dat denkt: "Dit kan ik sneller zelf met Claude of Copilot." De drempel is weg. De discipline om eerst te zoeken naar wat er al bestaat verdwijnt als sneeuw voor de zon.

**Dat is alsof je een rokende verslaafde een gratis aansteker geeft. Het probleem bestond al — maar je maakt het onweerstaanbaar.**

### De Schade aan Open Source

Het onderzoekspaper "Vibe Coding Kills Open Source" van onderzoekers aan de Central European University en de Universiteit van Bielefeld toont aan dat AI-assisted development de bijdragen aan bestaande open source projecten actief verzwakt.[^22] De logica is simpel: als je snel zelf kunt bouwen, waarom zou je dan bijdragen aan een project van iemand anders?

De gevolgen zijn al zichtbaar:

- **Daniel Stenberg** (maintainer van cURL) stopte zijn zes jaar oude bug bounty-programma omdat 20% van de inzendingen door AI was gegenereerd en nutteloos was.
- **Mitchell Hashimoto** (Ghostty) verbood AI-gegenereerde code compleet.
- **Steve Ruiz** (tldraw) sluit automatisch alle externe pull requests — de ruis is te groot om handmatig te filteren.[^23]

Zoals Xavier Portilla Edo (Voiceflow/Genkit core team) het formuleerde: 1 op de 10 AI-gegenereerde pull requests is legitiem. De andere negen verspillen de tijd van een maintainer.

De maintainers van de projecten waar overheden op bouwen, worden overspoeld door rommel. En als die maintainers afhaken — wat er al gebeurt — dan verzwakt de fundering waarop al die soevereine werkplekken staan. Dat is geen theorie. Dat is een tikkende tijdbom.

### Het Beveiligingsprobleem

En dan is er het beveiligingsaspect. Circa 45% van AI-gegenereerde code bevat OWASP-kwetsbaarheden.[^24] Een analyse van CodeRabbit toonde 2,74x meer security issues in AI-geschreven code. En een gerandomiseerde studie van METR vond dat ervaren ontwikkelaars met AI-tools feitelijk 19% **langzamer** werkten — ook al dachten ze zelf 20% sneller te zijn.[^25]

Laat dat even bezinken. Ontwikkelaars _denken_ dat ze sneller zijn. Maar ze zijn het niet. En de code die ze produceren is onveiliger.

Voor overheden die met burgerdata werken — BSN-nummers, medische gegevens, financiële informatie — is dit geen abstract risico. Een Zweeds bedrijf dat vibe coding-apps bouwde via het platform Lovable had 170 van de 1.645 gecreëerde apps met beveiligingsproblemen die persoonlijke data lekten.[^26]

Stel je voor dat dat een overheidsapplicatie was. Stel je voor dat het jouw BSN was.

Vibe coding produceert code die er professioneel uitziet maar fundamenteel onveilig kan zijn. **Het is alsof je een stagiair een bouwvergunning laat tekenen omdat het er netjes uitziet op papier.**

### De Tailwind-Waarschuwing

Er is nog een subtiel effect. Tailwind CSS — een van de populairste open source CSS-frameworks — zag zijn documentatie-verkeer met circa 40% dalen, ondanks groeiende populariteit.[^27] Waarom? Omdat AI-tools de vragen beantwoorden die gebruikers anders naar de docs zouden sturen.

Dat klinkt onschuldig, maar het is het niet. Voor veel open source projecten is de documentatie de enige manier waarop gebruikers commerciële producten en support ontdekken. Minder docs-verkeer betekent minder zichtbaarheid, minder conversie, minder financiering.

Vibe coding ondermijnt open source dus niet alleen door bijdragen te verminderen, maar ook door de verdienmodellen te slopen die projecten in leven houden. Het is een aanval op twee fronten.

## Waarom Blijven Overheden Dit Doen?

Het is makkelijk om te wijzen naar politici en bureaucraten, maar het probleem is structureler dan dat. Ik zie een aantal patronen die steeds terugkomen.

**Maatwerk als default.** Overheden zijn gewend aan maatwerk. Decennia van enterprise software hebben een cultuur gecreëerd waarin "onze situatie is uniek" het standaardargument is. En eerlijk: overheidsprocessen _zijn_ complex. De WMO verschilt per gemeente, de Awb heeft lokale varianten, elk gemeente heeft haar eigen historische IT-landschap. Maar complexe processen zijn geen excuus om standaardcomponenten te negeren. De 80/20 regel geldt ook hier: 80% van de functionaliteit is identiek. Het is die 20% maatwerk waarvoor je de 100% zelf bouwt.

**Budgetten als bestaansrecht.** In de overheidswereld geldt: wie budget heeft, bestaat. Een team dat aansluit bij een bestaand project verbruikt minder budget. Minder budget betekent minder mensen. Minder mensen betekent minder invloed. De prikkel is om te bouwen, niet om aan te sluiten.

**Gebrek aan overzicht.** Het open source landschap is enorm. Zonder actief scouting-mechanisme weten overheden simpelweg niet wat er al bestaat. En als je niet weet dat er een oplossing is, bouw je je eigen.

**Nationale ijdelheid.** Laten we eerlijk zijn: sommige landen bouwen liever een middelmatig eigen product dan een excellent buitenlands project te adopteren. Soevereiniteit is een valide argument. Protectionisme vermomd als soevereiniteit is dat niet. Als je een eigen Docs-applicatie bouwt terwijl Collabora prima werkt, is dat geen soevereiniteit — **dat is nationale ijdelheid die het hele Europese open source ecosysteem verzwakt.**

**Het patroon schaalt.** Van de Europese Commissie tot Nederlandse gemeenten — overal zie je hetzelfde: een voorkeur voor eigen bouwen boven samenwerken. De dynamiek bij een gemeente die een eigen formulierenmodule bouwt is identiek aan die van een land dat een eigen soevereine werkplek bouwt: het gevoel van controle wint het van de logica van samenwerking.

## Naar een Betere Balans — Wat Moet Er Veranderen?

Dit is geen onoplosbaar probleem. Maar het vereist een fundamentele verschuiving in hoe overheden over open source denken. Van "wij bouwen open source" naar "wij dragen bij aan open source". Dat klinkt subtiel, maar het is een wereld van verschil.

### 1. Een Echte Weging, Geen Ritueel

Overheden moeten hun wegingsproces serieus nemen. Dat betekent: als je besluit om zelf te bouwen terwijl er een bestaand alternatief is, moet je **onderbouwen** waarom dat alternatief niet werkt. Niet met vage argumenten ("past niet bij onze architectuur"), maar met concrete, toetsbare criteria. En die onderbouwing moet openbaar zijn — zodat andere overheden ervan kunnen leren en het verhaal kunnen toetsen.

### 2. Bijdragen Boven Bouwen

De standaard moet zijn: bijdragen aan bestaande projecten, niet zelf bouwen. Investeer in upstream contributions. Zet developers in om Nextcloud, Collabora of Element beter te maken in plaats van een eigen variant te starten. Elke euro die je investeert in een bestaand project met een actieve community levert meer op dan een euro in een project dat je in je eentje moet onderhouden.

Dit betekent ook: accepteer dat je niet alles bepaalt. In een open source project heb je invloed, niet controle. Dat is voor overheden moeilijk te accepteren. Maar het alternatief — volledige controle over een project dat niemand anders gebruikt — is erger.

### 3. Europese Coördinatie die Echt Werkt

De trilaterale samenwerking tussen Duitsland, Frankrijk en Nederland is een begin.[^28] De European Summit on Digital Sovereignty in november 2025, met keynotes van Merz en Macron, was veelbelovend. Maar zolang Tchap niet met Element praat terwijl beide op Matrix draaien, is het symboolpolitiek.

Interoperabiliteit moet geen ambitie zijn — het moet een eis zijn. Een harde eis. In contracten, in subsidievoorwaarden, in beleidskaders. Als je EU-subsidie krijgt voor een soeverein digitaal project, dan moet dat project _praten_ met de rest van Europa. Punt.

### 4. Van "Public Code" naar "Public Functionality"

Stop met je te verschuilen achter het publiceren van code. Richt je op het leveren van herbruikbare functionaliteit: gedocumenteerd, getest, met API's, met een community die bijdragen welkom heet. Code op GitHub zonder documentatie en zonder community is geen open source — het is een dumpplaats. En daar hebben we er genoeg van.

### 5. Vibe Coding Governance

Overheden moeten beleid ontwikkelen voor AI-gegenereerde code. Dat betekent niet: AI verbieden — dat zou contraproductief zijn. Maar het betekent: kwaliteitscontroles, security reviews, en het besef dat "snel gebouwd" niet hetzelfde is als "goed gebouwd".

Een simpele regel zou al helpen: voordat je een nieuw project start met AI-tools, moet je aantonen dat je hebt onderzocht of er een bestaand open source project is waar je aan kunt bijdragen. Een halve dag onderzoek. Dat kan maanden aan duplicatie voorkomen.

## De Keuze

De overheid hoeft niet alles zelf te bouwen om soeverein te zijn. Sterker nog: door alles zelf te bouwen, ondermijn je precies de open source ecosystemen waarvan je afhankelijk wilt zijn.

Duitsland laat zien dat het anders kan. OpenDesk bewijst dat je een soevereine werkplek kunt bouwen door bestaande open source tools te integreren, in plaats van ze te vervangen. Dat versterkt het ecosysteem, verlaagt de kosten, en creëert een platform waar anderen op kunnen voortbouwen. Elke app in de Nextcloud app store maakt OpenDesk waardevoller — zonder dat ZenDiS er een cent aan uitgeeft.

Frankrijk laat zien wat er misgaat als je dat niet doet. La Suite is technisch indrukwekkend, maar het is een eiland. Een duur, gepolijst eiland dat geld en aandacht wegtrekt bij de projecten die het Europese open source ecosysteem daadwerkelijk dragen. Een eiland waar je niet tegenaan kunt bouwen zonder custom integratie-werk.

De vraag is niet of overheden open source moeten gebruiken. Dat debat is voorbij. De vraag is of ze het ecosysteem versterken of verzwakken. Of ze samenwerken of dupliceren. Of ze bijdragen of bouwen.

**En met vibe coding als versneller is het makkelijker dan ooit om de verkeerde keuze te maken.**

De intenties zijn goed. De uitvoering moet beter. Publiek geld verdient publieke functionaliteit — niet publieke eilandjes.

**Begin met bijdragen. Stop met bouwen. De rest volgt vanzelf.**

## Gerelateerd

- [Open source lost jouw lock-in niet op](/blog/open-source-lost-jouw-lock-in-niet-op) — Waarom open source alleen niet genoeg is om vendor lock-in op te lossen
- [Van Public Code naar Public Functionality](/blog/open-source-mkb-public-functionality) — Hoe overheidsinvesteringen in open source het MKB ten goede komen
- [Volwassenheid van Open Source](/blog/volwassenheid-open-source-overheid) — Het volwassenheidsargument tegen open source ontkracht
- [Coalitieakkoord 2026: Mooie Woorden of Echte Transitie?](/blog/coalitieakkoord-2026-digitale-soevereiniteit-analyse) — Analyse van de digitale ambities in het coalitieakkoord
- [Het Einde van Pax Americana](/blog/einde-pax-americana-digitale-soevereiniteit) — Waarom digitale soevereiniteit niet langer optioneel is

---

[^1]: **OpenDesk** - [Open-source momentum in de publieke sector](https://www.opendesk.eu/en/blog/open-source-migration-public-sector) — Het ICC stapte in oktober 2025 over naar OpenDesk nadat Amerikaanse sancties de aanklager afsloten van Microsoft-diensten. Het incident geldt als de meest concrete illustratie van de risico's van Foreign Tech-afhankelijkheid.

[^2]: **NIST** - [Software Security in Supply Chains](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-security-supply-chains-open) — De EU Cyber Resilience Act (CRA) eist SBOM's, signed commits en continue monitoring. Bij mature open source projecten zijn deze al standaard dankzij frameworks als SLSA en Sigstore van de OpenSSF.

[^3]: **NOEMA Magazine** - [Tomorrow's Democracy Is Open Source](https://www.noemamag.com/tomorrows-democracy-is-open-source/) — Analyse van hoe open source platforms als Decidim (Barcelona) en DemocracyOS democratische transparantie mogelijk maken door burgers inzicht te geven in overheidssoftware.

[^4]: **London School of Economics** - [Total Cost of Ownership of Open Source Software](https://personal.lse.ac.uk/shaikh/TCO.htm) — Studie voor het UK Cabinet Office die significante besparingen aantoont bij open source-adoptie. De Europese Commissie concludeerde dat "in bijna alle gevallen een transitie naar open source op lange termijn besparingen oplevert."

[^5]: **TU Delft** - [Breaking Tech Monopolies: Public Procurement and SME Innovation](https://proceedings.open.tudelft.nl/DGO2025/article/view/973) — Onderzoek gepresenteerd op DGO 2025 dat aantoont hoe publieke aanbestedingen een krachtig maar onderbenut instrument zijn om techmonopolies te doorbreken en MKB-innovatie te stimuleren.

[^6]: **FSFE** - [Public Money? Public Code!](https://publiccode.eu/en/) — De campagne van de Free Software Foundation Europe voor wetgeving die eist dat publiek gefinancierde software als open source beschikbaar wordt gesteld. Meer dan 31.000 ondertekenaars en 200+ organisaties.

[^7]: **FSFE** - [German Elections 2025: demands for Free Software](https://fsfe.org/news/2025/news-20250206-01.en.html) — Alle democratische fracties in de Bundestag onderschrijven het "Public Money? Public Code!" principe, bevestigd tijdens een hoorzitting in de digitale commissie.

[^8]: **EUR-Lex** - [Interoperable Europe Act (EU 2024/903)](https://eur-lex.europa.eu/EN/legal-content/summary/interoperable-europe-act.html) — De Interoperable Europe Act verplicht publieke organisaties om interoperabiliteitsoplossingen te delen en hergebruiken, met een budget van EUR 77 miljoen in het Digital Europe Work Programme 2025-27.

[^9]: **Rijksoverheid** - [Overwegingen bij Open tenzij](https://www.rijksoverheid.nl/documenten/publicaties/2020/04/17/overwegingen-bij-open-tenzij-en-aanpak-open-source) — Het Nederlandse "Open, tenzij" principe: overheidssoftware moet open source zijn tenzij er gegronde redenen zijn om dat niet te doen.

[^10]: **Interoperable Europe Portal** - [EU Open Source Solutions Catalogue](https://interoperable-europe.ec.europa.eu/collection/open-source-observatory-osor) — Gelanceerd maart 2025, met 640+ oplossingen. Expliciet ontworpen om overheden bestaande interoperabele oplossingen te laten vinden in plaats van zelf te bouwen.

[^11]: **ZenDiS** - [OpenDesk: de soevereine werkplek](https://www.opendesk.eu/en) — Het Duitse Zentrum für Digitale Souveränität, een publiek gefinancierde GmbH die OpenDesk ontwikkelt als open source alternatief voor Microsoft-werkplekken.

[^12]: **OpenProject** - [The rise of the Sovereign Workplace](https://www.openproject.org/blog/sovereign-workplace/) — De architectuurprincipes van OpenDesk: modulariteit, interoperabiliteit en uitwisselbaarheid als kernwaarden. Elk component kan worden vervangen zonder het geheel te breken.

[^13]: **OpenProject** - [Digital sovereignty in Government: Germany's openDesk](https://www.openproject.org/blog/digital-sovereignty-government-germany-opendesk/) — Overzicht van OpenDesk-adopties: Bundeswehr (zevenjarig contract), Robert Koch-instituut (7.000 gebruikers), ICC, Deutsche Rentenversicherung en Bundesagentur für Arbeit.

[^14]: **La Suite Numérique** - [Suite numérique de l'État](https://lasuite.numerique.gouv.fr/en) — Het Franse DINUM-project voor een soevereine digitale werkplek. 500.000+ gebruikers verspreid over 15 ministeries. Custom-built producten op open source bouwstenen.

[^15]: **Clubic** - [L'Europe n'arrive pas à accorder ses violons sur la bureautique souveraine](https://www.clubic.com/actualite-603871-office-eu-lasuite-opendesk-la-france-et-le-reste-de-l-europe-n-arrivent-pas-a-accorder-leurs-violons-sur-la-bureautique-souveraine.html) — Analyse van de interoperabiliteitsproblemen tussen Europese soevereine werkplekken: Tchap en Element communiceren niet met elkaar ondanks het gedeelde Matrix-protocol.

[^16]: **OpenDesk** - [Strategic partnerships for digital autonomy](https://www.opendesk.eu/en/blog/strategic-partnerships-for-digital-autonomy) — Over de trilaterale samenwerking tussen Duitsland, Frankrijk en Nederland, inclusief de "100-day challenges" die in mei 2024 van start gingen.

[^17]: **Heise** - [France replaces MS Teams and Zoom](https://www.heise.de/en/news/France-replaces-MS-Teams-and-Zoom-with-its-own-video-conferencing-software-11155347.html) — De Franse aanpak inclusief de EUR 23M investering in drie concurrerende private consortiums (Wimi, Interstis, Jamespot) onder het France 2030-programma.

[^18]: **MinBZK** - [MijnBureau op GitHub](https://github.com/MinBZK/mijn-bureau-infra) — Het Nederlandse Ministerie van BZK's initiatief voor een soevereine digitale werkplek, beschikbaar als open source op GitHub.

[^19]: **VNG** - [Common Ground: zonder samenwerking redden we het niet](https://vng.nl/artikelen/common-ground-zonder-samenwerking-redden-we-het-niet) — VNG's analyse van de uitdagingen rondom Common Ground, waaronder het gebrek aan brede adoptie en de noodzaak van betere samenwerking.

[^20]: **FOSDEM 2026** - [From Policy to Practice: Open Source in the Dutch Government](https://fosdem.org/2026/schedule/event/BNPJ7P-from-policy-to-practice-open-source-in-gov/) — Het Nederlandse OSPO koos bewust voor Forgejo als basis voor het overheids-codeplatform en bouwt mee aan bestaande open source projecten.

[^21]: **Andrej Karpathy** - [Oorspronkelijke post over vibe coding](https://x.com/karpathy/status/1886192184808149383) — De virale post van februari 2025 (4,5M+ views) waarin Karpathy de term "vibe coding" introduceerde. Collins Dictionary maakte het Woord van het Jaar 2025.

[^22]: **Koren, Bekes, Hinz, Lohmann** - [Vibe Coding Kills Open Source](https://arxiv.org/pdf/2601.15494) — Onderzoekspaper van de Central European University en Universiteit van Bielefeld dat aantoont hoe AI-assisted development de bijdragen aan bestaande open source projecten actief verzwakt.

[^23]: **InfoQ** - [AI Vibe Coding Threatens Open Source](https://www.infoq.com/news/2026/02/ai-floods-close-projects/) — Overzicht van open source maintainers die defensieve maatregelen nemen: cURL stopt bug bounty, Ghostty verbiedt AI-code, tldraw sluit externe PRs.

[^24]: **Lawfare** - [The Security Risks of AI-Generated Code](https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code) — Circa 45% van AI-gegenereerde code bevat OWASP-kwetsbaarheden. CodeRabbit toonde 2,74x meer security issues in AI-geschreven code.

[^25]: **METR** - Gerandomiseerde studie over AI-productiviteit bij ervaren ontwikkelaars. Ontwikkelaars waren 19% langzamer met AI-tools, ondanks de perceptie 20% sneller te zijn.

[^26]: **The Register** - [Vibe coding may be hazardous to open source](https://www.theregister.com/2026/01/26/vibe_coding_hazardous_open_source/) — Het Zweedse platform Lovable had 170 van de 1.645 vibe-coded apps met beveiligingsproblemen die persoonlijke data lekten.

[^27]: **Grith** - [Vibe Coding Is Killing Open Source, Data Proves It](https://grith.ai/blog/vibe-coding-killing-open-source) — Tailwind CSS documentatie-verkeer daalde circa 40% ondanks groeiende populariteit, doordat AI-tools de vragen beantwoorden die gebruikers naar de docs zouden sturen.

[^28]: **Element** - [Element at the Summit on European Digital Sovereignty](https://element.io/blog/element-at-the-summit-on-european-digital-sovereignty/) — De eerste European Summit on Digital Sovereignty in Berlijn (november 2025), met keynotes van Merz en Macron over Europese digitale onafhankelijkheid.

[^29]: **OpenTalk** - [OpenTalk: open source videoconferencing onder EUPL](https://opentalk.eu/en/news/opentalk-now-open-source-under-eu-public-licence) — Berlijnse enterprise-grade videoconferencing oplossing, ontwikkeld door Heinlein Support GmbH. Gepubliceerd onder de European Union Public License (EUPL). Ingezet door de deelstaat Thüringen en Deense gemeenten als soeverein alternatief voor Zoom en Teams.
