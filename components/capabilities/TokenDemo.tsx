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

const BRANDS: Record<string, { label: string; value: string }> = {
    InteractivePrimary: { label: 'InteractivePrimary (#4f46e5)', value: InteractivePrimary },
    InteractiveAccent: { label: 'InteractiveAccent (#0891b2)', value: InteractiveAccent },
    ColorSuccess600: { label: 'ColorSuccess600 (#059669)', value: ColorSuccess600 },
    InteractiveDanger: { label: 'InteractiveDanger (#e11d48)', value: InteractiveDanger },
    ColorWarning600: { label: 'ColorWarning600 (#d97706)', value: ColorWarning600 },
};

const RADII: Record<string, { label: string; value: string }> = {
    RadiusXs: { label: 'RadiusXs (0.125rem)', value: RadiusXs },
    RadiusLg: { label: 'RadiusLg (0.5rem)', value: RadiusLg },
    RadiusXl: { label: 'RadiusXl (0.75rem)', value: RadiusXl },
    RadiusFull: { label: 'RadiusFull (9999px)', value: RadiusFull },
};

type Theme = 'light' | 'dark';

export function TokenDemo() {
    const [theme, setTheme] = useState<Theme>('light');
    const [brand, setBrand] = useState('InteractivePrimary');
    const [radius, setRadius] = useState('RadiusLg');

    useEffect(() => {
        if (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.ksvDsTheme = theme;
        return () => {
            delete document.documentElement.dataset.ksvDsTheme;
        };
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--ksv-ds-interactive-primary',
            BRANDS[brand].value
        );
        return () => {
            document.documentElement.style.removeProperty('--ksv-ds-interactive-primary');
        };
    }, [brand]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--ksv-ds-radius-demo',
            RADII[radius].value
        );
        return () => {
            document.documentElement.style.removeProperty('--ksv-ds-radius-demo');
        };
    }, [radius]);

    return (
        <div className={styles['token-demo']}>
            <div className={styles['controls']}>
                <label className={styles['control']}>
                    <span>Theme</span>
                    <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>
                </label>

                <label className={styles['control']}>
                    <span>Brand Token</span>
                    <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                        {Object.entries(BRANDS).map(([key, item]) => (
                            <option key={key} value={key}>{item.label}</option>
                        ))}
                    </select>
                </label>

                <label className={styles['control']}>
                    <span>Radius Token</span>
                    <select value={radius} onChange={(e) => setRadius(e.target.value)}>
                        {Object.entries(RADII).map(([key, item]) => (
                            <option key={key} value={key}>{item.label}</option>
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
                    <span style={{ background: BRANDS[brand].value }} className={styles['swatch']} />
                    <code>{brand} ({BRANDS[brand].value})</code>
                </div>
                <div className={styles['tokenRow']}>
                    <code>--ksv-ds-radius-demo</code>
                    <code>{radius} ({RADII[radius].value})</code>
                </div>
                <div className={styles['tokenRow']}>
                    <code>data-ksv-ds-theme</code>
                    <code>{theme}</code>
                </div>
            </div>
        </div>
    );
}
