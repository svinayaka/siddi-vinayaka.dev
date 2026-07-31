import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const RTL_LOCALES = new Set(["ar", "he", "fa", "ur"]);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siddi Vinayaka - Senior Front-End Engineer",
  description: "10+ years of experience in React, Angular, Micro Frontends, and Design Systems.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const direction = RTL_LOCALES.has(lang) ? "rtl" : "ltr";

  return (
    <html
      lang={lang}
      dir={direction}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className={styles.layoutBody}>{children}</body>
    </html>
  );
}
