# GitHub Pages Settings Checklist

## Step-by-Step Settings Check

### 1. Check GitHub Pages Source Setting

**Go to:** https://github.com/akashvatane06/jalsa.github.io/settings/pages

**What to Check:**
- [ ] **Source** should be set to: **"GitHub Actions"** (NOT "Deploy from a branch")
- [ ] If it shows "Deploy from a branch", change it to **"GitHub Actions"**
- [ ] Click **Save** if you made changes

**Why:** The GitHub Actions workflow automatically builds and deploys from the `dist` folder. Using "Deploy from a branch" would serve the root directory which has the development `index.html`.

### 2. Check GitHub Actions Workflow

**Go to:** https://github.com/akashvatane06/jalsa.github.io/actions

**What to Check:**
- [ ] Look for workflow runs named "Deploy to GitHub Pages"
- [ ] Check if the latest run shows:
  - ✅ Green checkmark = Success
  - ❌ Red X = Failed (check logs)
  - 🟡 Yellow circle = In progress
- [ ] If failed, click on it and check the error logs

**If workflow is not running:**
- Go to repository → **Actions** tab
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" button (if available)

### 3. Check Repository Permissions

**Go to:** https://github.com/akashvatane06/jalsa.github.io/settings/actions

**What to Check:**
- [ ] **Workflow permissions** should be:
  - "Read and write permissions" OR
  - "Read repository contents and packages permissions" with "Allow GitHub Actions to create and approve pull requests" checked

### 4. Verify Build Output

**In the workflow run, check:**
- [ ] Build step completed successfully
- [ ] "Upload artifact" step completed
- [ ] "Deploy to GitHub Pages" step completed

### 5. Check Custom Domain (if applicable)

**Go to:** https://github.com/akashvatane06/jalsa.github.io/settings/pages

**What to Check:**
- [ ] If "Custom domain" is set, it should be: `jalsa.github.io` or empty
- [ ] "Enforce HTTPS" should be checked (if available)

## Common Issues & Fixes

### Issue 1: Source is "Deploy from a branch"
**Fix:** Change to "GitHub Actions" in Pages settings

### Issue 2: Workflow not running
**Fix:** 
1. Check if `.github/workflows/deploy.yml` exists in repository
2. Push a new commit to trigger the workflow
3. Or manually run workflow from Actions tab

### Issue 3: Workflow fails
**Fix:**
- Check error logs in Actions tab
- Common issues:
  - Missing dependencies
  - Build errors
  - Permission issues

### Issue 4: Still seeing 404 errors
**Fix:**
1. Wait 2-5 minutes after deployment
2. Clear browser cache (Ctrl+Shift+R)
3. Check if `dist` folder contents are correct
4. Verify base path in `vite.config.js` is `/jalsa.github.io/`

## Quick Test

After fixing settings, test by:
1. Making a small change (like updating a comment)
2. Committing and pushing
3. Checking Actions tab for new workflow run
4. Waiting 2-5 minutes
5. Visiting: https://akashvatane06.github.io/jalsa.github.io/

## Current Configuration

Your repository should have:
- ✅ `.github/workflows/deploy.yml` - Deployment workflow
- ✅ `vite.config.js` with `base: '/jalsa.github.io/'`
- ✅ `package.json` with build script
- ✅ `dist/` folder with built files (after build)

## What to Report Back

Please check and tell me:
1. What is the current **Source** setting in Pages? (GitHub Actions or Deploy from a branch)
2. What is the status of the latest workflow run? (Success/Failed/Not running)
3. Any error messages you see?

