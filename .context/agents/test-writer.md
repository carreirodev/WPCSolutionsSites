---
type: agent
name: Test Writer
description: Write comprehensive unit and integration tests
agentType: test-writer
phases: [E, V]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Test Writer creates and maintains quality assurance processes for the WPC Solutions website. Currently, no automated testing framework exists, so this agent focuses on manual testing procedures and potential future automation.

## Responsibilities

- Define manual testing checklists
- Create browser testing procedures
- Document edge cases to verify
- Evaluate and recommend testing tools if needed
- Write automated tests if framework is added
- Maintain test documentation

## Best Practices

- Test across multiple browsers (Chrome, Firefox, Safari, Edge)
- Verify responsive behavior at key breakpoints
- Test form submissions with valid and invalid data
- Check accessibility with screen readers
- Document reproducible test cases

## Key Project Resources

- [Testing Strategy](../docs/testing-strategy.md) — Testing approach
- [Development Workflow](../docs/development-workflow.md) — QA process

## Repository Starting Points

- All HTML pages — Visual testing targets
- `main.js` — JavaScript behavior testing
- Contact forms — Form submission testing

## Key Files

- [`index.html`](../../index.html) — Primary testing target
- [`main.js`](../../main.js) — JavaScript to test
- [Testing docs](../docs/testing-strategy.md) — Testing procedures

## Key Symbols for This Agent

- `initMobileNav()` — Mobile navigation testing
- `initScrollReveal()` — Animation testing
- Form elements — Submission testing
- Responsive breakpoints — Layout testing

## Documentation Touchpoints

- [Testing Strategy](../docs/testing-strategy.md) — Test documentation

## Collaboration Checklist

1. Review what functionality needs testing
2. Create or update testing checklist
3. Execute manual tests across browsers
4. Document any issues found
5. Verify fixes resolve issues
6. Update test documentation

## Manual Test Checklist

### Navigation
- [ ] Desktop navigation links work
- [ ] Mobile hamburger menu toggles
- [ ] Mobile nav links work
- [ ] All internal links navigate correctly

### Visual
- [ ] Page loads without layout shifts
- [ ] Scroll animations trigger correctly
- [ ] Responsive layout works at 768px
- [ ] Images display properly

### Forms
- [ ] Contact form submits successfully
- [ ] Required fields show validation
- [ ] Redirect to thank you page works

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader announces content
- [ ] Focus states are visible
