---
slug: vibe-coding-open-source
title: 'Vibe Coding en de Toekomst van Open Source'
authors: [ruben]
tags: [personal, open-source, vibe-coding, ai]
description: 'Vibe coding verlaagt de drempel om zelf te bouwen tot nul. Dat klinkt als vooruitgang, maar het ondermijnt de open source ecosystemen waarvan we afhankelijk zijn.'
---

# Vibe Coding en de Toekomst van Open Source

In februari 2025 bedacht Andrej Karpathy — medeoprichter van OpenAI, voormalig hoofd AI bij Tesla — de term "vibe coding".[^1] Zijn beschrijving: je geeft je volledig over aan de AI, klikt overal "Accept All", leest geen diffs, en praat tegen je editor alsof het een collega is. Code? Welke code? Je vibet. De post ging viral — meer dan 4,5 miljoen views — en Collins Dictionary maakte het Woord van het Jaar 2025.

Karpathy noemde het zelf een aanpak voor "throwaway weekend projects". Maar de wereld nam het serieuzer dan hij bedoelde. Y Combinator rapporteerde dat 25% van de startups in hun Winter 2025-batch codebases had die voor 95% door AI waren gegenereerd.

En ik snap het. Ik gebruik zelf dagelijks AI bij het ontwikkelen. Het is verleidelijk. Het is snel. Het voelt productief. Maar er is een verschil tussen AI als hulpmiddel bij het bijdragen aan bestaande projecten, en AI als excuus om alles zelf te bouwen.

<!--truncate-->

## Het NIH-Syndroom op Steroïden

Vibe coding verlaagt de drempel om zelf te bouwen tot nul. Letterlijk nul. Een ambtenaar met een prompt en een AI-tool kan in een middag iets in elkaar klikken dat er op het eerste gezicht professioneel uitziet. Waarom zou je dan nog aansluiten bij een bestaand open source project? Waarom door documentatie worstelen? Waarom je conformeren aan andermans architectuur als je het "even snel" kunt bouwen?

Dit is het NIH-syndroom, maar dan niet meer op organisatieniveau — op _individueel_ niveau. Niet meer een organisatie die besluit om zelf te bouwen, maar een developer of team dat denkt: "Dit kan ik sneller zelf met Claude of Copilot." De drempel is weg. De discipline om eerst te zoeken naar wat er al bestaat verdwijnt als sneeuw voor de zon.

**Dat is alsof je een rokende verslaafde een gratis aansteker geeft. Het probleem bestond al — maar je maakt het onweerstaanbaar.**

Voor overheden — die al institutioneel de neiging hebben om zelf te bouwen — is vibe coding het ultieme excuus. Ik schreef over dat bredere patroon in [Overheid en Open Source — Een Lastige Liefde](/blog/overheid-open-source-lastige-liefde).

## De Schade aan Open Source

Het onderzoekspaper "Vibe Coding Kills Open Source" van onderzoekers aan de Central European University en de Universiteit van Bielefeld toont aan dat AI-assisted development de bijdragen aan bestaande open source projecten actief verzwakt.[^2] De logica is simpel: als je snel zelf kunt bouwen, waarom zou je dan bijdragen aan een project van iemand anders?

De gevolgen zijn al zichtbaar:

- **Daniel Stenberg** (maintainer van cURL) stopte zijn zes jaar oude bug bounty-programma omdat 20% van de inzendingen door AI was gegenereerd en nutteloos was.
- **Mitchell Hashimoto** (Ghostty) verbood AI-gegenereerde code compleet.
- **Steve Ruiz** (tldraw) sluit automatisch alle externe pull requests — de ruis is te groot om handmatig te filteren.[^3]

Zoals Xavier Portilla Edo (Voiceflow/Genkit core team) het formuleerde: 1 op de 10 AI-gegenereerde pull requests is legitiem. De andere negen verspillen de tijd van een maintainer.

De maintainers van de projecten waar overheden op bouwen, worden overspoeld door rommel. En als die maintainers afhaken — wat er al gebeurt — dan verzwakt de fundering waarop al die soevereine werkplekken staan. Dat is geen theorie. Dat is een tikkende tijdbom.

## Het Beveiligingsprobleem

En dan is er het beveiligingsaspect. Circa 45% van AI-gegenereerde code bevat OWASP-kwetsbaarheden.[^4] Een analyse van CodeRabbit toonde 2,74x meer security issues in AI-geschreven code. En een gerandomiseerde studie van METR vond dat ervaren ontwikkelaars met AI-tools feitelijk 19% **langzamer** werkten — ook al dachten ze zelf 20% sneller te zijn.[^5]

Laat dat even bezinken. Ontwikkelaars _denken_ dat ze sneller zijn. Maar ze zijn het niet. En de code die ze produceren is onveiliger.

Voor overheden die met burgerdata werken — BSN-nummers, medische gegevens, financiële informatie — is dit geen abstract risico. Een Zweeds bedrijf dat vibe coding-apps bouwde via het platform Lovable had 170 van de 1.645 gecreëerde apps met beveiligingsproblemen die persoonlijke data lekten.[^6]

Stel je voor dat dat een overheidsapplicatie was. Stel je voor dat het jouw BSN was.

Vibe coding produceert code die er professioneel uitziet maar fundamenteel onveilig kan zijn. **Het is alsof je een stagiair een bouwvergunning laat tekenen omdat het er netjes uitziet op papier.**

## De Tailwind-Waarschuwing

Er is nog een subtiel effect. Tailwind CSS — een van de populairste open source CSS-frameworks — zag zijn documentatie-verkeer met circa 40% dalen, ondanks groeiende populariteit.[^7] Waarom? Omdat AI-tools de vragen beantwoorden die gebruikers anders naar de docs zouden sturen.

Dat klinkt onschuldig, maar het is het niet. Voor veel open source projecten is de documentatie de enige manier waarop gebruikers commerciële producten en support ontdekken. Minder docs-verkeer betekent minder zichtbaarheid, minder conversie, minder financiering.

Vibe coding ondermijnt open source dus niet alleen door bijdragen te verminderen, maar ook door de verdienmodellen te slopen die projecten in leven houden. Het is een aanval op twee fronten.

## Wat Moet Er Veranderen?

Overheden moeten beleid ontwikkelen voor AI-gegenereerde code. Dat betekent niet: AI verbieden — dat zou contraproductief zijn. Maar het betekent: kwaliteitscontroles, security reviews, en het besef dat "snel gebouwd" niet hetzelfde is als "goed gebouwd".

Een simpele regel zou al helpen: voordat je een nieuw project start met AI-tools, moet je aantonen dat je hebt onderzocht of er een bestaand open source project is waar je aan kunt bijdragen. Een halve dag onderzoek. Dat kan maanden aan duplicatie voorkomen.

**De aansteker is er. De sigaret brandt. De vraag is of we de rookmelder aanzetten — of blijven vibreren tot het te laat is.**

## Gerelateerd

- [Overheid en Open Source — Een Lastige Liefde](/blog/overheid-open-source-lastige-liefde) — Waarom overheden liever zelf bouwen dan aansluiten bij bestaande open source projecten
- [Open source lost jouw lock-in niet op](/blog/open-source-lost-jouw-lock-in-niet-op) — Waarom open source alleen niet genoeg is om vendor lock-in op te lossen
- [Volwassenheid van Open Source](/blog/volwassenheid-open-source-overheid) — Het volwassenheidsargument tegen open source ontkracht

---

[^1]: **Andrej Karpathy** - [Oorspronkelijke post over vibe coding](https://x.com/karpathy/status/1886192184808149383) — De virale post van februari 2025 (4,5M+ views) waarin Karpathy de term "vibe coding" introduceerde. Collins Dictionary maakte het Woord van het Jaar 2025.

[^2]: **Koren, Bekes, Hinz, Lohmann** - [Vibe Coding Kills Open Source](https://arxiv.org/pdf/2601.15494) — Onderzoekspaper van de Central European University en Universiteit van Bielefeld dat aantoont hoe AI-assisted development de bijdragen aan bestaande open source projecten actief verzwakt.

[^3]: **InfoQ** - [AI Vibe Coding Threatens Open Source](https://www.infoq.com/news/2026/02/ai-floods-close-projects/) — Overzicht van open source maintainers die defensieve maatregelen nemen: cURL stopt bug bounty, Ghostty verbiedt AI-code, tldraw sluit externe PRs.

[^4]: **Lawfare** - [The Security Risks of AI-Generated Code](https://www.lawfaremedia.org/article/when-the-vibe-are-off--the-security-risks-of-ai-generated-code) — Circa 45% van AI-gegenereerde code bevat OWASP-kwetsbaarheden. CodeRabbit toonde 2,74x meer security issues in AI-geschreven code.

[^5]: **METR** - Gerandomiseerde studie over AI-productiviteit bij ervaren ontwikkelaars. Ontwikkelaars waren 19% langzamer met AI-tools, ondanks de perceptie 20% sneller te zijn.

[^6]: **The Register** - [Vibe coding may be hazardous to open source](https://www.theregister.com/2026/01/26/vibe_coding_hazardous_open_source/) — Het Zweedse platform Lovable had 170 van de 1.645 vibe-coded apps met beveiligingsproblemen die persoonlijke data lekten.

[^7]: **Grith** - [Vibe Coding Is Killing Open Source, Data Proves It](https://grith.ai/blog/vibe-coding-killing-open-source) — Tailwind CSS documentatie-verkeer daalde circa 40% ondanks groeiende populariteit, doordat AI-tools de vragen beantwoorden die gebruikers naar de docs zouden sturen.
