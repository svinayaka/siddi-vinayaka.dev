import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header({ children }: { children?: React.ReactNode }) {

  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex gap-6">
        <div className="flex gap-3">
          <Image
            src="/Passport_Photo.jpg"
            alt="Siddi Vinayaka"
            width={160} // Defines the base resolution
            height={160} // Keeps a 1:1 aspect ratio
            sizes="(max-width: 768px) 120px, 160px" 
            className="rounded-xl object-cover border border-gray-200 dark:border-gray-800 w-32 h-32 md:w-40 md:h-40 shrink-0"
            priority={true}
          />
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            <h3>Siddi Vinayaka</h3>
            <p className="text-xs font-light text-gray-500">Senior Front Engineer</p>
          </Link>
        </div>

      </div>
      <div className="flex  gap-4">
        <div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex  gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-600 text-sm font-semibold px-4 py-2 rounded-lg transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <span>Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
        <div>
          {children}
        </div>
      </div>
    </header>
  );
}
