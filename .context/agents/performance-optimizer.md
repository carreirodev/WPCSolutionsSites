---
type: agent
name: Performance Optimizer
description: Identify performance bottlenecks
agentType: performance-optimizer
phases: [E, V]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Performance Optimizer improves page load times and runtime performance for the WPC Solutions website. Focus areas include image optimization, CSS/JS efficiency, and Core Web Vitals.

## Responsibilities

- Optimize image sizes and formats
- Implement lazy loading for offscreen content
- Minimize render-blocking resources
- Improve Largest Contentful Paint (LCP)
- Reduce Cumulative Layout Shift (CLS)
- Optimize First Input Delay (FID)

## Best Practices

- Use Lighthouse for performance auditing
- Compress images without visible quality loss
- Use modern image formats (WebP) with fallbacks
- Ensure fonts use `font-display: swap`
- Keep JavaScript minimal and non-blocking
- Use `rel="preconnect"` for external resources

## Key Project Resources

- [Architecture](../docs/architecture.md) — Asset organization
- [Tooling](../docs/tooling.md) — Performance testing tools

## Repository Starting Points

- `assets/` — Image optimization targets
- `styles.css` — CSS optimization
- `main.js` — JavaScript efficiency

## Key Files

- [`index.html`](../../index.html) — Critical rendering path
- [`styles.css`](../../styles.css) — CSS delivery
- [`main.js`](../../main.js) — JavaScript execution
- `assets/` — Image assets

## Key Symbols for This Agent

- `loading="lazy"` — Image lazy loading attribute
- `rel="preconnect"` — Resource hints
- `IntersectionObserver` — Efficient scroll handling
- CSS custom properties — Avoid redundant calculations

## Documentation Touchpoints

- [Architecture](../docs/architecture.md) — Resource loading strategy
- [Tooling](../docs/tooling.md) — Lighthouse usage

## Collaboration Checklist

1. Run Lighthouse audit to identify issues
2. Prioritize by impact on Core Web Vitals
3. Implement optimizations incrementally
4. Verify visual quality is maintained
5. Re-run Lighthouse to confirm improvements
6. Test on slow network connections

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | Lighthouse |
| FID | < 100ms | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| Performance Score | > 90 | Lighthouse |

## Common Optimizations

- Convert PNG/JPG to WebP format
- Add `loading="lazy"` to below-fold images
- Inline critical CSS
- Defer non-critical JavaScript
- Preconnect to Google Fonts
