'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer({ lang = 'en' }: Readonly<{ lang?: string }>) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.credits}>
          <p className={styles.author}>
            Designed &amp; built by Siddi Vinayaka
          </p>
          <p className={styles.techStack}>
            Crafted with Next.js, TypeScript &amp; <code>@svinayaka/siddi-design-system</code>
          </p>
        </div>

        <nav className={styles.footerNav} aria-label="Footer Navigation">
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link href={`/${lang}/capabilities`}>Capabilities</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href={`/${lang}/case-studies`}>Case Studies</Link>
            </li>
            <li className={styles.linkItem}>
              <Link href={`/${lang}/experience`}>Experience</Link>
            </li>
            <li className={styles.linkItem}>
              <button
                type="button"
                onClick={scrollToTop}
                className={styles.backToTopBtn}
                aria-label="Scroll back to top of page"
              >
                Back to top &uarr;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
