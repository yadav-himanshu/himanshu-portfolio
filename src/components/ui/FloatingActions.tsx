// components/FloatingActions.tsx
"use client";

import ThemeToggle from "./ThemeToggle";
import ScrollToTop from "./ScrollToTop";

export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-8 right-8 z-[9999] 
      flex flex-col gap-3 items-end"
    >
      <ScrollToTop />
      <ThemeToggle />
    </div>
  );
}
