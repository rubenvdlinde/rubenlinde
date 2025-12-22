# Docusaurus Quick Reference

## Common Commands

```bash
# Development
npm start                  # Start dev server at localhost:3000
npm run build              # Create production build
npm run serve              # Serve production build locally
npm run clear              # Clear cache

# Docusaurus Specific
npm run docusaurus --help  # See all commands
npm run swizzle            # Customize components
```

## Project Structure

```
rubenlinde/
├── blog/                  # Blog posts (.md or .mdx)
│   ├── authors.yml       # Author information
│   └── *.md              # Blog post files
├── docs/                  # Documentation pages
├── src/
│   ├── css/
│   │   └── custom.css    # Custom styles
│   ├── pages/            # Custom React pages
│   └── components/       # Reusable React components
├── static/               # Static files (copied to build/)
│   └── img/             # Images and assets
├── docusaurus.config.js  # Main configuration
├── sidebars.js          # Docs sidebar configuration
└── package.json         # Dependencies and scripts
```

## Blog Post Template

```markdown
---
slug: url-friendly-slug
title: Your Blog Post Title
authors: [ruben]  # Reference to authors.yml
tags: [tag1, tag2, tag3]
date: 2024-12-22
---

Brief introduction that appears in the list...

<!--truncate-->

Full blog post content goes here...
```

## Documentation Page Template

```markdown
---
sidebar_position: 1
sidebar_label: 'Custom Label'
---

# Page Title

Your content here...
```

## Markdown Features

### Code Blocks

\`\`\`javascript title="example.js"
function hello() {
  console.log('Hello World!');
}
\`\`\`

### Admonitions

:::note
This is a note
:::

:::tip
This is a tip
:::

:::info
This is info
:::

:::caution
This is a caution
:::

:::danger
This is a warning
:::

### Images

```markdown
![Alt text](/img/image.png)
```

### Links

```markdown
[Link text](https://example.com)
[Internal link](/docs/intro)
```

## Configuration Tips

### Adding a Page to Navbar

Edit `docusaurus.config.js`:

```javascript
navbar: {
  items: [
    {
      to: '/custom-page',
      label: 'Custom Page',
      position: 'left',
    },
  ],
}
```

### Changing Theme Colors

Edit `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #your-color;
}
```

### Adding External Scripts

In `docusaurus.config.js`:

```javascript
module.exports = {
  scripts: [
    {
      src: 'https://example.com/script.js',
      async: true,
    },
  ],
};
```

## Useful Links

- [Docusaurus Documentation](https://docusaurus.io/)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [NL Design System](https://nldesignsystem.nl/)

## Troubleshooting

### Clear Cache
```bash
npm run clear
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check Build Locally
```bash
npm run build
npm run serve
```

