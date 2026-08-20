'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements {
                'contact-form-mfe': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            }
        }
    }
}

export default function ContactFormWrapper() {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if already registered
        if (customElements.get('contact-form-mfe')) {
            setIsLoaded(true);
            return;
        }

        const scriptId = 'contact-form-mfe-js';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://stupendous-capybara-9eb558.netlify.app/contact-form-mfe.js';
            script.async = true;
            script.onload = () => setIsLoaded(true);
            script.onerror = (err) => console.error('Failed to load MFE script:', err);
            document.body.appendChild(script);
        } else {
            // Script tag already exists, check if registered, otherwise poll/wait
            const checkInterval = setInterval(() => {
                if (customElements.get('contact-form-mfe')) {
                    setIsLoaded(true);
                    clearInterval(checkInterval);
                }
            }, 100);
            return () => clearInterval(checkInterval);
        }
    }, []);

    useEffect(() => {
        if (!isLoaded || !containerRef.current) return;

        const container = containerRef.current;
        container.innerHTML = ''; // Clear previous elements to avoid duplication during HMR/StrictMode

        // Add the micro frontend custom element directly to the container
        const mfe = document.createElement('contact-form-mfe');
        container.appendChild(mfe);

        // Inject the CSS stylesheet directly into the MFE's Shadow Root.
        // This is required because the MFE custom element attaches its own Shadow Root,
        // preventing outer styles (from a wrapper shadow root or the main page) from applying to its inner elements.
        if (mfe.shadowRoot) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://stupendous-capybara-9eb558.netlify.app/contact-form-mfe.css';
            mfe.shadowRoot.appendChild(link);
        }
    }, [isLoaded]);

    if (!isLoaded) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <p>Loading Contact Form...</p>
            </div>
        );
    }

    return <div ref={containerRef} />;
}