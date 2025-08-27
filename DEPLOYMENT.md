# 🚀 Portfolio Deployment Guide

Your VS Code Portfolio is ready to be published! Here are the best hosting options:

## 🌟 Recommended: Vercel (FREE & Easy)

### Option 1: Deploy with Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your portfolio:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Project name: `mohammad-portfolio`
   - Framework: `vite`
   - Build command: `npm run build`
   - Output directory: `dist`

### Option 2: Deploy via GitHub + Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Your portfolio will be live at: `https://mohammad-portfolio.vercel.app`**

## 🌐 Alternative Hosting Options

### Netlify (Also FREE)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `dist` folder
3. Or connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages
1. Push code to GitHub
2. Go to Repository Settings > Pages
3. Set source to GitHub Actions
4. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 🔗 Custom Domain (Optional)

After deployment, you can add a custom domain like:
- `mohammad-abojodeh.dev`
- `mohammadportfolio.com`
- `moh-backend-dev.com`

## 📱 Portfolio Features

Your portfolio includes:
✅ Responsive design (mobile & desktop)
✅ Professional photo and contact info
✅ Interactive VS Code interface
✅ Real work experience and skills
✅ Fast loading and SEO optimized
✅ Modern tech stack (React + TypeScript + Vite)

## 🎯 Next Steps After Deployment

1. **Test your live site** on different devices
2. **Share the link** on:
   - LinkedIn profile
   - CV/Resume
   - Email signature
   - GitHub profile README
3. **Update content** as you gain more experience
4. **Monitor analytics** (optional: add Google Analytics)

## 🛠️ Local Development

To run locally:
```bash
npm install
npm run dev
```

To build for production:
```bash
npm run build
npm run preview  # Preview the build locally
```

---

**Ready to impress employers with your unique VS Code portfolio! 🎉**
