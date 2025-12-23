# Code Quality Tools

This project uses several tools to maintain code quality and consistency.

## Tools

### ESLint

ESLint checks for code quality issues and potential bugs in JavaScript/TypeScript files.

**Run linting:**

```bash
npm run lint
```

**Auto-fix issues:**

```bash
npm run lint:fix
```

### Prettier

Prettier formats code to maintain consistent style across the project.

**Check formatting:**

```bash
npm run format:check
```

**Auto-format files:**

```bash
npm run format
```

### TypeScript

TypeScript provides static type checking for better code safety.

**Run type checking:**

```bash
npm run type-check
```

### Run All Checks

To run all quality checks at once:

```bash
npm run quality
```

## Pre-commit Hooks

This project uses Husky to run automatic checks before each commit. The pre-commit hook will:

- Run ESLint on staged files
- Format code with Prettier
- Prevent commits if there are linting errors

## CI/CD Integration

The GitHub Actions workflow automatically runs:

1. Linting checks
2. Format checks
3. Type checks
4. Build verification

All checks must pass before deployment to GitHub Pages.

## Configuration Files

- `.eslintrc.js` - ESLint configuration
- `.prettierrc.js` - Prettier configuration
- `.eslintignore` - Files to ignore for linting
- `.prettierignore` - Files to ignore for formatting
- `.husky/pre-commit` - Pre-commit hook script

## Customization

You can customize the rules in `.eslintrc.js` and formatting options in `.prettierrc.js` according to your preferences.
