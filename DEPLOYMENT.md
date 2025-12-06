# Deployment Guide

This guide explains how to keep your source code private while publishing only built files to a public GitHub Pages repository.

## Setup Overview

- **Private Repository**: Contains all source code (this repository)
- **Public Repository**: `jalsa.github.io` - Contains only built files for GitHub Pages

## How It Works

1. You develop and commit source code to this private repository
2. When ready to deploy, run `npm run deploy`
3. The script builds your project and pushes only the `dist` folder to the public repository
4. GitHub Pages automatically serves the built files

## Prerequisites

1. Make sure this repository is **private** (Settings → General → Change visibility)
2. Ensure you have push access to the public repository: `akashvatane06/jalsa.github.io`
3. Make sure you're authenticated with GitHub (SSH key or personal access token)

## Deployment Steps

### First Time Setup

1. **Make this repository private:**
   - Go to your repository on GitHub
   - Settings → General → Danger Zone → Change repository visibility → Make private

2. **Ensure the public repository exists:**
   - The repository `akashvatane06/jalsa.github.io` should exist and be public
   - Enable GitHub Pages in the repository settings (Settings → Pages)
   - Set source to `main` branch and `/ (root)` folder
   - Your site will be available at: `https://akashvatane06.github.io/jalsa.github.io/`

### Deploying

Simply run:
```bash
npm run deploy
```

This will:
- Build your project (`npm run build`)
- Clone the public repository
- Copy only the `dist` folder contents
- Commit and push to the public repository
- Clean up temporary files

## GitHub Actions (Alternative)

If you prefer automatic deployment on every push, the GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
- Automatically build and deploy when you push to `main`
- Deploy only the `dist` folder to the public repository

### Setup GitHub Actions:

#### Step 1: Create a Personal Access Token (PAT)

1. **Go to GitHub Settings:**
   - Click your profile picture (top right) → **Settings**
   - Or go directly to: https://github.com/settings/profile

2. **Navigate to Developer Settings:**
   - Scroll down in the left sidebar
   - Click **Developer settings** (at the bottom)

3. **Go to Personal Access Tokens:**
   - Click **Personal access tokens** in the left menu
   - Click **Tokens (classic)** (or **Fine-grained tokens** if you prefer)

4. **Generate New Token:**
   - Click **Generate new token** → **Generate new token (classic)**
   - You may need to enter your password

5. **Configure the Token:**
   - **Note**: Give it a descriptive name like `Jalsa Deploy Token`
   - **Expiration**: Choose an expiration (90 days, 1 year, or no expiration)
   - **Scopes**: Check the following:
     - ✅ **repo** (Full control of private repositories)
       - This includes: `repo:status`, `repo_deployment`, `public_repo`, `repo:invite`, `security_events`
   
6. **Generate and Copy:**
   - Scroll down and click **Generate token**
   - **⚠️ IMPORTANT**: Copy the token immediately! You won't be able to see it again.
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

#### Step 2: Add Token as Repository Secret

1. **Go to Your Repository:**
   - Navigate to: https://github.com/akashvatane06/jalsa.github.io
   - (This should be your **private** source repository)

2. **Open Repository Settings:**
   - Click **Settings** tab (top menu)

3. **Go to Secrets:**
   - In the left sidebar, click **Secrets and variables**
   - Click **Actions**

4. **Add New Secret:**
   - Click **New repository secret** button

5. **Configure the Secret:**
   - **Name**: `DEPLOY_TOKEN` (must be exactly this)
   - **Secret**: Paste the PAT token you copied in Step 1
   - Click **Add secret**

6. **Verify:**
   - You should see `DEPLOY_TOKEN` listed in your secrets

#### Step 3: Enable Workflow Permissions

1. **In Repository Settings:**
   - Still in Settings → **Actions** → **General**

2. **Set Workflow Permissions:**
   - Scroll to **Workflow permissions**
   - Select: **Read and write permissions**
   - ✅ Check **Allow GitHub Actions to create and approve pull requests** (optional but recommended)
   - Click **Save**

#### Step 4: Test the Workflow

1. **Make a small change** and push to `main` branch, OR
2. **Manually trigger the workflow:**
   - Go to **Actions** tab in your repository
   - Click **Deploy to GitHub Pages** workflow
   - Click **Run workflow** → **Run workflow**

3. **Monitor the deployment:**
   - Watch the workflow run in the Actions tab
   - It should build and deploy automatically

#### Troubleshooting

**If deployment fails with authentication error:**
- Verify the secret name is exactly `DEPLOY_TOKEN` (case-sensitive)
- Check that the PAT has `repo` scope
- Ensure the PAT hasn't expired
- Verify you have push access to `akashvatane06/jalsa.github.io`

**If you need to update the token:**
- Go to Secrets → Click on `DEPLOY_TOKEN` → **Update** → Paste new token

## Important Notes

- **Never commit sensitive data** (API keys, passwords, etc.) even to private repos
- The `dist` folder is in `.gitignore` - it won't be committed to the source repository
- Only built files are pushed to the public repository
- Source code remains private and secure

## Troubleshooting

### Authentication Issues

If you get authentication errors:
- For HTTPS: Use a Personal Access Token instead of password
- For SSH: Make sure your SSH key is added to GitHub

### Deployment Fails

1. Check that the public repository exists and you have push access
2. Verify the repository name in `deploy.js` matches your public repo
3. Ensure the build completes successfully before deployment

### Files Not Updating

- Clear browser cache
- Check GitHub Pages settings (should be set to serve from `main` branch)
- Verify the deployment completed successfully

