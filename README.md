# Ruben van der Linde - Personal Website & Blog

A serverless personal website and blog built with [Docusaurus](https://docusaurus.io/) and [NL Design System](https://nldesignsystem.nl/), automatically deployed via GitHub Actions.

## 🚀 Features

- **Docusaurus 3.x** - Modern static site generator for documentation and blogs
- **Multilingual Support (i18n)** - Dutch and English with easy language switching
- **Markdown-based** - Write blog posts and documentation in Markdown
- **Serverless Deployment** - Automatically builds and deploys via GitHub Actions
- **GitHub Pages** - Free hosting with custom domain support
- **Network Animation Background** - Interactive animated network visualization
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Blog Tag Filtering** - Filter blog posts by tags on overview page
- **Code Quality Tools** - ESLint, Prettier, and Husky for consistent code

## 📁 Project Structure

```
rubenlinde/
├── website/              # Docusaurus website
│   ├── blog/            # Blog posts in Markdown
│   ├── docs/            # Documentation pages
│   ├── src/             # Custom React components and pages
│   ├── static/          # Static assets (images, files)
│   └── docusaurus.config.js
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── package.json
└── README.md
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The website will be available at `http://localhost:3000`

### Build

```bash
# Create production build
npm run build

# Serve production build locally
npm run serve
```

## 📝 Writing Blog Posts

Blog posts are organized into three categories:

- **`blog/personal/`** - Personal reflections and tutorials
- **`blog/platform-ai-en-overheid/`** - AI & Government topics
- **`blog/conduction/`** - Conduction projects and work

Create a new Markdown file in the appropriate folder:

```markdown
---
slug: my-blog-post
title: My Blog Post Title
authors: [ruben]
tags: [category, tag1, tag2]
---

Your blog post content here...
```

See `blog/README.md` for detailed guidelines on organizing and writing blog posts.

## 🌐 Internationalization (i18n)

This website supports multiple languages using Docusaurus i18n features:

### Supported Languages

- **Dutch (nl)** - Default language
- **English (en)** - Secondary language

### How It Works

The website uses Docusaurus's built-in i18n system with a file-based approach:

#### Default Language (Dutch)

All default content is stored in the main directories:

- `blog/` - Dutch blog posts
- `docs/` - Dutch documentation
- `src/pages/` - Dutch pages

#### Translations (English)

English translations are stored in the `i18n/en/` directory:

- `i18n/en/docusaurus-plugin-content-blog/` - English blog posts
- `i18n/en/docusaurus-plugin-content-docs/` - English documentation
- `i18n/en/docusaurus-plugin-content-pages/` - English pages
- `i18n/en/docusaurus-theme-classic/` - UI translations (navbar, footer)

### Creating Translations

#### 1. Generate Translation Files

```bash
# Generate English translation files for UI components
npm run write-translations -- --locale en
```

This creates JSON files in `i18n/en/docusaurus-theme-classic/` for translating:

- Navbar items
- Footer links
- Button labels
- Other UI elements

#### 2. Translate Blog Posts

To translate a blog post:

1. Copy the Dutch blog post from `blog/` to `i18n/en/docusaurus-plugin-content-blog/`
2. Keep the same filename and date
3. Translate the content
4. Update frontmatter if needed

Example:

```markdown
# Dutch version

blog/personal/2024-12-23-waarom-docusaurus.md

# English version

i18n/en/docusaurus-plugin-content-blog/2024-12-23-why-docusaurus.md
```

#### 3. Translate UI Components

Edit the JSON files in `i18n/en/docusaurus-theme-classic/`:

```json
// i18n/en/docusaurus-theme-classic/navbar.json
{
  "item.label.Blog": {
    "message": "Blog",
    "description": "Navbar item with label Blog"
  }
}
```

### URL Structure

- **Dutch (default)**: `https://www.rubenlinde.nl/blog`
- **English**: `https://www.rubenlinde.nl/en/blog`

### Language Switching

The website features floating control buttons in the top-right corner:

- 🌐 **Language selector** - Click to choose Nederlands or English
- 🌙/☀️ **Theme toggle** - Click to choose Dark or Light mode

These dropdowns are available on all pages and automatically maintain the current page context when switching languages.

### Development with i18n

```bash
# Start dev server with default locale (Dutch)
npm start

# Start dev server with specific locale
npm start -- --locale en

# Build all locales
npm run build

# Build specific locale only
npm run build -- --locale en
```

### File Organization Best Practices

1. **Keep filenames consistent** across locales (same dates, slugs)
2. **Translate tags** in frontmatter for better discoverability
3. **Update JSON files** for all UI elements
4. **Test both locales** before deploying

## 🚢 Deployment

The website automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow:

1. Checks out the repository
2. Installs dependencies
3. Builds the Docusaurus site
4. Deploys to GitHub Pages

## 📄 License

MIT License - feel free to use this setup for your own projects!

## 👤 Author

**Ruben van der Linde**

- Website: [rubenlinde.nl](https://rubenlinde.nl)
- GitHub: [@rubenvdlinde](https://github.com/rubenvdlinde)

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome!
