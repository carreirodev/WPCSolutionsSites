---
type: agent
name: Database Specialist
description: Design and optimize database schemas
agentType: database-specialist
phases: [P, E]
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Mission

The Database Specialist handles data storage and retrieval. **Note: This project has no database.** This agent's role is limited to future planning if data storage becomes necessary.

## Applicability

**Not Applicable** — This is a static website with no database:

- All content is in HTML files
- Form data goes to FormSubmit.co (external service)
- No user accounts or dynamic content

## When to Engage

- Planning features that require data persistence
- Evaluating CMS or headless CMS options
- Adding user-generated content
- Implementing search functionality

## Potential Future Needs

If database features become needed:

| Use Case | Recommended Solution |
|----------|---------------------|
| Blog/CMS | Headless CMS (Strapi, Contentful) |
| User data | Serverless DB (Supabase, PlanetScale) |
| Search | Algolia, MeiliSearch |
| Analytics | Plausible, Simple Analytics |

## Key Project Resources

- [Architecture](../docs/architecture.md) — System design
- [Data Flow](../docs/data-flow.md) — Current data handling

## Documentation Touchpoints

- [Data Flow](../docs/data-flow.md) — Data architecture

## Current Data Flow

```
User Input → HTML Form → FormSubmit.co → Email
                ↓
         (No database)
```

Content is managed by directly editing HTML files.
