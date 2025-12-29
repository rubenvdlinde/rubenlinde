# Setup Guide

This guide will help you get your Docusaurus blog up and running locally and deployed to GitHub Pages.

## Prerequisites

- Node.js 18.x or higher
- npm (comes with Node.js)
- Git
- GitHub account

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rubenvdlinde/rubenlinde.git
cd rubenlinde
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the necessary packages including:

- Docusaurus 3.x
- NL Design System components
- React and other dependencies

### 3. Start Development Server

```bash
npm start
```

Your site will be available at `http://localhost:3000`. The development server has hot-reload enabled, so changes you make will be reflected immediately.

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` directory.

To test the production build locally:

```bash
npm run serve
```

## GitHub Pages Deployment

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Configure Repository Settings

Make sure the following settings in `docusaurus.config.js` match your repository:

```javascript
url: 'https://rubenvdlinde.github.io',
baseUrl: '/rubenlinde/',
organizationName: 'rubenvdlinde',
projectName: 'rubenlinde',
```

### 3. Push to Main Branch

The GitHub Actions workflow is configured to automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 4. Check Deployment Status

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run for "Deploy Docusaurus to GitHub Pages"
3. Once completed (green checkmark), your site will be live!

Your site will be available at: `https://rubenvdlinde.github.io/rubenlinde/`

## Writing Content

### Blog Posts

Create new blog posts in the `blog/` directory:

```markdown
---
slug: my-post-slug
title: My Post Title
authors:
  - name: Ruben van der Linde
    title: Software Developer
    url: https://github.com/rubenvdlinde
    image_url: https://github.com/rubenvdlinde.png
tags: [tag1, tag2]
---

Your introduction here...

<!--truncate-->

Your full content here...
```

### Documentation Pages

Create new documentation pages in the `docs/` directory:

```markdown
---
sidebar_position: 1
---

# Page Title

Your content here...
```

## Customization

### Changing Colors

Edit `src/css/custom.css` to customize the color scheme:

```css
:root {
  --ifm-color-primary: #2e8555;
  /* ... other color variables */
}
```

### Updating Site Info

Edit `docusaurus.config.js` to change:

- Site title and tagline
- Navigation items
- Footer links
- Social media links

### Adding Images

Place images in the `static/img/` directory and reference them in your markdown:

```markdown
![Alt text](/img/my-image.png)
```

## Troubleshooting

### Build Failures

If the build fails:

1. Check the Actions tab for error messages
2. Make sure all markdown files have valid frontmatter
3. Ensure all links are valid

### Local Development Issues

If `npm start` fails:

1. Delete `node_modules/` and run `npm install` again
2. Clear the cache: `npm run clear`
3. Make sure you are using Node.js 18.x or higher

## Need Help?

- [Docusaurus Documentation](https://docusaurus.io/)
- [NL Design System](https://nldesignsystem.nl/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

Happy blogging! 🚀
