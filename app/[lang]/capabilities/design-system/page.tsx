import { TokenDemo } from '@/components/capabilities/TokenDemo';
import { ColorScales } from './showcase/ColorScales';
import { SemanticColors } from './showcase/SemanticColors';
import { Typography } from './showcase/Typography';
import { Spacing } from './showcase/Spacing';
import { Radius } from './showcase/Radius';
import { Shadows } from './showcase/Shadows';
import { Motion } from './showcase/Motion';
import styles from './showcase/Showcase.module.scss';

export default function DesignSystemPage() {
  return (
    <main className={styles.showcase}>
      {/* Hero */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p style={{ fontSize: 'var(--ksv-ds-text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ksv-ds-text-muted)' }}>
            Capability
          </p>
          <h1 style={{ fontSize: 'var(--ksv-ds-text-5xl)', margin: 0 }}>
            Design System & Token Architecture
          </h1>
          <p style={{ fontSize: 'var(--ksv-ds-text-lg)', color: 'var(--ksv-ds-text-secondary)', maxWidth: '60ch' }}>
            A token-driven design system compiled from a single JSON source,
            distributed as a versioned npm package, and consumed at runtime
            through CSS custom properties with live theme switching.
          </p>
        </div>
      </section>

      {/* Pipeline */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>How it works</h2>
        </header>
        <ol style={{ display: 'grid', gap: 'var(--ksv-ds-space-3)', paddingLeft: '1.25rem', color: 'var(--ksv-ds-text-secondary)' }}>
          <li><strong>Define</strong> — Tokens live in JSON (primitives → semantics → themes).</li>
          <li><strong>Compile</strong> — Style Dictionary emits CSS variables plus typed TypeScript constants.</li>
          <li><strong>Publish</strong> — Shipped as <code>@svinayaka/siddi-design-system</code> to GitHub Packages.</li>
          <li><strong>Consume</strong> — The app imports tokens via <code>@layer</code>; components read them as CSS variables.</li>
        </ol>
      </section>

      {/* Live token showcases */}
      <ColorScales />
      <SemanticColors />
      <Typography />
      <Spacing />
      <Radius />
      <Shadows />
      <Motion />

      {/* The composite demo */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>How tokens compose into UI</h2>
          <p>
            Everything above is the raw vocabulary. Here's what happens when
            tokens compose into a real component — colors, spacing, radius, and
            typography all working together, with a live theme toggle.
          </p>
        </header>
        <TokenDemo />
      </section>

      {/* Proof */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Where this shipped</h2>
        </header>
        <ul style={{ display: 'grid', gap: 'var(--ksv-ds-space-4)', padding: 0, listStyle: 'none', color: 'var(--ksv-ds-text-secondary)' }}>
          <li><strong style={{ color: 'var(--ksv-ds-text-primary)' }}>PowerSchool</strong> — 60+ Web Components in a shared design system across React and Angular apps.</li>
          <li><strong style={{ color: 'var(--ksv-ds-text-primary)' }}>Accessibility</strong> — Internal audit raised from 78% to 94% via WCAG 2.1 AA and VPAT evaluations.</li>
          <li><strong style={{ color: 'var(--ksv-ds-text-primary)' }}>OneTrust</strong> — Shared Angular library published as versioned npm packages.</li>
        </ul>
      </section>
    </main>
  );
}