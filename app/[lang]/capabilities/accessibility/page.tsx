import Link from 'next/link';
import Footer from '@/components/Footer';
import { AccessibilityDemo } from '@/components/capabilities/AccessibilityDemo';
import styles from './page.module.scss';

export default async function AccessibilityPage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <div className={styles.pageContainer}>
      <main className={styles.accessibilityPage}>
        <div>
          <Link href={`/${lang}/capabilities`} className={styles.backLink}>
            &larr; Back to Capabilities
          </Link>
        </div>

      {/* Hero */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Capability</p>
          <h1 className={styles.heroTitle}>
            Web Accessibility &amp; VPAT Compliance
          </h1>
          <p className={styles.heroLede}>
            Engineering WCAG 2.1 AA compliant frontends from the token layer up —
            combining contrast-safe design tokens, semantic Web Components, automated
            axe-core CI testing, and rigorous VPAT evaluation workflows.
          </p>
        </div>
      </section>

      {/* Impact Scorecard */}
      <section className={styles.section}>
        <div className={styles.scorecardGrid}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>78% &rarr; 94%</span>
            <span className={styles.scoreLabel}>Audit Score</span>
            <span className={styles.scoreSub}>Internal enterprise compliance</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>60+</span>
            <span className={styles.scoreLabel}>Remediated Components</span>
            <span className={styles.scoreSub}>React &amp; Angular Web Components</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>WCAG 2.1 AA</span>
            <span className={styles.scoreLabel}>Conformance Standard</span>
            <span className={styles.scoreSub}>Section 508 &amp; EN 301 549</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>100%</span>
            <span className={styles.scoreLabel}>Token Contrast Safety</span>
            <span className={styles.scoreSub}>Zero manual color pair errors</span>
          </div>
        </div>
      </section>

      {/* 4-Pillar Strategy Architecture */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>4-Pillar Accessibility Strategy</h2>
          <p>
            How accessibility is operationalized across the entire software development lifecycle.
          </p>
        </header>

        <div className={styles.strategyGrid}>
          {/* Pillar 1 */}
          <div className={styles.strategyCard}>
            <header>
              <h3>1. Token-Level Guarantees</h3>
              <span className={styles.pillarBadge}>Design Tokens</span>
            </header>
            <p>
              Contrast ratios (4.5:1 for body text, 3:1 for large text and UI borders) are codified
              directly into semantic tokens. Designers and developers cannot pick non-compliant combinations.
            </p>
            <div className={styles.codeSnippet}>
              <span>{'// Enforced contrast contracts'}</span>
              <code>--ksv-ds-text-primary: #0f172a; {'/* 14.5:1 on light canvas */'}</code>
              <code>--ksv-ds-border-focus: #4f46e5; {'/* 3:1 focus ring */'}</code>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className={styles.strategyCard}>
            <header>
              <h3>2. Semantic Component Anatomy</h3>
              <span className={styles.pillarBadge}>ARIA 1.2 &amp; HTML5</span>
            </header>
            <p>
              Framework-agnostic Web Components enforce native semantic tags (<code>&lt;button&gt;</code>, <code>&lt;dialog&gt;</code>),
              WAI-ARIA 1.2 keyboard navigation patterns (Roving tabindex, Escape dismissals), and focus management.
            </p>
            <div className={styles.codeSnippet}>
              <span>{'// Accessible focus & ARIA'}</span>
              <code>tabIndex={'{focused ? 0 : -1}'}</code>
              <code>aria-modal=&quot;true&quot; role=&quot;dialog&quot;</code>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className={styles.strategyCard}>
            <header>
              <h3>3. Automated CI/CD Guardrails</h3>
              <span className={styles.pillarBadge}>axe-core &amp; Playwright</span>
            </header>
            <p>
              Automated accessibility regression testing with <code>axe-core</code> and Playwright runs on every pull request,
              flagging color contrast, missing labels, landmark errors, and broken heading hierarchies before merge.
            </p>
            <div className={styles.codeSnippet}>
              <span>{'// Playwright a11y assertion'}</span>
              <code>const results = await new AxeBuilder({'{ page }'}).analyze();</code>
              <code>expect(results.violations).toEqual([]);</code>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className={styles.strategyCard}>
            <header>
              <h3>4. VPAT &amp; Assistive Tech Auditing</h3>
              <span className={styles.pillarBadge}>Section 508</span>
            </header>
            <p>
              Conducted formal Voluntary Product Accessibility Template (VPAT) evaluations. Manual testing
              with screen readers (VoiceOver, NVDA, JAWS), keyboard-only workflows, and 200% browser zoom reflow.
            </p>
            <div className={styles.codeSnippet}>
              <span>{'// Assistive tech coverage'}</span>
              <code>VoiceOver (macOS/iOS) • NVDA (Windows)</code>
              <code>WCAG 2.1 Success Criteria 1.4.3, 2.1.1, 2.4.7</code>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className={styles.section}>
        <header className={styles.sectionHeader}>
          <h2>Interactive Accessibility Tools</h2>
          <p>
            Explore live token contrast ratio calculations and simulated accessible keyboard focus trapping.
          </p>
        </header>

        <AccessibilityDemo />
      </section>

      {/* Cross-Link to Design System */}
      <section className={styles.section}>
        <div className={styles.calloutCard}>
          <div className={styles.calloutText}>
            <h3>Built with the Design System Token Pipeline</h3>
            <p>
              See how these accessible tokens and components are authored, compiled with Style Dictionary, and packaged on npm.
            </p>
          </div>
          <Link href={`/${lang}/capabilities/design-system`} className={styles.calloutLink}>
            Explore Design System &rarr;
          </Link>
        </div>
      </section>
    </main>
    <Footer lang={lang} />
  </div>
);
}
