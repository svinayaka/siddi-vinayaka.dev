import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="main_container">
      <Header />
      
      <nav>
        <ul>
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              &larr; Back to Home
            </Link>
          </li>
        </ul>
      </nav>

      <main className="max-w-4xl mx-auto space-y-12 py-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600">
            Deep-dives into key enterprise projects I have designed, architected, and built throughout my career.
          </p>
        </div>

        <div className="space-y-10">
          {cases.map((project, idx) => (
            <article 
              key={idx} 
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition space-y-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
                  <p className="text-sm font-medium text-gray-500">
                    {project.role} &middot; <span className="text-gray-700">{project.company}</span>
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">The Challenge</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">The Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{project.solution}</p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">The Impact</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium text-gray-800 bg-green-50/50 border border-green-100/50 p-3 rounded-lg">
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
