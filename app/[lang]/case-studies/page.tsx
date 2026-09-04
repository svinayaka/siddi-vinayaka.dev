import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default async function CaseStudies({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const cases = [
    // ============================================================
    // 1. POWER SCHOOL (Mar 2023 - Dec 2025) - MOST RECENT
    // ============================================================
    {
      id: Date.now(),
      title: "Enterprise Design System & Accessibility Overhaul",
      role: "Senior Software Engineer",
      company: "PowerSchool Group LLC (EdTech, 500K+ Users)",
      tags: ["Web Components", "WCAG 2.1 AA", "Playwright", "Design Systems"],
      challenge:
        "The platform served 500K+ active users but faced critical accessibility compliance failures (scoring 78%). Multiple engineering teams (React and Angular) were building UI components in isolation, leading to fragmentation, inconsistent UX, and duplicated effort.",
      solution:
        "Designed and maintained 60+ framework-agnostic Web Components for a unified enterprise Design System. Led VPAT accessibility evaluations and applied WCAG 2.1 AA, semantic HTML, and ARIA practices to reusable components. Established Playwright and WebDriverIO E2E automation using Chrome DevTools Protocol, integrating regression coverage into the CI/CD release pipeline.",
      impact:
        "Elevated the platform's accessibility compliance score from 78% to 94%, securing multi-million dollar school district contracts. Reduced UI bugs in production by 60% through automated E2E testing. Conducted workshops to train 25+ developers on inclusive design practices.",
    },

    // ============================================================
    // 2. ONETRUST (Dec 2020 - Mar 2023)
    // ============================================================
    {
      id: Date.now() + 1,
      title: "Micro Frontends & Shared Angular Component Library",
      role: "Senior Software Engineer (UI)",
      company: "OneTrust",
      tags: ["Angular", "Micro Frontends", "npm Packages", "TypeScript"],
      challenge:
        "Multiple internal product modules were built with inconsistent Angular implementations, making cross-module UI consistency nearly impossible. Releasing new features required synchronized deployments across teams, causing bottleneck delays.",
      solution:
        "Led the migration toward a Micro Frontend architecture by developing a shared Angular library published as versioned npm packages. Built reusable WCAG 2.1 AA-compliant components with responsive design, lazy loading, and virtual scrolling. Strengthened frontend quality through Cypress, Karma, Jasmine, and SonarQube-integrated CI pipelines.",
      impact:
        "Enabled parallel development across product modules, cutting release cycle times by 40%. Standardized UI behavior across 5+ teams and eliminated frontend-backend synchronization bottlenecks through well-defined JSON API contracts.",
    },

    // ============================================================
    // 3. BAKER HUGHES (Aug 2018 - Nov 2020)
    // ============================================================
    {
      id: Date.now() + 2,
      title: "Real-Time Operational Data Visualization Dashboards",
      role: "Software Engineer",
      company: "Baker Hughes (Oil & Gas)",
      tags: ["React", "Angular", "D3.js", "Plotly", "JSON Contracts"],
      challenge:
        "Oil and gas operations required real-time, time-series visualization of sensor data from drilling and production sites. Existing charting solutions were slow, caused jank during high-frequency updates, and required custom development for every new dashboard request.",
      solution:
        "Built reusable React and Angular dashboard components driven by backend-managed JSON contracts, enabling multiple teams to render operational views consistently. Created custom D3.js and Plotly visualization components optimized through efficient JSON processing, throttling, and elimination of unnecessary chart re-renders. Coordinated REST API contracts and JSON schemas closely with backend teams.",
      impact:
        "Enabled field operators to monitor critical drilling data in real-time without lag. Reduced dashboard development time by 70% through component reusability, and improved rendering performance by 50% via optimized data processing.",
    },

    // ============================================================
    // 4. TIME INC. (Apr 2017 - Aug 2018)
    // ============================================================
    {
      id: Date.now() + 3,
      title: "Silverlight to Angular Administration App Migration",
      role: "Software Engineer",
      company: "Time Inc.",
      tags: ["Angular", "Kendo UI", "Lazy Loading", "Virtual Scrolling"],
      challenge:
        "A legacy Silverlight administration application for content and user management was nearing end-of-life. It suffered from a non-responsive UI, poor performance at scale, and an outdated codebase that was difficult to maintain and deploy.",
      solution:
        "Spearheaded the complete UI migration to Angular with Kendo UI. Engineered responsive SCSS layouts and reusable UI patterns. Implemented performance-critical features including lazy loading, route-level component caching, and virtual scrolling for large data tables. Optimized assets using sprite sheets and resource-loading improvements.",
      impact:
        "Successfully modernized the application with zero operational downtime. Improved page-load performance by approximately 30% and increased unit-test coverage from 30% to 80% using Karma and Jasmine. Mentored a junior developer on Angular best practices and reusable component architecture.",
    },

    // ============================================================
    // 5. SPIRE TECHNOLOGIES (Dec 2015 - Jun 2016)
    // ============================================================
    {
      id: Date.now() + 4,
      title: "Skill-Relationship Visualization & Recruiting Automation",
      role: "Software Engineer",
      company: "Spire Technologies",
      tags: ["D3.js", "Data Visualization", "JavaScript", "Recruiting Tech"],
      challenge:
        "Recruiters struggled to quickly compare candidate skill sets against job requirements. The manual process of reviewing unstructured skill signals was time-consuming and inconsistent, often resulting in mismatched candidate shortlists.",
      solution:
        "Created an interactive D3.js skill-relationship visualization that mapped related skills, helping recruiters identify stronger or weaker candidate matches at a glance. Built a Tag Automation frontend that surfaced structured skill signals from unstructured candidate data, streamlining the search and evaluation workflows.",
      impact:
        "Reduced manual candidate screening time by enabling visual skill comparison at scale. Automated skill extraction improved matching accuracy for technical roles, allowing recruiters to focus on high-value candidate engagement.",
    },

    // ============================================================
    // 6. EDCITE LEARNING (Dec 2013 - Jun 2015) - OLDEST
    // ============================================================
    {
      id: Date.now() + 5,
      title: "Interactive Assessment Component Library",
      role: "Software Engineer",
      company: "Edcite Learning (EdTech)",
      tags: ["JavaScript", "jQuery", "Drag-and-Drop", "Graph Manipulation"],
      challenge:
        "Teachers needed authoring tools to create custom, interactive assessments—including drag-and-drop sorting, graph plotting, and live previews. Existing rigid tools couldn't support district-specific question types, forcing developers to rebuild interactions from scratch for every new feature.",
      solution:
        "Designed and maintained 5+ reusable assessment components using pure JavaScript and jQuery. Engineered complex drag-and-drop functionality, interactive graph manipulation with real-time coordinate tracking, and robust live preview/validation workflows. Delivered configurable assessment experiences in collaboration with product and design teams.",
      impact:
        "Empowered thousands of teachers and students with interactive, engaging assessments. Reduced development time for new question types by 70% through component reusability, accelerating feature delivery across multiple school districts.",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <main className={styles.casesMain}>
        <div>
          <Link href={`/${lang}`} className={styles.backLink}>
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
          {cases.map((project) => (
            <article key={project.id} className={styles.caseCard}>
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
