'use client';

import { useState, useEffect } from 'react';
import {
    InteractivePrimary,
    InteractiveAccent,
    ColorSuccess600,
    InteractiveDanger,
    ColorWarning600,
    RadiusXs,
    RadiusLg,
    RadiusXl,
    RadiusFull,
} from '@svinayaka/siddi-design-system/tokens';
import styles from './TokenDemo.module.scss';

const BRANDS: Record<string, string> = {
    indigo: InteractivePrimary,
    cyan: InteractiveAccent,
    emerald: ColorSuccess600,
    rose: InteractiveDanger,
    amber: ColorWarning600,
};

const RADII: Record<string, string> = {
    sharp: RadiusXs,
    soft: RadiusLg,
    round: RadiusXl,
    pill: RadiusFull,
};

type Theme = 'light' | 'dark';

export function TokenDemo() {
    const [theme, setTheme] = useState<Theme>('light');
    const [brand, setBrand] = useState('indigo');
    const [radius, setRadius] = useState('soft');

    useEffect(() => {
        document.documentElement.dataset.ksvDsTheme = theme;
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--ksv-ds-interactive-primary',
            BRANDS[brand]
        );
    }, [brand]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--ksv-ds-radius-demo',
            RADII[radius]
        );
    }, [radius]);

    return (
        <div className={styles['token-demo']}>
            <div className={styles['controls']}>
                <label className={styles['control']}>
                    <span>Theme</span>
                    <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>

                <label className={styles['control']}>
                    <span>Brand</span>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                        {Object.keys(BRANDS).map((k) => (
                            <option key={k} value={k}>{k}</option>
                        ))}
                    </select>
                </label>

                <label className={styles['control']}>
                    <span>Radius</span>
                    <select value={radius} onChange={(e) => setRadius(e.target.value)}>
                        {Object.keys(RADII).map((k) => (
                            <option key={k} value={k}>{k}</option>
                        ))}
                    </select>
                </label>
            </div>

            <div className={styles['preview']}>
                <div className={styles['card']}>
                    <span className={styles['badge']}>Live preview</span>
                    <h3>Token-driven card</h3>
                    <p>
                        This card reads colors, spacing, radius, and typography from{' '}
                        <code>--ksv-ds-*</code> tokens. Change a control above and the
                        CSS variables update instantly.
                    </p>
                    <div className={styles['buttons']}>
                        <button className={`${styles['btn']} ${styles['btnPrimary']}`}>Primary</button>
                        <button className={`${styles['btn']} ${styles['btnSecondary']}`}>Secondary</button>
                    </div>
                </div>
            </div>

            <div className={styles['tokens']}>
                <div className={styles['tokenRow']}>
                    <code>--ksv-ds-interactive-primary</code>
                    <span style={{ background: BRANDS[brand] }} className={styles['swatch']} />
                    <code>{BRANDS[brand]}</code>
                </div>
                <div className={styles['tokenRow']}>
                    <code>--ksv-ds-radius-demo</code>
                    <code>{RADII[radius]}</code>
                </div>
                <div className={styles['tokenRow']}>
                    <code>data-ksv-ds-theme</code>
                    <code>{theme}</code>
                </div>
            </div>
        </div>
    );
}
