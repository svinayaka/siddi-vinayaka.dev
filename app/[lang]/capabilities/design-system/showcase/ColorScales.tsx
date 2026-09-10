import styles from './ColorScales.module.scss';

const SCALES = [
  'neutral', 'primary', 'accent', 'success',
  'warning', 'danger', 'info',
  'slate', 'indigo', 'cyan', 'emerald',
  'amber', 'rose', 'sky', 'violet',
];

const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export function ColorScales() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Primitive color scales</h2>
        <p>
          15 hue families, each with an 11-step scale (50–950).
          Every value is a raw token; components never reference these directly —
          they use semantic tokens instead.
        </p>
      </header>

      {SCALES.map((scale) => (
        <div key={scale} className={styles.scaleGroup}>
          <span className={styles.scaleLabel}>{scale}</span>
          <div className={styles.scaleRow}>
            {STEPS.map((step) => {
              const varName = `--ksv-ds-color-${scale}-${step}`;
              return (
                <div
                  key={step}
                  className={styles.swatch}
                  style={{ background: `var(${varName})` }}
                  title={`${varName}`}
                >
                  {step}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
