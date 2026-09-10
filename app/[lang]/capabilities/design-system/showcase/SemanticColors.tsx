import styles from './SemanticColors.module.scss';

const GROUPS: { title: string; tokens: string[] }[] = [
  {
    title: 'Background',
    tokens: ['bg-canvas', 'bg-surface', 'bg-surface-elevated', 'bg-surface-sunken', 'bg-subtle', 'bg-muted'],
  },
  {
    title: 'Text',
    tokens: ['text-primary', 'text-secondary', 'text-tertiary', 'text-muted', 'text-inverse', 'text-brand', 'text-link'],
  },
  {
    title: 'Border',
    tokens: ['border-subtle', 'border-default', 'border-strong', 'border-focus'],
  },
  {
    title: 'Interactive',
    tokens: ['interactive-primary', 'interactive-primary-hover', 'interactive-secondary', 'interactive-accent', 'interactive-danger', 'interactive-disabled'],
  },
  {
    title: 'Status',
    tokens: ['status-success-bg', 'status-warning-bg', 'status-danger-bg', 'status-info-bg'],
  },
];

export function SemanticColors() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Semantic colors</h2>
        <p>
          These are the tokens components actually use. They map to primitives
          and change meaning under dark mode — try the theme toggle at the top of
          the page.
        </p>
      </header>

      {GROUPS.map((group) => (
        <div key={group.title} className={styles.scaleGroup}>
          <span className={styles.scaleLabel}>{group.title}</span>
          <div className={styles.semanticGrid}>
            {group.tokens.map((token) => (
              <div key={token} className={styles.semanticCard}>
                <div
                  className={styles.semanticSwatch}
                  style={{ background: `var(--ksv-ds-${token})` }}
                />
                <code>--ksv-ds-{token}</code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
