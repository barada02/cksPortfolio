# Deploying Your Portfolio to GitHub Pages

This document provides step-by-step instructions for deploying this React/TypeScript portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Setup Steps

### 1. Create a GitHub Repository

If you haven't already, create a GitHub repository named `cksPortfolio` (or your preferred name).

### 2. Configure Your Project for GitHub Pages

#### Update vite.config.ts

Ensure your `vite.config.ts` includes the base path matching your repository name:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cksPortfolio/', // Change this to match your repository name
})
```

#### Install gh-pages Package

```powershell
npm install --save-dev gh-pages
```

#### Update package.json

Add deployment scripts to your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://yourusername.github.io/cksPortfolio"
```

Replace `yourusername` with your actual GitHub username.

### 3. Initialize Git and Connect to GitHub

If you haven't already connected your local project to GitHub:

```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/cksPortfolio.git
git push -u origin main
```

### 4. Deploy to GitHub Pages

Run the deploy script:

```powershell
npm run deploy
```

This will:
1. Build your project (triggered by the predeploy script)
2. Push the contents of the `dist` folder to a new branch called `gh-pages`

### 5. Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to Settings > Pages
3. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

### 6. Access Your Deployed Site

After a few minutes, your portfolio will be available at:
`https://yourusername.github.io/cksPortfolio/`

## Troubleshooting

### Issue: Assets not loading

If assets like images or stylesheets aren't loading, ensure all relative paths use the correct format. For imported assets in code, the bundler will handle this. For assets referenced in CSS or other files, make sure they account for the base path.

### Issue: Routing issues with React Router

If you're using React Router and having issues with routes not working properly:

1. Use HashRouter instead of BrowserRouter:
   ```jsx
   import { HashRouter as Router } from 'react-router-dom';
   ```

2. Or configure your repository to use a custom 404 page that redirects to index.html.

### Issue: Custom domain

To use a custom domain:

1. Add your domain in the GitHub Pages settings
2. Create a CNAME file in the `public` directory with your domain name
3. Update your DNS settings to point to GitHub Pages

## Updating Your Deployment

Whenever you make changes to your site and want to update the deployed version:

1. Commit your changes to your repository
2. Run `npm run deploy` again

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Configuration with GitHub Pages](https://create-react-app.dev/docs/deployment/#notes-on-client-side-routing)
