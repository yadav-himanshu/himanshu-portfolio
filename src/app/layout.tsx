import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Himanshu Portfolio",
  description: "My Portfolio built with Next.js, TypeScript, and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Header />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
