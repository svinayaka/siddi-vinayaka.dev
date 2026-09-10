import Link from 'next/link';
import { TokenDemo } from '@/components/capabilities/TokenDemo';
import { ColorScales } from './showcase/ColorScales';
import { SemanticColors } from './showcase/SemanticColors';
import { ComponentTokens } from './showcase/ComponentTokens';
import { Typography } from './showcase/Typography';
import { Spacing } from './showcase/Spacing';
import { Radius } from './showcase/Radius';
import { Shadows } from './showcase/Shadows';
import { Motion } from './showcase/Motion';
import styles from './page.module.scss';

export default async function DesignSystemPage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <main className={styles.designSystemPage}>
      <div>
        <Link href={`/${lang}/capabilities`} className={styles.backLink}>
          &larr; Back to Capabilities
        </Link>
      </div>

      {/* Hero */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            Capability
          </p>
          <h1 className={styles.heroTitle}>
            Design System & Token Architecture
          </h1>
          <p className={styles.heroLede}>
            A token-driven design system compiled from a single JSON source,
            distributed as a versioned npm package, and consumed at runtime
            through CSS custom properties with live theme switching.
          </p>
        </div>
      </section>

      {/* Pipeline: Build & Distribution */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Build &amp; Distribution Pipeline</h2>
          <p>
            How tokens travel from a single JSON source of truth into production code.
          </p>
        </header>

        <div className={styles.pipelineGrid}>
          <div className={styles.pipelineCard}>
            <header>
              <span className={styles.stepNumber}>01</span>
              <h3>Define in JSON</h3>
            </header>
            <p>
              Tokens are authored in standardized JSON files adhering to the W3C Design Token Community Group (DTCG) specification.
            </p>
          </div>

          <div className={styles.pipelineCard}>
            <header>
              <span className={styles.stepNumber}>02</span>
              <h3>Compile with Style Dictionary</h3>
            </header>
            <p>
              Style Dictionary transforms the token JSON into CSS Custom Properties (<code>--ksv-ds-*</code>) and strongly-typed TypeScript constants.
            </p>
          </div>

          <div className={styles.pipelineCard}>
            <header>
              <span className={styles.stepNumber}>03</span>
              <h3>Publish to NPM Registry</h3>
            </header>
            <p>
              Packaged and versioned as{' '}
              <a
                href="https://github.com/svinayaka/siddi-design-system/pkgs/npm/siddi-design-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>@svinayaka/siddi-design-system</code>
              </a>{' '}
              on GitHub Packages with automated CI releases.
            </p>
          </div>

          <div className={styles.pipelineCard}>
            <header>
              <span className={styles.stepNumber}>04</span>
              <h3>Consume with Zero JS Overhead</h3>
            </header>
            <p>
              Imported via native CSS <code>@layer tokens, themes;</code>. Theme switching executes via <code>data-ksv-ds-theme</code> without JavaScript runtime recalculations.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture: 3-Tier Hierarchy */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Token Architecture (3-Tier Hierarchy)</h2>
          <p>
            Tokens are decoupled into three distinct layers of abstraction to ensure scalability,
            effortless dark-mode switching, and safe component-level overrides.
          </p>
        </header>

        <div className={styles.architectureGrid}>
          {/* Layer 1 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierBadge}>Layer 1</span>
            </div>
            <h3 className={styles.tierTitle}>Primitives</h3>
            <p className={styles.tierDescription}>
              Raw, literal values with zero design context. Includes 15-hue color scales (50-950),
              4px spacing scale, font scales, radii, and shadows.
            </p>
            <div className={styles.tierExample}>
              <span>{'// Raw color & measurement values'}</span>
              <code>--ksv-ds-color-indigo-600: #4f46e5;</code>
              <code>--ksv-ds-space-4: 1rem;</code>
            </div>
          </div>

          {/* Layer 2 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierBadge}>Layer 2</span>
            </div>
            <h3 className={styles.tierTitle}>Semantics</h3>
            <p className={styles.tierDescription}>
              System-wide roles and intent. Aliases Layer 1 primitives and automatically swaps values
              between Light and Dark modes without changing component markup.
            </p>
            <div className={styles.tierExample}>
              <span>{'// Contextual roles (theme-aware)'}</span>
              <code>--ksv-ds-interactive-primary</code>
              <code>--ksv-ds-bg-surface</code>
            </div>
          </div>

          {/* Layer 3 */}
          <div className={styles.tierCard}>
            <div className={styles.tierHeader}>
              <span className={styles.tierBadge}>Layer 3</span>
            </div>
            <h3 className={styles.tierTitle}>Components</h3>
            <p className={styles.tierDescription}>
              Scoped directly to individual component anatomy (Button, Input, Badge, Card).
              Enables isolated styling overrides without affecting global semantics.
            </p>
            <div className={styles.tierExample}>
              <span>{'// Scoped component contracts'}</span>
              <code>--btn-primary-bg: var(--interactive-primary);</code>
              <code>--input-border: var(--border-default);</code>
            </div>
          </div>
        </div>
      </section>

      {/* Live token showcases */}
      <ColorScales />
      <SemanticColors />
      <ComponentTokens />
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
            Everything above is the raw vocabulary. Here&apos;s what happens when
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
        <ul className={styles.proofList}>
          <li><strong>PowerSchool</strong> — 60+ Web Components in a shared design system across React and Angular apps.</li>
          <li>
            <strong>Accessibility</strong> — Internal audit raised from 78% to 94% via WCAG 2.1 AA and VPAT evaluations.{' '}
            <Link href={`/${lang}/capabilities/accessibility`} style={{ color: 'var(--ksv-ds-text-brand)', textDecoration: 'underline' }}>
              View Accessibility Capability &rarr;
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}