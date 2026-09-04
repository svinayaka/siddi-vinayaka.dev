import Link from "next/link";
import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";

export default function Header({ children, lang = "en" }: Readonly<{ children?: React.ReactNode; lang?: string }>) {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.headerProfile}>
          <Image
            src="/Passport_Photo.jpg"
            alt="Siddi Vinayaka"
            width={160} // Defines the base resolution
            height={160} // Keeps a 1:1 aspect ratio
            sizes="(max-width: 768px) 120px, 160px"
            className={styles.headerAvatar}
            priority={true}
          />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.headerTitleSection}>
          <Link href={`/${lang}`} className={styles.headerTitleLink}>
            <h3 className={styles.headerName}>Siddi Vinayaka</h3>
            <p className={styles.headerSubtitle}>Senior Front Engineer</p>
          </Link>
          <div>
            <a
              href="/resume.pdf"
              download
              className={styles.btnResume}
            >
              <span>Resume</span>
              <svg className={styles.btnResumeIcon} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.headerMenuSlot}>
          {children}
        </div>
      </div>
    </header>
  );
}
