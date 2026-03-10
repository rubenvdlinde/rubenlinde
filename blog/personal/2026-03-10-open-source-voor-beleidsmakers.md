---
slug: open-source-voor-beleidsmakers
title: 'Waarom Open Source voor de Overheid? — Een Overzicht voor Beleidsmakers'
authors: [ruben]
tags: [personal, open-source, soevereiniteit, overheid]
description: 'Zeven redenen waarom overheden open source omarmen — van soevereiniteit en veiligheid tot kostenreductie en democratische verantwoording.'
---

# Waarom Open Source voor de Overheid?

De overheid wil open source. Maar waarom eigenlijk? Het antwoord is genuanceerder dan de meeste beleidsnotities suggereren. Er zijn meer redenen dan je zou denken — en ze zijn allemaal valide.

<!--truncate-->

## Soevereiniteit — De Grote Drijfveer

Dit is de motor achter alles. De geopolitieke werkelijkheid van de afgelopen jaren — handelsoorlogen, de Cloud Act, sancties — heeft pijnlijk duidelijk gemaakt hoe afhankelijk Europa is van Foreign Tech. Het meest sprekende voorbeeld: het Internationaal Strafhof (ICC) dat in oktober 2025 overstapte naar OpenDesk nadat de aanklager door Amerikaanse sancties werd afgesloten van zijn Microsoft-mail.[^1] Als je e-mail kan worden afgepakt door een buitenlandse overheid, heb je een soevereiniteitsprobleem. Ik schreef hier eerder uitgebreid over in mijn post over [het einde van Pax Americana](/blog/einde-pax-americana-digitale-soevereiniteit).

Open source biedt de belofte van controle. Controle over je data, je systemen, je digitale infrastructuur. Geen kill switch in handen van een ander land. Dat resoneerde enorm na het ICC-incident — ik merkte het in gesprekken met gemeenten, met ministeries, met Europese collega's. Iedereen had het erover.

## Veiligheid en Controleerbaarheid

Open source code kun je inspecteren. Je kunt zien wat het doet, hoe het werkt, welke data het verwerkt. Bij proprietary software vertrouw je op de leverancier. Bij open source vertrouw je op de wiskundige waarheid van de broncode.

Dat is niet alleen theorie. De EU Cyber Resilience Act (CRA) eist Software Bills of Materials (SBOM's), signed commits en continue monitoring — dingen die bij mature open source projecten al standaard zijn.[^2] De OpenSSF (Open Source Security Foundation) biedt frameworks als SLSA en Sigstore die gevestigde projecten al implementeren. Probeer dat maar eens te vragen aan je proprietary leverancier.

Maar — en hier zit de spanning — die beveiligingsvoordelen gelden voor _bestaande_, _mature_ open source projecten met actieve communities. Niet voor de snel-in-elkaar-gehackte overheidsprojectjes die na drie jaar stilletjes verweesd achterblijven op een vergeten GitLab-instantie.

## Democratische Verantwoording

Er is een fundamenteel democratisch argument: burgers hebben het recht om te weten hoe overheidssoftware werkt. Niet omdat iedere burger broncode gaat lezen — laten we realistisch zijn. Maar omdat onafhankelijke auditors, journalisten, onderzoekers en civic tech-organisaties het _kunnen_ controleren. Die transparantie is essentieel in een democratie. Maar die transperantie vraagt ook om scope. We kunnen bits of freedom niet vragen om op 666 repositories tegerlijkertijd tegen te lezen.

Platforms als Decidim (Barcelona) en DemocracyOS laten zien dat open source niet alleen een technische keuze is — het is een democratische keuze.[^3]

## Innovatie en Samenwerking

Open source belooft dat je niet alles alleen hoeft te doen. Code hergebruiken, community-input krijgen, samen sneller innoveren. Voor bureaucratische organisaties die van nature traag zijn, klinkt dat als een droom.

En het _kan_ ook werken. Ik heb het zien werken. Als je het goed doet — als je echt samenwerkt met bestaande communities, als je bijdraagt in plaats van forkt — dan is open source een ongelooflijke force multiplier. Het probleem is dat "goed doen" discipline vereist die overheden zelden opbrengen.

## Kostenreductie

Een studie van de London School of Economics voor het UK Cabinet Office toonde significante besparingen door open source-adoptie.[^4] De Spaanse regio Andalusië bespaart miljoenen per jaar met 250.000 ambtenaren op open source. En de Europese Commissie concludeerde dat "in bijna alle gevallen een transitie naar open source op lange termijn besparingen oplevert."

Maar — en dit is cruciaal — die besparingen gelden als je _aansluit_ bij bestaande projecten. Als je zelf bouwt, betaal je het volle pond aan ontwikkeling, onderhoud en beveiliging. Met als bonus dat je het in je eentje moet doen. Zo als de Nederlandse gemeenten inmiddels hebben ontdekt bij het commonground programma. Als je alleen bouwt kan je zo maar eens duurder uitzijn.

## Vendor Diversiteit en Marktwerking

Overheidsinkopers besteden naar schatting 14% van het EU-BBP via aanbestedingen.[^5] Open source is een wapen tegen monopolievorming: als de code open is, kan elke competente leverancier support, hosting of doorontwikkeling bieden. Dat creëert echte marktwerking in plaats van de schijnkeuze tussen twee proprietary aanbieders.

## Publiek Geld, Publieke Code... of Publieke Functionaliteit?

De FSFE-campagne "Public Money? Public Code!" heeft inmiddels meer dan 31.000 handtekeningen en brede politieke steun.[^6] Het idee is simpel: wat met publiek geld wordt ontwikkeld, moet publiek beschikbaar zijn. Zwitserland heeft het zelfs in wetgeving vastgelegd. In Duitsland is het inmiddels politiek onomstreden — alle democratische fracties in de Bundestag onderschrijven het principe.[^7]

Maar ik denk dat het mantra een update verdient. "Public money, public code" is niet genoeg. Het zou moeten zijn: **public money, public functionality**. Het gaat niet alleen om code op GitHub gooien. Het gaat om herbruikbare functionaliteit creëren die anderen daadwerkelijk kunnen inzetten. Code zonder documentatie, zonder community, zonder interoperabiliteit is geen publiek goed — het is een digitaal graf.

Ik heb hier eerder over geschreven in mijn post over [open source en het MKB](/blog/open-source-mkb-public-functionality). En het Interoperable Europe Act (EU 2024/903) codificeert dit in wetgeving: publieke organisaties moeten interoperabiliteitsoplossingen _delen en hergebruiken_, niet opnieuw bouwen.[^8]

## De Motivaties Zijn Er — De Uitvoering Niet

Al deze redenen zijn valide. Ze vormen samen een overtuigend verhaal voor open source bij de overheid. Maar motivatie alleen is niet genoeg. De vraag is niet _waarom_ overheden open source moeten gebruiken — dat debat is voorbij. De vraag is _hoe_ ze het doen. En daar gaat het mis.

Lees mijn analyse van hoe overheden open source in de praktijk brengen — en waarom ze liever zelf bouwen dan aansluiten — in [Overheid en Open Source — Een Lastige Liefde](/blog/overheid-open-source-lastige-liefde).

## Gerelateerd

- [Overheid en Open Source — Een Lastige Liefde](/blog/overheid-open-source-lastige-liefde) — Waarom overheden liever zelf bouwen dan aansluiten bij bestaande open source projecten
- [Open source lost jouw lock-in niet op](/blog/open-source-lost-jouw-lock-in-niet-op) — Waarom open source alleen niet genoeg is om vendor lock-in op te lossen
- [Van Public Code naar Public Functionality](/blog/open-source-mkb-public-functionality) — Hoe overheidsinvesteringen in open source het MKB ten goede komen
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
