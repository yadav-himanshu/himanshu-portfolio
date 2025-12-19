import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
// import Torch from "@/components/ui/MouseEffect";
import FloatingActions from "@/components/ui/FloatingActions";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Himanshu Portfolio",
  description: "My Portfolio built with Next.js, TypeScript, and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="scroll-smooth">
        {/* Skip to content (visible only when focused via keyboard) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000]
                     px-4 py-2 rounded-lg shadow-lg"
          style={{
            backgroundColor: "var(--card-2)",
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

        {/* <Torch /> */}
        <FloatingActions />
      </body>
    </html>
  );
}
