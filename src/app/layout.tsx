import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import FloatingActions from "@/components/ui/FloatingActions";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Himanshu Yadav — Frontend Developer",
  description:
    "Portfolio of Himanshu Yadav, a Frontend Developer specializing in React, Next.js, and WordPress. Building performant, accessible web applications.",
  keywords: ["Frontend Developer", "React", "Next.js", "WordPress", "Portfolio", "Himanshu Yadav"],
  authors: [{ name: "Himanshu Yadav" }],
  creator: "Himanshu Yadav",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    title: "Himanshu Yadav — Frontend Developer",
    description:
      "Portfolio of Himanshu Yadav, a Frontend Developer specializing in React, Next.js, and WordPress.",
    siteName: "Himanshu Yadav Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Himanshu Yadav — Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and WordPress.",
    creator: "@himanshu816y",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {/* Skip to content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] px-4 py-2 rounded-lg shadow-lg"
          style={{
            backgroundColor: "var(--card)",
            color: "var(--text)",
            border: "1px solid var(--border-soft)",
          }}
        >
          Skip to content
        </a>

        <Header />

        <main id="main-content" className="pt-20">
          {children}
        </main>

        <FloatingActions />
      </body>
    </html>
  );
}
