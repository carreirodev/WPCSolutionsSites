# Graph Report - .  (2026-05-17)

## Corpus Check
- 33 files · ~155,869 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 89 nodes · 112 edges · 12 communities (10 shown, 2 thin omitted)
- Extraction: 80% EXTRACTED · 12% INFERRED · 8% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_WPC Core Brand|WPC Core Brand]]
- [[_COMMUNITY_Design System Components|Design System Components]]
- [[_COMMUNITY_Logo Assets HorizVert|Logo Assets Horiz/Vert]]
- [[_COMMUNITY_Logo Assets Docs|Logo Assets Docs]]
- [[_COMMUNITY_Service Icons|Service Icons]]
- [[_COMMUNITY_Cross-Site Patterns|Cross-Site Patterns]]
- [[_COMMUNITY_Design Tokens & System|Design Tokens & System]]
- [[_COMMUNITY_FinalRenamer Product|FinalRenamer Product]]
- [[_COMMUNITY_Navbar Scroll Shared|Navbar Scroll Shared]]
- [[_COMMUNITY_Smooth Scroll|Smooth Scroll]]

## God Nodes (most connected - your core abstractions)
1. `WPC Solutions Landing Page` - 9 edges
2. `WPC Solutions Brand` - 9 edges
3. `WPC Solutions Logo (Horizontal, Dark)` - 7 edges
4. `WPC Solutions Logo (Horizontal, White)` - 7 edges
5. `Final Renamer Product Page` - 6 edges
6. `WPC Solutions (Brand)` - 6 edges
7. `Website Audit Report` - 5 edges
8. `WPC Solutions (Organization)` - 5 edges
9. `WPC Solutions Logo (Vertical, Dark)` - 5 edges
10. `WPC Design System Component` - 4 edges

## Surprising Connections (you probably didn't know these)
- `WPC Design Tokens` --conceptually_related_to--> `WPC Solutions (Organization)`  [INFERRED]
  docs/wpc-design-system.jsx → index.html
- `Website Audit Report` --conceptually_related_to--> `Mobile Nav with Overlay Pattern`  [INFERRED]
  reports/website-audit-report.md → main.js
- `initMobileNav (main.js)` --semantically_similar_to--> `initMobileNav (finalrenamer/script.js)`  [INFERRED] [semantically similar]
  main.js → finalrenamer/script.js
- `initNavbarScroll (main.js)` --semantically_similar_to--> `initNavbarScroll (finalrenamer/script.js)`  [INFERRED] [semantically similar]
  main.js → finalrenamer/script.js
- `Website Audit Report` --cites--> `initScrollReveal (main.js)`  [EXTRACTED]
  reports/website-audit-report.md → main.js

## Hyperedges (group relationships)
- **Duplicated JS Init Pattern Across Pages** — main_js_initMobileNav, main_js_initNavbarScroll, main_js_initScrollReveal, fr_script_initMobileNav, fr_script_initNavbarScroll, fr_script_initScrollReveal [INFERRED 0.85]
- **DataLayer Tracking Ecosystem** — main_js_initContactFormTracking, fr_script_initTracking, dataLayer_push_pattern [EXTRACTED 0.90]
- **WPC Site Cross-Linking Navigation** — index_html, portfolio_index_html, finalrenamer_index_html, apps_mobile_html, game_development_html, software_windows_html, websites_modernos_html [EXTRACTED 0.95]

## Communities (12 total, 2 thin omitted)

### Community 0 - "WPC Core Brand"
Cohesion: 0.18
Nodes (17): Final Renamer (Product), FormSubmit.co, Microsoft Store, Ollama (Local AI Runtime), WPC Solutions (Organization), Apps Mobile Service Page, Contact Form Element, DataLayer Push Pattern (+9 more)

### Community 1 - "Design System Components"
Cohesion: 0.18
Nodes (6): [activeNav, setActiveNav], [activeTab, setActiveTab], [darkPreview, setDarkPreview], navIds, navItems, tokens

### Community 2 - "Logo Assets Horiz/Vert"
Cohesion: 0.4
Nodes (11): WPC Solutions Logo (Horizontal, Dark), WPC Solutions Logo (Horizontal, Dark, Raster), WPC Solutions Logo (Horizontal, White), WPC Solutions Logo (Horizontal, White, Raster), WPC Solutions Logo (Vertical, Dark), WPC Solutions Logo (Vertical, White), WPC Solutions (Brand), Vonique 43 Font (+3 more)

### Community 3 - "Logo Assets Docs"
Cohesion: 0.31
Nodes (10): WPC Icon (Brand Mark), WPC Logo Horizontal @2x, WPC Logo Horizontal White Variant, WPC Logo Horizontal, WPC Logo Vertical, Brand Dark (#1d1d1b), Brand Red (#ef372a / #ef483d), Lamp/Lightbulb Graphic Element (+2 more)

### Community 4 - "Service Icons"
Cohesion: 0.43
Nodes (7): WPC Site Icon (Favicon), WPC Hero Section Background, Development Service Icon, Game Development Service Icon, Mobile Development Service Icon, Web Development Service Icon, WPC Solutions (Brand)

### Community 6 - "Cross-Site Patterns"
Cohesion: 0.4
Nodes (6): Website Audit Report, initMobileNav (finalrenamer/script.js), initScrollReveal (finalrenamer/script.js), initMobileNav (main.js), initScrollReveal (main.js), Mobile Nav with Overlay Pattern

### Community 7 - "Design Tokens & System"
Cohesion: 0.33
Nodes (6): ColorSwatch Component, ComponentCard Component, Section Component, WPC Design System Component, WPC Design Tokens, Surgical Accent Design Rationale

### Community 8 - "FinalRenamer Product"
Cohesion: 0.4
Nodes (6): Microsoft Store, Microsoft Store Badge (DFTMS), Hero Section Background, Hero Visual Theme, Final Renamer App Icon, Final Renamer Application

## Ambiguous Edges - Review These
- `WPC Site Icon (Favicon)` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/icon.webp · relation: semantically_similar_to
- `WPC Hero Section Background` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/wpc-hero-bg.png · relation: conceptually_related_to
- `Development Service Icon` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/wpc-icon-dev.png · relation: conceptually_related_to
- `Development Service Icon` → `Web Development Service Icon`  [AMBIGUOUS]
  assets/ · relation: semantically_similar_to
- `Development Service Icon` → `Mobile Development Service Icon`  [AMBIGUOUS]
  assets/ · relation: semantically_similar_to
- `Game Development Service Icon` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/wpc-icon-game.png · relation: conceptually_related_to
- `Mobile Development Service Icon` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/wpc-icon-mobile.png · relation: conceptually_related_to
- `Mobile Development Service Icon` → `Web Development Service Icon`  [AMBIGUOUS]
  assets/ · relation: semantically_similar_to
- `Web Development Service Icon` → `WPC Solutions (Brand)`  [AMBIGUOUS]
  assets/wpc-icon-web.png · relation: conceptually_related_to

## Knowledge Gaps
- **21 isolated node(s):** `tokens`, `navItems`, `navIds`, `[activeNav, setActiveNav]`, `[darkPreview, setDarkPreview]` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `WPC Site Icon (Favicon)` and `WPC Solutions (Brand)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `WPC Hero Section Background` and `WPC Solutions (Brand)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Development Service Icon` and `WPC Solutions (Brand)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Development Service Icon` and `Web Development Service Icon`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Development Service Icon` and `Mobile Development Service Icon`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `Game Development Service Icon` and `WPC Solutions (Brand)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Mobile Development Service Icon` and `WPC Solutions (Brand)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._