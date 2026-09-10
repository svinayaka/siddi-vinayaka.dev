import styles from './Spacing.module.scss';

const SPACES = ['0', '1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '20', '24', '32'];

export function Spacing() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Spacing</h2>
        <p>
          A 4px-based scale from 0 to 8rem. Every margin, padding, and gap in
          the UI is drawn from these tokens — no arbitrary pixel values.
        </p>
      </header>

      <div className={styles.spacingList}>
        {SPACES.map((space) => (
          <div key={space} className={styles.spacingRow}>
            <code>space-{space}</code>
            <div
              className={styles.spacingBar}
              style={{ width: `var(--ksv-ds-space-${space}, 0)` }}
            />
            <code>var(--ksv-ds-space-{space})</code>
          </div>
        ))}
      </div>
    </section>
  );
}
