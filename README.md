# Silvia Ly | Houston REALTOR® — Personal Brand Website

A warm, botanical-themed personal brand website for **Silvia Ly**, a Texas REALTOR® serving the greater Houston area. Built as a fast, accessible, fully static site.

> **Tagline:** _Helping Houston families find a place to put down roots._

**Live demo:** _PLACEHOLDER — add your production URL after deployment._

---

## Tech Stack

- **[Astro](https://astro.build/) 4.x** — static site framework
- **TypeScript** (strict mode)
- **Tailwind CSS** (via `@astrojs/tailwind`)
- **Astro Content Collections** — Markdown content for client stories, neighborhoods, and plant notes
- **Static output** (`output: 'static'`) — no database, no auth, deploy anywhere

## Brand

| Token | Purpose |
| --- | --- |
| `sage` | Primary — greens, calm and grounded |
| `cream` | Warm neutrals / backgrounds |
| `terracotta` | Accent — selling, warmth |
| `charcoal` | Text and UI neutrals |

Fonts: **Playfair Display** (headings) + **Inter** (body), loaded via Google Fonts.

---

## Prerequisites

- **Node.js 18.14.1 or newer** (Node 20+ recommended)
- **npm** (bundled with Node)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:4321)
npm run dev

# 3. Build for production (outputs to ./dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Project Structure

```
silvia-ly-realtor/
├── public/                 # Static assets served as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       ├── placeholders/   # Styled SVG placeholders (safe to replace)
│       ├── clients/        # Drop approved client photos here
│       ├── neighborhoods/  # Drop neighborhood photos here
│       └── silvia/         # Drop Silvia's headshots / lifestyle photos here
└── src/
    ├── config/site.ts      # Single source of truth for site config
    ├── content/            # Markdown content collections
    ├── components/         # Reusable .astro components
    ├── layouts/            # Base page layout
    └── pages/              # Route-based pages
```

---

## Content Update Guide

All editorial content lives in `src/content/` as Markdown files with frontmatter. The schema for each collection is defined in `src/content/config.ts`.

### Add a client story

Create a new file in `src/content/client-stories/`, e.g. `smith-family.md`:

```markdown
---
displayName: "The Smith Family"
neighborhood: "Cypress"
category: "First Home"          # First Home | Growing Family | Selling & Moving On | Downsizing | New to Houston
quote: "A short, approved quote from the client."
featured: true                  # true = show on homepage
privacy: "First names / neighborhood only"
greenThumbNote: "Optional botanical touch about their new home."
image: null                     # or "/images/clients/smith-family.jpg"
---
The story text goes here. Always use approved content and respect client privacy.
```

### Add a neighborhood

Create a file in `src/content/neighborhoods/`, e.g. `katy.md`. The filename (minus `.md`) becomes the URL slug (`/neighborhoods/katy`):

```markdown
---
name: "Katy"
intro: "One-sentence overview."
whoItFits: "Who this neighborhood is a good fit for."
lifestyleHighlights:
  - "Highlight one"
  - "Highlight two"
  - "Highlight three"
silviaNote: "Silvia's personal take on the area."
image: null                     # or "/images/neighborhoods/katy.jpg"
---
```

### Add a plant note

Create a file in `src/content/plant-notes/`, e.g. `my-note.md`:

```markdown
---
title: "Your Note Title"
date: 2024-06-01
excerpt: "A short teaser that appears on the card."
category: "Home Observations"   # any short label
---
The body of the note in Silvia's own voice.
```

---

## Image Guide

Drop real photos into the matching folder under `public/images/` and reference them in the content frontmatter (`image:`) or config:

| Folder | Use | Naming convention |
| --- | --- | --- |
| `public/images/silvia/` | Headshots & lifestyle photos | `silvia-headshot.jpg` |
| `public/images/clients/` | Approved client photos | `garcia-family.jpg` (match story slug) |
| `public/images/neighborhoods/` | Neighborhood photos | `cypress.jpg` (match neighborhood slug) |

- Reference an image with a **root-relative path**, e.g. `image: "/images/clients/garcia-family.jpg"`.
- Leave `image: null` to fall back to the styled SVG placeholder.
- Recommended: optimized JPG/WebP, ~1600px wide max, under ~300KB each.

---

## Configuration Guide (`src/config/site.ts`)

`src/config/site.ts` is the **single source of truth** for site-wide values: name, tagline, description, contact details, social links, and brokerage info. Search for `PLACEHOLDER` and replace each value before launch. Also update the `site` URL in `astro.config.mjs`.

---

## Deployment

### Vercel (recommended, one-click)

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Astro — Build Command `npm run build`, Output Directory `dist`.
4. Deploy. Add your custom domain in the Vercel dashboard.

### GitHub Pages

1. Set `site` in `astro.config.mjs` to your Pages URL and, if using a project page, add `base: '/silvia-ly-realtor'`.
2. Use the official [`withastro/action`](https://github.com/withastro/action) in a GitHub Actions workflow, or run `npm run build` and publish the `dist/` folder.

Any static host works (Netlify, Cloudflare Pages, etc.) — serve the `dist/` directory.

---

## Pre-Launch Checklist

See [`CONTENT_CHECKLIST.md`](./CONTENT_CHECKLIST.md) for the full list of items Silvia needs to provide, plus:

- [ ] Replace all `PLACEHOLDER` values in `src/config/site.ts`
- [ ] Set the production `site` URL in `astro.config.mjs`
- [ ] Connect the contact form to a delivery service (Formspree, Netlify Forms, etc.)
- [ ] Replace sample client stories with approved content
- [ ] Add real photos to `public/images/`
- [ ] Add a privacy policy (consult a legal professional)
- [ ] Run `npm run build` and confirm zero errors

---

_© 2024 Silvia Ly. All rights reserved._
