import {
  Space0,
  Space1,
  Space2,
  Space3,
  Space4,
  Space5,
  Space6,
  Space8,
  Space10,
  Space12,
  Space16,
  Space20,
  Space24,
  Space32,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './Spacing.module.scss';

const SPACES = [
  { name: '0', value: Space0 },
  { name: '1', value: Space1 },
  { name: '2', value: Space2 },
  { name: '3', value: Space3 },
  { name: '4', value: Space4 },
  { name: '5', value: Space5 },
  { name: '6', value: Space6 },
  { name: '8', value: Space8 },
  { name: '10', value: Space10 },
  { name: '12', value: Space12 },
  { name: '16', value: Space16 },
  { name: '20', value: Space20 },
  { name: '24', value: Space24 },
  { name: '32', value: Space32 },
] as const;

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
          <div key={space.name} className={styles.spacingRow}>
            <code>space-{space.name}</code>
            <div
              className={styles.spacingBar}
              style={{ width: `var(--ksv-ds-space-${space.name}, 0)` }}
              title={space.value}
            />
            <code>var(--ksv-ds-space-{space.name})</code>
          </div>
        ))}
      </div>
    </section>
  );
}
