# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS corporate website for WPC Solutions (software & game development company). Multi-page site with no build system - files are served directly.

## Development Commands

This project has **no build system, no package.json, and no test framework**.

- Run locally: Use any static file server (e.g., `npx serve`, VS Code Live Server, or `python -m http.server`)
- No linting configured - manual code review required
- No testing framework - test changes by opening relevant HTML files in browser

## Architecture

```
/
├── index.html              # Homepage
├── main.js                 # Global scripts (mobile nav, scroll reveal, form tracking)
├── styles.css              # Global styles with CSS custom properties
├── obrigado.html           # Thank you page (form submission redirect)
├── portfolio/index.html    # Portfolio showcase
├── services/               # Individual service pages
│   ├── apps-mobile.html
│   ├── game-development.html
│   ├── software-windows.html
│   └── websites-modernos.html
├── finalrenamer/           # Separate product landing page (has own styles.css and script.js)
├── assets/                 # Images, SVGs
├── robots.txt
└── sitemap.xml
```

## JavaScript Conventions

- Use `const` by default, `let` only when reassignment needed, never `var`
- Double quotes for strings
- Initialization pattern: `initXxx()` functions called from `DOMContentLoaded`
- Always guard against missing elements: `if (!element) return;`
- Use `IntersectionObserver` for scroll-triggered animations

## CSS Conventions

- CSS custom properties in `:root` for theming (colors, spacing, gradients)
- Dark theme: `--bg-dark: #050505`, `--primary-glow: #00f3ff`, `--secondary-glow: #0066ff`
- Mobile-first responsive design with `@media (max-width: 768px)`
- Reveal animations: `.reveal` class with `.reveal.active` state
- BEM-ish naming: `.component-name`, `.component-name--modifier`

## HTML Conventions

- Portuguese content: `<html lang="pt-BR">`
- SEO: canonical URLs, Open Graph, Twitter cards, JSON-LD structured data
- Use semantic elements: `<nav>`, `<section>`, `<main>`, `<footer>`
- Accessibility: `aria-label`, `aria-expanded`, proper alt text
- Performance: `rel="preconnect"` for fonts, `loading="lazy"` for offscreen images

## Key Patterns

- Contact form uses FormSubmit.co service (redirects to obrigado.html)
- Form tracking pushes to `dataLayer` or dispatches custom events
- Mobile nav toggle with hamburger menu pattern
