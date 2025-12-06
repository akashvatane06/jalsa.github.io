# 🚀 Quick Deploy to GitHub Pages

## Fast Track (5 Minutes)

### Step 1: Open Terminal in Project Folder
```bash
cd "C:\Users\Shankar\Documents\My Attendence\PP\Jalsa\React-Native-Project\React-Jalsa-Design-Second"
```

### Step 2: Initialize Git (if needed)
```bash
git init
git remote add origin https://github.com/akashvatane06/jalsa.github.io.git
```

### Step 3: Commit and Push
```bash
git add .
git commit -m "Deploy Jalsa Menu App to GitHub Pages"
git branch -M main
git push -u origin main
```

**When prompted for credentials:**
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (create at https://github.com/settings/tokens)

### Step 4: Enable GitHub Pages
1. Go to: https://github.com/akashvatane06/jalsa.github.io/settings/pages
2. Under **Source**, select **"GitHub Actions"**
3. Click **Save**

### Step 5: Wait for Deployment
1. Go to: https://github.com/akashvatane06/jalsa.github.io/actions
2. Wait 1-2 minutes for workflow to complete
3. Look for green checkmark ✅

### Step 6: Visit Your Site
🌐 **https://akashvatane06.github.io/jalsa.github.io/**

---

## ✅ That's It!

Your site will automatically update every time you push to the `main` branch.

---

## 🔄 To Update Your Site Later

```bash
git add .
git commit -m "Update menu items"
git push origin main
```

GitHub Actions will automatically deploy the changes!

---

## ❓ Having Issues?

See `GITHUB_PAGES_DEPLOYMENT_STEPS.md` for detailed troubleshooting.

