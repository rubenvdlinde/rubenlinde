---
slug: waarom-docusaurus-static-site
title: Waarom ik koos voor Docusaurus in plaats van WordPress
authors: [ruben]
tags: [personal, docusaurus, static-site, webdev, jamstack]
---

# Waarom ik koos voor Docusaurus in plaats van WordPress

Toen ik besloot om mijn blog opnieuw op te zetten, had ik een keuze: een dynamisch CMS zoals WordPress, of een static site generator. Ik koos voor Docusaurus. Dit is waarom.

<!--truncate-->

:::warning Status: Concept
Deze blog is nog in concept-fase en wordt mogelijk nog aangepast voor publicatie.
:::

## De Keuze: WordPress of Static Site?

Voor de meeste mensen die een blog willen starten, is WordPress het eerste waar ze aan denken. En terecht - het is bewezen, gebruiksvriendelijk, en heeft een enorm ecosysteem. Maar voor mijn use case was het overkill.

### Wat ik nodig had

Laten we eerlijk zijn over wat ik wilde:

- **Blogs posten** - meer niet
- **Markdown schrijven** - mijn favoriete format
- **Versiecontrole** - want ik ben developer
- **Geen gedoe** - geen updates, geen plugins, geen gezeik

### Wat WordPress biedt

WordPress is fantastisch, maar het biedt veel dat ik niet nodig had:

- Database (voor wat? statische content)
- Admin interface (ik kan prima in VS Code)
- Plugin ecosysteem (klinkt leuk, tot je updaten moet)
- PHP backend (weer een runtime te onderhouden)
- Comments systeem (kan ook met externe service)

**Conclusie:** 90% van WordPress functionaliteit gebruikte ik niet.

## Waarom Static Site Generators

Een static site generator zoals Docusaurus doet dit:

```
Markdown bestanden → Build proces → Statische HTML
```

**Dat is het.** Geen database queries tijdens pageload. Geen PHP runtime. Gewoon HTML, CSS en JavaScript.

### De Voordelen die Ik Zocht

**1. Minder Onderhoud**

WordPress:

```
- Database updates
- WordPress core updates
- Plugin updates
- Theme updates
- PHP versie updates
- Security patches
- Backup management
```

Docusaurus:

```
- npm update (1x per paar maanden)
- Git push (deploy is automatisch)
```

**2. Pure Markdown**

Ik schrijf toch al alles in Markdown. Waarom zou ik een WYSIWYG editor gebruiken die vervolgens HTML genereert die ik niet wil?

````markdown
# Kop

Tekst met **bold** en _italic_.

```code
Code blocks zonder plugins
```
````

Gewoon werken.

````

**3. Snelheid**

WordPress moet bij elke pageload:
- Database querien
- PHP uitvoeren
- HTML genereren
- Caching (hopelijk)

Docusaurus:
- Statische HTML serveren
- **Dat is het.**

Resultaat: laadtijden in milliseconden in plaats van seconden.

**4. Kosten: €0 per maand**

WordPress hosting:
- Gedeelde hosting: ~€5/maand
- VPS: ~€10-20/maand
- Managed WordPress: ~€25+/maand

Docusaurus op GitHub Pages:
- **€0/maand**
- Onbeperkte bandwidth
- HTTPS gratis
- CDN global

**5. Attack Surface**

WordPress is een populair doelwit:
- SQL injection pogingen
- Brute force op /wp-admin
- Plugin vulnerabilities
- Theme exploits

Docusaurus:
- Geen database om te hacken
- Geen admin login om te bruten
- Geen PHP om te exploiten
- **Alleen statische files**

Je kunt niet hacken wat er niet is.

## Maar WordPress kan X, Y, Z!

Ja, dat klopt. Laten we eerlijk zijn over de trade-offs.

### Wat je Verliest

**Dynamische Content**
- Geen "populaire posts" widget
- Geen real-time comments (wel via Disqus/Giscus)
- Geen user accounts
- Geen dynamische filtering

**Voor mijn blog?** Maakt niet uit. Ik post tekst.

**User-Friendly Admin**
- Geen visuele editor
- Geen drag-and-drop
- Geen "klik en klaar"

**Voor mij?** Maakt niet uit. Ik schrijf in VS Code.

**Plugins**
- Geen SEO plugins (maar Docusaurus heeft ingebouwde SEO)
- Geen contact forms (kan met Formspree)
- Geen fancy widgets

**Voor deze site?** Maakt niet uit. Ik heb het niet nodig.

### Wat je Krijgt

**Developer Experience**

```bash
# Lokaal draaien
npm start

# Nieuwe blog
touch blog/personal/2024-12-23-mijn-post.md

# Publiceren
git add .
git commit -m "Nieuwe blog"
git push

# KLAAR - GitHub Actions doet de rest
````

**Versiecontrole**

Elke wijziging is getraceerd:

```bash
git log blog/
git diff HEAD~1
git revert <commit>
```

Probeer dat maar eens met een WordPress database.

**Lokaal Ontwikkelen**

```bash
npm start
```

Hot reload, instant feedback, geen remote database nodig.

**CI/CD uit de Doos**

GitHub Actions workflow:

```yaml
Push naar main
↓
Automatic build
↓
Deploy naar GitHub Pages
↓
Live binnen 2 minuten
```

## Waarom Specifiek Docusaurus?

Er zijn meer static site generators: Jekyll, Hugo, Gatsby, Next.js. Waarom Docusaurus?

### 1. React-Based

Ik ken React. Als ik custom components wil, kan ik gewoon React schrijven:

```tsx
import MyCustomComponent from '@site/src/components/MyComponent';

<MyCustomComponent data="whatever" />;
```

### 2. Docs + Blog

Docusaurus is gebouwd voor documentatie én blogs. Perfect voor mijn use case:

- Technische blogs
- Documentatie voor projecten
- Alles in één plek

### 3. MDX Support

Markdown + JSX = MDX:

```mdx
# Gewone Markdown

<CustomComponent prop="value">Maar met React components!</CustomComponent>

## Gewoon verder met markdown
```

### 4. Built-in Features

Zonder plugins krijg je:

- Search (Algolia)
- Versioning (voor docs)
- i18n (meertalig)
- Dark mode
- SEO
- RSS feeds
- Syntax highlighting

### 5. Facebook Backing

Docusaurus is van Facebook/Meta. Dat betekent:

- Actieve ontwikkeling
- Grote community
- Lange termijn support
- Goede documentatie

## De Praktische Realiteit

### Mijn Workflow Nu

**Nieuwe blog schrijven:**

```bash
# 1. Maak bestand
code blog/personal/2024-12-23-mijn-post.md

# 2. Schrijf in markdown
---
slug: mijn-post
title: Mijn Post
tags: [tag1, tag2]
---

Content hier...

# 3. Test lokaal
npm start

# 4. Publiceer
git push

# 5. KLAAR
```

**Totale tijd:** 0 minuten setup, oneindig schrijven.

### Vergelijk met WordPress

**WordPress workflow:**

```
1. Log in op wp-admin
2. Wacht tot pagina laadt
3. Klik "New Post"
4. Wacht tot editor laadt
5. Schrijf in visuele editor (of wissel naar code)
6. Vecht met formatting
7. Preview
8. Publish
9. Check of het er goed uitziet
10. Ajd, toch niet - terug naar editor
```

**Geen vergelijking.**

## Voor Wie is Dit?

### Static Site Generator is Perfect Als:

- ✅ Je content vooral statisch is (blogs, docs)
- ✅ Je bekend bent met Git/command line
- ✅ Je in Markdown schrijft
- ✅ Je weinig onderhoud wilt
- ✅ Je gratis hosting zoekt
- ✅ Je performance belangrijk vindt
- ✅ Je security serieus neemt

### WordPress is Beter Als:

- ❌ Je niet-technische editors hebt
- ❌ Je veel dynamische features nodig hebt
- ❌ Je geen terminal wilt gebruiken
- ❌ Je een visuele editor essentieel vindt
- ❌ Je veel plugins echt nodig hebt

## Mijn Conclusie

Voor mijn persoonlijke blog was de keuze simpel:

**WordPress = Overkill**

- Te veel features die ik niet gebruik
- Te veel onderhoud
- Te veel kosten
- Te veel attack surface

**Docusaurus = Perfect Fit**

- Doet precies wat ik nodig heb
- Geen onderhoud gedoe
- Gratis hosting
- Veilig by design
- Developer-friendly

## De Meta Ironie

Dit blog post, over waarom ik Docusaurus gebruik, is geschreven in Markdown, met Git versioned, automatisch gebouwd door GitHub Actions, en gehost gratis op GitHub Pages.

**Probeer dat maar eens met WordPress.** 😉

## Wil Je Dit Ook?

De complete setup staat op [GitHub](https://github.com/rubenvdlinde/rubenlinde).

Clone, pas aan, push, klaar.

**Totale setup tijd:** 30 minuten  
**Maandelijkse kosten:** €0  
**Onderhoud per maand:** ~15 minuten

Versus WordPress:

- Setup: 2-3 uur (met hosting regelen, installeren, configureren)
- Kosten: €60-300/jaar
- Onderhoud: Uren per maand (updates, backups, security)

**De keuze is makkelijk.**

---

**Volgende blog:** Waarom ik migreer naar Codeberg (en jij misschien ook zou moeten)

**Gerelateerd:** [Docusaurus.io](https://docusaurus.io) | [JAMstack](https://jamstack.org/)
