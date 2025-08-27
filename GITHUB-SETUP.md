# 🚀 GitHub Repository Setup Guide

## Option 1: Create Repository on GitHub (Recommended)

### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New Repository" (+ icon)
3. Repository name: `vscode-portfolio` or `mohammad-portfolio`
4. Description: `Interactive VS Code Portfolio - Backend Developer`
5. Keep it **Public** (so employers can see it)
6. **Don't** initialize with README (we already have files)
7. Click "Create Repository"

### Step 2: Connect Your Local Repository
After creating the repository on GitHub, run these commands:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/vscode-portfolio.git

# Push your portfolio to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Option 2: Use GitHub CLI (if you have it installed)

```bash
# Create repository directly from terminal
gh repo create vscode-portfolio --public --description "Interactive VS Code Portfolio - Backend Developer"

# Push your code
git push -u origin main
```

## 🎯 After Pushing to GitHub

Your repository will be at:
`https://github.com/YOUR_USERNAME/vscode-portfolio`

## 🚀 Deploy from GitHub

### Deploy to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your `vscode-portfolio` repository
5. Click "Deploy"
6. Your portfolio will be live at `https://vscode-portfolio.vercel.app`

### Deploy to Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub and select your repository
4. Build settings will auto-detect (Vite)
5. Click "Deploy site"

## 📋 Repository Features

✅ Professional VS Code portfolio
✅ Your real photo and contact info
✅ Production-ready build
✅ Comprehensive documentation
✅ SEO optimized
✅ Mobile responsive

## 🎯 Next Steps

1. **Create GitHub repository** (5 minutes)
2. **Push your code** (1 minute)
3. **Deploy to Vercel/Netlify** (2 minutes)
4. **Share your live portfolio URL** 🎉

Your unique portfolio URL will be something like:
- `https://mohammad-portfolio.vercel.app`
- `https://vscode-portfolio.netlify.app`

**Ready to impress employers! 🌟**
