"use client";
import Link from "next/link"; 
import { useState } from "react";
import styles from "./Menu.module.css";

interface MenuProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(openStatus => !openStatus);
    }
    return (
        <>
            {/* Desktop View: inline links */}
            <nav className={styles.desktopMenuLinks}>
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href} 
                        className={styles.desktopMenuLink}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
            
            {/* Mobile View: burger button dropdown */}
            <div className={styles.menuWrapper}>
                <button 
                    onClick={handleClick} 
                    aria-expanded={isOpen} 
                    aria-controls="mobileMenuLinks" 
                    aria-label="Toggle navigation menu"
                    className={styles.menuToggle}
                >
                    {isOpen ? (
                        // Close "X" Icon
                        <svg className={styles.menuIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger Menu Icon
                        <svg className={styles.menuIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                {isOpen && (
                    <nav id="mobileMenuLinks" className={styles.menuDropdown}>
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                href={link.href} 
                                onClick={() => setIsOpen(false)}
                                className={styles.mobileMenuLink}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </>
    );
}