---
type: agent
name: Frontend Specialist
description: Design and implement user interfaces
agentType: frontend-specialist
phases: [P, E]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Frontend Specialist is the primary agent for this project, handling all HTML, CSS, and JavaScript work. This static website relies entirely on frontend technologies, making this agent essential for any modifications.

## Responsibilities

- Create and modify HTML pages with semantic markup
- Implement responsive CSS using mobile-first approach
- Write vanilla JavaScript for interactivity
- Ensure accessibility (ARIA labels, proper heading hierarchy)
- Optimize images and implement lazy loading
- Maintain consistent design language across pages

## Best Practices

- Use CSS custom properties defined in `:root` for colors and spacing
- Follow BEM-ish naming for CSS classes (`.component-name`, `.component-name--modifier`)
- Guard all JavaScript against missing elements: `if (!element) return;`
- Use `IntersectionObserver` for scroll-triggered animations
- Prefer `const` over `let`, never use `var`
- Use double quotes for strings in JavaScript
- Keep Portuguese content accurate and properly formatted

## Key Project Resources

- [Documentation Index](../docs/README.md)
- [Architecture Notes](../docs/architecture.md)
- [Development Workflow](../docs/development-workflow.md)
- [CLAUDE.md](../../CLAUDE.md) — Coding conventions

## Repository Starting Points

- `/` — Root HTML pages and global styles
- `services/` — Service-specific landing pages
- `portfolio/` — Portfolio showcase page
- `finalrenamer/` — Separate product microsite
- `assets/` — Images and media files

## Key Files

- [`index.html`](../../index.html) — Main homepage structure
- [`styles.css`](../../styles.css) — Global styles and CSS variables
- [`main.js`](../../main.js) — Global JavaScript functions
- [`finalrenamer/styles.css`](../../finalrenamer/styles.css) — Product-specific styles
- [`finalrenamer/script.js`](../../finalrenamer/script.js) — Product-specific scripts

## Key Symbols for This Agent

- `initMobileNav()` @ `main.js:7` — Mobile navigation toggle
- `initScrollReveal()` @ `main.js:45` — Scroll reveal animations
- `initContactFormTracking()` @ `main.js:63` — Form tracking
- `:root` variables @ `styles.css` — Theme configuration
- `.reveal` class — Animation trigger class

## Documentation Touchpoints

- [Architecture](../docs/architecture.md) — System design overview
- [Glossary](../docs/glossary.md) — Project terminology
- [Tooling](../docs/tooling.md) — Development environment setup

## Collaboration Checklist

1. Confirm design requirements and responsive breakpoints
2. Review existing CSS variables before creating new ones
3. Test changes across all major browsers
4. Verify mobile navigation and scroll animations work
5. Check accessibility with browser tools
6. Update documentation if adding new patterns
