import Link from 'next/link';
import { TokenDemo } from '@/components/capabilities/TokenDemo';
import { ColorScales } from './showcase/ColorScales';
import { SemanticColors } from './showcase/SemanticColors';
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

      {/* Pipeline */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>How it works</h2>
        </header>
        <ol className={styles.pipelineList}>
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
        <ul className={styles.proofList}>
          <li><strong>PowerSchool</strong> — 60+ Web Components in a shared design system across React and Angular apps.</li>
          <li><strong>Accessibility</strong> — Internal audit raised from 78% to 94% via WCAG 2.1 AA and VPAT evaluations.</li>
        </ul>
      </section>
    </main>
  );
}