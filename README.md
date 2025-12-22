# Ruben Linde - Personal Website & Blog

A serverless personal website and blog built with [Docusaurus](https://docusaurus.io/) and [NL Design System](https://nldesignsystem.nl/), automatically deployed via GitHub Actions.

## 🚀 Features

- **Docusaurus 3.x** - Modern static site generator for documentation and blogs
- **NL Design System** - Dutch government design system for accessible and consistent UI
- **Markdown-based** - Write blog posts and documentation in Markdown
- **Serverless Deployment** - Automatically builds and deploys via GitHub Actions
- **GitHub Pages** - Free hosting with custom domain support

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

## 🚢 Deployment

The website automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow:

1. Checks out the repository
2. Installs dependencies
3. Builds the Docusaurus site
4. Deploys to GitHub Pages

## 📄 License

MIT License - feel free to use this setup for your own projects!

## 👤 Author

**Ruben van de Linde**

- Website: [rubenlinde.nl](https://rubenlinde.nl)
- GitHub: [@rubenvdlinde](https://github.com/rubenvdlinde)

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome!
