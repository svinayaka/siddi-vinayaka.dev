import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getDictionary, hasLocale, type Locale } from "@/lib/dictionaries";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "en";
  const dict = await getDictionary(locale);

  return {
    title: `${dict.experience.title} (${lang.toUpperCase()}) - ${dict.hero.title}`,
    description: dict.experience.subtitle,
  };
}

export default async function ExperiencePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const { experience } = dict;

  return (
    <div className={styles.pageContainer}>
      <main className={styles.mainContent}>
        {/* Navigation back to home */}
        <div>
          <Link href={`/${lang}`} className={styles.backLink}>
            &larr; Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <section className={styles.headerSection}>
          <h1 className={styles.pageTitle}>{experience.title}</h1>
          <p className={styles.pageSubtitle}>{experience.subtitle}</p>
        </section>

        {/* Career Summary Metrics */}
        <section className={styles.metricsGrid} aria-label="Career highlights summary">
          {experience.metrics.map((metric: { value: string; label: string }) => (
            <div key={metric.label} className={styles.metricCard}>
              <p className={styles.metricValue}>{metric.value}</p>
              <p className={styles.metricLabel}>{metric.label}</p>
            </div>
          ))}
        </section>

        {/* Career Timeline */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionHeading}>{experience.timelineHeading}</h2>

          <div className={styles.timeline}>
            {experience.items.map((exp: {
              id: string;
              role: string;
              company: string;
              industry: string;
              period: string;
              location: string;
              bullets: string[];
              outcome: string;
              skills: string[];
            }) => (
              <div key={exp.id} className={styles.timelineItem}>
                <span className={styles.timelineMarker} aria-hidden="true" />
                <article className={styles.card}>
                  <header className={styles.cardHeader}>
                    <div className={styles.roleTitleGroup}>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <div className={styles.companyMeta}>
                        <span className={styles.companyName}>{exp.company}</span>
                        <span>&middot;</span>
                        <span className={styles.industryBadge}>{exp.industry}</span>
                      </div>
                    </div>
                    <div className={styles.dateLocation}>
                      <span className={styles.dateBadge}>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </header>

                  <ul className={styles.bulletList}>
                    {exp.bullets.map((bullet: string, idx: number) => (
                      <li key={idx} className={styles.bulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.outcomeCallout}>
                    <svg
                      className={styles.outcomeIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span>
                      <strong>Key Impact:</strong> {exp.outcome}
                    </span>
                  </div>

                  <div className={styles.tagsWrapper}>
                    {exp.skills.map((skill: string) => (
                      <span key={skill} className={styles.tag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className={styles.secondaryGrid}>
          {/* Education */}
          <div className={styles.secondaryCard}>
            <h3 className={styles.secondaryCardTitle}>
              <svg className={styles.sectionIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
              {experience.education.title}
            </h3>
            <div className={styles.certItem}>
              <p className={styles.certName}>{experience.education.degree}</p>
              <p className={styles.certIssuer}>
                {experience.education.institution} &middot; {experience.education.year}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className={styles.secondaryCard}>
            <h3 className={styles.secondaryCardTitle}>
              <svg className={styles.sectionIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              {experience.certifications.title}
            </h3>
            <ul className={styles.certList}>
              {experience.certifications.items.map((cert: { name: string; issuer: string; date: string }) => (
                <li key={cert.name} className={styles.certItem}>
                  <span className={styles.certName}>{cert.name}</span>
                  <span className={styles.certIssuer}>
                    {cert.issuer} &middot; {cert.date}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>{experience.cta.title}</h2>
          <p className={styles.ctaText}>{experience.cta.text}</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/case-studies`} className={`${styles.btn} ${styles.btnPrimary}`}>
              {experience.cta.caseStudiesBtn}
            </Link>
            <Link href={`/${lang}/capabilities`} className={`${styles.btn} ${styles.btnSecondary}`}>
              {experience.cta.capabilitiesBtn}
            </Link>
            <Link href={`/${lang}#contact`} className={`${styles.btn} ${styles.btnSecondary}`}>
              {experience.cta.contactBtn}
            </Link>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
