---
type: doc
name: project-overview
description: High-level overview of the project, its purpose, and key components
category: overview
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Project Overview

WPC Solutions is a static corporate website for a software and game development company based in Brazil. The site showcases the company's services including mobile apps, Windows software, game development, and modern websites. It serves as a lead generation tool with contact forms and portfolio display.

> **Detailed Analysis**: For complete symbol counts, architecture layers, and dependency graphs, see [`codebase-map.json`](./codebase-map.json).

## Quick Facts

- **Root**: `C:\Users\Eduardo\Repository\WPCSolutionsSites`
- **Languages**: HTML (8 pages), CSS (2 stylesheets), JavaScript (2 scripts)
- **Entry**: `index.html`
- **Content Language**: Portuguese (pt-BR)
- **Full analysis**: [`codebase-map.json`](./codebase-map.json)

## Entry Points

- [`index.html`](../../index.html) — Main homepage
- [`portfolio/index.html`](../../portfolio/index.html) — Portfolio showcase
- [`finalrenamer/index.html`](../../finalrenamer/index.html) — Separate product landing page

## Key Exports

This is a static site with no module exports. Key JavaScript functions are exposed globally:

- `initMobileNav()` — Mobile navigation toggle
- `initScrollReveal()` — Scroll-triggered animations
- `initContactFormTracking()` — Form submission tracking

## File Structure & Code Organization

- `index.html` — Homepage with hero, services, and contact sections
- `styles.css` — Global styles with CSS custom properties
- `main.js` — Global scripts (mobile nav, scroll reveal, form tracking)
- `services/` — Individual service pages (apps-mobile, game-development, software-windows, websites-modernos)
- `portfolio/` — Portfolio showcase page
- `finalrenamer/` — Separate product landing page with its own styles and scripts
- `assets/` — Images, SVGs, and media files
- `obrigado.html` — Thank you page after form submission

## Technology Stack Summary

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build System**: None — files served directly
- **Forms**: FormSubmit.co external service
- **Fonts**: Google Fonts (preconnected)
- **SEO**: Structured data (JSON-LD), Open Graph, Twitter cards

## Getting Started Checklist

1. Clone the repository
2. Open with any static file server (`npx serve`, VS Code Live Server, or `python -m http.server`)
3. Navigate to `http://localhost:PORT` in browser
4. Edit HTML/CSS/JS files directly — changes are immediate on refresh
5. Review [Development Workflow](./development-workflow.md) for contribution guidelines

## Next Steps

- See [Architecture Notes](./architecture.md) for system design details
- Review [Development Workflow](./development-workflow.md) for contribution process
- Check [Tooling Guide](./tooling.md) for productivity tips
