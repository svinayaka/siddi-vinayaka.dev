import { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/Menu";
import { getDictionary, hasLocale } from "./dictionaries";
import styles from "./page.module.css";

export default async function Home({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Capabilities", href: `/${lang}/capabilities` },
    { name: "Case Studies", href: `/${lang}/case-studies` },
    { name: "Experience", href: `/${lang}/experience` },
    { name: "Contact", href: "#contact" }
  ];
  return (
    <div className="main_container">
      <Header>
        <MobileMenu navLinks={navItems} />
      </Header>
      <main>
        {/* === 1. HERO SECTION === */}
        <section id="profile" className={styles.heroSection}>
          {/* 1. Name */}
          <h1 className={styles.heroTitle}>
            Building Scalable Enterprise
          </h1>

          {/* 2. Job Title */}
          <p className={styles.heroSubtitle}>
            Frontend Platforms.
          </p>

          {/* 3. Tech Stack Tags */}
          <div className={styles.heroTags}>
            {dict.hero.tags.map((tag: string, index: number) => (
              <Fragment key={tag}>
                <span>{tag}</span>
                {index < dict.hero.tags.length - 1 && <span>·</span>}
              </Fragment>
            ))}
          </div>

          {/* 4. Value Proposition (The "Staff Engineer" Differentiator) */}
          <p className={styles.heroDescription}>
            10+ years building enterprise platforms for 500K+ users.
          </p>

          {/* 5. Call-to-Action Buttons */}
          <div className={styles.heroActions}>
            <Link
              href={`/${lang}/case-studies`}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              View Case Studies
            </Link>
            <Link
              href="#contact"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Contact Me
            </Link>
          </div>
        </section>

        {/* === ABOUT SECTION === */}
        <section id="about" className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>About Me</h2>

          <div className={styles.aboutContent}>
            {/* Paragraph 1: The Expertise */}
            <p>
              I am a Senior Front-End Engineer with <strong>10+ years of experience</strong>
              building enterprise web platforms, reusable UI systems, and high-performance applications
              across Media, Energy, and EdTech sectors. My core expertise lies in
              <strong> React, TypeScript, Angular, and Micro Frontend architectures</strong>.
            </p>

            {/* Paragraph 2: The Differentiator (The "Staff" Edge) */}
            <p>
              I specialize in modernizing monolithic legacy applications
              (Silverlight → Angular, AngularJS → React) and architecting
              <strong> metadata-driven rendering frameworks</strong> that decouple frontend UIs
              from backend changes. I am also deeply committed to
              <strong> accessibility (WCAG 2.1 AA) and performance optimization</strong>,
              having led VPAT evaluations that improved accessibility scores from 78% to 94%.
            </p>

            {/* Paragraph 3: The Impact (Prove You Deliver) */}
            <p>
              I have built platforms serving <strong>500K+ students</strong>, reduced manual
              candidate evaluation time by <strong>60%</strong>, and increased testing coverage
              from <strong>30% to 80%</strong>. I am currently exploring Senior/Staff roles
              where I can drive architectural decisions and mentor engineering teams.
            </p>
          </div>
        </section>

        {/* === CONTACT SECTION === */}
        <section id="contact" className={`${styles.sectionContainer} ${styles.contactSection}`}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>

          <div className={styles.contactLayout}>
            {/* Contact Details */}
            <div className={styles.contactInfo}>
              <p className={styles.contactDesc}>
                I&apos;m always open to discussing new opportunities, architectural design, front-end optimization challenges, or mentoring engineers. Feel free to reach out via email or through the form!
              </p>

              <div className={styles.contactLinks}>
                <div className={styles.contactLinkItem}>
                  <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:siddi.vinayaka@example.com" className={styles.contactLink}>
                    svinayaka290489@gmail.com
                  </a>
                </div>

                <div className={styles.contactLinkItem}>
                  <svg className={styles.contactIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                  </svg>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    GitHub
                  </a>
                </div>

                <div className={styles.contactLinkItem}>
                  <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a href="https://www.linkedin.com/in/siddhivinayaka" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    LinkedIn - Siddi Vinayaka
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <section>
              <h2 id="contact-form-title">Contact Me</h2>
              <p id="form-helper-text" className={styles.formHelper}>
                Fields marked with <span aria-hidden="true">*</span> are required.
              </p>
              <form className={styles.contactForm}
                aria-labelledby="contact-form-title"
                aria-describedby="form-helper-text"
              >
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={styles.formInput}
                    placeholder="Your Name"
                    aria-describedby="name-description"
                  />
                  <span id="name-description" className="sr-only">
                    Please enter your full name.
                  </span>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.formInput}
                    placeholder="name@gmail.com"
                    aria-describedby="email-helper"
                  />
                  <span id="email-helper" className="sr-only">
                    We'll never share your email.
                  </span>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className={styles.formInput}
                    placeholder="Reach out to me..."
                    aria-describedby="message-description"
                  />
                  <span id="message-description" className="sr-only">
                    Please write your message here.
                  </span>
                </div>

                <button
                  type="submit"
                  className={`${styles.btn} ${styles.btnPrimary} ${styles.btnSubmit}`}
                >
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
