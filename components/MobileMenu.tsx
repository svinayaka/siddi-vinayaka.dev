"use client";
import Link from "next/link"; 
import { useState } from "react";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(openStatus => !openStatus);
    }
    return (
        <div className={styles.menuWrapper}>
            <button 
                onClick={handleClick} 
                aria-expanded={isOpen} 
                aria-controls="menuLinks" 
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
                <nav id="menuLinks" className={styles.menuDropdown}>
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className={styles.menuLink}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    )
}