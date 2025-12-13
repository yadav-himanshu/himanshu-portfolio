"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "dark" | "light"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem(STORAGE_KEY);

    // 1) Saved preference wins
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
      return;
    }
    if (saved === "dark") {
      document.documentElement.classList.remove("light");
      setIsLight(false);
      return;
    }

    // 2) Otherwise follow system preference
    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
    if (prefersLight) {
      document.documentElement.classList.add("light");
      setIsLight(true);
    } else {
      document.documentElement.classList.remove("light");
      setIsLight(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !isLight;
    setIsLight(nextIsLight);

    if (nextIsLight) {
      document.documentElement.classList.add("light");
      localStorage.setItem(STORAGE_KEY, "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem(STORAGE_KEY, "dark");
    }
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={[
        "fixed bottom-6 right-6 z-[9999]",
        "rounded-full px-4 py-3",
        "shadow-lg backdrop-blur",
        "transition hover:opacity-90",
        "surface",
      ].join(" ")}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      <span className="flex items-center gap-2">
        <span className="text-lg leading-none">{isLight ? "🌙" : "☀️"}</span>
        <span className="text-sm font-medium text-default">
          {isLight ? "Dark" : "Light"}
        </span>
      </span>
    </button>
  );
}
