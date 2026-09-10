import {
  RadiusNone,
  RadiusXs,
  RadiusSm,
  RadiusMd,
  RadiusLg,
  RadiusXl,
  Radius2xl,
  Radius3xl,
  RadiusFull,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './Radius.module.scss';

const RADII = [
  { name: 'none', value: RadiusNone },
  { name: 'xs', value: RadiusXs },
  { name: 'sm', value: RadiusSm },
  { name: 'md', value: RadiusMd },
  { name: 'lg', value: RadiusLg },
  { name: 'xl', value: RadiusXl },
  { name: '2xl', value: Radius2xl },
  { name: '3xl', value: Radius3xl },
  { name: 'full', value: RadiusFull },
] as const;

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
          <div key={radius.name} className={styles.radiusCell}>
            <div
              className={styles.radiusBox}
              style={{ borderRadius: `var(--ksv-ds-radius-${radius.name})` }}
              title={radius.value}
            />
            <code className={styles.radiusMeta}>radius-{radius.name}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
