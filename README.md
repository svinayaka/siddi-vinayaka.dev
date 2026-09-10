# Siddi Vinayaka | Senior Front-End Engineer Portfolio

Professional portfolio, capability showcases, and architectural case studies built with Next.js (App Router), React, TypeScript, SCSS Modules, and a published Design System token pipeline.

## 🚀 Tech Stack & Architecture

- **Framework**: Next.js 16 (App Router with Static Site Generation & i18n routing `[lang]`)
- **UI Library**: React 19
- **Design System**: [`@svinayaka/siddi-design-system`](https://github.com/svinayaka/siddi-design-system/pkgs/npm/siddi-design-system) (W3C DTCG Token JSON $\to$ Style Dictionary $\to$ NPM $\to$ CSS `@layer`)
- **Styling**: SCSS Modules strictly powered by `--ksv-ds-*` design tokens
- **Type Safety**: TypeScript (strict mode)
- **Quality & A11y**: ESLint, WCAG 2.1 AA token contrast guarantees, WAI-ARIA 1.2 patterns

---

## 📂 Project Structure

```
siddi-portfolio/
├── app/
│   └── [lang]/
│       ├── capabilities/
│       │   ├── page.tsx                    # Capabilities Hub
│       │   ├── design-system/              # Design System & Token Architecture
│       │   │   ├── page.tsx                # 3-Tier token architecture & pipeline
│       │   │   └── showcase/               # Live interactive token showcases
│       │   └── accessibility/              # Web Accessibility & VPAT Compliance
│       │       └── page.tsx                # WCAG 2.1 AA strategy & live a11y tools
│       ├── case-studies/
│       │   ├── page.tsx                    # Case Studies Hub
│       │   └── Performance/                # Core Web Vitals optimization case study
│       ├── experience/
│       │   └── page.tsx                    # Work History & Leadership Timeline
│       ├── globals.scss                    # Global theme layers & CSS reset
│       ├── layout.tsx                      # Root multilingual layout
│       └── page.tsx                        # Home page (Hero, Capabilities, Experience)
├── components/
│   ├── capabilities/
│   │   ├── TokenDemo.tsx                   # Composite live theme & token customizer
│   │   └── AccessibilityDemo.tsx           # WCAG Contrast checker & focus trap simulator
│   ├── Header.tsx                          # Shared site header & navigation
│   └── Footer.tsx                          # Shared footer
├── dictionaries/
│   ├── en.json                             # English copy & metadata
│   └── te.json                             # Multilingual dictionary support
├── mfe-components/
│   └── contact-form.tsx                    # Framework-agnostic Web Component integration
└── package.json
```

---

## 🌟 Featured Capabilities

### 1. [Design System & Token Architecture](/en/capabilities/design-system)
* **3-Tier Hierarchy**: Layer 1 (Primitives), Layer 2 (Semantics with Light/Dark switching), and Layer 3 (Scoped Component Contracts).
* **Automated Pipeline**: Single JSON source of truth compiled via Style Dictionary into CSS Custom Properties (`--ksv-ds-*`) and published as a versioned npm package.
* **Zero Runtime Overhead**: Themed via native CSS `@layer tokens, themes;` and `data-ksv-ds-theme`.

### 2. [Web Accessibility & VPAT Compliance](/en/capabilities/accessibility)
* **Verified Impact**: Raised internal enterprise audit score from **78% to 94%** across 60+ Web Components.
* **Token Contrast Guarantees**: Pre-validated color pairings codifying WCAG 2.1 AA contrast requirements (4.5:1 text, 3:1 UI borders).
* **Interactive Tooling**: Live in-browser WCAG contrast validator and WAI-ARIA 1.2 keyboard focus-trapping simulator.

---

## 🧠 Engineering Case Studies

| Company / Project | Case Study Core | Key Tech |
| :--- | :--- | :--- |
| **Enterprise Energy Client** | Silverlight to Angular Migration (120+ screens, zero downtime) | Angular, RxJS, TypeScript, Micro Frontends |
| **Financial Services Platform** | Metadata-Driven UI Rendering Engine (decoupled UI from releases) | React, TypeScript, JSON Schema, Dynamic UI |
| **EdTech Learning Platform** | WCAG 2.1 AA Accessibility Overhaul (compliance score: 78% ➔ 94%) | Semantic HTML, WAI-ARIA, Screen Readers |
| **Core Web Vitals Optimization** | LCP, INP & CLS Optimization for Enterprise Portals | Next.js, Web Vitals, Chrome DevTools Protocol |

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

### 3. Build & test production bundle
```bash
npm run build
npm run start
```

---

## 🌐 Connect

- **LinkedIn**: [linkedin.com/in/siddhivinayaka](https://www.linkedin.com/in/siddhivinayaka)
- **Email**: [svinayaka290489@gmail.com](mailto:svinayaka290489@gmail.com)