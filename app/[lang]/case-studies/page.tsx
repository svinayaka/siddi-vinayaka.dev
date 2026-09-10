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
    title: `${dict.caseStudies.title} (${lang.toUpperCase()}) - ${dict.hero.title}`,
    description: dict.caseStudies.subtitle,
  };
}

export default async function CaseStudies({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const { caseStudies } = dict;

  return (
    <div className={styles.pageContainer}>
      <main className={styles.casesMain}>
        <div>
          <Link href={`/${lang}`} className={styles.backLink}>
            &larr; Back to Home
          </Link>
        </div>
        <div className={styles.casesHeader}>
          <h1 className={styles.casesTitle}>{caseStudies.title}</h1>
          <p className={styles.casesDesc}>{caseStudies.subtitle}</p>
        </div>

        <div className={styles.casesList}>
          {caseStudies.items.map((project: {
            id: string;
            title: string;
            role: string;
            company: string;
            tags: string[];
            challenge: string;
            solution: string;
            impact: string;
          }) => (
            <article key={project.id} className={styles.caseCard}>
              <div className={styles.caseCardHeader}>
                <div className={styles.caseCardTitleGroup}>
                  <h2 className={styles.caseCardTitle}>{project.title}</h2>
                  <p className={styles.caseCardRoleMeta}>
                    {project.role} &middot; <span className={styles.caseCardCompany}>{project.company}</span>
                  </p>
                </div>

                <div className={styles.caseCardTags}>
                  {project.tags.map((tag: string) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.caseCardGrid}>
                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>{caseStudies.challengeHeading}</h3>
                  <p className={styles.caseCardColumnText}>{project.challenge}</p>
                </div>

                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>{caseStudies.solutionHeading}</h3>
                  <p className={styles.caseCardColumnText}>{project.solution}</p>
                </div>

                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>{caseStudies.impactHeading}</h3>
                  <p className={`${styles.caseCardColumnText} ${styles.impactHighlight}`}>
                    {project.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
