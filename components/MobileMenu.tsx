"use client";
import Link from "next/link"; 
import { useState } from "react";

interface MobileMenuProps {
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ navLinks }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(openStatus => !openStatus);
    }
    return (
        <>
            <button onClick={handleClick} aria-expanded={isOpen} aria-controls="menuLinks" aria-label="Toggle navigation menu">
                {isOpen ? 'Close' : 'Open'}
            </button>
            {isOpen && (
                <div id="menuLinks">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}