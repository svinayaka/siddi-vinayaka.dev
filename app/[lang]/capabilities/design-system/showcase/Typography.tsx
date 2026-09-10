import styles from './Typography.module.scss';

const SIZES = ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'];

const WEIGHTS = [
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'extrabold',
  'black',
] as const;

const FAMILIES = ['sans', 'display', 'mono', 'serif'];

const LEADING = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'];

const TRACKING = ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'];

export function Typography() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Typography</h2>
        <p>
          Font families, a 12-step size scale, 7 weights, 6 line-height
          ratios, and 6 letter-spacing tokens — all consumed as tokens.
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
                fontSize: 'var(--ksv-ds-text-xl)',
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
                lineHeight: 'var(--ksv-ds-leading-tight)',
              }}
            >
              Design tokens
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Weights</span>
        {WEIGHTS.map((weight) => (
          <div key={weight} className={styles.typeRow}>
            <div className={styles.typeMeta}>font-weight-{weight}</div>
            <div
              style={{
                fontWeight: `var(--ksv-ds-font-weight-${weight})`,
                fontSize: 'var(--ksv-ds-text-lg)',
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

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Tracking</span>
        {TRACKING.map((name) => (
          <div key={name} className={styles.typeRow}>
            <div className={styles.typeMeta}>tracking-{name}</div>
            <div
              style={{
                letterSpacing: `var(--ksv-ds-tracking-${name})`,
                fontSize: 'var(--ksv-ds-text-base)',
                color: 'var(--ksv-ds-text-primary)',
              }}
            >
              Letter spacing and optical kerning tokens.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
