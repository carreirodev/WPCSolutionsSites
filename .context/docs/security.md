---
type: doc
name: security
description: Security policies, authentication, secrets management, and compliance requirements
category: security
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Security & Compliance Notes

As a static website with no server-side code or database, the security surface is minimal. Primary concerns involve client-side best practices and third-party service trust.

## Authentication & Authorization

This site has **no authentication system**. All content is public.

- No user accounts
- No admin panel
- No protected routes
- Form submissions go directly to FormSubmit.co (third-party)

## Secrets & Sensitive Data

### What's NOT in the codebase (correctly)
- No API keys
- No database credentials
- No authentication tokens
- No private configuration

### FormSubmit.co Configuration
- Email endpoint is visible in HTML (by design)
- FormSubmit.co provides spam protection via their service
- No sensitive data should be collected via contact forms

### Environment Considerations
- No `.env` files needed
- No build-time secrets
- All configuration is static HTML

## Security Best Practices for This Project

1. **XSS Prevention**: No user-generated content is rendered; static HTML only
2. **External Links**: Use `rel="noopener noreferrer"` for external links
3. **Form Validation**: Client-side validation for UX; FormSubmit.co handles server-side
4. **HTTPS**: Ensure hosting serves over HTTPS (handled by hosting provider)
5. **Content Security**: Consider adding CSP headers at hosting level

## Compliance & Policies

| Standard | Applicability | Status |
|----------|---------------|--------|
| LGPD (Brazil) | Contact form collects personal data | Privacy policy should be linked |
| GDPR | If serving EU visitors | Cookie consent may be needed for analytics |
| WCAG 2.1 | Accessibility | Partially implemented (aria-labels, semantic HTML) |

## Incident Response

For a static site, incidents are limited:

1. **Defacement**: Restore from git; review hosting access controls
2. **FormSubmit abuse**: Contact FormSubmit.co support; they handle spam filtering
3. **DNS/Hosting issues**: Contact hosting provider

No on-call rotation or complex incident management needed for this project scope.
