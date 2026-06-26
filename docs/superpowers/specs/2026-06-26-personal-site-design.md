# Personal Site Design Spec

**Date**: 2026-06-26
**Status**: Draft
**Tech Stack**: Astro + Tailwind CSS + Cloudflare Pages

---

## 1. Overview

A personal website combining blog, portfolio, and personal brand. Blog-first structure with dark tech-style design. Deployed to Cloudflare Pages.

### Goals

- Blog-first content site with Markdown support
- Dark sci-fi/tech aesthetic (GitHub-style dark theme)
- Portfolio as simple card grid
- Fast static site with excellent SEO
- Deploy to Cloudflare Pages (xxx.pages.dev)

### Non-Goals

- Online CMS editor (Phase 2)
- User authentication
- Dynamic backend
- E-commerce features

---

## 2. Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro |
| Styling | Tailwind CSS + @tailwindcss/typography |
| Code Highlight | Shiki (built-in) |
| Search | fuse.js (client-side) |
| Comments | Giscus (GitHub Discussions) |
| RSS | @astrojs/rss |
| Sitemap | @astrojs/sitemap |
| Deployment | Cloudflare Pages |

---

## 3. Project Structure

```
personal-site/
├── src/
│   ├── content/
│   │   ├── blog/           # Blog posts (Markdown)
│   │   └── projects/       # Project card data
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Base layout (nav + footer)
│   │   └── BlogLayout.astro    # Blog post layout (TOC + meta)
│   ├── components/
│   │   ├── Header.astro        # Navigation bar
│   │   ├── Footer.astro        # Footer
│   │   ├── BlogCard.astro      # Blog post card
│   │   ├── ProjectCard.astro   # Project card
│   │   ├── SearchBar.astro     # Search component
│   │   ├── TableOfContents.astro  # Table of contents
│   │   ├── TagList.astro       # Tag list
│   │   ├── ThemeToggle.astro   # Theme toggle
│   │   └── Comments.astro      # Giscus comments
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About me
│   │   ├── projects.astro      # Portfolio
│   │   ├── blog/
│   │   │   ├── index.astro     # Blog list
│   │   │   ├── [slug].astro    # Post detail
│   │   │   ├── tag/[tag].astro # Filter by tag
│   │   │   └── category/[cat].astro  # Filter by category
│   │   └── rss.xml.ts          # RSS feed
│   ├── styles/
│   │   └── global.css          # Global styles (Tailwind + custom)
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── constants.ts        # Constants
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 4. Pages

### 4.1 Home Page

- **Hero**: Avatar + one-line bio + social links (GitHub, Email)
- **Latest Posts**: 3-5 blog post cards
- **Featured Projects**: 3-4 project cards
- Style: Dark background (#0d1117), cards with subtle glow border

### 4.2 Blog List Page

- Blog cards: title + excerpt + date + category tag + reading time
- Sidebar/top: category filter + tag cloud
- Search bar: real-time keyword filtering (client-side fuse.js)
- Pagination: 10 posts per page

### 4.3 Blog Post Detail

- Header: title + date + category + tags + reading time
- Right sidebar: auto-generated TOC with scroll tracking
- Content: Markdown rendered with code highlighting (Shiki), line numbers
- Footer: prev/next navigation + Giscus comments

### 4.4 Portfolio Page

- Grid layout, each card: project name + description + tech stack tags + GitHub link + demo link
- Filter by tech stack

### 4.5 About Page

- Personal intro + skill tags + work experience timeline + contact info

### 4.6 Global

- **Theme Toggle**: Dark (default) / Light, localStorage remembers preference
- **RSS**: `/rss.xml` auto-generated
- **OG Image**: Social sharing preview
- **404 Page**: Custom 404

---

## 5. Data Models

### 5.1 Blog Post Frontmatter

```yaml
---
title: "Post Title"
description: "Excerpt for list and SEO"
pubDate: 2026-06-26
updatedDate: 2026-06-27  # Optional
category: "tech"
tags: ["Astro", "Docker", "Tutorial"]
cover: "./cover.png"      # Optional
draft: false              # Drafts not published
---
```

### 5.2 Project Data

```yaml
---
name: "Project Name"
description: "One-line intro"
techStack: ["React", "Node.js", "MongoDB"]
github: "https://github.com/xxx/xxx"
demo: "https://xxx.pages.dev"
featured: true  # Show on homepage
---
```

### 5.3 Categories & Tags

- **Categories**: Preset (tech, notes, thoughts), extensible
- **Tags**: Free-form, tag cloud page shows all tags with post counts

### 5.4 Reading Time

- Auto-calculated: Chinese 400 chars/min, English 200 words/min

### 5.5 Search

- Client-side: Build-time generates JSON index, fuse.js fuzzy search in browser
- No backend needed, works with static Cloudflare Pages deployment

---

## 6. Visual Design

### Dark Theme Color Palette

| Element | Color |
|---------|-------|
| Background | #0d1117 |
| Card Background | #161b22 |
| Border | #30363d |
| Primary Text | #e6edf3 |
| Secondary Text | #8b949e |
| Accent/Links | #58a6ff |
| Code Block | #1a1e24 |

### Typography

- Body: System font stack (Inter, system-ui, sans-serif)
- Code: JetBrains Mono, monospace
- Line height: 1.75 for readability

### Components

- Cards: Rounded corners (8px), subtle border, hover glow effect
- Buttons: Pill-shaped, accent color with transparency
- Code blocks: Dark background, syntax highlighting via Shiki

---

## 7. Performance Targets

- Lighthouse score ≥ 95 (all four metrics)
- First contentful paint < 1s (Cloudflare CDN edge)
- Zero server runtime, pure static
- Total page weight < 100KB (excluding images)

---

## 8. Deployment

### Cloudflare Pages

```
GitHub push → Cloudflare auto-build → Build: npm run build
                                     → Output: dist/
                                     → URL: xxx.pages.dev
```

- **Build Command**: `npm run build`
- **Output Directory**: `dist/`
- **Environment Variables**: `GISCUS_REPO`, `GISCUS_REPO_ID` configured in Cloudflare dashboard

### Custom Domain (Phase 2)

- Add custom domain in Cloudflare dashboard
- SSL automatic via Cloudflare

---

## 9. Future Phases

### Phase 2

- TinaCMS integration for online editing
- Custom domain binding
- Analytics dashboard (Cloudflare Web Analytics)

### Phase 3

- Multi-language support (i18n)
- Newsletter subscription
- Interactive project demos (React islands)
