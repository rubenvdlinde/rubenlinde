# CLAUDE.md — Project Instructions for rubenlinde.nl

## Project Overview

This is **Ruben van der Linde's** personal website and blog, built with **Docusaurus 3.x** and hosted on **GitHub Pages** at [www.rubenlinde.nl](https://www.rubenlinde.nl). The site serves as a professional platform for blogging about open source, AI, digital sovereignty, government technology, and personal developer experiences.

### Tech Stack

- **Framework**: Docusaurus 3.5.2 (React 18, TypeScript 5.3)
- **Languages**: Dutch (default), English (i18n)
- **Deployment**: GitHub Actions → GitHub Pages
- **Quality**: ESLint + Prettier + Husky pre-commit hooks
- **Dev server**: `npm start` (port 4000)
- **Build**: `npm run build`
- **Quality check**: `npm run quality`

---

## Blog Writing Guide

### Blog Structure

```
blog/
├── personal/                      # Personal posts & developer tutorials
├── platform-ai-en-overheid/       # AI & Government policy series
├── conduction/                    # Digital sovereignty, open source, EU policy
└── authors.yml                    # Author configuration (single author: ruben)
```

### File Naming Convention

```
blog/<category>/YYYY-MM-DD-slug-in-dutch.md
```

- Dates in the filename, **never** in the slug
- Slugs are always **Dutch**, hyphenated, keyword-rich, 3-6 words
- Examples: `ai-werking-bubbels`, `einde-pax-americana-digitale-soevereiniteit`, `coalitieakkoord-2026-digitale-soevereiniteit-analyse`

### Frontmatter Template

```yaml
---
slug: descriptive-dutch-slug
title: 'Post Title in Dutch'
authors: [ruben]
tags: [tag1, tag2, category-tag]
description: 'One or two sentences summarizing the post. Used for SEO and social sharing.'
---
```

**Rules:**

- `authors` is always `[ruben]`
- `tags` must include the category anchor tag (see below)
- `description` is recommended for Conduction and longer posts; may be omitted for short series posts
- No `date` field needed — Docusaurus infers from filename

### Tag Conventions Per Category

| Category                    | Anchor Tag                | Common Tags                                                                                                             |
| --------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Personal**                | `personal`                | `open-source`, `soevereiniteit`, `ai`, `development`, `llm`, `n8n`                                                      |
| **Platform AI en Overheid** | `platform-ai-en-overheid` | `ai`, `llm`, `overheid`, `open-source`, `common-ground`, `rag`, `mcp`, `privacy`, `beveiliging`                         |
| **Conduction**              | _(no single anchor)_      | `open-source`, `europa`, `soevereiniteit`, `common-ground`, `eurostack`, `overheid`, `digitale-transformatie`, `fosdem` |

### The `<!--truncate-->` Marker

**Every blog post must include `<!--truncate-->`**. Place it after the opening paragraph(s) and before the first `##` section. This defines what appears in the blog list preview.

---

## Writing Style: The Ruben van der Linde Voice

### Language

- **All blog posts are written in Dutch.**
- English technical terms are integrated naturally into Dutch sentences without translation or bracketed explanations.
- Use Dutch articles with English terms: "de vendor lock-in", "een static site generator", "de single source of truth"
- Technical vocabulary defaults to English: "kill switch", "developer experience", "cloud-first", "attack surface", "force multiplier", "edge cases", "context window", "hot reload"
- Never bracket Dutch after English — the English term IS the default for tech vocabulary.

### Tone Per Category

**Personal blogs:**

- Most informal and enthusiastic. Colloquial Dutch is welcome.
- Developer-to-developer banter: "Geen gedoe — geen updates, geen plugins, geen gezeik"
- Exclamation marks and casual expressions are fine.
- Can include humor and self-deprecation.

**Platform AI en Overheid:**

- Semi-formal but deliberately accessible. Written for non-technical readers.
- Every technical concept must be immediately explained in plain language.
- Example: "Een LLM (Large Language Model) is een rekenmodel dat getraind is op enorme hoeveelheden tekst"
- Measured tone, but still injects personality: "is dus in zekere zin een digitale psychopaat"

**Conduction blogs:**

- Professional but opinionated. Punchy and provocative.
- Analytical rigor combined with bold statements and rhetorical flair.
- Metaphors and analogies are encouraged: tech dependency as a "loverboy-constructie"

**FOSDEM / conference reflections:**

- Literary and introspective. Scene-setting prose with geographic/temporal narrative structure.
- Most polished, essay-style writing.

### Voice

- **First person singular** ("ik") in personal blogs and reflections
- **First person plural** ("we", "wij", "ons") in Conduction and Platform AI blogs — creates shared stakeholder identity with the reader
- **Predominantly active voice** throughout
- Passive voice only sparingly in formal policy contexts: "Besluiten moeten uitlegbaar zijn"

### Sentence Structure

The writing style uses a distinctive **staccato rhythm**:

- **Short declarative sentences for impact**: "Dat is het." / "Absoluut ja." / "De keuze is makkelijk." / "Geen vergelijking."
- **Fragment sentences for rhetorical punch**: "Contractuele afspraken? Irrelevant."
- **Longer sentences** (3-4 clauses) only when explaining complex policy or technical concepts
- **Question-answer pairs** as structural devices: "Dus wat is het probleem?" followed by the answer

### Anti-AI schrijfpatronen

Vermijd deze patronen die AI-gegenereerde tekst verraden:

- **Geen em-dashes (—) in lopende tekst.** Gebruik punten, komma's of dubbele punten. Em-dashes in zinnen zijn een typisch AI-patroon. Enige uitzondering: bij opsommingen met bold-lead items (`- **Label** — uitleg`).
- **Geen title case in koppen.** Alleen het eerste woord en eigennamen krijgen een hoofdletter. Fout: "## Zelf Bouwen vs. Aansluiten". Goed: "## Zelf bouwen vs. aansluiten".
- **Geen overbodige bijzinnen tussen streepjes.** Waar een AI schrijft "Dit project — dat al drie jaar draait — is succesvol", schrijf je "Dit project draait al drie jaar en is succesvol."
- **Geen dubbele punten als scheidingsteken in koppen** tenzij het echt een opsomming inleidt.

### Signature Rhetorical Devices

1. **"Laten we eerlijk zijn"** — The author's signature phrase. Used across the majority of posts as a rhetorical pivot to honest assessment. Use it naturally but don't force it into every post.

2. **Rhetorical questions**: "Maar waarom? Welke data zijn gebruikt? Zit er bias in?" / "Je kunt niet hacken wat er niet is."

3. **Extended metaphors and analogies**: Tech dependency as "loverboy-constructie", AI without data as "een auto zonder benzine". These run through entire posts, not just single sentences.

4. **Direct address**: "Hé, Europa!" / "Stel je voor" / "Laten we eerlijk zijn"

5. **Concrete persona-based storytelling**: When illustrating citizen impact, use named fictional personas: "Frans, de groenteboer", "Startende Sara (zzp'er)", "Senior Ans (70)"

6. **Historical parallels**: Connect current events to historical precedents (Truman/Trump, Windows 95 vs. open source today)

7. **Irony and self-awareness**: "De Meta Ironie: Deze blog, over migreren van GitHub, staat op een GitHub-gehoste site."

8. **"De vraag is niet of... maar hoe snel"** — Recurring framing for urgency arguments

### Paragraph Structure

- **Short paragraphs** (1-4 sentences) are the norm
- **Single-sentence paragraphs** for emphasis: "**Dat is het.**" / "**Absoluut ja.**"
- Longer paragraphs (5-8 sentences) only in Platform AI en Overheid when explaining complex concepts
- Lists, code blocks, tables, and diagrams break up longer prose

### How Posts Open

Two dominant patterns — choose based on category:

1. **Scenario/question hook** (preferred for policy/Conduction posts):
   - "Stel je voor: een ambtenaar krijgt een AI-advies over een uitkeringsaanvraag."
   - "Stel je voor: een overheid die miljoenen investeert in IT-projecten"

2. **Bold declarative statement** (preferred for opinionated posts):
   - "Oké we weten het nu wel, we kunnen niet langer op Amerika vertrouwen"

3. **Scene-setting narrative** (conference reflections only):
   - "De trein dendert door het Belgische landschap. Buiten glijden weilanden voorbij..."

### How Posts Close

1. **Short punchy summary**: "De keuze is makkelijk." / "Publiek geld voor publiek goed — de tijd is nu."
2. **Forward pointer**: "Volgende blog in deze serie:" with a link (especially in the Platform AI series)
3. **"Gerelateerd" section**: Links to related blog posts or external resources
4. **Rhetorical challenge**: "Begin nu — voordat je wakker wordt en ontdekt dat je data allang niet meer van jou is."

---

## Content Structure Conventions

### Header Hierarchy

- **H1 (`#`)**: One per post, matches or closely matches the frontmatter title
- **H2 (`##`)**: Primary section headers (6-15 per post). Phrased as statements or questions: "Wat is AI Eigenlijk?" / "De Paradox: Volwassenheid Ontstaat Door Gebruik"
- **H3 (`###`)**: Subsection headers. Often numbered: "1. Geopolitieke Onafhankelijkheid" / "Fase 1: Basis Setup (Week 1)"
- **H4 (`####`)**: Sparingly, only in deeply technical posts

### Lists

Lists are used **heavily** and are a core part of the style:

- **Bold-lead bullet lists** (most common): `- **Kwaliteit**: Claude Sonnet 3.5/4 is _extreem_ goed`
- **Numbered lists** for sequential steps or ranked items
- **Comparison tables** (markdown tables) for side-by-side analysis
- **Emoji-prefixed lists** using checkmarks and crosses for pros/cons (sparingly)

### Code Blocks and Diagrams

- **Personal/technical blogs**: Heavy use of code blocks (bash, YAML, TSX, CSS, JavaScript, PHP)
- **Policy blogs**: Minimal code; use **Mermaid diagrams** instead for flowcharts, sequence diagrams, and graphs
- **Mermaid is enabled** in docusaurus.config.js — use ````mermaid` blocks
- ASCII-style flow diagrams as fallback in non-technical posts: `Markdown bestanden -> Build proces -> Statische HTML`

### Sources and References

**Footnoted references** (`[^N]`) are the standard for policy and Conduction blogs:

```markdown
[^1]: **Rijksoverheid** - [Titel van het document](https://url)
```

Sources include: government documents (Rijksoverheid, VNG), academic institutions (Rathenau Instituut), EU legislation (AI Act), news outlets (iBestuur, AD, Guardian), and occasionally social media posts.

**Inline links** and **"Gerelateerd" sections** supplement footnotes and are used in personal blogs.

### Series Architecture (Platform AI en Overheid)

The Platform AI en Overheid blogs form a deliberate sequential series with:

- An `:::info Platform AI en Overheid` admonition block at the top linking to platformaienoverheid.nl
- "Volgende blog in deze serie:" navigation at the bottom
- A standardized "Componenten" section listing relevant EuroStack components (SovereignAI, DataCommons, EuroOS, n8n, Flowable, Ollama, Hugging Face)

### Draft/Concept Status

Use Docusaurus admonition blocks for draft status:

```markdown
:::warning Status: Concept
Dit artikel is nog in ontwikkeling.
:::
```

---

## Target Audiences

### Personal Blogs

- **Audience**: Fellow developers and tech enthusiasts
- **Assumed knowledge**: High. Comfortable with CLI, Git, npm, React, Docker, TypeScript
- **Tone**: Casual, developer-to-developer
- **CTA pattern**: "Wil Je Dit Ook?" sections with GitHub links and setup commands. "Clone, pas aan, push, klaar."

### Platform AI en Overheid

- **Audience**: Government officials, policy makers, municipal IT staff
- **Assumed knowledge**: Low to moderate. Every technical term explained.
- **Tone**: Accessible semi-formal. Educational but not condescending.
- **CTA pattern**: Soft pointers to next posts in series, links to government resources (regels.overheid.nl)
- **References**: Government-specific concepts (Awb, BRP, BAG, WMO, DigiD) are used but assumed familiar to the audience

### Conduction Blogs

- **Audience**: Government decision-makers, public sector IT professionals, open source community members
- **Assumed knowledge**: Moderate. Familiarity with Dutch government IT landscape, vendor relationships, European policy frameworks
- **Tone**: Professional, opinionated, provocative
- **CTA pattern**: Action lists aimed at municipalities: "Wat kunnen gemeenten nu doen?" with numbered steps. Policy CTAs at European, national, and local levels.

---

## Recurring Themes and Stances

When writing as Ruben, maintain these consistent positions:

1. **Digital sovereignty is non-negotiable**: Europe must build its own tech stack. This is the dominant theme across 14 of 17 posts.
2. **"Publiek geld, publieke code"**: Open source in government is a democratic imperative, not a technical preference.
3. **Anti-vendor-lock-in**: Microsoft is the primary foil. The ICC incident is the canonical cautionary tale. Use the term "Foreign Tech" (not "Big Tech").
4. **Human in the loop**: AI advises, humans decide. Central to all AI/government posts.
5. **Common Ground**: The Dutch model for collaborative open source government IT. Referenced frequently as a positive example.
6. **Pragmatic honesty about trade-offs**: "Laten we eerlijk zijn over de trade-offs" — acknowledge downsides openly, never strawman opposing views.
7. **Urgency framing**: "De vraag is niet of... maar hoe snel" — the window for action is closing. Reference geopolitical events (Greenland, tariffs, Cloud Act).
8. **Cost comparisons**: Nearly every post includes economic arguments (WordPress vs Docusaurus costs, cloud vs local AI costs, open source vs Microsoft licensing).

---

## Post Length Guidelines

| Category                    | Typical Length                   | Range           |
| --------------------------- | -------------------------------- | --------------- |
| **Personal**                | Very long (technical deep-dives) | 400–2,500 lines |
| **Platform AI en Overheid** | Medium                           | 85–200 lines    |
| **Conduction**              | Medium to long                   | 100–540 lines   |

---

## Emojis

- Used **sparingly and deliberately**
- Acceptable in comparison tables (checkmark/cross)
- Acceptable for emphasis in casual personal posts
- Never in formal policy analysis (coalitieakkoord, FOSDEM reflection)
- Do not add emojis unless they serve a clear purpose

---

## Quick Reference: Creating a New Blog Post

1. Choose the correct category folder
2. Create file: `blog/<category>/YYYY-MM-DD-slug.md`
3. Add frontmatter with slug, title, authors, tags, and optional description
4. Write opening paragraph(s)
5. Add `<!--truncate-->` marker
6. Write content with proper header hierarchy
7. Add footnoted references where applicable
8. Close with a punchy summary and/or "Gerelateerd" section
9. Run `npm run quality` before committing
