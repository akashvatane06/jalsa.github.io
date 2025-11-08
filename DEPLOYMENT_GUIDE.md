# GitHub Pages Deployment Guide

## Deploy to jalsa.github.io

Follow these steps to deploy your Jalsa menu app to GitHub Pages:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. **Important**: Name the repository exactly `jalsa.github.io` (must match your GitHub username)
4. Make it **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license
6. Click **Create repository**

### Step 2: Initialize Git and Push Code

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Jalsa Menu App"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jalsa.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/jalsa.github.io`
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)` or `/dist` (depending on your setup)
5. Click **Save**

### Step 4: Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your app when you push to `main` branch
- Deploy to GitHub Pages

### Step 5: Access Your Site

After deployment (takes 1-2 minutes), your site will be available at:
- **https://jalsa.github.io** (if repository is `jalsa.github.io`)
- Or **https://YOUR_USERNAME.github.io/jalsa.github.io** (if different name)

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Deploy:
```bash
npm run deploy
```

## Troubleshooting

### Site not loading?
- Wait 2-5 minutes after first deployment
- Check repository Settings → Pages for deployment status
- Ensure repository is **Public**

### 404 errors?
- Check that `base: '/'` is set in `vite.config.js`
- Verify all assets are in the `dist` folder after build

### Images not showing?
- Ensure images are in `public/images/` folder
- Check image paths in browser console

## Updating Your Site

Simply push changes to `main` branch:
```bash
git add .
git commit -m "Update menu"
git push
```

GitHub Actions will automatically rebuild and redeploy!

