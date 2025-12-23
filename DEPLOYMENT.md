# GitHub Pages Deployment Guide

This guide walks you through deploying your Docusaurus website to GitHub Pages using GitHub Actions.

## Prerequisites

- Repository pushed to GitHub
- GitHub account with access to repository settings

## Step-by-Step Deployment

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/rubenvdlinde/rubenlinde`
2. Click on **Settings** (top navigation)
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions** from the dropdown

![GitHub Pages Settings](https://docs.github.com/assets/images/help/pages/publishing-source-drop-down.png)

### Step 2: Verify Workflow File

The repository already includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. This workflow:

- ✅ Triggers on push to `main` branch
- ✅ Builds the Docusaurus site
- ✅ Deploys to GitHub Pages
- ✅ Uses proper permissions and caching

### Step 3: Update Configuration (if needed)

If your GitHub username or repository name differs, update `docusaurus.config.js`:

```javascript
// Update these values to match your GitHub account
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/YOUR_REPO_NAME/',
organizationName: 'YOUR_USERNAME',
projectName: 'YOUR_REPO_NAME',
```

For this project:

- url: `https://rubenvdlinde.github.io`
- baseUrl: `/rubenlinde/`
- organizationName: `rubenvdlinde`
- projectName: `rubenlinde`

### Step 4: Push to Main Branch

If you have not pushed your code yet:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Docusaurus setup with NL Design System"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/rubenvdlinde/rubenlinde.git

# Push to main branch
git push -u origin main
```

### Step 5: Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run called "Deploy Docusaurus to GitHub Pages"
3. Click on it to see the build progress
4. Wait for both the "Build Docusaurus" and "Deploy to GitHub Pages" jobs to complete (green checkmarks)

### Step 6: Access Your Website

Once deployed, your website will be available at:

```
https://rubenvdlinde.github.io/rubenlinde/
```

It may take a few minutes for the site to become available after the first deployment.

## Automatic Deployments

From now on, every time you push to the `main` branch:

1. GitHub Actions automatically triggers
2. The site is built
3. The new version is deployed to GitHub Pages

## Custom Domain (Optional)

If you want to use a custom domain:

### 1. Add CNAME File

Create a file at `static/CNAME` with your domain:

```
rubenlinde.nl
```

### 2. Configure DNS

Add these DNS records at your domain registrar:

For apex domain (`rubenlinde.nl`):

```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
```

For www subdomain (`www.rubenlinde.nl`):

```
CNAME rubenvdlinde.github.io
```

### 3. Update Docusaurus Config

Update `docusaurus.config.js`:

```javascript
url: 'https://rubenlinde.nl',
baseUrl: '/',
```

### 4. Configure in GitHub

1. Go to **Settings** > **Pages**
2. Under **Custom domain**, enter your domain
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **Enforce HTTPS** (after DNS propagates)

## Troubleshooting

### Build Fails

**Check the Actions log:**

1. Go to Actions tab
2. Click on the failed workflow
3. Expand the failed step to see error messages

**Common issues:**

- Broken markdown links
- Missing images
- Invalid frontmatter in blog posts
- Syntax errors in config files

**Fix:**

```bash
# Test build locally first
npm run build

# If it succeeds locally, the issue is with your git push
# If it fails, fix the errors shown
```

### 404 Error on Deployment

**Verify baseUrl:**

- If using GitHub Pages without custom domain, `baseUrl` must be `/repository-name/`
- If using custom domain, `baseUrl` should be `/`

### Images Not Loading

Make sure images are in the `static/` folder and referenced correctly:

```markdown
# Correct

![Image](/img/my-image.png)

# Incorrect

![Image](../static/img/my-image.png)
```

### Styles Not Applied

1. Clear browser cache
2. Check browser console for errors
3. Verify CSS files in `src/css/` are valid

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the site
npm run build

# Deploy using Docusaurus deploy command
GIT_USER=rubenvdlinde npm run deploy
```

This will build and push to the `gh-pages` branch.

## Workflow Customization

The GitHub Actions workflow (`.github/workflows/deploy.yml`) can be customized:

### Deploy on Specific Branches

```yaml
on:
  push:
    branches:
      - main
      - production # Add more branches
```

### Add Build Cache

Already included! The workflow uses:

```yaml
- uses: actions/setup-node@v4
  with:
    cache: npm # Caches npm dependencies
```

### Run Tests Before Deploy

Add a test step:

```yaml
- name: Run tests
  run: npm test
```

## Security

The workflow uses minimal permissions:

```yaml
permissions:
  contents: read # Read repository
  pages: write # Write to GitHub Pages
  id-token: write # Deploy verification
```

## Next Steps

After successful deployment:

1. ✅ Set up custom domain (optional)
2. ✅ Add more blog posts
3. ✅ Customize styling
4. ✅ Set up analytics (optional)
5. ✅ Add sitemap.xml (Docusaurus generates this automatically)
6. ✅ Submit to search engines

## Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docusaurus Deployment Guide](https://docusaurus.io/docs/deployment)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Support

If you encounter issues:

1. Check the [GitHub Actions logs](https://github.com/rubenvdlinde/rubenlinde/actions)
2. Review [Docusaurus troubleshooting](https://docusaurus.io/docs/installation#problems)
3. Open an issue in the repository

Happy deploying! 🚀
