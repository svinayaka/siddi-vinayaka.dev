import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = await params;

  return {
    title: `Experience (${lang.toUpperCase()}) - Siddi Vinayaka`,
    description:
      "10+ years of enterprise frontend engineering experience in React, Angular, Web Components, Micro Frontends, Design Systems, and Accessibility.",
  };
}

export default async function ExperiencePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  const experiences = [
    {
      id: "powerschool",
      role: "Senior Software Engineer",
      company: "PowerSchool Group LLC",
      industry: "EdTech (500K+ Users)",
      period: "Mar 2023 – Dec 2025",
      location: "Bangalore, India",
      bullets: [
        "Designed and maintained 60+ framework-agnostic Web Components for an enterprise Design System adopted by multiple engineering teams across React and Angular applications.",
        "Led VPAT accessibility evaluations and improved an internal accessibility audit score from 78% to 94% by applying WCAG 2.1 AA, semantic HTML, and ARIA practices to reusable components.",
        "Established Playwright and WebDriverIO E2E automation using Chrome DevTools Protocol and integrated regression coverage into the release pipeline, improving confidence in shared UI releases.",
        "Defined component requirements and API contracts with product, UX, and engineering teams, and documented component APIs, states, and usage patterns to support consistent adoption.",
      ],
      outcome:
        "Elevated accessibility compliance from 78% to 94% across enterprise apps and established CDP-based automated E2E regression testing.",
      skills: [
        "React",
        "Angular",
        "Web Components",
        "Design Systems",
        "WCAG 2.1 AA",
        "Playwright",
        "WebDriverIO",
        "Chrome DevTools Protocol",
        "CI/CD",
      ],
    },
    {
      id: "onetrust",
      role: "Senior Software Engineer (UI)",
      company: "OneTrust",
      industry: "Enterprise Privacy & Governance",
      period: "Dec 2020 – Mar 2023",
      location: "Bangalore, India",
      bullets: [
        "Led migration toward a Micro Frontend architecture by developing a shared Angular library published as versioned npm packages and adopted across multiple internal product modules.",
        "Developed reusable WCAG 2.1 AA-compliant components using HTML, CSS, Angular, and TypeScript, incorporating responsive design, lazy loading, and virtual scrolling.",
        "Strengthened frontend quality through Cypress, Karma, Jasmine, SonarQube-integrated CI, and automated unit and integration testing.",
        "Partnered with backend engineers on REST API integrations, routing, JSON data contracts, package upgrades, and consistent UI behavior across product modules.",
      ],
      outcome:
        "Architected versioned shared Angular MFE library across product modules, standardizing enterprise UI and test quality.",
      skills: [
        "Micro Frontends",
        "Angular",
        "TypeScript",
        "Cypress",
        "Karma",
        "Jasmine",
        "SonarQube",
        "REST APIs",
        "Virtual Scrolling",
        "npm Packages",
      ],
    },
    {
      id: "baker-hughes",
      role: "Software Engineer",
      company: "Baker Hughes",
      industry: "Energy & Industrial IoT",
      period: "Aug 2018 – Nov 2020",
      location: "Bangalore, India",
      bullets: [
        "Built reusable React and Angular dashboard components driven by backend-managed JSON contracts, enabling multiple teams to render operational views consistently.",
        "Created reusable D3.js and Plotly visualization components for time-series operational dashboards and data presentation.",
        "Optimized incoming-data rendering through efficient JSON processing, throttling, and reduced unnecessary chart re-renders.",
        "Coordinated REST API contracts, JSON schemas, frontend integration, and application architecture with backend teams.",
      ],
      outcome:
        "Engineered zero-lag real-time sensor dashboards with D3.js/Plotly and dynamic JSON schema-driven rendering.",
      skills: [
        "React",
        "Angular",
        "D3.js",
        "Plotly",
        "JSON Schemas",
        "Time-Series Data",
        "REST APIs",
        "Performance Optimization",
      ],
    },
    {
      id: "time-inc",
      role: "Software Engineer",
      company: "Time Inc.",
      industry: "Media & Digital Publishing",
      period: "Apr 2017 – Aug 2018",
      location: "Bangalore, India",
      bullets: [
        "Modernized a legacy Silverlight administration application by migrating its UI to Angular with Kendo UI.",
        "Improved performance through lazy loading, virtual scrolling, and route-level component caching.",
        "Engineered responsive SCSS layouts and reusable UI patterns, and mentored a junior frontend developer on Angular implementation and reusable-component practices.",
      ],
      outcome:
        "Delivered full modernization from legacy Silverlight to Angular with Kendo UI, cutting load times by ~30%.",
      skills: [
        "Angular",
        "TypeScript",
        "Kendo UI",
        "SCSS",
        "Lazy Loading",
        "Virtual Scrolling",
        "Legacy Migration",
      ],
    },
    {
      id: "mphasis",
      role: "Software Engineer",
      company: "Mphasis (Client: Schneider Electric)",
      industry: "Energy Management & Product Config",
      period: "Jun 2016 – Apr 2017",
      location: "Bangalore, India",
      bullets: [
        "Developed a region-aware AngularJS application for product configuration, supporting global product rules and configurable frontend behavior.",
        "Improved page-load performance by approximately 30% through sprite sheets, lazy loading, asset optimization, and resource-loading improvements.",
        "Increased unit-test coverage from 30% to 80% using Karma and Jasmine.",
        "Integrated frontend support for backend-managed record locking and REST APIs.",
      ],
      outcome:
        "Increased unit test coverage from 30% to 80% and boosted load performance by 30% with asset optimization.",
      skills: [
        "AngularJS",
        "JavaScript",
        "Karma",
        "Jasmine",
        "Asset Optimization",
        "REST APIs",
        "Unit Testing",
      ],
    },
    {
      id: "spire",
      role: "Software Engineer",
      company: "Spire Technologies",
      industry: "Talent Intelligence & Search",
      period: "Dec 2015 – Jun 2016",
      location: "Bangalore, India",
      bullets: [
        "Created an interactive D3.js skill-relationship visualization that helped recruiters compare related skills and identify stronger or weaker candidate matches.",
        "Built a Tag Automation frontend for recruiter search and evaluation workflows, surfacing structured skill signals to reduce manual review effort.",
      ],
      outcome:
        "Built interactive D3.js skill graphs and tag automation, reducing candidate screening time for recruiters.",
      skills: [
        "D3.js",
        "JavaScript",
        "Data Visualization",
        "Search UI",
        "UI Engineering",
      ],
    },
    {
      id: "edcite",
      role: "Software Engineer",
      company: "Edcite Learning",
      industry: "EdTech & Interactive Assessments",
      period: "Dec 2013 – Jun 2015",
      location: "Bangalore, India",
      bullets: [
        "Designed and maintained 5+ reusable assessment components for teacher-authoring and student-assessment workflows.",
        "Engineered drag-and-drop, graph manipulation, live preview, and validation functionality using JavaScript and jQuery.",
        "Delivered reusable, configurable assessment experiences in collaboration with product and design teams.",
      ],
      outcome:
        "Built interactive assessment widgets (drag-and-drop, graph plotting) powering teacher workflows and student evaluations.",
      skills: [
        "JavaScript",
        "jQuery",
        "Interactive Graphing",
        "Drag-and-Drop",
        "EdTech",
      ],
    },
  ];

  const certifications = [
    {
      name: "CutShort Certified JavaScript - Advanced",
      issuer: "CutShort",
      date: "Jan 2020",
    },
    {
      name: "CutShort Certified HTML/CSS - Basic",
      issuer: "CutShort",
      date: "Jan 2020",
    },
    {
      name: "Designing Websites for Performance",
      issuer: "LinkedIn Learning",
      date: "Jul 2019",
    },
    {
      name: "Learning Functional Programming with JavaScript",
      issuer: "LinkedIn Learning",
      date: "Aug 2018",
    },
  ];

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
          <h1 className={styles.pageTitle}>Professional Experience</h1>
          <p className={styles.pageSubtitle}>
            10+ years architecting enterprise frontend applications, design systems,
            micro frontends, and high-performance Web Component architectures.
          </p>
        </section>

        {/* Career Summary Metrics */}
        <section className={styles.metricsGrid} aria-label="Career highlights summary">
          <div className={styles.metricCard}>
            <p className={styles.metricValue}>10+ Years</p>
            <p className={styles.metricLabel}>Enterprise Experience</p>
          </div>
          <div className={styles.metricCard}>
            <p className={styles.metricValue}>60+</p>
            <p className={styles.metricLabel}>Shared Components</p>
          </div>
          <div className={styles.metricCard}>
            <p className={styles.metricValue}>78% &rarr; 94%</p>
            <p className={styles.metricLabel}>VPAT Accessibility</p>
          </div>
          <div className={styles.metricCard}>
            <p className={styles.metricValue}>30% &rarr; 80%</p>
            <p className={styles.metricLabel}>Test Coverage</p>
          </div>
        </section>

        {/* Career Timeline */}
        <section className={styles.timelineSection}>
          <h2 className={styles.sectionHeading}>Career Timeline</h2>

          <div className={styles.timeline}>
            {experiences.map((exp) => (
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
                    {exp.bullets.map((bullet, idx) => (
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
                    {exp.skills.map((skill) => (
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
              Education
            </h3>
            <div className={styles.certItem}>
              <p className={styles.certName}>Diploma in Computer Science</p>
              <p className={styles.certIssuer}>SNM Polytechnic, Moodbidri, Karnataka &middot; 2011</p>
            </div>
          </div>

          {/* Certifications */}
          <div className={styles.secondaryCard}>
            <h3 className={styles.secondaryCardTitle}>
              <svg className={styles.sectionIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
              Certifications
            </h3>
            <ul className={styles.certList}>
              {certifications.map((cert) => (
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
          <h2 className={styles.ctaTitle}>Want to see detailed project case studies?</h2>
          <p className={styles.ctaText}>
            Explore the architectural challenges, technical solutions, and quantifiable impacts of my
            major enterprise projects.
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/case-studies`} className={`${styles.btn} ${styles.btnPrimary}`}>
              View Case Studies
            </Link>
            <Link href={`/${lang}/capabilities`} className={`${styles.btn} ${styles.btnSecondary}`}>
              Explore Capabilities
            </Link>
            <Link href={`/${lang}#contact`} className={`${styles.btn} ${styles.btnSecondary}`}>
              Get in Touch
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
