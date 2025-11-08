# Fix for GitHub Pages 404 Error

## Problem
Getting error: `GET https://akashvatane06.github.io/src/main.jsx net::ERR_ABORTED 404`

This means GitHub Pages is serving the root `index.html` (development file) instead of the built `dist/index.html`.

## Solution

### Step 1: Check GitHub Pages Settings

1. Go to: https://github.com/akashvatane06/jalsa.github.io/settings/pages
2. Under **Source**, make sure:
   - **Deploy from a branch** is NOT selected
   - **GitHub Actions** is selected (this should be automatic if workflow exists)

### Step 2: Verify GitHub Actions Workflow

1. Go to: https://github.com/akashvatane06/jalsa.github.io/actions
2. Check if the workflow ran successfully
3. If it failed, check the error logs

### Step 3: Manual Fix (If Needed)

If GitHub Actions isn't working, we can deploy manually using gh-pages:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

This will:
- Build the project
- Create/update `gh-pages` branch
- Deploy from that branch

### Step 4: Update GitHub Pages Settings (Manual Deploy)

If using manual deploy:
1. Go to Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: `gh-pages`
4. Folder: `/ (root)`
5. Save

## Current Workflow Status

The `.github/workflows/deploy.yml` is configured to:
- Build on push to `main`
- Deploy `dist` folder to GitHub Pages
- Use GitHub Actions (not branch source)

Make sure GitHub Pages is set to use **GitHub Actions** as the source, not a branch.

