import styles from './Showcase.module.scss';

const EASINGS = ['default', 'in', 'out', 'in-out', 'spring'];
const DURATIONS = ['fast', 'normal', 'slow', 'slower'];

export function Motion() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Motion</h2>
        <p>
          Easing curves and duration tokens. Hover a dot to see the curve in
          action — every transition in the app uses one of these.
        </p>
      </header>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Easing</span>
        <div className={styles.motionList}>
          {EASINGS.map((ease) => (
            <div key={ease} className={styles.motionRow}>
              <code>ease-{ease}</code>
              <div
                className={styles.motionDot}
                style={{
                  transitionTimingFunction: `var(--ksv-ds-ease-${ease})`,
                }}
              />
              <code>var(--ksv-ds-ease-{ease})</code>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Duration</span>
        <div className={styles.motionList}>
          {DURATIONS.map((dur) => (
            <div key={dur} className={styles.motionRow}>
              <code>duration-{dur}</code>
              <div
                className={styles.motionDot}
                style={{
                  transitionDuration: `var(--ksv-ds-duration-${dur})`,
                  transitionTimingFunction: 'var(--ksv-ds-ease-default)',
                }}
              />
              <code>var(--ksv-ds-duration-{dur})</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
