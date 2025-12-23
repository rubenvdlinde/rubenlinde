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

## Hoe Ik Het Gebouwd Heb: Technische Details

Nu je weet waarom ik voor Docusaurus koos, laat ik zien hoe ik het daadwerkelijk heb gebouwd. Dit is een complete walkthrough van design beslissingen naar implementatie.

### Fase 1: Basis Setup (Week 1)

**Initiele Setup**

```bash
npx create-docusaurus@latest rubenlinde classic --typescript
cd rubenlinde
npm install
```

Direct een Git repository opgezet:

```bash
git init
git add .
git commit -m "Initial Docusaurus setup"
```

**GitHub Actions voor Deployment**

Eerste belangrijke stap: automatische deployment naar GitHub Pages.

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Docusaurus to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  lint:
    name: Lint and Format Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run quality

  build:
    needs: lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v3
        with:
          name: github-pages
          path: build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          publish_branch: gh-pages
```

**Resultaat:** Elke git push naar main triggert automatisch een build en deploy. Binnen 2-3 minuten staat de nieuwe versie live.

**Blog Structuur**

Ik wilde mijn blogs georganiseerd houden, dus maakte ik categorieën:

```
blog/
├── personal/              # Persoonlijke reflecties
├── platform-ai-en-overheid/  # AI & overheid blogs
└── conduction/           # Work-related blogs
```

Elke blog kreeg metadata in de frontmatter:

```markdown
---
slug: waarom-docusaurus-static-site
title: Waarom ik koos voor Docusaurus
authors: [ruben]
tags: [personal, docusaurus, static-site, webdev]
---
```

### Fase 2: Code Quality Tools (Week 1)

Als developer wil ik code quality vanaf dag 1. Dus installeerde ik:

**ESLint + Prettier**

```bash
npm install --save-dev eslint prettier @typescript-eslint/parser
```

`.eslintrc.js`:

```javascript
module.exports = {
  extends: ['plugin:@docusaurus/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['build', '.docusaurus', 'node_modules'],
};
```

**Husky + Lint-Staged**

Pre-commit hooks om altijd geformatteerde code te committen:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

`.husky/pre-commit`:

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

`package.json`:

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,mdx,css}": ["prettier --write"]
  }
}
```

**Resultaat:** Onmogelijk om slecht geformatteerde code te committen. Elke commit is clean.

### Fase 3: Design Systeem (Week 2)

Tijd om het er mooi uit te laten zien. Ik wilde een **retro terminal theme** met een futuristisch netwerk als achtergrond.

**Kleurenschema**

Gekozen voor:

- **Primair:** Donkerblauw (`#1e3a8a`)
- **Accent:** Donker oranje (`#ea580c`)
- **Achtergrond:** Zwart met transparante overlays

`src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #1e3a8a;
  --ifm-color-secondary: #ea580c;
  --ifm-background-color: #000000;
}

[data-theme='dark'] {
  --ifm-background-color: #0a0a0a;
  --ifm-navbar-background-color: rgba(15, 23, 42, 0.8);
}
```

**Terminal-Style Feature Cards**

Ik wilde dat mijn expertise sectie eruitzag als een terminal. Dus maakte ik custom components:

`src/components/TerminalFeature.tsx`:

```tsx
import React, { useState, useEffect } from 'react';

export default function TerminalFeature({ title, description, icon, delay }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      const interval = setInterval(() => {
        if (index <= description.length) {
          setDisplayedText(description.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 30);
    }, delay);

    return () => clearTimeout(timer);
  }, [description, delay]);

  return (
    <div className="feature-card">
      <h3 className="feature-card__title">
        <span className="feature-card__icon">{icon}</span>
        {title}
      </h3>
      <p className="feature-card__description">
        {displayedText}
        {isTyping && <span className="typing-cursor">_</span>}
      </p>
    </div>
  );
}
```

CSS voor terminal effect:

```css
.feature-card {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(5px);
  border: 1px solid var(--ifm-color-secondary);
  border-radius: 8px;
  padding: 2rem;
  color: white;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.feature-card__title {
  color: var(--ifm-color-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.typing-cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
```

**Resultaat:** Elke expertise card typt zichzelf uit met een 1.5 seconde delay tussen elke card. Ziet er sick uit! 🔥

### Fase 4: Network Animation Background (Week 2-3)

Dit was de meest complexe feature. Ik wilde een geanimeerde netwerk achtergrond op elke pagina.

**Concept:**

- Nodes (punten) die random bewegen
- Lijnen tussen nodes die dichtbij elkaar zijn
- Oranje "data packets" die langs de lijnen reizen
- Smooth animatie op 60fps

**Implementatie:**

`src/components/NetworkBackground.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Setup
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create nodes
    const nodeCount = 50;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slow movement
        vy: (Math.random() - 0.5) * 0.2,
      });
    }

    const dataPackets: DataPacket[] = [];
    const maxDistance = 150;

    // Animation loop
    function animate() {
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas!.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas!.height) node.vy *= -1;

        // Draw node
        ctx!.fillStyle = '#1e3a8a';
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx!.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;

          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx!.strokeStyle = `rgba(30, 58, 138, ${
              1 - distance / maxDistance
            })`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(node.x, node.y);
            ctx!.lineTo(otherNode.x, otherNode.y);
            ctx!.stroke();
          }
        });
      });

      // Spawn data packets
      if (Math.random() > 0.995) {
        const from = Math.floor(Math.random() * nodes.length);
        const to = Math.floor(Math.random() * nodes.length);
        if (from !== to) {
          dataPackets.push({ fromNode: from, toNode: to, progress: 0 });
        }
      }

      // Animate data packets
      dataPackets.forEach((packet, index) => {
        packet.progress += 0.01;

        if (packet.progress >= 1) {
          dataPackets.splice(index, 1);
          return;
        }

        const from = nodes[packet.fromNode];
        const to = nodes[packet.toNode];
        const x = from.x + (to.x - from.x) * packet.progress;
        const y = from.y + (to.y - from.y) * packet.progress;

        ctx!.fillStyle = '#ea580c';
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = '#ea580c';
        ctx!.beginPath();
        ctx!.arc(x, y, 4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    const handleResize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="networkBackground"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
```

**Global Implementation:**

Om de animatie op elke pagina te tonen, maakte ik een Root wrapper:

`src/theme/Root.tsx`:

```tsx
import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import NetworkBackground from '../components/NetworkBackground';
import FloatingControls from '../components/FloatingControls';
import DarkModeWelcome from '../components/DarkModeWelcome';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const isHomepage = location.pathname === '/';
    if (isHomepage) {
      document.body.classList.add('homepage-root');
    } else {
      document.body.classList.remove('homepage-root');
    }
  }, [location.pathname]);

  return (
    <>
      <NetworkBackground />
      <FloatingControls />
      <DarkModeWelcome />
      {children}
    </>
  );
}
```

**Resultaat:** Site-wide geanimeerde netwerk achtergrond die smooth draait op 60fps. Looks incredible! 🚀

### Fase 5: Command Animation (Week 3)

Voor de expertise sectie wilde ik een "terminal command" simulatie voordat de cards verschijnen.

**Concept:**

```
$ cat expertise.txt
cat: expertise.txt: Permission denied

$ sudo cat expertise.txt
[expertise cards verschijnen]
```

**Implementatie:**

`src/components/TypingCommand.tsx`:

```tsx
import React, { useState, useEffect } from 'react';

export default function TypingCommand({ onComplete, delay = 0 }) {
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  const allSteps = [
    { text: '$ cat expertise.txt', type: 'command' },
    { text: 'cat: expertise.txt: Permission denied', type: 'error' },
    { text: '$ sudo cat expertise.txt', type: 'command' },
  ];

  useEffect(() => {
    if (currentStepIndex >= allSteps.length) return;

    const step = allSteps[currentStepIndex];
    let index = 0;

    const interval = setInterval(
      () => {
        if (index <= step.text.length) {
          setCurrentText(step.text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
          setSteps((prev) => [...prev, step]);
          setCurrentText('');

          setTimeout(
            () => {
              if (currentStepIndex < allSteps.length - 1) {
                setCurrentStepIndex(currentStepIndex + 1);
              } else {
                setTimeout(() => {
                  setSteps([]); // Clear all commands
                  onComplete(); // Show cards
                }, 300);
              }
            },
            step.type === 'error' ? 1000 : 500
          );
        }
      },
      step.type === 'error' ? 40 : 80
    );

    return () => clearInterval(interval);
  }, [currentStepIndex, onComplete]);

  return (
    <div style={{ minHeight: '2.5rem' }}>
      {steps.map((step, index) => (
        <h2
          key={index}
          style={{
            color: step.type === 'error' ? '#ff4444' : '#ea580c',
            fontFamily: 'Courier New, monospace',
            textTransform: 'uppercase',
          }}
        >
          {step.text}
        </h2>
      ))}
      {currentText && (
        <h2 style={{ color: '#ea580c' }}>
          {currentText}
          <span className="typing-cursor">_</span>
        </h2>
      )}
    </div>
  );
}
```

**Homepage integratie:**

```tsx
export default function Home() {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <Layout>
      <HomepageHeader />
      <main>
        <section className="features-section">
          <TypingCommand onComplete={() => setShowFeatures(true)} />
          <div style={{ opacity: showFeatures ? 1 : 0 }}>
            {showFeatures && <TerminalFeatures />}
          </div>
        </section>
      </main>
    </Layout>
  );
}
```

**Resultaat:** Eerst zie je de "permission denied" grap, dan sudo, dan verschijnen de cards. Developers love it! 😄

### Fase 6: Dark Mode Welcome Modal (Week 3)

Ik wilde force dark mode op eerste bezoek, met een leuke modal voor light mode users.

`src/components/DarkModeWelcome.tsx`:

```tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function DarkModeWelcome() {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    if (!isHomepage) return;

    const hasSeenModal = localStorage.getItem('darkmode-welcome-seen');
    if (hasSeenModal) return;

    // Force dark mode
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');

    // Show modal if browser prefers light
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (!prefersDark) {
      setShowModal(true);
    } else {
      localStorage.setItem('darkmode-welcome-seen', 'true');
    }
  }, [isHomepage]);

  const handleSwitchToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    localStorage.setItem('darkmode-welcome-seen', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="darkmode-modal-overlay">
      <div className="darkmode-modal">
        <h2>🌙 Welcome to the Dark Side</h2>
        <p>
          We&apos;ve set your experience to <strong>dark mode</strong> for the
          true developer experience.
        </p>
        <p>Also everything just looks much cooler in darkmode.</p>
        <button onClick={handleSwitchToLight}>☀️ Switch to Light Mode</button>
        <button onClick={() => setShowModal(false)}>
          Stay in Dark Mode ✨
        </button>
      </div>
    </div>
  );
}
```

**Resultaat:** First-time bezoekers krijgen dark mode + een leuke modal. Perfect voor developer audience! 🌙

### Fase 7: Blog Cards & Tag Filtering (Week 4)

Standard Docusaurus blog list was te basic. Ik wilde custom cards met tag filtering.

**Custom Blog Card Component:**

`src/components/BlogCard.tsx`:

```tsx
import React from 'react';
import Link from '@docusaurus/Link';

export default function BlogCard({
  title,
  permalink,
  date,
  author,
  description,
  status,
  tags,
  readingTime,
}) {
  return (
    <div className="blog-card">
      <div className="blog-card__header">
        <img
          src={author.imageURL}
          alt={author.name}
          className="blog-card__avatar"
        />
        <div>
          <div className="blog-card__author">{author.name}</div>
          <div className="blog-card__meta">
            {author.title} • {date} • {readingTime} min read
          </div>
        </div>
      </div>
      {status && <div className="blog-card__status">{status}</div>}
      <Link to={permalink} className="blog-card__link">
        <h2 className="blog-card__title">{title}</h2>
      </Link>
      <p className="blog-card__description">{description}</p>
      <div className="blog-card__tags">
        {tags?.map((tag) => (
          <span key={tag.label} className="blog-card__tag">
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
```

**Custom Blog List Page met Tag Filter:**

`src/theme/BlogListPage/index.tsx`:

```tsx
import React, { useState, useMemo } from 'react';
import BlogCard from '@site/src/components/BlogCard';

export default function BlogListPage({ items }) {
  const [selectedTag, setSelectedTag] = useState(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set();
    items.forEach(({ content }) => {
      content.metadata.tags?.forEach((tag) => tagSet.add(tag.label));
    });
    return Array.from(tagSet).sort();
  }, [items]);

  // Filter items based on selected tag
  const filteredItems = useMemo(() => {
    if (!selectedTag) return items;
    return items.filter(({ content }) =>
      content.metadata.tags?.some((tag) => tag.label === selectedTag)
    );
  }, [items, selectedTag]);

  return (
    <BlogLayout>
      <div className="blog-tags-filter">
        <h2>Filter op Tags</h2>
        <div className="blog-tags-filter__tags">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={selectedTag === tag ? 'active' : ''}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTag && (
          <button onClick={() => setSelectedTag(null)}>✕ Wis Filter</button>
        )}
      </div>

      <div>
        {filteredItems.map(({ content }) => (
          <BlogCard key={content.metadata.permalink} {...content.metadata} />
        ))}
      </div>
    </BlogLayout>
  );
}
```

**Resultaat:** Mooie blog cards met realtime tag filtering. UX is top! 🎯

### Fase 8: Internationalisatie (i18n) (Week 5)

Laatste grote feature: meertalige support voor Nederlands en Engels.

**Docusaurus Config:**

`docusaurus.config.js`:

```javascript
module.exports = {
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
  },
};
```

**File Structuur:**

```
blog/                          # Nederlands (default)
├── personal/
└── platform-ai-en-overheid/

i18n/
└── en/                        # Engels
    ├── docusaurus-plugin-content-blog/
    │   └── 2024-12-23-why-docusaurus.md
    ├── docusaurus-theme-classic/
    │   ├── navbar.json
    │   └── footer.json
    └── docusaurus-plugin-content-pages/
        └── index.json
```

**Custom Language Switcher:**

`src/components/FloatingControls.tsx`:

```tsx
import React, { useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function FloatingControls() {
  const { colorMode, setColorMode } = useColorMode();
  const { i18n } = useDocusaurusContext();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  return (
    <div className="floating-controls">
      {/* Language Selector */}
      <div className="floating-control-wrapper">
        <button onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}>
          🌐
        </button>
        {showLanguageDropdown && (
          <div className="floating-dropdown">
            <Link
              to="/nl"
              className={i18n.currentLocale === 'nl' ? 'active' : ''}
            >
              🇳🇱 Nederlands
            </Link>
            <Link
              to="/en"
              className={i18n.currentLocale === 'en' ? 'active' : ''}
            >
              🇬🇧 English
            </Link>
          </div>
        )}
      </div>

      {/* Theme Toggle */}
      <div className="floating-control-wrapper">
        <button onClick={() => setShowThemeDropdown(!showThemeDropdown)}>
          {colorMode === 'dark' ? '🌙' : '☀️'}
        </button>
        {showThemeDropdown && (
          <div className="floating-dropdown">
            <button
              onClick={() => setColorMode('dark')}
              className={colorMode === 'dark' ? 'active' : ''}
            >
              🌙 Dark Mode
            </button>
            <button
              onClick={() => setColorMode('light')}
              className={colorMode === 'light' ? 'active' : ''}
            >
              ☀️ Light Mode
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

**Resultaat:** Floating dropdowns rechtsboven voor language + theme switching. Works everywhere! 🌐

### Fase 9: Custom Domain (Week 5)

Laatste stap: custom domain `www.rubenlinde.nl`.

**DNS Setup:**

```
# A records voor apex domain
rubenlinde.nl.    A    185.199.108.153
rubenlinde.nl.    A    185.199.109.153
rubenlinde.nl.    A    185.199.110.153
rubenlinde.nl.    A    185.199.111.153

# CNAME voor www
www.rubenlinde.nl.    CNAME    rubenvdlinde.github.io.
```

**GitHub Pages Setup:**

```
Settings → Pages → Custom domain: www.rubenlinde.nl
```

**CNAME File:**

`static/CNAME`:

```
www.rubenlinde.nl
```

**Docusaurus Config Update:**

```javascript
module.exports = {
  url: 'https://www.rubenlinde.nl',
  baseUrl: '/',
};
```

**Resultaat:** Site draait nu op custom domain met gratis HTTPS via GitHub Pages! 🎉

## Performance Metrics

Na alles te hebben gebouwd, wat zijn de metrics?

**Lighthouse Scores:**

```
Performance:  98/100
Accessibility: 100/100
Best Practices: 100/100
SEO:          100/100
```

**Load Times:**

- First Contentful Paint: **0.8s**
- Largest Contentful Paint: **1.2s**
- Total Page Load: **1.5s**

**vs. Vergelijkbare WordPress Sites:**

- Average FCP: 2.5s (3x slower)
- Average LCP: 4s (3.3x slower)
- Average Load: 5-8s (4-5x slower)

**Bundle Size:**

```
build/
├── index.html         4 KB
├── main.js            42 KB (gzipped)
├── vendors.js         156 KB (gzipped)
└── styles.css         12 KB (gzipped)

Total: ~214 KB gzipped
```

WordPress average: ~1.5 MB (7x larger)

## Wat Het Me Kostte

**Tijd:**

- Week 1: Basis setup + CI/CD (8 uur)
- Week 2: Design systeem + terminal theme (12 uur)
- Week 3: Network animation + command animation (16 uur)
- Week 4: Blog cards + tag filtering (6 uur)
- Week 5: i18n + custom domain (4 uur)

**Totaal: ~46 uur**

Maar dit was inclusief experimenteren, leren, en fun hebben met animaties.

Voor een basic Docusaurus blog zonder fancy animations: **~10 uur**.

**Kosten:**

- Domain: **€12/jaar** (eenmalig)
- Hosting: **€0/maand** (GitHub Pages)
- Development: **€0** (open source tools)

**Totaal: €1/maand**

**vs. WordPress:**

- Managed WordPress hosting: €25-50/maand
- Premium theme: €60 (eenmalig)
- Premium plugins: €100-200/jaar
- Domain: €12/jaar

**Totaal: €300-600/jaar**

## Geleerde Lessen

**Wat Goed Werkte:**

1. **GitHub Actions voor deployment** - Zero-touch deployment is a game changer
2. **TypeScript + ESLint** - Vangt bugs voordat ze live gaan
3. **Component-based design** - Easy to maintain en uitbreiden
4. **Canvas API voor animaties** - Performanter dan DOM manipulatie
5. **Docusaurus plugin systeem** - Easy om features toe te voegen

**Wat Ik Zou Veranderen:**

1. **Network animation** - Misschien te complex, WebGL zou performanter zijn
2. **Custom theme components** - Meer documentatie lezen voor ik override
3. **Tag filtering** - Had eerder moeten implementeren, nu moest ik refactoren
4. **i18n** - Direct vanaf start hadden opzetten, nu moest ik files verplaatsen

**Onverwachte Uitdagingen:**

1. **Full-width layouts** - Docusaurus's container CSS was lastig te overriden
2. **Homepage navbar hiding** - CSS specificity wars met `!important`
3. **Git LF/CRLF** - Windows vs Linux line endings (oplossing: `.gitattributes`)
4. **Node version in CI** - GitHub Actions gebruikt oude Node (oplossing: specify v20)

## Conclusie na Bouwen

Nu ik het hele ding heb gebouwd, zou ik het weer doen?

**Absoluut ja.**

Het eindresultaat is:

- **Supersnel** - 98/100 Lighthouse
- **Uniek** - Geen enkele andere Docusaurus site ziet er zo uit
- **Maintainable** - Clean code, goed gedocumenteerd
- **Gratis** - €0/maand hosting
- **Fun** - Developers die het zien vinden het sick

**Voor wie is dit?**

✅ Developers die een portfolio site willen
✅ Anyone die Markdown + Git prefereert boven CMS
✅ Mensen die performance belangrijk vinden
✅ Iedereen die experimenteert met design

❌ Niet-technische users die een visuele editor nodig hebben
❌ Sites met complexe backend requirements
❌ Teams zonder Git/development workflow

**Next Steps:**

De complete code staat op [GitHub](https://github.com/rubenvdlinde/rubenlinde).

```bash
git clone https://github.com/rubenvdlinde/rubenlinde.git
cd rubenlinde
npm install
npm start
```

Fork it, customize it, make it your own!

---

**Volgende blog:** Waarom ik migreer naar Codeberg (en jij misschien ook zou moeten)

**Gerelateerd:**

- [Docusaurus.io](https://docusaurus.io)
- [JAMstack](https://jamstack.org/)
- [GitHub Repository](https://github.com/rubenvdlinde/rubenlinde)
