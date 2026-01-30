---
type: doc
name: architecture
description: System architecture, layers, patterns, and design decisions
category: architecture
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Architecture Notes

This project is a static multi-page website with no server-side processing. The architecture follows a simple, traditional approach where HTML pages are served directly without build steps or bundling. This design prioritizes simplicity, fast load times, and easy maintenance.

## System Architecture Overview

The site operates as a **static file deployment** with the following topology:

```
Browser Request → Web Server → Static Files (HTML/CSS/JS)
                              ↓
                    External Services (FormSubmit.co, Google Fonts)
```

All pages are pre-rendered HTML documents. JavaScript enhances the user experience with animations and interactivity but is not required for core content consumption.

## Architectural Layers

- **Presentation Layer**: HTML pages with semantic markup (`index.html`, `services/*.html`, `portfolio/`)
- **Styling Layer**: CSS with custom properties for theming (`styles.css`, `finalrenamer/styles.css`)
- **Behavior Layer**: Vanilla JavaScript for interactivity (`main.js`, `finalrenamer/script.js`)
- **Assets Layer**: Images and media files (`assets/`)

> See [`codebase-map.json`](./codebase-map.json) for complete symbol counts and dependency graphs.

## Detected Design Patterns

| Pattern | Confidence | Locations | Description |
|---------|------------|-----------|-------------|
| Module Pattern | 90% | `main.js`, `finalrenamer/script.js` | Functions encapsulated with `DOMContentLoaded` initialization |
| Observer Pattern | 85% | `initScrollReveal()` | Uses `IntersectionObserver` for scroll-triggered animations |
| Guard Clause | 80% | All `initXxx()` functions | Early returns when DOM elements are missing |
| CSS Custom Properties | 95% | `styles.css:root` | Centralized theming with CSS variables |

## Entry Points

- [`index.html`](../../index.html:1) — Main site entry
- [`main.js`](../../main.js:1) — Global JavaScript initialization
- [`styles.css`](../../styles.css:1) — Global styles
- [`finalrenamer/index.html`](../../finalrenamer/index.html:1) — Product microsite entry

## Public API

| Symbol | Type | Location |
|--------|------|----------|
| `initMobileNav` | Function | `main.js:7` |
| `initScrollReveal` | Function | `main.js:45` |
| `initContactFormTracking` | Function | `main.js:63` |
| `initNavbarScroll` | Function | `finalrenamer/script.js:47` |
| `initSmoothScroll` | Function | `finalrenamer/script.js:97` |

## External Service Dependencies

- **FormSubmit.co**: Contact form processing (POST endpoint, email delivery)
- **Google Fonts**: Web font delivery (preconnected for performance)
- **DataLayer**: Analytics event tracking (optional, pushes form events)

## Key Decisions & Trade-offs

1. **No Build System**: Chose simplicity over optimization. Trade-off: No minification, bundling, or transpilation, but zero build complexity.
2. **Vanilla JavaScript**: Avoided frameworks. Trade-off: More manual DOM manipulation, but no dependencies and smaller footprint.
3. **CSS Custom Properties**: Native theming without preprocessors. Trade-off: Requires modern browser support.
4. **FormSubmit.co**: External form handling. Trade-off: Dependency on third-party service, but no server needed.

## Top Directories Snapshot

- `/` — Root HTML pages and global assets (~5 files)
- `services/` — Service-specific landing pages (~4 files)
- `portfolio/` — Portfolio showcase (~1 file)
- `finalrenamer/` — Product microsite (~3 files)
- `assets/` — Images and media (~15+ files)

## Related Resources

- [Project Overview](./project-overview.md)
- [Data Flow](./data-flow.md)
- [Development Workflow](./development-workflow.md)
