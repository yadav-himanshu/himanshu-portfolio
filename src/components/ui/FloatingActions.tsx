// components/FloatingActions.tsx
"use client";

import ThemeToggle from "./ThemeToggle";
import ScrollToTop from "./ScrollToTop";
import WhatsAppButton from "./WhatsAppButton";

export default function FloatingActions() {
  return (
    <>
      <WhatsAppButton />
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}
