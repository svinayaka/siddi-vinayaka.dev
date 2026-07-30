import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function CaseStudies() {
  const cases = [
    {
      title: "Silverlight to Angular Migration",
      role: "Lead Front-End Architect",
      company: "Enterprise Energy Client",
      tags: ["Angular", "RxJS", "TypeScript", "Micro Frontends"],
      challenge: "A massive, business-critical oil & gas management console built on deprecated Silverlight was nearing end-of-life. It comprised 120+ complex screens with real-time data visualizers and had to be migrated without interrupting active operations.",
      solution: "Designed a hybrid architecture that embedded Angular micro frontends alongside the legacy application using a message-bus bridge. This allowed for an incremental, screen-by-screen migration and continuous deployments. Built custom canvas-based charting libraries to replace heavy legacy visualization controls.",
      impact: "Successfully completed migration ahead of schedule with zero operational downtime. Reduced application initial load time by 45% and improved CPU/Memory efficiency by 60%."
    },
    {
      title: "Metadata-Driven UI Rendering Engine",
      role: "Senior UI Engineer",
      company: "Large Financial Services Platform",
      tags: ["React", "TypeScript", "JSON Schema", "Dynamic UI"],
      challenge: "Product forms and user onboarding flows were tightly coupled with backend APIs. Any new field request or workflow change required code modifications, full build cycles, and synchronized frontend-backend releases.",
      solution: "Engineered a schema-driven UI renderer using React and TypeScript. The system parsed dynamically-fetched JSON schemas mapping field definitions, layout configurations, and client-side validation rules. Developed a drag-and-drop schema builder tool for product managers.",
      impact: "Reduced the time-to-market for launching new country onboarding flows from 3 weeks to less than 2 hours. Eliminated 85% of standard frontend request tickets."
    },
    {
      title: "WCAG 2.1 AA Accessibility Overhaul",
      role: "Accessibility Lead & Engineer",
      company: "EdTech Platform (500K+ Active Users)",
      tags: ["Semantic HTML", "WAI-ARIA", "Screen Readers", "A11y Auditing"],
      challenge: "The platform faced compliance reviews due to deficient accessibility support. Keyboard navigation was broken, interactive focus states were non-existent, and screen readers failed to parse dynamic search results.",
      solution: "Led a comprehensive audit utilizing automated tooling (Axe, Lighthouse) and manual NVDA/VoiceOver screen reader testing. Rewrote critical interactive modules (modals, dropdowns, auto-suggest inputs) to adhere to WAI-ARIA standards. Established a company-wide a11y component library and linting rules.",
      impact: "Elevated the platform's accessibility compliance score from 78% to 94%, securing multi-million dollar school district contracts. Conducted workshops to train 25+ developers on inclusive design practices."
    }
  ];

  return (
    <div className={styles.pageContainer}>
      <main className={styles.casesMain}>
        <div>
          <Link href="/" className={styles.backLink}>
            &larr; Back to Home
          </Link>
        </div>
        <div className={styles.casesHeader}>
          <h1 className={styles.casesTitle}>Case Studies</h1>
          <p className={styles.casesDesc}>
            Deep-dives into key enterprise projects I have designed, architected, and built throughout my career.
          </p>
        </div>

        <div className={styles.casesList}>
          {cases.map((project, idx) => (
            <article key={idx} className={styles.caseCard}>
              <div className={styles.caseCardHeader}>
                <div className={styles.caseCardTitleGroup}>
                  <h2 className={styles.caseCardTitle}>{project.title}</h2>
                  <p className={styles.caseCardRoleMeta}>
                    {project.role} &middot; <span className={styles.caseCardCompany}>{project.company}</span>
                  </p>
                </div>
                
                <div className={styles.caseCardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.caseCardGrid}>
                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>The Challenge</h3>
                  <p className={styles.caseCardColumnText}>{project.challenge}</p>
                </div>
                
                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>The Solution</h3>
                  <p className={styles.caseCardColumnText}>{project.solution}</p>
                </div>
                
                <div className={styles.caseCardColumn}>
                  <h3 className={styles.caseCardColumnTitle}>The Impact</h3>
                  <p className={`${styles.caseCardColumnText} ${styles.impactHighlight}`}>
                    {project.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
