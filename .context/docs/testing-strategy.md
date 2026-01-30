---
type: doc
name: testing-strategy
description: Test frameworks, patterns, coverage requirements, and quality gates
category: testing
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Testing Strategy

This project has **no automated testing framework**. Quality is maintained through manual testing and code review.

## Test Types

| Type | Framework | Status |
|------|-----------|--------|
| Unit Tests | None | Not implemented |
| Integration Tests | None | Not implemented |
| E2E Tests | None | Not implemented |
| Manual Testing | Browser-based | Primary QA method |

## Running Tests

Since there's no test framework, testing is performed manually:

- **Visual inspection**: Open pages in browser, check layout and styling
- **Responsive testing**: Use browser DevTools to test at various viewport sizes
- **Cross-browser**: Test in Chrome, Firefox, Safari, Edge
- **Form testing**: Submit contact forms to verify FormSubmit.co integration
- **Link checking**: Click all navigation and internal links

## Quality Gates

### Pre-merge Checklist (Manual)

- [ ] All pages load without console errors
- [ ] Mobile navigation toggles correctly
- [ ] Scroll reveal animations work
- [ ] Forms submit and redirect properly
- [ ] Images load and have alt text
- [ ] Links are not broken
- [ ] Responsive layout works at 768px breakpoint

### HTML Validation

Use the [W3C Validator](https://validator.w3.org/) to check HTML:
```bash
# Or use a CLI tool
npx html-validate index.html
```

### Accessibility Check

Use browser accessibility tools or:
```bash
npx pa11y http://localhost:8000
```

## Troubleshooting

### Common Issues

1. **Animations not triggering**: Check if `IntersectionObserver` is supported; verify `.reveal` class is applied
2. **Mobile nav not working**: Ensure `main.js` is loaded; check for JS errors
3. **Form not submitting**: Verify FormSubmit.co endpoint; check form `action` attribute
4. **Styles not applied**: Clear browser cache; verify CSS file is linked

## Future Considerations

If testing becomes necessary:
- **Visual regression**: Consider Percy or Chromatic
- **E2E**: Playwright or Cypress for form and navigation testing
- **Linting**: ESLint for JavaScript, Stylelint for CSS
