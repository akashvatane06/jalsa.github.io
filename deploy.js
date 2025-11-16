#!/usr/bin/env node

/**
 * Deployment script to push only built files to public GitHub Pages repository
 * This keeps your source code private while publishing only the dist folder
 */

import { execSync } from 'child_process';
import { existsSync, rmSync, cpSync } from 'fs';
import { join } from 'path';

const DIST_DIR = 'dist';
const PUBLIC_REPO = 'https://github.com/akashvatane06/jalsa.github.io.git';
const DEPLOY_BRANCH = 'main';
const TEMP_DIR = '.deploy-temp';

console.log('🚀 Starting deployment to GitHub Pages...\n');

// Step 1: Build the project
console.log('📦 Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Check if dist directory exists
if (!existsSync(DIST_DIR)) {
  console.error(`❌ ${DIST_DIR} directory not found. Build may have failed.`);
  process.exit(1);
}

// Step 3: Clone or update the public repository
console.log('📥 Preparing deployment repository...');
if (existsSync(TEMP_DIR)) {
  rmSync(TEMP_DIR, { recursive: true, force: true });
}

try {
  execSync(`git clone --depth 1 --branch ${DEPLOY_BRANCH} ${PUBLIC_REPO} ${TEMP_DIR}`, { stdio: 'inherit' });
  console.log('✅ Repository cloned\n');
} catch (error) {
  console.log('⚠️  Branch may not exist, trying to clone...');
  try {
    execSync(`git clone --depth 1 ${PUBLIC_REPO} ${TEMP_DIR}`, { stdio: 'inherit' });
    // Checkout or create the branch
    process.chdir(TEMP_DIR);
    try {
      execSync(`git checkout ${DEPLOY_BRANCH}`, { stdio: 'inherit' });
    } catch {
      execSync(`git checkout -b ${DEPLOY_BRANCH}`, { stdio: 'inherit' });
    }
    process.chdir('..');
    console.log('✅ Repository cloned\n');
  } catch (err) {
    console.error('❌ Failed to clone repository:', err.message);
    process.exit(1);
  }
}

// Step 4: Clean the temp directory (except .git)
console.log('🧹 Cleaning old files...');
process.chdir(TEMP_DIR);
const files = execSync('git ls-files').toString().split('\n').filter(f => f.trim());
files.forEach(file => {
  if (file && file !== '.git' && !file.startsWith('.git/')) {
    try {
      rmSync(file, { recursive: true, force: true });
    } catch (e) {
      // Ignore errors
    }
  }
});
process.chdir('..');
console.log('✅ Old files cleaned\n');

// Step 5: Copy dist files to temp directory
console.log('📋 Copying built files...');
try {
  cpSync(DIST_DIR, TEMP_DIR, { recursive: true });
  console.log('✅ Files copied\n');
} catch (error) {
  console.error('❌ Failed to copy files:', error.message);
  process.exit(1);
}

// Step 6: Commit and push to public repository
console.log('💾 Committing changes...');
process.chdir(TEMP_DIR);
try {
  execSync('git add -A', { stdio: 'inherit' });
  const status = execSync('git status --porcelain').toString();
  
  if (status.trim()) {
    execSync('git commit -m "Deploy: Update built files from private source"', { stdio: 'inherit' });
    console.log('✅ Changes committed\n');
    
    console.log('🚀 Pushing to GitHub Pages...');
    execSync(`git push origin ${DEPLOY_BRANCH}`, { stdio: 'inherit' });
    console.log('✅ Successfully deployed to GitHub Pages!\n');
  } else {
    console.log('ℹ️  No changes to deploy\n');
  }
  
  process.chdir('..');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.chdir('..');
  process.exit(1);
}

// Step 7: Cleanup
console.log('🧹 Cleaning up...');
if (existsSync(TEMP_DIR)) {
  rmSync(TEMP_DIR, { recursive: true, force: true });
}
console.log('✅ Cleanup completed\n');

console.log('🎉 Deployment complete!');
console.log(`🌐 Your site should be live at: https://akashvatane06.github.io/jalsa.github.io/`);

