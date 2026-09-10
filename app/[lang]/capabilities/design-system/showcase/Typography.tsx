import styles from './Showcase.module.scss';

const SIZES = ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'];

const WEIGHTS = [
  ['light', 300],
  ['regular', 400],
  ['medium', 500],
  ['semibold', 600],
  ['bold', 700],
  ['extrabold', 800],
  ['black', 900],
] as const;

const FAMILIES = ['sans', 'display', 'mono', 'serif'];

const LEADING = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'];

export function Typography() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Typography</h2>
        <p>
          Font families, a 12-step size scale, 7 weights, and 6 line-height
          ratios — all consumed as tokens.
        </p>
      </header>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Families</span>
        {FAMILIES.map((family) => (
          <div key={family} className={styles.typeRow}>
            <div className={styles.typeMeta}>font-{family}</div>
            <div
              style={{
                fontFamily: `var(--ksv-ds-font-${family})`,
                fontSize: '1.25rem',
                color: 'var(--ksv-ds-text-primary)',
              }}
            >
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Sizes</span>
        {SIZES.map((size) => (
          <div key={size} className={styles.typeRow}>
            <div className={styles.typeMeta}>text-{size}</div>
            <div
              style={{
                fontSize: `var(--ksv-ds-text-${size})`,
                color: 'var(--ksv-ds-text-primary)',
                lineHeight: 1.2,
              }}
            >
              Design tokens
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Weights</span>
        {WEIGHTS.map(([name, value]) => (
          <div key={name} className={styles.typeRow}>
            <div className={styles.typeMeta}>font-weight-{name}</div>
            <div
              style={{
                fontWeight: value,
                fontSize: '1.125rem',
                color: 'var(--ksv-ds-text-primary)',
              }}
            >
              The quick brown fox
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Leading</span>
        {LEADING.map((name) => (
          <div key={name} className={styles.typeRow}>
            <div className={styles.typeMeta}>leading-{name}</div>
            <div
              style={{
                lineHeight: `var(--ksv-ds-leading-${name})`,
                color: 'var(--ksv-ds-text-primary)',
                maxWidth: '40ch',
              }}
            >
              Line-height is one of the most overlooked typographic decisions.
              A well-chosen leading ratio makes body text readable at every size.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
