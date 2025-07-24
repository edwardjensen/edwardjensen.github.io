# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal landing page built with:
- Astro 5.12.3 (Modern static site generator)
- Tailwind CSS 4.0.7 (Utility-first CSS framework)
- AlpineJS 3.14.8 (Lightweight JavaScript framework)
- TypeScript (Strict mode)
- Node.js 22.x

## Common Commands

### Local Development
```bash
# Install dependencies
npm install

# Build and serve locally
npm run dev

# Production build
npm run build
```

## Architecture

### Content Structure
- **Component-based**: Modular Astro components in `src/components/`
- **Pages**: Main pages in `src/pages/` with dynamic routing
- **API endpoints**: Serverless functions in `src/pages/api/`
- **Layout**: Single layout file at `src/layouts/Layout.astro`

### Key Features
- **Dynamic event routing**: URLs like `/event-name` automatically track events
- **Contact form**: Collects visitor information with event attribution  
- **API endpoints**: `/api/contact` and `/api/track` for form processing and analytics
- **Dark mode**: Full dark mode support with toggle and system preference detection
- **Cloudflare Pages ready**: Configured for serverless deployment with edge functions

### Content Sections (Astro Components)
- `BriefBio.astro`: Profile image section
- `Header.astro`: Site description  
- `RecentPosts.astro`: Blog posts from https://www.edwardjensen.net/feed.json
- `RecentPhotos.astro`: Photos from https://micro.edwardjensen.net/photos/index.json
- `RecentGitHub.astro`: GitHub repository activity from https://api.github.com/users/edwardjensen/repos
- `SocialMedia.astro`: Social media links with Bootstrap icons
- `ContactForm.astro`: Contact collection form with event tracking
- `Newsletter.astro`: Email newsletter signup (currently commented out)
- `Footer.astro`: Copyright, disclaimer, and build information
- `DarkModeToggle.astro`: Dark/light mode toggle with persistence

### Deployment
Automated via GitHub Actions:
1. Builds Astro site with production environment
2. Deploys to both GitHub Pages and Cloudflare Pages
3. Uses commit hash for build tracking

### Build Configuration
- Build command: `npm run build`
- Build output directory: `dist`
- Adapter: `@astrojs/cloudflare` for serverless functions
- Output mode: `server` for dynamic features

### Styling
- Tailwind CSS utilities used directly in HTML
- Full dark mode support with `dark:` prefix classes
- Responsive design with `lg:` breakpoints
- Global styles in `src/styles/global.css`