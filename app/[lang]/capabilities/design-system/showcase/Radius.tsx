import styles from './Showcase.module.scss';

const RADII = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];

export function Radius() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Radius</h2>
        <p>
          A 9-step radius scale from sharp (0) to fully rounded (9999px).
          Components pick a radius; you control the overall feel of the UI
          by changing one token.
        </p>
      </header>

      <div className={styles.radiusGrid}>
        {RADII.map((radius) => (
          <div key={radius} className={styles.radiusCell}>
            <div
              className={styles.radiusBox}
              style={{ borderRadius: `var(--ksv-ds-radius-${radius})` }}
            />
            <code className={styles.radiusMeta}>radius-{radius}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
