---
slug: migratie-naar-codeberg
title: Waarom ik overweeg te migreren van GitHub naar Codeberg
authors: [ruben]
tags: [personal, open-source, soevereiniteit]
---

# Waarom ik overweeg te migreren van GitHub naar Codeberg

GitHub is fantastisch. Maar als je kijkt naar waar de wind waait in Silicon Valley, is het misschien tijd om alternatieven serieus te nemen. Dit is waarom Codeberg op mijn radar staat.

<!--truncate-->

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

## De Microsoft-GitHub Situatie

Laten we eerlijk zijn: sinds Microsoft GitHub kocht in 2018, is de service beter geworden:

- GitHub Actions (gratis CI/CD)
- GitHub Codespaces
- GitHub Copilot
- Betere performance
- Meer gratis features

**Dus wat is het probleem?**

## Het Probleem: Geopolitieke Risico's

We hebben het net gezien met het ICC (Internationaal Strafhof):

- Microsoft stopt diensten op verzoek van het Witte Huis
- Zonder rechterlijke procedure
- Contractuele afspraken? Irrelevant
- Internationale organisatie? Maakt niet uit

**Als dit kan met het ICC, kan het met jouw GitHub repo.**

### Het Amerikaanse Wetgeving Probleem

Amerikaanse bedrijven zijn onderworpen aan:

- **CLOUD Act** - VS kan data opvragen van Amerikaanse bedrijven, wereldwijd
- **Executive Orders** - President kan toegang blokkeren voor landen/organisaties
- **Sanctions** - Plots kan je land/organisatie op de lijst staan
- **Politieke grillen** - Zie Trump's willekeur

**Je code, je CI/CD, je hele workflow - in de handen van Amerikaanse politiek.**

## Wat is Codeberg?

[Codeberg](https://codeberg.org) is een non-profit Git hosting service:

**Kerneigenschappen:**

- Non-profit organisatie (geen winstoogmerk)
- Gevestigd in Duitsland (EU jurisdictie)
- GDPR compliant by design
- Volledig open source (draait op Forgejo/Gitea)
- Gratis voor open source
- Community-gedreven

**Denk: "GitHub, maar dan onafhankelijk en Europees"**

### Wie Gebruikt Het?

Niet alleen activists en privacy freaks:

- Codeberg zelf (meta!)
- F-Droid (Android app store)
- Diverse open source projecten
- Europese overheidsprojecten
- Privacy-bewuste developers

## Waarom Overwegen?

### 1. Geopolitieke Onafhankelijkheid

**GitHub-scenario:**

```
Amerikaanse politiek verandert
   ↓
Nieuwe export restrictions
   ↓
Jouw organisatie/land op de lijst
   ↓
Account disabled
   ↓
Code weg, CI/CD weg, issues weg
```

**Codeberg-scenario:**

```
Amerikaanse politiek verandert
   ↓
... maakt niet uit, is Duits/EU
```

### 2. Privacy by Design

**GitHub:**

- Copilot traint op je code (tenzij je opt-out)
- Telemetry overal
- Microsoft analyseert alles
- Data in VS (CLOUD Act exposed)

**Codeberg:**

- Geen AI-training op je code
- Minimale tracking
- Data in EU (GDPR protected)
- Transparant over datagebruik

### 3. Open Source Puurheid

**GitHub:**

- Proprietary platform
- Vendor lock-in features (GitHub Actions specifics)
- Microsoft-driven roadmap

**Codeberg:**

- Volledig open source (Forgejo)
- Zelf te hosten
- Community-driven roadmap
- Geen vendor lock-in

### 4. Kosten: Ook €0

**Codeberg:**

- Gratis voor open source
- Gratis voor persoonlijk gebruik
- Optional donations

**Zelfde prijs als GitHub, geen corporate eigenaar.**

## De Trade-offs (Eerlijk Zijn)

### Wat je Verliest

**1. Netwerk Effect**

GitHub heeft:

- 100+ miljoen developers
- Industry standaard
- "Social network" voor devs
- Recruiters zoeken daar

Codeberg heeft:

- Kleinere community
- Minder zichtbaarheid
- Minder "networking"

**Impact voor mij:** Matig. Ik gebruik GitHub niet voor social networking.

**2. Ecosystem Integraties**

GitHub:

- Alle tools integreren ermee
- Netlify, Vercel, etc. hebben native support
- CI/CD tooling verwacht GitHub

Codeberg:

- Minder integraties
- Soms workarounds nodig
- Kleiner ecosystem

**Impact voor mij:** Vervelend maar workable.

**3. Advanced Features**

GitHub heeft:

- Copilot (AI pair programming)
- Advanced Security features
- Packages / Container Registry
- Dependency graphs

Codeberg heeft:

- Basis Git hosting
- Issues & PRs
- CI/CD (Forgejo Actions)
- Packages (basis)

**Impact voor mij:** Miste features gebruik ik vaak toch niet.

### Wat je Wint

**1. Peace of Mind**

Geen zorgen over:

- Amerikaniserings-risico's
- Privacy-schendingen
- AI-training op mijn code
- Corporate agenda's

**2. Ethisch Beter Gevoel**

Ondersteunen van:

- Non-profit organisaties
- Open source purisme
- Europese digitale soevereiniteit
- Privacy-first principles

**3. Minder Vendor Lock-in**

Omdat Codeberg Forgejo draait:

- Zelf te hosten als het moet
- Migreren naar andere Forgejo instance
- Volledige controle mogelijk

## Mijn Migratieplan (Toekomst)

Ik ga niet overhaast alles verhuizen. Dit is mijn plan:

### Fase 1: Experimenteren (Nu)

- [ ] Account aanmaken op Codeberg
- [ ] Test repo aanmaken
- [ ] CI/CD testen (Forgejo Actions)
- [ ] Mirror een paar projecten

**Doel:** Comfort krijgen met platform.

### Fase 2: Nieuwe Projecten (2025 Q1)

- [ ] Nieuwe projecten starten op Codeberg
- [ ] GitHub als mirror (tijdelijk)
- [ ] Documentatie aanpassen
- [ ] Werkflow optimaliseren

**Doel:** Ervaring opdoen met real projects.

### Fase 3: Migratie Bestaande Projecten (2025 Q2+)

- [ ] Persoonlijke projecten verhuizen
- [ ] Open source projecten migreren
- [ ] GitHub als read-only mirror
- [ ] Community informeren

**Doel:** Volledige switch, GitHub als backup.

### Fase 4: GitHub Verlaten? (TBD)

Dit hangt af van:

- Hoe goed Codeberg bevalt
- Of GitHub verdere zorgen geeft
- Of community mee gaat
- Professionele overwegingen

**Waarschijnlijk:** GitHub als mirror houden voor visibility.

## Praktische Overwegingen

### Migratie is Redelijk Simpel

**Git is gedecentraliseerd:**

```bash
# Huidige remote
git remote -v
origin  https://github.com/user/repo.git

# Voeg Codeberg toe
git remote add codeberg https://codeberg.org/user/repo.git

# Push naar beide
git push origin main
git push codeberg main

# Of maak het primary
git remote set-url origin https://codeberg.org/user/repo.git
git remote add github https://github.com/user/repo.git
```

**Issues & PRs:** Handmatig werk, maar APIs helpen.

### Self-Hosting Optie

Codeberg draait Forgejo (open source):

```bash
# Zelf draaien (als backup)
docker run -d \
  -p 3000:3000 \
  -v forgejo-data:/data \
  codeberg.org/forgejo/forgejo:latest
```

**Ultimate fallback:** Eigen instance.

### GitHub Actions → Forgejo Actions

Largely compatible:

```yaml
# Werkt op beide (meestal)
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm test
```

**Niet 100% compatible, maar close enough.**

## Voor Wie is Codeberg?

### Overweeg Codeberg Als:

- ✅ Je privacy serieus neemt
- ✅ Je zorgen hebt over Amerikaanse tech-dominantie
- ✅ Je open source purisme waardeert
- ✅ Je Europese alternatieven wilt steunen
- ✅ Je vendor lock-in wilt vermijden
- ✅ Je niet per se het grootste platform nodig hebt

### Blijf bij GitHub Als:

- ❌ Je het netwerk effect nodig hebt (networking, recruitment)
- ❌ Je afhankelijk bent van GitHub-exclusive features
- ❌ Je veel externe integraties gebruikt
- ❌ Je team/organisatie is deeply invested in GitHub
- ❌ Je geen energie hebt voor transitie

## De Bredere Context

Dit gaat niet alleen over Git hosting. Het gaat over:

**Digitale Soevereiniteit**

- Europa moet alternatieven hebben
- Niet afhankelijk zijn van Amerikaanse tech
- Eigen platforms ondersteunen

**Open Source Principes**

- Closed platforms voor open source code is vreemd
- Self-hosting moet mogelijk zijn
- Community > Corporation

**Risk Management**

- Single point of failure (GitHub) is een risico
- Diversificatie is gezond
- Backup plans zijn verstandig

## Mijn Conclusie (Voorlopig)

**Ik ga migreren - maar geleidelijk.**

GitHub blijft nuttig voor:

- Visibility / Portfolio
- Professionele projecten
- Community projecten
- Legacy code

Codeberg wordt primary voor:

- Nieuwe persoonlijke projecten
- Privacy-gevoelige code
- Experimenten
- Back-ups

**Best of both worlds, minimize risk.**

## De Meta Ironie (Again)

Deze blog, over migreren van GitHub, staat op een GitHub-gehoste site. 😅

**Maar:** De migration path is clear. En deze blog komt ook naar Codeberg zodra ik migreer.

## Wil Je Ook Kijken?

**Codeberg:** https://codeberg.org  
**Forgejo (zelf hosten):** https://forgejo.org  
**Gitea (alternatief):** https://gitea.io

**Geen haast, geen pressure. Maar het is goed om opties te hebben.**

---

**Update:** Deze blog wordt geüpdatet zodra ik daadwerkelijk migreer. Stay tuned.

**Vorige blog:** [Waarom ik koos voor Docusaurus](/blog/waarom-docusaurus-static-site)

**Gerelateerd:** [Pax Americana](/blog/einde-pax-americana-digitale-soevereiniteit) | [Eurostack](/blog/eurostack-common-ground-europese-samenwerking)
