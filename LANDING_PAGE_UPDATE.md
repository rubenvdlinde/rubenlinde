# Landing Page & Code Quality Update

## Overview

This update transforms the Docusaurus website with a modern, animated landing page and comprehensive code quality tools.

## 🎨 Design Changes

### Color Scheme

- **Primary Color**: Dark Blue (#1e3a8a / #3b82f6 for dark mode)
- **Secondary Color**: Dark Orange (#ea580c / #fb923c for dark mode)
- Updated all theme colors to match the new scheme
- Improved dark mode contrast for better readability

### Hero Section

- **Animated Network Background**: Custom React component showing data traveling between nodes
  - Blue particles representing network nodes
  - Orange connections showing data flow
  - Animated data packets traveling along connections
  - Fully responsive and performance-optimized
- **Gradient Title**: Blue to orange gradient with animation
- **Two CTA Buttons**:
  - Primary: "Lees Mijn Blog" (gradient blue/orange)
  - Secondary: "Documentatie" (outlined)
- **Social Media Links**:
  - GitHub: https://github.com/rubenvdlinde
  - LinkedIn: https://www.linkedin.com/in/rubenlinde/
  - X (Twitter): https://x.com/rubenlinde
  - Instagram: https://www.instagram.com/rubenlinde1985/
  - Circular buttons with orange accent color
  - Hover effects with lift and glow
  - Glass-morphism effect with backdrop blur

### Features Section

- **6 Feature Cards** with icons and descriptions:
  - 💻 Software Development
  - 📚 Knowledge Sharing
  - 🚀 Open Source
  - 🤖 AI & Innovation
  - 🌍 Digital Sovereignty
  - 🔒 Security & Privacy
- Responsive grid layout
- Hover animations (lift effect)
- Left border accent in orange
- Shadow effects for depth

### Responsive Design

- Mobile-friendly hero section
- Adaptive feature grid
- Font size adjustments for mobile

## 🔧 Code Quality Tools

### ESLint

- **Configuration**: `.eslintrc.js`
- **Plugins**:
  - @typescript-eslint
  - react
  - react-hooks
- **Scripts**:
  - `npm run lint` - Check for issues
  - `npm run lint:fix` - Auto-fix issues

### Prettier

- **Configuration**: `.prettierrc.js`
- **Settings**:
  - 2 spaces indentation
  - Single quotes
  - Semicolons
  - 80 character line width
- **Scripts**:
  - `npm run format` - Format all files
  - `npm run format:check` - Check formatting

### TypeScript

- Type checking enabled
- `npm run type-check` - Run type checks

### Husky Pre-commit Hooks

- Automatically runs before each commit
- Lints and formats staged files
- Prevents commits with errors
- Configuration in `.husky/pre-commit`

### Lint-staged

- Only checks/formats files that are staged for commit
- Faster pre-commit checks
- Configuration in `package.json`

## 🚀 CI/CD Updates

### GitHub Actions Workflow

Updated `.github/workflows/deploy.yml` to include:

1. **Lint Job** (runs first):
   - ESLint checks
   - Prettier format checks
   - TypeScript type checks

2. **Build Job** (runs after lint passes):
   - Installs dependencies
   - Builds Docusaurus site
   - Uploads artifact

3. **Deploy Job** (runs after build):
   - Deploys to GitHub Pages

All quality checks must pass before deployment!

## 📦 New Dependencies

### Runtime

- No new runtime dependencies added

### Development

- `@typescript-eslint/eslint-plugin` - TypeScript linting
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `eslint` - JavaScript linting
- `eslint-config-prettier` - Disable conflicting ESLint rules
- `eslint-plugin-react` - React-specific linting
- `eslint-plugin-react-hooks` - React Hooks linting
- `husky` - Git hooks
- `lint-staged` - Run linters on staged files
- `prettier` - Code formatter

## 📁 New Files

### Components

- `src/components/NetworkBackground.tsx` - Animated network visualization

### Configuration

- `.eslintrc.js` - ESLint configuration
- `.prettierrc.js` - Prettier configuration
- `.eslintignore` - ESLint ignore patterns
- `.prettierignore` - Prettier ignore patterns
- `.husky/pre-commit` - Pre-commit hook script

### Documentation

- `docs/code-quality.md` - Code quality tools guide

## 🎯 NPM Scripts

```json
{
  "lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\" \"blog/**/*.{js,jsx,ts,tsx,md,mdx}\"",
  "lint:fix": "eslint ... --fix",
  "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md,mdx,css}\"",
  "format:check": "prettier --check ...",
  "type-check": "tsc --noEmit",
  "quality": "npm run lint && npm run format:check && npm run type-check",
  "prepare": "husky install"
}
```

## 🌐 View the Site

**Local development:**

```bash
npm start
```

**Production build:**

```bash
npm run build
npm run serve -- --port 4000
```

Then visit: http://localhost:4000/rubenlinde/

## ✨ Key Features

1. **Stunning Visual Design**: Animated network background creates an engaging first impression
2. **Modern Color Scheme**: Professional dark blue and vibrant orange combination
3. **Improved UX**: Clear CTAs, hover effects, responsive layout
4. **Code Quality**: Automated linting, formatting, and type checking
5. **Developer Experience**: Pre-commit hooks prevent bad code from being committed
6. **CI/CD Safety**: Quality checks in GitHub Actions prevent deployment of broken code

## 🔄 Migration Notes

- Removed NL Design System dependencies (were causing conflicts)
- All existing functionality preserved
- New landing page is backward compatible
- No breaking changes to existing blog posts or documentation

## 📝 Next Steps

1. Test the site locally on port 4000
2. Review and adjust colors if needed
3. Customize feature cards content
4. Add more animations if desired
5. Configure ESLint rules to your preferences
6. Push to GitHub to see CI/CD in action

## 🐛 Troubleshooting

**If linting fails:**

```bash
npm run lint:fix
npm run format
```

**If pre-commit hooks don't run:**

```bash
npm run prepare
```

**If build fails:**

```bash
npm run quality  # Check all issues
```

Enjoy your new fabulous landing page! 🎉
