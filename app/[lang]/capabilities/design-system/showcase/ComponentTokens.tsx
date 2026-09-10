import styles from './ComponentTokens.module.scss';

interface TokenMapping {
  componentToken: string;
  semanticRef: string;
}

interface ComponentSpec {
  name: string;
  prefix: string;
  description: string;
  mappings: TokenMapping[];
}

const COMPONENTS: ComponentSpec[] = [
  {
    name: 'Button',
    prefix: '--btn-*',
    description: 'Binds interactive roles, focus ring, and radius tokens to button states.',
    mappings: [
      { componentToken: '--btn-primary-bg', semanticRef: 'var(--ksv-ds-interactive-primary)' },
      { componentToken: '--btn-hover-bg', semanticRef: 'var(--ksv-ds-interactive-primary-hover)' },
      { componentToken: '--btn-text', semanticRef: 'var(--ksv-ds-interactive-primary-text)' },
      { componentToken: '--btn-radius', semanticRef: 'var(--ksv-ds-radius-md)' },
    ],
  },
  {
    name: 'Form Input',
    prefix: '--input-*',
    description: 'Binds surface, border, and focus-state semantics to text inputs.',
    mappings: [
      { componentToken: '--input-bg', semanticRef: 'var(--ksv-ds-bg-surface)' },
      { componentToken: '--input-border', semanticRef: 'var(--ksv-ds-border-default)' },
      { componentToken: '--input-focus-border', semanticRef: 'var(--ksv-ds-border-focus)' },
      { componentToken: '--input-radius', semanticRef: 'var(--ksv-ds-radius-md)' },
    ],
  },
  {
    name: 'Badge / Tag',
    prefix: '--badge-*',
    description: 'Binds feedback status colors (success, warning, danger) to compact pills.',
    mappings: [
      { componentToken: '--badge-bg', semanticRef: 'var(--ksv-ds-status-success-bg)' },
      { componentToken: '--badge-border', semanticRef: 'var(--ksv-ds-status-success-border)' },
      { componentToken: '--badge-text', semanticRef: 'var(--ksv-ds-status-success-text)' },
      { componentToken: '--badge-radius', semanticRef: 'var(--ksv-ds-radius-full)' },
    ],
  },
  {
    name: 'Card Surface',
    prefix: '--card-*',
    description: 'Binds surface elevation, subtle borders, and elevation shadows to containers.',
    mappings: [
      { componentToken: '--card-bg', semanticRef: 'var(--ksv-ds-bg-surface-elevated)' },
      { componentToken: '--card-border', semanticRef: 'var(--ksv-ds-border-subtle)' },
      { componentToken: '--card-radius', semanticRef: 'var(--ksv-ds-radius-lg)' },
      { componentToken: '--card-shadow', semanticRef: 'var(--ksv-ds-shadow-sm)' },
    ],
  },
];

export function ComponentTokens() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Component tokens (Layer 3)</h2>
        <p>
          Component-scoped tokens isolate styling to a single component&apos;s anatomy and states.
          They map directly to Layer 2 semantic tokens, enabling independent customization without
          affecting the rest of the design system.
        </p>
      </header>

      <div className={styles.componentGrid}>
        {/* 1. Button */}
        <div className={styles.componentCard}>
          <div className={styles.componentCardHeader}>
            <h3>{COMPONENTS[0].name}</h3>
            <span>{COMPONENTS[0].prefix}</span>
          </div>
          <div className={styles.livePreviewBox}>
            <button type="button" className={styles.btnPrimary}>Primary</button>
            <button type="button" className={styles.btnSecondary}>Secondary</button>
            <button type="button" className={styles.btnDanger}>Danger</button>
          </div>
          <div className={styles.mappingTable}>
            {COMPONENTS[0].mappings.map((m) => (
              <div key={m.componentToken} className={styles.mappingRow}>
                <code className={styles.componentTokenName}>{m.componentToken}</code>
                <span className={styles.mappingArrow}>&rarr;</span>
                <code className={styles.semanticRef}>{m.semanticRef}</code>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Input */}
        <div className={styles.componentCard}>
          <div className={styles.componentCardHeader}>
            <h3>{COMPONENTS[1].name}</h3>
            <span>{COMPONENTS[1].prefix}</span>
          </div>
          <div className={styles.livePreviewBox}>
            <input
              type="text"
              placeholder="Search components..."
              className={styles.inputField}
              readOnly
            />
          </div>
          <div className={styles.mappingTable}>
            {COMPONENTS[1].mappings.map((m) => (
              <div key={m.componentToken} className={styles.mappingRow}>
                <code className={styles.componentTokenName}>{m.componentToken}</code>
                <span className={styles.mappingArrow}>&rarr;</span>
                <code className={styles.semanticRef}>{m.semanticRef}</code>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Badge */}
        <div className={styles.componentCard}>
          <div className={styles.componentCardHeader}>
            <h3>{COMPONENTS[2].name}</h3>
            <span>{COMPONENTS[2].prefix}</span>
          </div>
          <div className={styles.livePreviewBox}>
            <span className={styles.badgeSuccess}>&bull; Success</span>
            <span className={styles.badgeWarning}>&bull; Warning</span>
            <span className={styles.badgeDanger}>&bull; Danger</span>
          </div>
          <div className={styles.mappingTable}>
            {COMPONENTS[2].mappings.map((m) => (
              <div key={m.componentToken} className={styles.mappingRow}>
                <code className={styles.componentTokenName}>{m.componentToken}</code>
                <span className={styles.mappingArrow}>&rarr;</span>
                <code className={styles.semanticRef}>{m.semanticRef}</code>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Card */}
        <div className={styles.componentCard}>
          <div className={styles.componentCardHeader}>
            <h3>{COMPONENTS[3].name}</h3>
            <span>{COMPONENTS[3].prefix}</span>
          </div>
          <div className={styles.livePreviewBox}>
            <div className={styles.sampleCard}>
              <strong>Surface Container</strong>
              <small>Reads elevation &amp; subtle border tokens</small>
            </div>
          </div>
          <div className={styles.mappingTable}>
            {COMPONENTS[3].mappings.map((m) => (
              <div key={m.componentToken} className={styles.mappingRow}>
                <code className={styles.componentTokenName}>{m.componentToken}</code>
                <span className={styles.mappingArrow}>&rarr;</span>
                <code className={styles.semanticRef}>{m.semanticRef}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
