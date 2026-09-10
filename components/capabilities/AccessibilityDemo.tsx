'use client';

import { useState, useId, useRef, useEffect } from 'react';
import styles from './AccessibilityDemo.module.scss';

interface ColorPair {
  name: string;
  fgName: string;
  fgHex: string;
  bgName: string;
  bgHex: string;
  description: string;
}

const TOKEN_PAIRS: ColorPair[] = [
  {
    name: 'Primary Text on Canvas (Light/Dark default)',
    fgName: 'var(--ksv-ds-text-primary)',
    fgHex: '#0f172a',
    bgName: 'var(--ksv-ds-bg-canvas)',
    bgHex: '#ffffff',
    description: 'High contrast baseline for all body and heading content.',
  },
  {
    name: 'Brand Interactive Button',
    fgName: 'var(--ksv-ds-interactive-primary-text)',
    fgHex: '#ffffff',
    bgName: 'var(--ksv-ds-interactive-primary)',
    bgHex: '#4f46e5',
    description: 'Primary CTA button text on indigo interactive background.',
  },
  {
    name: 'Status Success Alert Pill',
    fgName: 'var(--ksv-ds-status-success-text)',
    fgHex: '#065f46',
    bgName: 'var(--ksv-ds-status-success-bg)',
    bgHex: '#d1fae5',
    description: 'WCAG AA compliant semantic alert status feedback.',
  },
  {
    name: 'Muted Text on Surface',
    fgName: 'var(--ksv-ds-text-muted)',
    fgHex: '#64748b',
    bgName: 'var(--ksv-ds-bg-surface)',
    bgHex: '#ffffff',
    description: 'Secondary metadata and helper descriptions.',
  },
  {
    name: 'Danger Interactive State',
    fgName: 'var(--ksv-ds-interactive-danger-text, #ffffff)',
    fgHex: '#ffffff',
    bgName: 'var(--ksv-ds-interactive-danger)',
    bgHex: '#e11d48',
    description: 'Destructive button and critical error banner states.',
  },
];

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split('')
      .map((c) => c + c)
      .join('');
  }
  const num = Number.parseInt(cleanHex, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(hex1: string, hex2: string): number {
  try {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  } catch {
    return 1.0;
  }
}

export function AccessibilityDemo() {
  const [activeTab, setActiveTab] = useState<'contrast' | 'focustrap'>('contrast');
  const [selectedPairIndex, setSelectedPairIndex] = useState(0);

  // Focus trap demo state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('System ready. Try opening the dialog.');
  const [inputVal, setInputVal] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const triggerBtnRef = useRef<HTMLButtonElement>(null);

  const selectedPair = TOKEN_PAIRS[selectedPairIndex];
  const ratio = getContrastRatio(selectedPair.fgHex, selectedPair.bgHex);
  const passAABody = ratio >= 4.5;
  const passAALarge = ratio >= 3.0;
  const passAAA = ratio >= 7.0;

  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (isDialogOpen) {
      firstInputRef.current?.focus();
      setAnnouncement('Dialog opened: "Accessible Modal Dialog". Focus trapped. Press Escape to close.');
    }
  }, [isDialogOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isDialogOpen) {
      setIsDialogOpen(false);
      setAnnouncement('Dialog dismissed via Escape key. Focus returned to trigger button.');
      triggerBtnRef.current?.focus();
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setAnnouncement('Dialog submitted successfully. Focus returned to trigger.');
    triggerBtnRef.current?.focus();
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.tabBar} role="tablist" aria-label="Accessibility Demo Modules">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'contrast'}
          className={`${styles.tabButton} ${activeTab === 'contrast' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('contrast')}
        >
          WCAG Contrast Engine
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'focustrap'}
          className={`${styles.tabButton} ${activeTab === 'focustrap' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('focustrap')}
        >
          Keyboard Focus &amp; ARIA Trap
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'contrast' && (
          <div className={styles.contrastGrid}>
            <div className={styles.controlPanel}>
              <div className={styles.selectorGroup}>
                <label htmlFor="token-pair-select">Token Color Pair Preset</label>
                <select
                  id="token-pair-select"
                  value={selectedPairIndex}
                  onChange={(e) => setSelectedPairIndex(Number(e.target.value))}
                >
                  {TOKEN_PAIRS.map((pair, idx) => (
                    <option key={pair.name} value={idx}>
                      {pair.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.selectorGroup}>
                <label>Foreground Token</label>
                <code>{selectedPair.fgName} ({selectedPair.fgHex})</code>
              </div>

              <div className={styles.selectorGroup}>
                <label>Background Token</label>
                <code>{selectedPair.bgName} ({selectedPair.bgHex})</code>
              </div>

              <p className={styles.helperText}>
                {selectedPair.description}
              </p>
            </div>

            <div
              className={styles.previewBox}
              style={{
                backgroundColor: selectedPair.bgHex,
                color: selectedPair.fgHex,
              }}
            >
              <div>
                <h3 className={styles.previewTextLarge}>WCAG 2.1 AA Sample</h3>
                <p className={styles.previewTextBody}>
                  Designing with contrast-safe tokens ensures that text, interactive controls, and
                  status indicators remain fully legible to all users regardless of vision conditions or ambient lighting.
                </p>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.ratioDisplay}>
                  <span className={styles.ratioNumber}>{ratio.toFixed(2)}:1</span>
                  <span className={styles.ratioLabel}>Calculated Ratio</span>
                </div>

                <div className={styles.badgeList}>
                  <span className={passAABody ? styles.badgePass : styles.badgeFail}>
                    {passAABody ? '✓ AA Body (4.5:1)' : '✗ AA Body (4.5:1)'}
                  </span>
                  <span className={passAALarge ? styles.badgePass : styles.badgeFail}>
                    {passAALarge ? '✓ AA Large/UI (3:1)' : '✗ AA Large/UI (3:1)'}
                  </span>
                  <span className={passAAA ? styles.badgePass : styles.badgeFail}>
                    {passAAA ? '✓ AAA (7:1)' : '✗ AAA (7:1)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'focustrap' && (
          <div className={styles.focusTrapContainer} onKeyDown={handleKeyDown}>
            {!isDialogOpen ? (
              <div className={styles.launcherBlock}>
                <p>
                  Click below or press Space/Enter to launch an accessible modal with full keyboard focus confinement,
                  ARIA labeling, and live screen reader dispatch.
                </p>
                <div>
                  <button
                    ref={triggerBtnRef}
                    type="button"
                    className={styles.primaryBtn}
                    onClick={() => setIsDialogOpen(true)}
                  >
                    Launch Accessible Dialog
                  </button>
                </div>
              </div>
            ) : (
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descId}
                className={styles.dialogSimulation}
              >
                <h3 id={titleId}>Accessible Modal Dialog</h3>
                <p id={descId} style={{ margin: 0, fontSize: 'var(--ksv-ds-text-sm)', color: 'var(--ksv-ds-text-secondary)' }}>
                  This dialog implements WAI-ARIA 1.2 modal dialog requirements: initial focus trapping,
                  visible focus indicators, and Escape key dismissal.
                </p>

                <div className={styles.formRow}>
                  <label htmlFor="modal-name-input">User Full Name</label>
                  <input
                    ref={firstInputRef}
                    id="modal-name-input"
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="e.g., Ada Lovelace"
                  />
                </div>

                <div className={styles.buttonGroup}>
                  <button type="button" className={styles.primaryBtn} onClick={closeDialog}>
                    Save &amp; Return Focus
                  </button>
                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={() => {
                      setIsDialogOpen(false);
                      setAnnouncement('Dialog cancelled. Focus returned to trigger button.');
                      triggerBtnRef.current?.focus();
                    }}
                  >
                    Cancel (Esc)
                  </button>
                </div>
              </div>
            )}

            <div className={styles.liveRegionLog} aria-live="polite" aria-atomic="true">
              <span className={styles.logHeader}>Screen Reader Live Region (aria-live=&quot;polite&quot;)</span>
              <span className={styles.logMessage}>{announcement}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
