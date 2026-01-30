---
type: doc
name: development-workflow
description: Day-to-day engineering processes, branching, and contribution guidelines
category: workflow
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Development Workflow

This project follows a simple workflow suited to static sites. Changes are made directly to source files with no build or compilation step required.

## Branching & Releases

- **Main branch**: `main` — production-ready code
- **Feature branches**: `feature/description` — new features or pages
- **Fix branches**: `fix/description` — bug fixes
- **Release cadence**: Deploy on merge to main (or manual push to hosting)

```
main ← feature/new-service-page
     ← fix/mobile-nav-bug
```

## Local Development

- **Start server**: `npx serve` or `python -m http.server 8000`
- **VS Code Live Server**: Install extension → right-click HTML → "Open with Live Server"
- **No build step**: Edit files directly, refresh browser to see changes
- **No dependencies to install**: Just clone and run

## Code Review Expectations

Since there's no linting or automated testing, code review focuses on:

1. **HTML Validity**: Proper semantic structure, accessibility attributes
2. **CSS Consistency**: Follow existing custom property conventions
3. **JavaScript Safety**: Guard against missing elements, avoid global pollution
4. **Cross-browser**: Test on Chrome, Firefox, Safari, Edge
5. **Mobile-first**: Verify responsive behavior at 768px breakpoint
6. **Portuguese content**: Ensure proper language and spelling

### Review Checklist

- [ ] HTML validates (can use W3C validator)
- [ ] Links work correctly
- [ ] Images have alt text
- [ ] Forms function properly
- [ ] Mobile navigation works
- [ ] Scroll animations trigger correctly
- [ ] No console errors

## Onboarding Tasks

New contributors should:

1. Clone the repository
2. Run a local server and explore all pages
3. Review `CLAUDE.md` for coding conventions
4. Make a small change (typo fix, style tweak) as a first PR
5. Understand the FormSubmit.co integration for contact forms
