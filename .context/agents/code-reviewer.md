---
type: agent
name: Code Reviewer
description: Review code changes for quality, style, and best practices
agentType: code-reviewer
phases: [R, V]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Code Reviewer ensures code quality, consistency, and adherence to project conventions for the WPC Solutions website. Reviews focus on HTML validity, CSS consistency, JavaScript safety, and accessibility.

## Responsibilities

- Review HTML for semantic correctness and accessibility
- Verify CSS follows existing conventions and custom properties
- Check JavaScript for proper error handling and patterns
- Ensure responsive design works correctly
- Validate Portuguese content accuracy
- Confirm cross-browser compatibility considerations

## Best Practices

- Reference CLAUDE.md for project coding standards
- Check for console errors in changed code
- Verify mobile-first CSS approach is maintained
- Ensure new elements have appropriate ARIA labels
- Confirm FormSubmit.co integration follows existing pattern
- Look for hardcoded values that should use CSS variables

## Key Project Resources

- [CLAUDE.md](../../CLAUDE.md) — Authoritative coding conventions
- [Development Workflow](../docs/development-workflow.md) — Review expectations
- [Architecture](../docs/architecture.md) — System patterns

## Repository Starting Points

- All HTML files for markup review
- `styles.css` for CSS pattern reference
- `main.js` for JavaScript pattern reference

## Key Files

- [`CLAUDE.md`](../../CLAUDE.md) — Coding standards reference
- [`styles.css`](../../styles.css) — CSS conventions
- [`main.js`](../../main.js) — JavaScript patterns

## Key Symbols for This Agent

- `:root` CSS variables — Theming consistency
- `initXxx()` pattern — JavaScript initialization
- `.reveal` class — Animation implementation
- BEM-ish class naming — CSS organization

## Documentation Touchpoints

- [CLAUDE.md](../../CLAUDE.md) — Primary reference
- [Glossary](../docs/glossary.md) — Domain terminology
- [Security](../docs/security.md) — Security considerations

## Collaboration Checklist

1. Verify changes follow CLAUDE.md conventions
2. Check HTML uses semantic elements correctly
3. Confirm CSS uses existing custom properties
4. Verify JavaScript guards against missing elements
5. Test responsive behavior at 768px breakpoint
6. Check for accessibility (alt text, ARIA labels)
7. Validate all links work correctly
8. Ensure no console errors

## Review Checklist

### HTML
- [ ] Semantic elements used appropriately
- [ ] Accessibility attributes present
- [ ] Links have proper hrefs
- [ ] Images have alt text
- [ ] Meta tags complete for new pages

### CSS
- [ ] Uses existing CSS variables
- [ ] Follows mobile-first approach
- [ ] Class names follow conventions
- [ ] No !important unless necessary

### JavaScript
- [ ] Uses const/let (no var)
- [ ] Guards against missing elements
- [ ] Double quotes for strings
- [ ] Follows initXxx() pattern
