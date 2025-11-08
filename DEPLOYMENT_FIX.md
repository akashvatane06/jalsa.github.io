# Fix for 404 Error on GitHub Pages

## Problem
Getting 404 errors when accessing the site at `https://akashvatane06.github.io/jalsa.github.io/`

## Solution Applied

The issue was the **base path** in `vite.config.js`. Since your repository is a **project page** (not a user page), the base path must match the repository name.

### What Changed:
- Updated `base: '/'` to `base: '/jalsa.github.io/'` in `vite.config.js`

## Steps to Fix:

### 1. Rebuild and Push
```bash
# Build with new base path
npm run build

# Commit and push
git add .
git commit -m "Fix base path for GitHub Pages"
git push origin main
```

### 2. Verify GitHub Pages Settings
1. Go to repository: https://github.com/akashvatane06/jalsa.github.io
2. Settings → Pages
3. Source should be:
   - **Branch**: `main` or `gh-pages`
   - **Folder**: `/ (root)` or `/dist`

### 3. Wait for Deployment
- GitHub Actions will automatically rebuild (check Actions tab)
- Wait 2-5 minutes for deployment

### 4. Clear Browser Cache
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache

## Alternative: Use gh-pages Branch

If GitHub Actions doesn't work, use manual deployment:

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
```

This will create a `gh-pages` branch and deploy from there.

## Verify It Works

After deployment, check:
- https://akashvatane06.github.io/jalsa.github.io/
- Open browser console (F12) - no 404 errors
- All images and assets load correctly

