---
slug: waarom-docusaurus-static-site
title: Why I Chose Docusaurus Over WordPress
authors: [ruben]
tags: [docusaurus, static-site, open-source, personal, webdev, jamstack]
---

# Why I Chose Docusaurus Over WordPress

When I decided to rebuild my blog, I had a choice: a dynamic CMS like WordPress, or a static site generator. I chose Docusaurus. Here's why.

<!--truncate-->

:::warning Status: Concept
This blog post is still in concept phase and may be further developed.
:::

## The Choice: WordPress or Static Site?

For most people starting a blog, WordPress is the first thing that comes to mind. And rightfully so - it's proven, user-friendly, and has a massive ecosystem. But for my use case, it was overkill.

### What I Needed

Let's be honest about what I wanted:

- **Post blogs** - nothing more
- **Write in Markdown** - my favorite format
- **Version control** - because I'm a developer
- **No hassle** - no updates, no plugins, no BS

### What WordPress Offers

WordPress is fantastic, but it offers much that I didn't need:

- Database (for what? static content)
- Admin interface (I can use VS Code just fine)
- Plugin ecosystem (sounds nice, until you need to update)
- PHP backend (another runtime to maintain)
- Comments system (can use external service)

**Conclusion:** 90% of WordPress functionality I wouldn't use.

## Why Static Site Generators

A static site generator like Docusaurus does this:

```
Markdown files → Build process → Static HTML
```

**That's it.** No database queries during page load. No PHP runtime. Just HTML, CSS and JavaScript.

### The Advantages I Was Looking For

**1. Less Maintenance**

WordPress:

```
- Database updates
- WordPress core updates
- Plugin updates
- Theme updates
- PHP version updates
- Security patches
- Backup management
```

Docusaurus:

```
- npm update (once every few months)
- Git push (deploy is automatic)
```

**2. Pure Markdown**

I already write everything in Markdown. Why would I use a WYSIWYG editor that then generates HTML I don't want?

````markdown
# Heading

Text with **bold** and _italic_.

```code
Code blocks without plugins
```
````

Just works.

**3. Speed**

WordPress must on every page load:

- Query database
- Execute PHP
- Generate HTML
- Caching (hopefully)

Docusaurus:

- Serve static HTML
- **That's it.**

Result: load times in milliseconds instead of seconds.

**4. Cost: €0 per month**

WordPress hosting:

- Shared hosting: ~€5/month
- VPS: ~€10-20/month
- Managed WordPress: ~€25+/month

Docusaurus on GitHub Pages:

- **€0/month**
- Unlimited bandwidth
- HTTPS free
- Global CDN

**5. Attack Surface**

WordPress is a popular target:

- SQL injection attempts
- Brute force on /wp-admin
- Plugin vulnerabilities
- Theme exploits

Docusaurus:

- No database to hack
- No admin login to brute force
- No PHP to exploit
- **Only static files**

You can't hack what isn't there.

## But WordPress Can Do X, Y, Z!

Yes, that's true. Let's be honest about the trade-offs.

### What You Lose

**Dynamic Content**

- No "popular posts" widget
- No real-time comments (but via Disqus/Giscus)
- No user accounts
- No dynamic filtering

**For my blog?** Doesn't matter. I post text.

**User-Friendly Admin**

- No visual editor
- No drag-and-drop
- No "click and ready"

**For me?** Doesn't matter. I write in VS Code.

**Plugins**

- No SEO plugins (but Docusaurus has built-in SEO)
- No contact forms (can use Formspree)
- No fancy widgets

**For this site?** Doesn't matter. I don't need it.

### What You Get

**Developer Experience**

```bash
# Run locally
npm start

# New blog
touch blog/personal/2024-12-23-my-post.md

# Publish
git add .
git commit -m "New blog"
git push

# DONE - GitHub Actions does the rest
```

**Version Control**

Every change is tracked:

```bash
git log blog/
git diff HEAD~1
git revert <commit>
```

Try doing that with a WordPress database.

**Local Development**

```bash
npm start
```

Hot reload, instant feedback, no remote database needed.

**CI/CD Out of the Box**

GitHub Actions workflow:

```yaml
Push to main
↓
Automatic build
↓
Deploy to GitHub Pages
↓
Live within 2 minutes
```

## Why Specifically Docusaurus?

There are more static site generators: Jekyll, Hugo, Gatsby, Next.js. Why Docusaurus?

### 1. React-Based

I know React. If I want custom components, I can just write React:

```tsx
import MyCustomComponent from '@site/src/components/MyComponent';

<MyCustomComponent data="whatever" />;
```

### 2. Docs + Blog

Docusaurus is built for documentation and blogs. Perfect for my use case:

- Technical blogs
- Project documentation
- Everything in one place

### 3. MDX Support

Markdown + JSX = MDX:

```mdx
# Regular Markdown

<CustomComponent prop="value">But with React components!</CustomComponent>

## Continue with markdown
```

### 4. Built-in Features

Without plugins you get:

- Search (Algolia)
- Versioning (for docs)
- i18n (multilingual)
- Dark mode
- SEO
- RSS feeds
- Syntax highlighting

### 5. Facebook Backing

Docusaurus is from Facebook/Meta. That means:

- Active development
- Large community
- Long-term support
- Good documentation

## How I Built It: Technical Deep Dive

Now that you know why I chose Docusaurus, let me show you how I actually built it. This is a complete walkthrough from design decisions to implementation.

### Phase 1: Basic Setup (Week 1)

**Initial Setup**

```bash
npx create-docusaurus@latest rubenlinde classic --typescript
cd rubenlinde
npm install
```

Immediately set up a Git repository:

```bash
git init
git add .
git commit -m "Initial Docusaurus setup"
```

**GitHub Actions for Deployment**

First important step: automatic deployment to GitHub Pages.

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

**Result:** Every git push to main automatically triggers a build and deploy. Live within 2-3 minutes.

**Blog Structure**

I wanted to keep my blogs organized, so I created categories:

```
blog/
├── personal/              # Personal reflections
├── platform-ai-en-overheid/  # AI & government blogs
└── conduction/           # Work-related blogs
```

Each blog got metadata in the frontmatter:

```markdown
---
slug: why-docusaurus-static-site
title: Why I Chose Docusaurus
authors: [ruben]
tags: [personal, docusaurus, static-site, webdev]
---
```

### Phase 2: Code Quality Tools (Week 1)

As a developer, I want code quality from day 1. So I installed:

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

Pre-commit hooks to always commit formatted code:

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

**Result:** Impossible to commit poorly formatted code. Every commit is clean.

### Phase 3: Design System (Week 2)

Time to make it look good. I wanted a **retro terminal theme** with a futuristic network background.

**Color Scheme**

Chose:

- **Primary:** Dark blue (`#1e3a8a`)
- **Accent:** Dark orange (`#ea580c`)
- **Background:** Black with transparent overlays

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

I wanted my expertise section to look like a terminal. So I made custom components:

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

CSS for terminal effect:

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

**Result:** Each expertise card types itself out with a 1.5 second delay between each card. Looks sick! 🔥

### Phase 4: Network Animation Background (Week 2-3)

This was the most complex feature. I wanted an animated network background on every page.

**Concept:**

- Nodes (dots) that move randomly
- Lines between nodes that are close together
- Orange "data packets" traveling along the lines
- Smooth animation at 60fps

**Implementation:**

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

To show the animation on every page, I made a Root wrapper:

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

**Result:** Site-wide animated network background running smooth at 60fps. Looks incredible! 🚀

### Phase 5: Command Animation (Week 3)

For the expertise section, I wanted a "terminal command" simulation before the cards appear.

**Concept:**

```
$ cat expertise.txt
cat: expertise.txt: Permission denied

$ sudo cat expertise.txt
[expertise cards appear]
```

**Implementation:**

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

**Homepage integration:**

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

**Result:** First you see the "permission denied" joke, then sudo, then the cards appear. Developers love it! 😄

### Phase 6: Dark Mode Welcome Modal (Week 3)

I wanted to force dark mode on first visit, with a nice modal for light mode users.

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

**Result:** First-time visitors get dark mode + a nice modal. Perfect for developer audience! 🌙

### Phase 7: Blog Cards & Tag Filtering (Week 4)

Standard Docusaurus blog list was too basic. I wanted custom cards with tag filtering.

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

**Custom Blog List Page with Tag Filter:**

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
        <h2>Filter by Tags</h2>
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
          <button onClick={() => setSelectedTag(null)}>✕ Clear Filter</button>
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

**Result:** Beautiful blog cards with real-time tag filtering. UX is top! 🎯

### Phase 8: Internationalization (i18n) (Week 5)

Last major feature: multilingual support for Dutch and English.

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

**File Structure:**

```
blog/                          # Dutch (default)
├── personal/
└── platform-ai-en-overheid/

i18n/
└── en/                        # English
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

**Result:** Floating dropdowns at top-right for language + theme switching. Works everywhere! 🌐

### Phase 9: Custom Domain (Week 5)

Final step: custom domain `www.rubenlinde.nl`.

**DNS Setup:**

```
# A records for apex domain
rubenlinde.nl.    A    185.199.108.153
rubenlinde.nl.    A    185.199.109.153
rubenlinde.nl.    A    185.199.110.153
rubenlinde.nl.    A    185.199.111.153

# CNAME for www
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

**Result:** Site now runs on custom domain with free HTTPS via GitHub Pages! 🎉

## Performance Metrics

After building everything, what are the metrics?

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

**vs. Comparable WordPress Sites:**

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

## What It Cost Me

**Time:**

- Week 1: Basic setup + CI/CD (8 hours)
- Week 2: Design system + terminal theme (12 hours)
- Week 3: Network animation + command animation (16 hours)
- Week 4: Blog cards + tag filtering (6 hours)
- Week 5: i18n + custom domain (4 hours)

**Total: ~46 hours**

But this included experimenting, learning, and having fun with animations.

For a basic Docusaurus blog without fancy animations: **~10 hours**.

**Costs:**

- Domain: **€12/year** (one-time)
- Hosting: **€0/month** (GitHub Pages)
- Development: **€0** (open source tools)

**Total: €1/month**

**vs. WordPress:**

- Managed WordPress hosting: €25-50/month
- Premium theme: €60 (one-time)
- Premium plugins: €100-200/year
- Domain: €12/year

**Total: €300-600/year**

## Lessons Learned

**What Worked Well:**

1. **GitHub Actions for deployment** - Zero-touch deployment is a game changer
2. **TypeScript + ESLint** - Catches bugs before they go live
3. **Component-based design** - Easy to maintain and extend
4. **Canvas API for animations** - More performant than DOM manipulation
5. **Docusaurus plugin system** - Easy to add features

**What I Would Change:**

1. **Network animation** - Maybe too complex, WebGL would be more performant
2. **Custom theme components** - Read more documentation before overriding
3. **Tag filtering** - Should have implemented earlier, had to refactor
4. **i18n** - Should have set up from start, had to move files

**Unexpected Challenges:**

1. **Full-width layouts** - Docusaurus's container CSS was hard to override
2. **Homepage navbar hiding** - CSS specificity wars with `!important`
3. **Git LF/CRLF** - Windows vs Linux line endings (solution: `.gitattributes`)
4. **Node version in CI** - GitHub Actions uses old Node (solution: specify v20)

## Conclusion After Building

Now that I've built the whole thing, would I do it again?

**Absolutely yes.**

The end result is:

- **Super fast** - 98/100 Lighthouse
- **Unique** - No other Docusaurus site looks like this
- **Maintainable** - Clean code, well documented
- **Free** - €0/month hosting
- **Fun** - Developers who see it think it's sick

**Who is this for?**

✅ Developers who want a portfolio site
✅ Anyone who prefers Markdown + Git over CMS
✅ People who value performance
✅ Anyone experimenting with design

❌ Non-technical users who need a visual editor
❌ Sites with complex backend requirements
❌ Teams without Git/development workflow

**Next Steps:**

The complete code is on [GitHub](https://github.com/rubenvdlinde/rubenlinde).

```bash
git clone https://github.com/rubenvdlinde/rubenlinde.git
cd rubenlinde
npm install
npm start
```

Fork it, customize it, make it your own!

---

**Next blog:** Why I'm Migrating to Codeberg (and maybe you should too)

**Related:**

- [Docusaurus.io](https://docusaurus.io)
- [JAMstack](https://jamstack.org/)
- [GitHub Repository](https://github.com/rubenvdlinde/rubenlinde)
