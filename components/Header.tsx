import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header({ children }: { children?: React.ReactNode }) {

  return (
    <header className="flex justify-between items-center py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <Image
          src="/my-photo.jpg"
          alt="Siddi Vinayaka"
          width={40}
          height={40}
          className="rounded-full object-cover border border-gray-200 dark:border-gray-800"
          priority={true}
        />
        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
          <h3>Siddi Vinayaka</h3>
          <p className="text-xs font-light text-gray-500">Senior Front Engineer</p>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="/resume.pdf" 
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 text-sm font-semibold px-4 py-2 rounded-lg transition-all active:scale-95 shadow-sm cursor-pointer"
        >
          <span>Resume</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>
        {children}
      </div>
    </header>
  );
}
