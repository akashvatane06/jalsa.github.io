# GitHub Pages Deployment Troubleshooting

## Critical Steps to Fix Deployment

### Step 1: Verify GitHub Pages Settings
1. Go to: https://github.com/akashvatane06/jalsa.github.io/settings/pages
2. **IMPORTANT**: Under "Source", select **"GitHub Actions"** (NOT "Deploy from a branch")
3. If it's currently set to "Deploy from a branch", change it to "GitHub Actions"
4. Save the changes

### Step 2: Check GitHub Actions Workflow
1. Go to: https://github.com/akashvatane06/jalsa.github.io/actions
2. Look for "Deploy static content to Pages" workflow
3. Check if it has run recently
4. If it shows ❌ (failed), click on it to see the error
5. If it shows ✅ (success), the deployment should be working

### Step 3: Manually Trigger Workflow (if needed)
1. Go to: https://github.com/akashvatane06/jalsa.github.io/actions
2. Click "Deploy static content to Pages" in the left sidebar
3. Click "Run workflow" button (top right)
4. Select "main" branch
5. Click "Run workflow"
6. Wait 1-2 minutes for it to complete

### Step 4: Clear Browser Cache
After deployment completes:
- Press **Ctrl + F5** (Windows) or **Cmd + Shift + R** (Mac) to hard refresh
- Or clear browser cache completely

### Step 5: Verify Site URL
Your site should be at: **https://akashvatane06.github.io/jalsa.github.io/**

The base path in `vite.config.js` is correctly set to `/jalsa.github.io/`

## Common Issues

### Issue: Workflow not running
**Solution**: Make sure GitHub Pages source is set to "GitHub Actions" (Step 1)

### Issue: Workflow failing
**Solution**: 
- Check the Actions tab for error messages
- Common errors:
  - Build failures: Check if `npm run build` works locally
  - Permission errors: Verify workflow permissions in repository settings

### Issue: Site shows old content
**Solution**:
- Clear browser cache (hard refresh)
- Wait 2-3 minutes after deployment completes
- Check if the workflow actually completed successfully

### Issue: 404 errors
**Solution**: 
- Verify the base path in `vite.config.js` is `/jalsa.github.io/`
- Make sure the workflow is deploying the `dist` folder

## Verification Checklist
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] Workflow file exists at `.github/workflows/static.yml`
- [ ] Workflow has run and completed successfully
- [ ] Browser cache cleared
- [ ] Site URL is correct: https://akashvatane06.github.io/jalsa.github.io/

