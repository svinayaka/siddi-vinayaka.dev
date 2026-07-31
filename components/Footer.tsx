import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>&copy; {new Date().getFullYear()} Siddi Vinayaka. All rights reserved.</p>
    </footer>
  );
}
