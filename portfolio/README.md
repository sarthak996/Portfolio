# Sarthak Sethi — Portfolio

A clean, minimal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Automatically deployed to GitHub Pages via GitHub Actions.

## Live Site

🔗 [https://sarthak996.github.io/portfolio](https://sarthak996.github.io/portfolio)

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deployment

This project uses **GitHub Actions** for automatic deployment to **GitHub Pages**.

### Setup Steps

1. Push this repo to GitHub as `sarthak996/portfolio`
2. Go to **Settings → Pages → Source** → select **GitHub Actions**
3. Push to `main` branch — the site deploys automatically

### Manual Deploy

You can also trigger a deploy from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.

## Tech Stack

- **Next.js 14** — React framework with static export
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — Static hosting

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
├── components/
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── Hero.tsx         # Hero/intro section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Skills.tsx       # Technical skills grid
│   ├── Achievements.tsx # Notable achievements
│   ├── Education.tsx    # Academic background
│   ├── Contact.tsx      # Contact CTA
│   └── Footer.tsx       # Footer
└── data/
    └── resume.ts        # All portfolio data in one place
```

## Customization

All content is centralized in `src/data/resume.ts`. Edit that file to update your information — everything else updates automatically.
