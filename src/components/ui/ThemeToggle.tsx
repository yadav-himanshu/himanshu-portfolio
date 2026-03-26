"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
      return;
    }

    if (saved === "dark") {
      document.documentElement.classList.remove("light");
      return;
    }

    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    if (prefersLight) {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);

    if (next) {
      document.documentElement.classList.add("light");
      localStorage.setItem(STORAGE_KEY, "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem(STORAGE_KEY, "dark");
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isLight ? "Dark mode" : "Light mode"}
      className="
    fixed bottom-6 left-6 z-50
    group flex items-center justify-center
    w-12 h-12 rounded-full
    backdrop-blur shadow-lg
    glass-panel border border-glass-border
    overflow-hidden
    transition-all duration-300
    hover:w-40 hover:glass-panel-hover
  "
    >
      <span className="text-xl shrink-0">{isLight ? "☀️" : "🌙"}</span>

      <span
        className="
       text-sm font-medium whitespace-nowrap
      opacity-0 max-w-0
      group-hover:ml-2
      group-hover:opacity-100
      group-hover:max-w-[100px]
      transition-all duration-300
    "
      >
        {isLight ? "Dark mode" : "Light mode"}
      </span>
    </motion.button>
  );
}
