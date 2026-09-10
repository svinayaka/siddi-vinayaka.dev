import {
  FontSans,
  FontDisplay,
  FontMono,
  FontSerif,
  Text2xs,
  TextXs,
  TextSm,
  TextBase,
  TextLg,
  TextXl,
  Text2xl,
  Text3xl,
  Text4xl,
  Text5xl,
  Text6xl,
  Text7xl,
  FontWeightLight,
  FontWeightRegular,
  FontWeightMedium,
  FontWeightSemibold,
  FontWeightBold,
  FontWeightExtrabold,
  FontWeightBlack,
  LeadingNone,
  LeadingTight,
  LeadingSnug,
  LeadingNormal,
  LeadingRelaxed,
  LeadingLoose,
  TrackingTighter,
  TrackingTight,
  TrackingNormal,
  TrackingWide,
  TrackingWider,
  TrackingWidest,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './Typography.module.scss';

const FAMILIES = [
  { name: 'sans', value: FontSans },
  { name: 'display', value: FontDisplay },
  { name: 'mono', value: FontMono },
  { name: 'serif', value: FontSerif },
] as const;

const SIZES = [
  { name: '2xs', value: Text2xs },
  { name: 'xs', value: TextXs },
  { name: 'sm', value: TextSm },
  { name: 'base', value: TextBase },
  { name: 'lg', value: TextLg },
  { name: 'xl', value: TextXl },
  { name: '2xl', value: Text2xl },
  { name: '3xl', value: Text3xl },
  { name: '4xl', value: Text4xl },
  { name: '5xl', value: Text5xl },
  { name: '6xl', value: Text6xl },
  { name: '7xl', value: Text7xl },
] as const;

const WEIGHTS = [
  { name: 'light', value: FontWeightLight },
  { name: 'regular', value: FontWeightRegular },
  { name: 'medium', value: FontWeightMedium },
  { name: 'semibold', value: FontWeightSemibold },
  { name: 'bold', value: FontWeightBold },
  { name: 'extrabold', value: FontWeightExtrabold },
  { name: 'black', value: FontWeightBlack },
] as const;

const LEADING = [
  { name: 'none', value: LeadingNone },
  { name: 'tight', value: LeadingTight },
  { name: 'snug', value: LeadingSnug },
  { name: 'normal', value: LeadingNormal },
  { name: 'relaxed', value: LeadingRelaxed },
  { name: 'loose', value: LeadingLoose },
] as const;

const TRACKING = [
  { name: 'tighter', value: TrackingTighter },
  { name: 'tight', value: TrackingTight },
  { name: 'normal', value: TrackingNormal },
  { name: 'wide', value: TrackingWide },
  { name: 'wider', value: TrackingWider },
  { name: 'widest', value: TrackingWidest },
] as const;

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
          <div key={family.name} className={styles.typeRow}>
            <div className={styles.typeMeta}>font-{family.name}</div>
            <div
              className={`${styles.typePreview} ${styles.familySample}`}
              style={{
                fontFamily: `var(--ksv-ds-font-${family.name})`,
              }}
              title={family.value}
            >
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Sizes</span>
        {SIZES.map((size) => (
          <div key={size.name} className={styles.typeRow}>
            <div className={styles.typeMeta}>text-{size.name}</div>
            <div
              className={`${styles.typePreview} ${styles.sizeSample}`}
              style={{
                fontSize: `var(--ksv-ds-text-${size.name})`,
              }}
              title={size.value}
            >
              Design tokens
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Weights</span>
        {WEIGHTS.map((weight) => (
          <div key={weight.name} className={styles.typeRow}>
            <div className={styles.typeMeta}>font-weight-{weight.name}</div>
            <div
              className={`${styles.typePreview} ${styles.weightSample}`}
              style={{
                fontWeight: `var(--ksv-ds-font-weight-${weight.name})`,
              }}
              title={String(weight.value)}
            >
              The quick brown fox
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Leading</span>
        {LEADING.map((leading) => (
          <div key={leading.name} className={styles.typeRow}>
            <div className={styles.typeMeta}>leading-{leading.name}</div>
            <div
              className={`${styles.typePreview} ${styles.leadingSample}`}
              style={{
                lineHeight: `var(--ksv-ds-leading-${leading.name})`,
              }}
              title={String(leading.value)}
            >
              Line-height is one of the most overlooked typographic decisions.
              A well-chosen leading ratio makes body text readable at every size.
            </div>
          </div>
        ))}
      </div>

      <div className={styles.scaleGroup}>
        <span className={styles.scaleLabel}>Tracking</span>
        {TRACKING.map((tracking) => (
          <div key={tracking.name} className={styles.typeRow}>
            <div className={styles.typeMeta}>tracking-{tracking.name}</div>
            <div
              className={`${styles.typePreview} ${styles.trackingSample}`}
              style={{
                letterSpacing: `var(--ksv-ds-tracking-${tracking.name})`,
              }}
              title={tracking.value}
            >
              Letter spacing and optical kerning tokens.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
