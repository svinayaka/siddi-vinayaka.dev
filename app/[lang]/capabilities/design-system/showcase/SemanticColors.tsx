import {
  BgCanvas,
  BgSurface,
  BgSurfaceElevated,
  BgSurfaceSunken,
  BgSubtle,
  BgMuted,
  TextPrimary,
  TextSecondary,
  TextTertiary,
  TextMuted,
  TextInverse,
  TextBrand,
  TextLink,
  BorderSubtle,
  BorderDefault,
  BorderStrong,
  BorderFocus,
  InteractivePrimary,
  InteractivePrimaryHover,
  InteractiveSecondary,
  InteractiveAccent,
  InteractiveDanger,
  InteractiveDisabled,
  StatusSuccessBg,
  StatusWarningBg,
  StatusDangerBg,
  StatusInfoBg,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './SemanticColors.module.scss';

const GROUPS = [
  {
    title: 'Background',
    tokens: [
      { name: 'bg-canvas', exportName: 'BgCanvas', value: BgCanvas },
      { name: 'bg-surface', exportName: 'BgSurface', value: BgSurface },
      { name: 'bg-surface-elevated', exportName: 'BgSurfaceElevated', value: BgSurfaceElevated },
      { name: 'bg-surface-sunken', exportName: 'BgSurfaceSunken', value: BgSurfaceSunken },
      { name: 'bg-subtle', exportName: 'BgSubtle', value: BgSubtle },
      { name: 'bg-muted', exportName: 'BgMuted', value: BgMuted },
    ],
  },
  {
    title: 'Text',
    tokens: [
      { name: 'text-primary', exportName: 'TextPrimary', value: TextPrimary },
      { name: 'text-secondary', exportName: 'TextSecondary', value: TextSecondary },
      { name: 'text-tertiary', exportName: 'TextTertiary', value: TextTertiary },
      { name: 'text-muted', exportName: 'TextMuted', value: TextMuted },
      { name: 'text-inverse', exportName: 'TextInverse', value: TextInverse },
      { name: 'text-brand', exportName: 'TextBrand', value: TextBrand },
      { name: 'text-link', exportName: 'TextLink', value: TextLink },
    ],
  },
  {
    title: 'Border',
    tokens: [
      { name: 'border-subtle', exportName: 'BorderSubtle', value: BorderSubtle },
      { name: 'border-default', exportName: 'BorderDefault', value: BorderDefault },
      { name: 'border-strong', exportName: 'BorderStrong', value: BorderStrong },
      { name: 'border-focus', exportName: 'BorderFocus', value: BorderFocus },
    ],
  },
  {
    title: 'Interactive',
    tokens: [
      { name: 'interactive-primary', exportName: 'InteractivePrimary', value: InteractivePrimary },
      { name: 'interactive-primary-hover', exportName: 'InteractivePrimaryHover', value: InteractivePrimaryHover },
      { name: 'interactive-secondary', exportName: 'InteractiveSecondary', value: InteractiveSecondary },
      { name: 'interactive-accent', exportName: 'InteractiveAccent', value: InteractiveAccent },
      { name: 'interactive-danger', exportName: 'InteractiveDanger', value: InteractiveDanger },
      { name: 'interactive-disabled', exportName: 'InteractiveDisabled', value: InteractiveDisabled },
    ],
  },
  {
    title: 'Status',
    tokens: [
      { name: 'status-success-bg', exportName: 'StatusSuccessBg', value: StatusSuccessBg },
      { name: 'status-warning-bg', exportName: 'StatusWarningBg', value: StatusWarningBg },
      { name: 'status-danger-bg', exportName: 'StatusDangerBg', value: StatusDangerBg },
      { name: 'status-info-bg', exportName: 'StatusInfoBg', value: StatusInfoBg },
    ],
  },
];

export function SemanticColors() {
  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Semantic colors (Layer 2)</h2>
        <p>
          System-wide roles and intent. These tokens alias Layer 1 primitives
          and automatically swap values between Light and Dark themes without changing component markup.
        </p>
      </header>

      {GROUPS.map((group) => (
        <div key={group.title} className={styles.scaleGroup}>
          <span className={styles.scaleLabel}>{group.title}</span>
          <div className={styles.semanticGrid}>
            {group.tokens.map((token) => (
              <div key={token.name} className={styles.semanticCard}>
                <div
                  className={styles.semanticSwatch}
                  style={{ background: `var(--ksv-ds-${token.name})` }}
                  title={`Default: ${token.value}`}
                />
                <code>--ksv-ds-{token.name}</code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
