---
type: doc
name: tooling
description: Scripts, IDE settings, automation, and developer productivity tips
category: tooling
generated: 2026-01-30
status: filled
scaffoldVersion: "2.0.0"
---

## Tooling & Productivity Guide

This project requires minimal tooling. Any text editor and a browser are sufficient for development.

## Required Tooling

| Tool | Purpose | Installation |
|------|---------|--------------|
| Git | Version control | `brew install git` or download from git-scm.com |
| Text Editor | Code editing | VS Code, Sublime, or any editor |
| Web Browser | Testing | Chrome, Firefox, Safari, or Edge |
| Static Server | Local development | See options below |

### Static Server Options

```bash
# Option 1: Node.js serve (if Node installed)
npx serve

# Option 2: Python (if Python installed)
python -m http.server 8000

# Option 3: PHP (if PHP installed)
php -S localhost:8000

# Option 4: VS Code Live Server extension
# Install extension, right-click HTML file → Open with Live Server
```

## Recommended Automation

Since there's no build system, automation is minimal:

### Git Hooks (Optional)

Create `.git/hooks/pre-commit`:
```bash
#!/bin/bash
# Validate HTML files
for file in $(git diff --cached --name-only | grep '\.html$'); do
  npx html-validate "$file" || exit 1
done
```

### File Watching (Optional)

For automatic browser refresh:
```bash
# Using browser-sync
npx browser-sync start --server --files "**/*.html, **/*.css, **/*.js"
```

## IDE / Editor Setup

### VS Code Recommended Extensions

- **Live Server**: Auto-refresh on file save
- **HTMLHint**: HTML linting
- **Prettier**: Code formatting
- **Auto Rename Tag**: Rename paired HTML tags
- **CSS Peek**: Navigate to CSS definitions

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.wrapLineLength": 120,
  "css.validate": true
}
```

## Productivity Tips

1. **Browser DevTools**: Use responsive mode (Ctrl+Shift+M) for mobile testing
2. **VS Code Emmet**: Type `section.hero>h1+p` and press Tab for HTML scaffolding
3. **Color Picker**: Use browser DevTools color picker to match existing palette
4. **Network Tab**: Check for 404s on images or missing resources
5. **Lighthouse**: Run audits for performance, accessibility, SEO

### Useful Bookmarklets

```javascript
// Check all links on page
javascript:(function(){var links=document.querySelectorAll('a');links.forEach(function(l){console.log(l.href);});})();
```

## Related Resources

- [Development Workflow](./development-workflow.md)
- [CLAUDE.md](../../CLAUDE.md) — Coding conventions
