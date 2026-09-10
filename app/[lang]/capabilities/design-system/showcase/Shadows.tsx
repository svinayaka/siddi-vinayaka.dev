import {
  ShadowXs,
  ShadowSm,
  ShadowMd,
  ShadowLg,
  ShadowXl,
  Shadow2xl,
  ShadowInner,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './Shadows.module.scss';

const SHADOWS = [
  { name: 'xs', value: ShadowXs },
  { name: 'sm', value: ShadowSm },
  { name: 'md', value: ShadowMd },
  { name: 'lg', value: ShadowLg },
  { name: 'xl', value: ShadowXl },
  { name: '2xl', value: Shadow2xl },
  { name: 'inner', value: ShadowInner },
] as const;

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
          <div key={shadow.name} className={styles.shadowCell}>
            <div className={styles.shadowStage}>
              <div
                className={styles.shadowBox}
                style={{ boxShadow: `var(--ksv-ds-shadow-${shadow.name})` }}
                title={shadow.value}
              />
            </div>
            <code className={styles.shadowMeta}>shadow-{shadow.name}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
