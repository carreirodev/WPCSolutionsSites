# WPC Solutions - Agent Coding Guidelines

## Project Overview
Static HTML/CSS/JS corporate website for WPC Solutions (software & game development company).
Multi-page site with no build system - files are served directly.

## Development Commands

This project has **no build system, no package.json, and no test framework**.

- Run locally: Use any static file server (e.g., `npx serve`, VS Code Live Server, or Python `python -m http.server`)
- No linting configured - manual code review required
- No testing framework - manual browser testing required
- No single test runner - test changes by opening relevant HTML files in browser

## JavaScript Conventions

### File Structure
- Place scripts at end of `<body>` or use `DOMContentLoaded` event listener
- Use double quotes consistently for strings
- Use `const` by default, `let` only when reassignment needed
- Never use `var`

### Function Naming
- Initialization functions: `initXxx()` (e.g., `initMobileNav()`, `initScrollReveal()`)
- Use descriptive, camelCase names
- Keep functions focused and single-purpose

### Event Handling
```javascript
document.addEventListener("DOMContentLoaded", () => {
  initFeature1();
  initFeature2();
});

function initFeature1() {
  const element = document.getElementById("elementId");
  if (!element) return;
  
  element.addEventListener("click", handler);
}
```

### DOM Manipulation
- Always check element existence before use: `if (!element) return;`
- Use `querySelector`/`querySelectorAll` for flexible selection
- Use `classList.add()`/`classList.remove()` for class manipulation
- Use `dataset` for custom data attributes: `element.dataset.value`

### Error Handling
- Use guard clauses for null/undefined checks
- Gracefully degrade when elements/features not present
- Avoid try-catch unless dealing with external APIs

## CSS Conventions

### Architecture
- CSS custom properties in `:root` for theming (colors, spacing, gradients)
- Use CSS Grid for 2D layouts, Flexbox for 1D layouts
- Mobile-first responsive design with `@media (max-width: 768px)`

### Naming
- BEM-ish class names for components: `.component-name`, `.component-name--modifier`, `.component-name__element`
- Use kebab-case for class names
- State classes: `.active`, `.scrolled`, `.hovered`

### Spacing & Units
- Use `px` for borders, `rem` for font sizes, `var(--custom-prop)` for spacing
- Consistent spacing using CSS custom properties
- Use `clamp()` for responsive typography when needed

### Transitions & Animations
- Use predefined keyframe animations: `@keyframes fadeUp`, `@keyframes float`, `@keyframes glow`
- Standard transition: `transition: 0.3s`
- Reveal animations using `.reveal` class with `.reveal.active` state

### Color System
- Dark theme base: `--bg-dark: #050505`
- Primary accent: `--primary-glow: #00f3ff`
- Secondary accent: `--secondary-glow: #0066ff`
- Text: `--text-primary`, `--text-secondary`, `--text-accent`

## HTML Conventions

### Structure
- `<!doctype html>` at file start
- `<html lang="pt-BR">` for Portuguese content
- Meta tags for SEO: description, og:, twitter:
- Use semantic elements: `<nav>`, `<section>`, `<main>`, `<footer>`

### Accessibility
- `aria-label` on interactive elements without visible text
- `aria-expanded` for toggle states
- Use `<button>` for actions, `<a>` for navigation
- Alt text on all images

### Performance
- `rel="preconnect"` for Google Fonts
- External CSS in `<head>`
- JavaScript at end of `<body>` or defer
- Canonical URLs and structured data (JSON-LD)

## File Organization

```
/
├── index.html           # Homepage
├── main.js             # Global scripts
├── styles.css          # Global styles
├── portfolio/          # Portfolio pages
├── services/           # Individual service pages
├── finalrenamer/       # Separate project landing page
├── assets/             # Images, SVGs
└── robots.txt / sitemap.xml  # SEO files
```

## General Guidelines

- Keep code DRY - extract common patterns
- Use semantic, descriptive variable/function names
- Add comments for complex logic only
- Consistent indentation (2 spaces)
- No external frameworks (vanilla JS/CSS only)
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness is mandatory
- Test on both desktop and mobile views
