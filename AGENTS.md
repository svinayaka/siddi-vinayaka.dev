<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repository Guidelines & Architecture Rules

## 1. Next.js 16 Conventions & Asynchronous Routing
- All page and layout `params` are asynchronous promises:
  ```tsx
  export default async function Page({
    params,
  }: Readonly<{
    params: Promise<{ lang: string }>;
  }>) {
    const { lang } = await params;
    // ...
  }
  ```
- All routes are localized under `app/[lang]/`.

## 2. Design System & Token Strictness
- **Package**: Consumes `@svinayaka/siddi-design-system/tokens`.
- **CSS Custom Properties**: Always style using `--ksv-ds-*` variables for colors, typography, spacing, radius, shadows, and transitions.
- **No Hardcoded Values**: Do not write hardcoded hex color codes, arbitrary pixel padding/margins, or ad-hoc border colors in SCSS modules.
- **Theme Awareness**: Semantic tokens (`--ksv-ds-bg-surface`, `--ksv-ds-text-primary`, `--ksv-ds-interactive-primary`) swap automatically under `data-ksv-ds-theme="dark"` / `"light"`.

## 3. Web Accessibility (WCAG 2.1 AA) Standards
- Maintain semantic HTML5 structure (`<main>`, `<header>`, `<section>`, `<button>`, `<dialog>`).
- Interactive elements must support visible keyboard focus using `--ksv-ds-border-focus`.
- Custom modals and interactive widgets must implement WAI-ARIA 1.2 patterns (focus trapping, Esc dismissal, `aria-live` regions).
- JSX comment-like text nodes (e.g., `// ...`) inside tags must be wrapped in expression braces (`{'// ...'}`).

## 4. Verification Workflow
- Always verify changes with `npm run build` to ensure static page generation succeeds for all routes.
