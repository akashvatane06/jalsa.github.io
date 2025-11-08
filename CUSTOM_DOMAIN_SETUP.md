# Setting Up Custom Domain: jalsa.github.io

## Option 1: Use GitHub Organization (Recommended)

To use `https://jalsa.github.io/` directly, you need a GitHub organization named "jalsa".

### Steps:

1. **Create GitHub Organization**
   - Go to https://github.com/organizations/new
   - Organization name: `jalsa`
   - Choose free plan
   - Complete setup

2. **Transfer Repository to Organization**
   - Go to your repository: https://github.com/akashvatane06/jalsa.github.io
   - **Settings** → Scroll down to **Danger Zone**
   - Click **Transfer ownership**
   - Transfer to organization: `jalsa`
   - Confirm transfer

3. **Update Repository Name**
   - In the organization, go to repository settings
   - Repository name should be: `jalsa.github.io` (already correct)
   - This will make it available at: `https://jalsa.github.io/`

4. **Update Base Path**
   - Change `vite.config.js` base back to `/` (root)
   - Rebuild and push

## Option 2: Use Custom Domain Feature

If you own the domain `jalsa.github.io` or want to use a different custom domain:

### Steps:

1. **Get a Domain**
   - Purchase domain from Namecheap, GoDaddy, etc.
   - Or use a free subdomain service

2. **Configure DNS**
   - Add these DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     ```
   - Or use CNAME:
     ```
     Type: CNAME
     Name: @
     Value: akashvatane06.github.io
     ```

3. **Configure in GitHub**
   - Go to repository: https://github.com/akashvatane06/jalsa.github.io
   - **Settings** → **Pages**
   - Under **Custom domain**, enter: `jalsa.github.io`
   - Check **Enforce HTTPS**
   - Click **Save**

4. **Add CNAME File**
   - Create `public/CNAME` file with content: `jalsa.github.io`
   - Commit and push

5. **Update Base Path**
   - Change `vite.config.js` base to `/` (root)
   - Rebuild and push

## Option 3: Rename Repository (If username is "jalsa")

If your GitHub username is actually "jalsa":

1. **Rename Repository**
   - Go to repository settings
   - Change name to: `jalsa.github.io`
   - This automatically makes it available at: `https://jalsa.github.io/`

2. **Update Base Path**
   - Change `vite.config.js` base to `/` (root)
   - Rebuild and push

## Quick Fix for Current Setup

If you want to keep current setup but fix the base path:

1. Keep base as `/jalsa.github.io/` in vite.config.js
2. Site will work at: `https://akashvatane06.github.io/jalsa.github.io/`

## Recommended: Option 1 (GitHub Organization)

This is the cleanest solution and gives you `https://jalsa.github.io/` directly.

