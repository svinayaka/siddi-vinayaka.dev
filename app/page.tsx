import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const navItems = [
    { name: "Profile", href: "#profile" },
    { name: "About", href: "#about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="main_container">
      <Header />
      <nav>
        <ul>
          {navItems?.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        {/* === 1. HERO SECTION === */}
        <section id="profile" className="text-center space-y-4 py-12 scroll-mt-20">
          {/* 1. Name */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Siddi Vinayaka
          </h1>

          {/* 2. Job Title */}
          <p className="text-2xl font-light text-gray-700">
            Senior Front-End Engineer
          </p>

          {/* 3. Tech Stack Tags */}
          <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-blue-600">
            <span>React</span>
            <span>·</span>
            <span>TypeScript</span>
            <span>·</span>
            <span>Angular</span>
            <span>·</span>
            <span>Micro Frontends</span>
            <span>·</span>
            <span>Design Systems</span>
            <span>·</span>
            <span>WCAG 2.1 AA</span>
          </div>

          {/* 4. Value Proposition (The "Staff Engineer" Differentiator) */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            10+ years building enterprise platforms for 500K+ users.
          </p>

          {/* 5. Call-to-Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/case-studies"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-sm"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Contact Me
            </a>
          </div>
        </section>
        {/* === ABOUT SECTION === */}
        <section id="about" className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">About Me</h2>

          <div className="space-y-4 text-gray-600 max-w-3xl">

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
        <section id="contact" className="border-t border-gray-200 pt-16 mt-16 pb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed max-w-md">
                I&apos;m always open to discussing new opportunities, architectural design, front-end optimization challenges, or mentoring engineers. Feel free to reach out via email or through the form!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:siddi.vinayaka@example.com" className="hover:text-blue-600 transition">
                    svinayaka290489@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    GitHub
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-gray-600">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/siddhivinayaka" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                    LinkedIn - Siddi Vinayaka
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <form className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition outline-none"
                  placeholder="Siddi Vinayaka"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition outline-none"
                  placeholder="svinayaka290489@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 transition shadow-sm cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
