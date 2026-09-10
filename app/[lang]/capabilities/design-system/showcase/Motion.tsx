'use client';

import { useState } from 'react';
import {
  EaseDefault,
  EaseIn,
  EaseOut,
  EaseInOut,
  EaseSpring,
  DurationFast,
  DurationNormal,
  DurationSlow,
  DurationSlower,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './Motion.module.scss';

const EASINGS = [
  { name: 'default', value: EaseDefault, desc: 'Standard UI transitions' },
  { name: 'in', value: EaseIn, desc: 'Elements exiting view' },
  { name: 'out', value: EaseOut, desc: 'Elements entering view' },
  { name: 'in-out', value: EaseInOut, desc: 'State toggles & transforms' },
  { name: 'spring', value: EaseSpring, desc: 'Playful bouncy emphasis' },
] as const;

const DURATIONS = [
  { name: 'fast', value: DurationFast, desc: 'Micro-interactions & tooltips' },
  { name: 'normal', value: DurationNormal, desc: 'Button states & color shifts' },
  { name: 'slow', value: DurationSlow, desc: 'Dropdowns & modal overlays' },
  { name: 'slower', value: DurationSlower, desc: 'Drawers & page transitions' },
] as const;

export function Motion() {
  const [easingActive, setEasingActive] = useState(false);
  const [durationActive, setDurationActive] = useState(false);

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2>Motion</h2>
        <p>
          Curves and timing tokens that bring physics-based realism to interfaces.
          Click <strong>Play</strong> to watch each token shape the animation in real time.
        </p>
      </header>

      {/* Easing Curves */}
      <div className={styles.scaleGroup}>
        <div className={styles.groupHeader}>
          <span className={styles.scaleLabel}>Easing Curves</span>
          <button
            type="button"
            className={styles.playButton}
            onClick={() => setEasingActive((prev) => !prev)}
            aria-label="Toggle easing animation"
          >
            {easingActive ? '↺ Reset' : '▶ Play Easing Race'}
          </button>
        </div>

        <div className={styles.motionList}>
          {EASINGS.map((ease) => (
            <div key={ease.name} className={styles.motionRow}>
              <div className={styles.metaCol}>
                <code>ease-{ease.name}</code>
                <span className={styles.metaDesc}>{ease.desc}</span>
              </div>

              <div className={styles.trackContainer}>
                <div className={styles.track}>
                  <div
                    className={`${styles.motionPuck} ${easingActive ? styles.active : ''}`}
                    style={{
                      transitionTimingFunction: `var(--ksv-ds-ease-${ease.name})`,
                      transitionDuration: '1000ms',
                    }}
                  />
                </div>
              </div>

              <code className={styles.tokenCol} title={ease.value}>
                var(--ksv-ds-ease-{ease.name})
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Durations */}
      <div className={styles.scaleGroup}>
        <div className={styles.groupHeader}>
          <span className={styles.scaleLabel}>Duration Scale</span>
          <button
            type="button"
            className={styles.playButton}
            onClick={() => setDurationActive((prev) => !prev)}
            aria-label="Toggle duration animation"
          >
            {durationActive ? '↺ Reset' : '▶ Play Duration Race'}
          </button>
        </div>

        <div className={styles.motionList}>
          {DURATIONS.map((dur) => (
            <div key={dur.name} className={styles.motionRow}>
              <div className={styles.metaCol}>
                <code>duration-{dur.name}</code>
                <span className={styles.metaDesc}>{dur.desc} ({dur.value})</span>
              </div>

              <div className={styles.trackContainer}>
                <div className={styles.track}>
                  <div
                    className={`${styles.motionPuck} ${durationActive ? styles.active : ''}`}
                    style={{
                      transitionDuration: `var(--ksv-ds-duration-${dur.name})`,
                      transitionTimingFunction: 'var(--ksv-ds-ease-default)',
                    }}
                  />
                </div>
              </div>

              <code className={styles.tokenCol} title={dur.value}>
                var(--ksv-ds-duration-{dur.name})
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
