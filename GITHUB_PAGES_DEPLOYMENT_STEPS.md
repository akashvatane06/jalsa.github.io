# Step-by-Step Guide: Deploy to GitHub Pages

This guide will help you push your code and deploy it live on GitHub Pages at `https://github.com/akashvatane06/jalsa.github.io`

## Prerequisites

- ✅ Git installed on your computer
- ✅ Node.js and npm installed
- ✅ GitHub account with access to `akashvatane06/jalsa.github.io` repository
- ✅ Code ready in your local project

---

## Method 1: Using GitHub Actions (Recommended - Automatic)

This method automatically deploys your site whenever you push code to the `main` branch.

### Step 1: Initialize Git Repository (if not already done)

Open terminal/command prompt in your project directory and run:

```bash
cd "C:\Users\Shankar\Documents\My Attendence\PP\Jalsa\React-Native-Project\React-Jalsa-Design-Second"
```

Check if git is initialized:
```bash
git status
```

If not initialized, run:
```bash
git init
```

### Step 2: Add Remote Repository

Add your GitHub repository as the remote origin:

```bash
git remote add origin https://github.com/akashvatane06/jalsa.github.io.git
```

If remote already exists, update it:
```bash
git remote set-url origin https://github.com/akashvatane06/jalsa.github.io.git
```

Verify the remote:
```bash
git remote -v
```

### Step 3: Stage and Commit Your Code

Add all files to git:
```bash
git add .
```

Commit your changes:
```bash
git commit -m "Initial commit: React Jalsa Menu App"
```

### Step 4: Push to GitHub

Push to the main branch:
```bash
git branch -M main
git push -u origin main
```

**Note:** If you're asked for credentials:
- Username: Your GitHub username
- Password: Use a Personal Access Token (not your GitHub password)
  - Create one at: https://github.com/settings/tokens
  - Select `repo` scope

### Step 5: Enable GitHub Pages

1. Go to your repository: https://github.com/akashvatane06/jalsa.github.io
2. Click on **Settings** tab (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Save the changes

### Step 6: Verify GitHub Actions Workflow

1. Go to the **Actions** tab in your repository
2. You should see "Deploy static content to Pages" workflow
3. It should automatically run after your push
4. Wait 1-2 minutes for it to complete
5. You should see a green checkmark ✅ when successful

### Step 7: Access Your Live Site

Once deployment completes, your site will be live at:
**https://akashvatane06.github.io/jalsa.github.io/**

---

## Method 2: Manual Deployment (Alternative)

If you prefer manual control or GitHub Actions isn't working:

### Step 1-4: Same as Method 1

Follow Steps 1-4 from Method 1 to push your code to GitHub.

### Step 5: Build and Deploy Locally

Run the deployment script:
```bash
npm run deploy
```

This will:
- Build your project
- Push only the `dist` folder to GitHub
- Deploy to GitHub Pages

### Step 6: Enable GitHub Pages (if not already enabled)

1. Go to: https://github.com/akashvatane06/jalsa.github.io/settings/pages
2. Under **Source**, select **"Deploy from a branch"**
3. Select branch: **main**
4. Select folder: **/ (root)**
5. Click **Save**

### Step 7: Access Your Live Site

Your site will be live at:
**https://akashvatane06.github.io/jalsa.github.io/**

---

## Troubleshooting

### Issue: "Repository not found" error
**Solution:** 
- Verify you have access to the repository
- Check the repository URL is correct
- Make sure you're authenticated with GitHub

### Issue: GitHub Actions workflow not running
**Solution:**
- Go to Settings → Actions → General
- Under "Workflow permissions", select "Read and write permissions"
- Make sure GitHub Pages source is set to "GitHub Actions"

### Issue: Site shows 404 or blank page
**Solution:**
- Verify `vite.config.js` has `base: '/jalsa.github.io/'`
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Wait 2-3 minutes after deployment
- Check if the workflow completed successfully

### Issue: Build fails in GitHub Actions
**Solution:**
- Test build locally: `npm run build`
- Check for any errors in the build output
- Ensure all dependencies are in `package.json`
- Check the Actions tab for detailed error messages

### Issue: Authentication errors
**Solution:**
- For HTTPS: Create a Personal Access Token at https://github.com/settings/tokens
- Select `repo` scope
- Use the token as your password when pushing
- For SSH: Set up SSH keys in GitHub Settings → SSH and GPG keys

---

## Updating Your Site

### For Method 1 (GitHub Actions):
1. Make your changes
2. Commit: `git add .` then `git commit -m "Your message"`
3. Push: `git push origin main`
4. GitHub Actions will automatically deploy

### For Method 2 (Manual):
1. Make your changes
2. Run: `npm run deploy`
3. Site will be updated automatically

---

## Quick Reference Commands

```bash
# Check git status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Build locally
npm run build

# Deploy manually
npm run deploy

# Check remote repository
git remote -v
```

---

## Verification Checklist

Before considering deployment complete:

- [ ] Code pushed to GitHub repository
- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to "GitHub Actions" (Method 1) or "Deploy from a branch" (Method 2)
- [ ] GitHub Actions workflow completed successfully (green checkmark)
- [ ] Site accessible at https://akashvatane06.github.io/jalsa.github.io/
- [ ] All pages and assets loading correctly
- [ ] No console errors in browser

---

## Need Help?

If you encounter issues:
1. Check the **Actions** tab for workflow errors
2. Review the **Settings → Pages** configuration
3. Verify `vite.config.js` base path is correct
4. Test build locally with `npm run build`
5. Check browser console for errors

---

**Your site URL:** https://akashvatane06.github.io/jalsa.github.io/

