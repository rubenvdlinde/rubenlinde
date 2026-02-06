---
slug: open-source-lost-jouw-lock-in-niet-op
title: 'Open source lost jouw lock-in niet op'
authors: [ruben]
tags: [personal, open-source, soevereiniteit, overheid, migratie]
description: 'Lock-in is geen argument tegen open source — het is een probleem dat de overheid zelf heeft gecreëerd en zelf moet oplossen.'
---

# Open source lost jouw lock-in niet op

Open source lost jouw lock-in niet op. Dat moet je zelf doen.

Ik merk het steeds vaker in gesprekken over digitale soevereiniteit en migraties weg van Foreign Tech. Er wordt naar open source gekeken als een soort wondermiddel. Alsof je Collabora Office[^1] installeert, Nextcloud[^2] uitrolt, en dan vanzelf verlost bent van twintig jaar Microsoft-afhankelijkheid. Maar zo werkt het niet. Open source is geen stofzuiger die jouw puinhoop opruimt. Het is een fundament om op te bouwen — maar dan moet je eerst je eigen rommel opruimen.

<!--truncate-->

## Het probleem is niet open source — het probleem ben jij

Laten we eerlijk zijn. De Nederlandse overheid heeft _zelf gekozen_ voor een diepe, allesomvattende afhankelijkheid van het Microsoft-ecosysteem. Dat is niet per ongeluk gegaan. Het was beleid. Er is een oud devies in overheidsinkoop: "Er is nog nooit een ambtenaar ontslagen omdat die voor Microsoft koos." En dat klopt. Het was de veilige keuze. Jarenlang zijn aanbestedingen geschreven met Microsoft-producten als impliciete of expliciete eis. Jarenlang zijn werkprocessen ingericht rond Word, Excel, Outlook en SharePoint. Jarenlang is er geïnvesteerd in maatwerk dat alleen werkt binnen dat ecosysteem.

En nu, nu de geopolitieke wind draait en digitale soevereiniteit opeens op de agenda staat, kijkt diezelfde overheid naar open source en zegt: "Ja maar het werkt niet met onze macro's."

Nee. Natuurlijk niet. Dat was ook nooit de bedoeling.

## De macro's in je Word-documenten

Een voorbeeld dat steeds terugkomt: VBA-macro's in overheidsdocumenten. Organisaties hebben in de loop der jaren honderden, soms duizenden, macro's gebouwd in Word en Excel. Die macro's automatiseren werkprocessen, genereren rapporten, vullen templates in. Ze zijn diep verweven met de dagelijkse werkzaamheden.

En dan wil je migreren naar Collabora Office of Nextcloud Office. En dan werken die macro's niet. En dan is de conclusie: "Zie je wel, open source is niet klaar."

Tijdens de drukbezochte HAVEN+ dag — waarvoor dank aan [Jacco de Groot](https://www.linkedin.com/in/jaccobrouwernl/) voor de organisatie — merkte [Claudia van Kruistum](https://www.linkedin.com/in/claudiavankruistum/) van SURF terecht op dat dit de wereld op z'n kop is. SURF, dezelfde organisatie die Nextcloud uitrolt naar meer dan dertig onderwijsinstellingen[^3]. Die macro's zijn geen tekortkoming van open source. Ze zijn een direct gevolg van de keuze om _zo diep_ het Microsoft-ecosysteem in te duiken dat je werkprocessen niet meer los te koppelen zijn van proprietary technologie. Dat is lock-in. En die lock-in heb je zelf gecreëerd.

Open source kan niet en moet niet worden gevraagd om die macro's "even" te ondersteunen. Dat is niet het probleem van Collabora Office. Dat is jouw probleem. En jij — de organisatie die die keuze heeft gemaakt — moet dat oplossen. Door je werkprocessen te herzien. Door macro's te herschrijven of te vervangen door open standaarden. Door de pijn te nemen die hoort bij het rechtzetten van twintig jaar verkeerde keuzes.

## De applicaties die naar Office verwijzen

Het gaat verder dan macro's. [Theo Peters](https://www.linkedin.com/in/theo-peters-787539a/) wees er terecht op dat het probleem veel breder is. Kijk naar het aantal overheidsapplicaties dat hardcoded verwijst naar Microsoft Word of Microsoft Office. Documentgeneratiesystemen die alleen Word-templates aankunnen. Workflowsystemen die Outlook-integratie als harde dependency hebben. Rapportagetools die Excel-exports als enige optie bieden.

Dit is geen technische lock-in. Dit is _beleids-lock-in_. Jarenlang zijn aanbestedingen uitgeschreven met eisen als "moet integreren met Microsoft Office 365" of "moet compatibel zijn met de Microsoft-werkplek". Elke leverancier die wilde meedoen, moest bouwen voor Microsoft. En nu zitten we met een heel ecosysteem van applicaties dat alleen werkt in een Microsoft-omgeving. Uit onderzoek van iBestuur bleek dat slechts 9% van de ondervraagde gemeenten een overstap van Microsoft überhaupt haalbaar acht[^4]. Dat cijfer zegt alles.

Dat is niet de schuld van open source. Dat is het directe gevolg van aanbestedingsbeleid dat concurrentie uitsloot en afhankelijkheid inbouwde. De overheid heeft die eis zelf neergelegd. De overheid moet die eis zelf weer weghalen.

## De technische onderlaag: Entra, Oracle en de rest

En dan heb je nog de lagen die je niet direct ziet. [Theo Peters](https://www.linkedin.com/in/theo-peters-787539a/) benoemde ook die technische onderlaag — en terecht, want daar zitten lock-ins die nog lastiger te doorbreken zijn dan macro's en Office-integraties.

**Microsoft Entra** (voorheen Azure AD) is het identity management platform waar veel overheidsorganisaties op draaien. Elke applicatie, elke inlog, elk autorisatiebesluit loopt via Entra. Migreren naar een open alternatief als Keycloak[^5] is technisch mogelijk, maar vereist dat je elke aangesloten applicatie opnieuw configureert. Dat is geen klein project.

**Oracle databases** zitten diep in de technische fundamenten van veel overheidssystemen. Migreren naar PostgreSQL[^6] is absoluut haalbaar — PostgreSQL is in veel opzichten superieur — maar het vereist dat je applicatiecode aanpast, stored procedures herschrijft, en migratiepaden test voor systemen die soms al tientallen jaren draaien.

Hoe dieper je kijkt, hoe meer lock-in je vindt. En elke laag heeft zijn eigen complexiteit, zijn eigen migratiepad, zijn eigen tijdsinvestering. Maar geen van deze lock-ins is een argument _tegen_ open source. Het zijn argumenten voor een gestructureerd migratieplan.

## Lock-in als argument vóór lock-in

En hier zit de kern van mijn frustratie. Ik zie steeds vaker dat de lock-in zelf wordt gebruikt als argument om _niet_ te migreren. De redenering gaat zo:

1. We zitten vast aan Microsoft
2. Migreren is complex vanwege die afhankelijkheid
3. Dus blijven we bij Microsoft

Dat is een cirkelredenering. Je gebruikt de lock-in als argument vóór de lock-in. Dat is alsof je zegt: "Ik kan niet stoppen met roken, want ik ben verslaafd." Ja, dat klopt. Dat is precies waarom je moet stoppen.

De complexiteit van de migratie is geen bewijs dat open source niet werkt. Het is bewijs van hoe diep de lock-in gaat. En hoe langer je wacht, hoe dieper die lock-in wordt. Elke dag dat je nog een macro schrijft in VBA, nog een applicatie bouwt op Entra, nog een aanbesteding uitschrijft met "Microsoft-compatibel" als eis — elke dag wordt de migratie complexer.

De vraag is niet _of_ je moet migreren. De vraag is hoe snel je begint.

## Stap voor stap eruit

Betekent dit dat je morgen alles moet omgooien? Nee. Absoluut niet. Dat zou roekeloos zijn en tot mislukking leiden. Maar het betekent wel dat je moet beginnen. Rustig, gestructureerd, stap voor stap.

- **Erken het probleem.** Stop met doen alsof de lock-in een feature is. Het is een risico, een afhankelijkheid, een beperking van je keuzevrijheid.
- **Breng de lock-in in kaart.** Waar zitten je afhankelijkheden? Macro's, applicatie-integraties, identity management, databases — maak de lijst compleet.
- **Stop de bloeding.** Schrijf geen nieuwe aanbestedingen met Microsoft als harde eis. Bouw geen nieuwe macro's in VBA. Creëer geen nieuwe lock-in.
- **Begin met de buitenste lagen.** Documentformaten, kantoorsuites, e-mail — dat zijn de lagen waar open alternatieven het verst gevorderd zijn en waar de impact het grootst is.
- **Werk naar binnen toe.** Identity management, databases, de zware technische onderlaag — dat zijn langetermijnprojecten, maar ze moeten wel op de roadmap staan.

En ja, dat kost tijd. En ja, dat kost geld. Maar die kosten zijn het directe gevolg van keuzes die je zelf hebt gemaakt. Open source vragen om dat gratis op te lossen is niet eerlijk, niet realistisch, en niet constructief.

## De keuze is aan jou

Open source biedt een uitweg. Een goed fundament. Bewezen technologie die wereldwijd draait op de meest kritieke systemen. Maar het is geen magische knop die twintig jaar lock-in ongedaan maakt.

De overheid moet haar eigen rommel opruimen. De macro's herschrijven. De aanbestedingen herschrijven. De architectuur herzien. En dan — dan werkt open source fantastisch.

Maar verwacht niet dat het jouw problemen oplost. Die heb je zelf gecreëerd. En die los je zelf op.

**Begin vandaag. Stap voor stap. Want elke dag dat je wacht, wordt de weg terug langer.**

[^1]: **Collabora Office** - [Collabora Online](https://www.collaboraonline.com/) — Open source kantooroplossing gebaseerd op LibreOffice, met enterprise support en GDPR-compliance. Wordt ingezet door overheden in heel Europa.

[^2]: **Nextcloud** - [Nextcloud](https://nextcloud.com/) — Self-hosted samenwerkingsplatform als alternatief voor Microsoft 365 en SharePoint. Gebruikt door onder andere de Duitse deelstaat Sleeswijk-Holstein en het Oostenrijkse Ministerie van Economische Zaken.

[^3]: **SURF & Nextcloud** - [SURF rolt Nextcloud breed uit naar Nederlandse onderwijsinstellingen](https://www.ictmagazine.nl/blogs/surf-rolt-nextcloud-breed-uit-naar-nederlandse-onderwijsinstellingen/) — Januari 2026: SURF rolt Nextcloud uit naar meer dan dertig onderwijsinstellingen als reactie op de roep om minder afhankelijkheid van Microsoft en Google.

[^4]: **iBestuur** - [Gemeenten voelen zich klemgezet door Microsoft](https://ibestuur.nl/artikel/gemeenten-voelen-zich-klemgezet-door-microsoft/) — Onderzoek waaruit bleek dat slechts 9% van de 54 ondervraagde gemeenten een overstap van Microsoft haalbaar acht.

[^5]: **Keycloak** - [Keycloak](https://www.keycloak.org/) — Open source identity en access management platform. Ondersteunt SAML, OpenID Connect en OAuth2 als alternatief voor Microsoft Entra.

## [^6]: **PostgreSQL** - [PostgreSQL](https://www.postgresql.org/) — 's Werelds meest geavanceerde open source database. Breed ingezet als alternatief voor Oracle, zonder licentiekosten.

## Gerelateerd

- [Het Einde van Pax Americana - Tijd voor digitale soevereiniteit](/blog/einde-pax-americana-digitale-soevereiniteit) — Waarom Europa moet afkicken van Foreign Tech
- [Volwassenheid van Open Source - Wanneer is technologie 'klaar'?](/blog/volwassenheid-open-source-overheid) — Het volwassenheidsargument ontkracht
- [Coalitieakkoord 2026 - Mooie woorden of echte transitie?](/blog/coalitieakkoord-2026-digitale-soevereiniteit-analyse) — Wat het nieuwe coalitieakkoord zegt over digitale soevereiniteit
- [Waarom ik overweeg te migreren van GitHub naar Codeberg](/blog/migratie-naar-codeberg) — Een persoonlijke migratie als voorbeeld
