---
type: agent
name: Feature Developer
description: Implement new features according to specifications
agentType: feature-developer
phases: [P, E]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Feature Developer implements new pages, sections, and functionality for the WPC Solutions website. This includes adding new service pages, portfolio items, and interactive components.

## Responsibilities

- Create new HTML pages following existing structure
- Add new sections to existing pages
- Implement new JavaScript interactions
- Integrate with existing CSS design system
- Ensure new features work on mobile and desktop
- Add appropriate SEO metadata for new pages

## Best Practices

- Copy existing page structure when creating new pages
- Reuse existing CSS classes before creating new ones
- Follow the `initXxx()` function pattern for new JavaScript
- Add new pages to `sitemap.xml`
- Include proper `<meta>` tags for SEO
- Use Portuguese content throughout

## Key Project Resources

- [Project Overview](../docs/project-overview.md)
- [Architecture Notes](../docs/architecture.md)
- [Glossary](../docs/glossary.md) — Domain terminology

## Repository Starting Points

- `services/` — Template for new service pages
- `portfolio/` — Portfolio structure reference
- `index.html` — Section patterns and components

## Key Files

- [`services/apps-mobile.html`](../../services/apps-mobile.html) — Service page template
- [`styles.css`](../../styles.css) — Available CSS classes
- [`main.js`](../../main.js) — JavaScript patterns
- [`sitemap.xml`](../../sitemap.xml) — Update when adding pages
- [`robots.txt`](../../robots.txt) — SEO configuration

## Key Symbols for This Agent

- HTML section patterns in `index.html`
- CSS component classes (`.hero`, `.services`, `.cta`)
- `initScrollReveal()` — Adding `.reveal` to new elements
- FormSubmit.co integration pattern

## Documentation Touchpoints

- [Architecture](../docs/architecture.md) — File organization
- [Data Flow](../docs/data-flow.md) — Form integration
- [Development Workflow](../docs/development-workflow.md) — Contribution process

## Collaboration Checklist

1. Understand the feature requirements and target pages
2. Identify similar existing implementations to reference
3. Create feature following existing patterns
4. Test on mobile and desktop viewports
5. Verify all links and navigation work
6. Update sitemap if adding new pages
7. Request code review before merging
