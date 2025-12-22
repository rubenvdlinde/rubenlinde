# Architecture & Workflow

This document explains how all the pieces of your Docusaurus blog work together.

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Repository                        │
│                   (rubenvdlinde/rubenlinde)                  │
│                                                              │
│  ┌────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   blog/    │  │    docs/     │  │  src/pages/  │       │
│  │  *.md files│  │  *.md files  │  │  *.tsx files │       │
│  └────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  ┌──────────────────────────────────────────────┐          │
│  │         docusaurus.config.js                 │          │
│  │         (Site Configuration)                  │          │
│  └──────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ Push to main branch
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Actions                            │
│              (.github/workflows/deploy.yml)                  │
│                                                              │
│  Step 1: Checkout Code                                      │
│  Step 2: Setup Node.js 18                                   │
│  Step 3: Install Dependencies (npm ci)                      │
│  Step 4: Build Site (npm run build)                         │
│  Step 5: Upload Artifact                                    │
│  Step 6: Deploy to GitHub Pages                             │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ Deployment
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    GitHub Pages                              │
│         https://rubenvdlinde.github.io/rubenlinde/          │
│                                                              │
│         Static HTML, CSS, JS, Images                        │
│         Served via GitHub's CDN                             │
│         Free SSL Certificate                                │
└─────────────────────────────────────────────────────────────┘
                           │
                           │ HTTPS
                           ▼
                    ┌──────────────┐
                    │   Visitors   │
                    │   Browsers   │
                    └──────────────┘
```

## 📝 Content Publishing Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    Local Development                         │
└─────────────────────────────────────────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────┐
    │  1. Write Markdown in blog/ or docs/        │
    │     - Add frontmatter (title, tags, etc)    │
    │     - Write content                          │
    │     - Add images to static/img/             │
    └─────────────────────────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────┐
    │  2. Test Locally                            │
    │     npm start                               │
    │     Preview at localhost:3000               │
    └─────────────────────────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────┐
    │  3. Commit and Push                         │
    │     git add .                               │
    │     git commit -m "New blog post"           │
    │     git push origin main                    │
    └─────────────────────────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────┐
    │  4. Automatic Deployment                    │
    │     GitHub Actions triggered                │
    │     Build process runs                      │
    │     Deploy to GitHub Pages                  │
    └─────────────────────────────────────────────┘
                           │
                           ▼
    ┌─────────────────────────────────────────────┐
    │  5. Live Website Updated                    │
    │     Changes visible in 2-5 minutes          │
    │     https://rubenvdlinde.github.io/...     │
    └─────────────────────────────────────────────┘
```

## 🔄 Build Process Details

### What Happens During Build?

```
npm run build
      │
      ├─> Docusaurus reads configuration
      │   └─> docusaurus.config.js
      │
      ├─> Process Markdown files
      │   ├─> blog/*.md → Blog posts
      │   └─> docs/*.md → Documentation pages
      │
      ├─> Compile React components
      │   └─> src/pages/*.tsx → Static HTML
      │
      ├─> Bundle JavaScript & CSS
      │   ├─> Minification
      │   ├─> Code splitting
      │   └─> Optimization
      │
      ├─> Copy static assets
      │   └─> static/* → build/*
      │
      └─> Generate
          ├─> HTML files (SSG - Static Site Generation)
          ├─> Sitemap.xml
          ├─> RSS feed
          └─> Search index (if enabled)

OUTPUT: build/ directory with static files ready to serve
```

## 🎨 Technology Stack

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend Layer                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  React 18                                                    │
│    └─> UI Components                                        │
│         └─> Docusaurus Components                           │
│              └─> NL Design System Components                │
│                   └─> Utrecht Components                    │
│                        └─> Amsterdam Design Tokens          │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                     Content Layer                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Markdown / MDX                                             │
│    ├─> Blog posts (blog/*.md)                              │
│    ├─> Documentation (docs/*.md)                           │
│    └─> Frontmatter metadata                                │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                     Build Layer                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Docusaurus 3.x                                             │
│    ├─> Static Site Generator                               │
│    ├─> Plugin System                                       │
│    ├─> Theme System                                        │
│    └─> Webpack (bundling)                                  │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                     Deploy Layer                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  GitHub Actions                                             │
│    └─> CI/CD Pipeline                                       │
│         └─> GitHub Pages                                    │
│              └─> CDN (Content Delivery Network)            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## 🔐 Security & Permissions

### GitHub Actions Permissions

The workflow uses minimal required permissions:

```yaml
permissions:
  contents: read      # Read repository files
  pages: write        # Write to GitHub Pages
  id-token: write     # Deploy verification token
```

### What This Means:
- ✅ Cannot modify your repository
- ✅ Cannot access secrets unless explicitly defined
- ✅ Can only deploy to GitHub Pages
- ✅ Secure by default

## 📦 Dependency Management

```
package.json
    │
    ├─> Production Dependencies
    │   ├─> @docusaurus/core
    │   ├─> @docusaurus/preset-classic
    │   ├─> NL Design System packages
    │   ├─> React & React-DOM
    │   └─> Utility libraries (clsx, etc)
    │
    └─> Development Dependencies
        ├─> TypeScript
        ├─> Type definitions
        └─> Docusaurus type packages

npm install → downloads from npm registry → node_modules/
```

## 🌐 Runtime Architecture

### How Visitors Experience Your Site

```
User enters URL
    │
    ▼
GitHub Pages CDN
    │
    ├─> Serves static HTML (fast!)
    ├─> Loads CSS (styled)
    └─> Loads JavaScript (interactive)
         │
         ▼
    React hydration
    (Makes site interactive)
         │
         ├─> Client-side routing (fast page transitions)
         ├─> Dark mode toggle
         └─> Interactive components
```

### Performance Benefits

- **Static HTML**: Fast initial load
- **CDN**: Served from edge locations worldwide
- **Code Splitting**: Only load what's needed
- **Caching**: Browser caches assets
- **No Backend**: No server processing time

## 🔄 Update Cycle

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   Content Update                                         │
│        │                                                 │
│        ▼                                                 │
│   Git Commit                                            │
│        │                                                 │
│        ▼                                                 │
│   Git Push (main)                                       │
│        │                                                 │
│        ▼                                                 │
│   GitHub Actions Trigger ──┐                           │
│        │                    │                           │
│        ▼                    │                           │
│   npm install              │ Parallel                  │
│        │                    │ Execution                 │
│        ▼                    │                           │
│   npm run build             │                           │
│        │                    │                           │
│        ▼                    ▼                           │
│   Generate Static Files  Cache Dependencies            │
│        │                                                 │
│        ▼                                                 │
│   Upload to GitHub Pages                               │
│        │                                                 │
│        ▼                                                 │
│   Deployment Complete                                   │
│        │                                                 │
│        ▼                                                 │
│   Users See New Content (2-5 min delay)               │
│        │                                                 │
│        └──────────────────────────────────────┐        │
│                                                 │        │
│                                                 ▼        │
│                                          Next Update...  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## 🎯 Key Integration Points

### 1. Docusaurus + NL Design System

```
Docusaurus Theme
    │
    ├─> Custom CSS (src/css/custom.css)
    │   └─> NL Design CSS variables
    │
    └─> React Components (src/pages/*.tsx)
        └─> Import Utrecht components
            └─> Styled with Amsterdam tokens
```

### 2. Markdown → HTML

```
blog/my-post.md
    │
    ├─> Frontmatter parsed
    │   ├─> Title, date, authors, tags
    │   └─> Metadata for SEO
    │
    ├─> Markdown → HTML conversion
    │   ├─> Syntax highlighting (Prism)
    │   ├─> Code blocks
    │   └─> Links, images, etc
    │
    └─> Wrapped in React components
        └─> Blog layout
            └─> Navigation, footer, etc
```

### 3. Local Dev → Production

```
Development (npm start)
    ├─> Hot reload
    ├─> Source maps
    ├─> Unminified
    └─> localhost:3000

Production (npm run build)
    ├─> Optimized bundle
    ├─> Minified assets
    ├─> Generated sitemap
    └─> Static HTML for all pages
```

## 📊 File Size & Performance

Typical build output:

```
build/
├─ index.html (5-10 KB)
├─ blog/ (each post 10-50 KB)
├─ docs/ (each page 5-20 KB)
├─ assets/
│  ├─ css/ (50-200 KB total)
│  └─ js/ (200-500 KB total, code-split)
└─ img/ (varies by content)

Total: Usually < 5 MB for entire site
```

## 🚀 Why This Architecture?

### ✅ Advantages

1. **Free Hosting**: GitHub Pages is free for public repos
2. **Fast**: Static files served from CDN
3. **Secure**: No backend to hack, no database to breach
4. **Reliable**: GitHub's infrastructure (99.9%+ uptime)
5. **Version Control**: All content in Git
6. **Easy Updates**: Just push to Git
7. **SEO Friendly**: Static HTML crawlable by search engines
8. **Scalable**: CDN handles traffic spikes

### 🔧 Trade-offs

- ❌ No dynamic content (comments need external service)
- ❌ No real-time updates (5 min deploy time)
- ❌ Limited interactivity (client-side only)

### 💡 Solutions

- Comments: Add Disqus, Giscus, or Utterances
- Forms: Use Formspree, Netlify Forms
- Analytics: Google Analytics, Plausible
- Search: Algolia DocSearch

## 🎓 Learning Path

To understand this architecture better:

1. **Basics**: HTML, CSS, JavaScript, React
2. **Markdown**: Syntax and frontmatter
3. **Git**: Version control basics
4. **Static Site Generators**: Docusaurus concepts
5. **GitHub Actions**: CI/CD fundamentals
6. **GitHub Pages**: Static hosting

## 📚 Further Reading

- [Docusaurus Architecture](https://docusaurus.io/docs/advanced/architecture)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Static Site Generation](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/)
- [NL Design System](https://nldesignsystem.nl/handboek/)

---

**This architecture provides a modern, performant, and maintainable foundation for your blog! 🎉**

