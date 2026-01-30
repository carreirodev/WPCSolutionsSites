---
type: doc
name: glossary
description: Project terminology, type definitions, domain entities, and business rules
category: glossary
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Glossary & Domain Concepts

This document defines project-specific terminology used throughout the WPC Solutions website codebase.

## Type Definitions

This project uses vanilla JavaScript without TypeScript. No formal type definitions exist.

## Enumerations

No formal enums. Key CSS custom property sets serve as de facto enums:

- **Colors**: `--bg-dark`, `--primary-glow`, `--secondary-glow`, `--text-light`
- **Spacing**: Defined via CSS custom properties in `:root`

## Core Terms

| Term | Definition | Usage |
|------|------------|-------|
| **Reveal** | Scroll-triggered animation effect | Elements with `.reveal` class animate when entering viewport |
| **Glow** | Neon/cyberpunk visual effect | Primary brand colors with glow effects (`--primary-glow: #00f3ff`) |
| **Service Page** | Landing page for specific service | Located in `services/` directory |
| **FinalRenamer** | Standalone product | Separate microsite in `finalrenamer/` with own assets |
| **Obrigado** | Portuguese for "thank you" | Post-form-submission redirect page |
| **DataLayer** | Analytics event queue | Array for tracking events, used by analytics tools |

## Acronyms & Abbreviations

| Abbreviation | Expansion | Context |
|--------------|-----------|---------|
| **WPC** | WPC Solutions | Company name |
| **SEO** | Search Engine Optimization | Structured data, meta tags, sitemap |
| **JSON-LD** | JSON for Linking Data | Structured data format for SEO |
| **OG** | Open Graph | Social media preview meta tags |
| **BEM** | Block Element Modifier | CSS naming convention (loosely followed) |
| **CTA** | Call to Action | Buttons prompting user interaction |

## Personas / Actors

### Primary Visitors
- **Potential Clients**: Businesses seeking software/game development services
- **Goals**: Evaluate services, view portfolio, initiate contact
- **Pain points**: Need clear pricing signals, proof of competence

### Secondary Visitors
- **Job Seekers**: Developers interested in working with WPC
- **Goals**: Learn about company culture and projects

## Domain Rules & Invariants

1. **Language**: All user-facing content must be in Brazilian Portuguese (pt-BR)
2. **Contact Forms**: Must use FormSubmit.co endpoint; redirect to `obrigado.html`
3. **Images**: Offscreen images should use `loading="lazy"`
4. **Accessibility**: All interactive elements need `aria-label` or visible labels
5. **Mobile Breakpoint**: Primary responsive breakpoint at 768px
