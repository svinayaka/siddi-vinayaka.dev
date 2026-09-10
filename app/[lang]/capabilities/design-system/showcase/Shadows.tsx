import styles from './Showcase.module.scss';

const SHADOWS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'];

export function Shadows() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Elevation</h2>
        <p>
          Seven shadow tokens for consistent depth. Together with radius and
          border color, they define the visual "surface" of every component.
        </p>
      </header>

      <div className={styles.shadowGrid}>
        {SHADOWS.map((shadow) => (
          <div key={shadow} className={styles.shadowCell}>
            <div
              className={styles.shadowBox}
              style={{ boxShadow: `var(--ksv-ds-shadow-${shadow})` }}
            />
            <code className={styles.radiusMeta}>shadow-{shadow}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
