import styles from './Footer.module.scss';

export default function Footer() {
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

        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a
              href="https://www.linkedin.com/in/siddhivinayaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.linkItem}>
            <a
              href="https://github.com/svinayaka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
          </li>
          <li className={styles.linkItem}>
            <a
              href="mailto:svinayaka290489@gmail.com"
              aria-label="Send Email"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
