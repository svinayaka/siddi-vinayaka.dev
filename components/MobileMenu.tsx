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
        <div className="relative">
            
            <button 
                onClick={handleClick} 
                aria-expanded={isOpen} 
                aria-controls="menuLinks" 
                aria-label="Toggle navigation menu"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 p-2 rounded-lg transition-colors cursor-pointer"
            >
                {isOpen ? (
                    // Close "X" Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    // Hamburger Menu Icon
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <nav id="menuLinks" className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl shadow-lg p-4 z-50 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="block py-2 px-3 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    )
}