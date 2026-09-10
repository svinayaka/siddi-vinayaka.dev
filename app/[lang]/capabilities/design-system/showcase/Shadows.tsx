import styles from './Shadows.module.scss';

const SHADOWS = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'];

export function Shadows() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Elevation</h2>
        <p>
          Seven shadow tokens for consistent depth. Together with radius and
          border color, they define the visual &ldquo;surface&rdquo; of every component.
        </p>
      </header>

      <div className={styles.shadowGrid}>
        {SHADOWS.map((shadow) => (
          <div key={shadow} className={styles.shadowCell}>
            <div className={styles.shadowStage}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: `var(--ksv-ds-shadow-${shadow})` }}
              />
            </div>
            <code className={styles.shadowMeta}>shadow-{shadow}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
