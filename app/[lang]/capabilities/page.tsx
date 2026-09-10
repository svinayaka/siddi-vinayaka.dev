import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

const CAPABILITIES = [
    {
        slug: 'design-system',
        title: 'Design System & Token Architecture',
        description:
            'A token-driven design system compiled from JSON, published as an npm package, and consumed via CSS variables with live theme switching.',
    },
    {
        slug: 'accessibility',
        title: 'Web Accessibility & VPAT Compliance',
        description:
            'Enterprise WCAG 2.1 AA audits, token contrast guarantees, automated a11y testing with axe-core & Playwright, and verifiable VPAT remediation.',
    },
];

export default async function CapabilitiesPage({
    params,
}: Readonly<{
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    return (
        <div className={styles.pageContainer}>
            <main className={styles.capabilitiesHub}>
                <div>
                    <Link href={`/${lang}`} className={styles.backLink}>
                        &larr; Back to Home
                    </Link>
                </div>
                <header className={styles.hero}>
                    <p className={styles.eyebrow}>Capabilities</p>
                    <h1 className={styles.title}>What I architect and build</h1>
                    <p className={styles.lede}>
                        A hands-on look at the frontend systems I design, ship, and maintain —
                        from token pipelines to micro frontends, accessibility, and performance.
                    </p>
                </header>

                <ul className={styles.list}>
                    {CAPABILITIES.map((cap) => (
                        <li key={cap.slug} className={styles.item}>
                            <Link href={`/${lang}/capabilities/${cap.slug}`} className={styles.card}>
                                <div className={styles.cardBody}>
                                    <h2>{cap.title}</h2>
                                    <p>{cap.description}</p>
                                </div>
                                <span className={styles.cta}>Explore →</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer lang={lang} />
        </div>
    );
}