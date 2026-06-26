# Implementation Plan

**Date**: 2026-06-26
**Based on**: `specs/2026-06-26-personal-site-design.md`

---

## Phase 1: Foundation ✅

### Step 1: Project Setup
- [x] Initialize Astro project
- [x] Install dependencies: tailwindcss, @tailwindcss/vite, fuse.js
- [x] Configure `astro.config.mjs` with site URL
- [x] Configure Tailwind with dark theme colors via CSS variables

### Step 2: Base Layout
- [x] Create `src/styles/global.css` with Tailwind directives and custom styles
- [x] Create `src/layouts/BaseLayout.astro` (HTML shell, head, nav, footer)
- [x] Create `src/components/Header.astro` (nav links + theme toggle)
- [x] Create `src/components/Footer.astro`

### Step 3: Core Components
- [x] Create `src/components/BlogCard.astro`
- [x] Create `src/components/ProjectCard.astro`

---

## Phase 2: Content & Pages ✅

### Step 4: Content Collection
- [x] Set up `src/content.config.ts` with blog and project schemas
- [x] Create sample blog post in `src/content/blog/`
- [x] Create sample project in `src/content/projects/`

### Step 5: Pages
- [x] Create `src/pages/index.astro` (home page)
- [x] Create `src/pages/about.astro`
- [x] Create `src/pages/projects.astro`
- [x] Create `src/pages/blog/index.astro` (list page with search)
- [x] Create `src/pages/blog/[slug].astro` (detail page with TOC)

### Step 6: Advanced Features
- [x] Create `src/pages/blog/tag/[tag].astro`
- [x] Create `src/pages/blog/category/[category].astro`
- [x] Create RSS feed at `src/pages/rss.xml.ts`
- [x] Create 404 page

---

## Phase 3: Polish & Deploy

### Step 7: Polish
- [ ] Add more sample blog posts
- [ ] Customize OG image
- [ ] Add Giscus repo ID (needs user to configure)

### Step 8: Deploy
- [ ] Push to GitHub
- [ ] Connect to Cloudflare Pages
- [ ] Set environment variables
- [ ] Verify live site

---

## Status

**Phase 1-2 Complete!** Site builds successfully with 10 pages.

### Generated Pages
| Page | URL |
|------|-----|
| Home | `/` |
| Blog List | `/blog` |
| Blog Post | `/blog/hello-world` |
| Tag Filter | `/blog/tag/Astro` |
| Category Filter | `/blog/category/tech` |
| Projects | `/projects` |
| About | `/about` |
| RSS | `/rss.xml` |
| 404 | `/404` |
| Sitemap | `/sitemap-index.xml` |
