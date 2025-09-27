import "./globals.css";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="scroll-smooth">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
