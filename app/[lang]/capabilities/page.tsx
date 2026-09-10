import Link from 'next/link';

const CAPABILITIES = [
    {
        slug: 'design-system',
        title: 'Design System & Token Architecture',
        description:
            'A token-driven design system compiled from JSON, published as an npm package, and consumed via CSS variables with live theme switching.',
    },
];

export default async function CapabilitiesPage({
    params,
}: Readonly<{
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    return (
        <main className="capabilities-hub">
            <header className="capabilities-hub__hero">
                <p className="capabilities-hub__eyebrow">Capabilities</p>
                <h1>What I architect and build</h1>
                <p className="capabilities-hub__lede">
                    A hands-on look at the frontend systems I design, ship, and maintain —
                    from token pipelines to micro frontends, accessibility, and performance.
                </p>
            </header>

            <ul className="capabilities-hub__list">
                {CAPABILITIES.map((cap) => (
                    <li key={cap.slug} className="capabilities-hub__item">
                        <Link href={`/${lang}/capabilities/${cap.slug}`} className="capabilities-hub__card">
                            <h2>{cap.title}</h2>
                            <p>{cap.description}</p>
                            <span className="capabilities-hub__cta">Explore →</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}