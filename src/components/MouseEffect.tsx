"use client";

import { useEffect, useState } from "react";

export default function Torch() {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Detect theme by presence of html.light (your system)
    const checkTheme = () => setIsLight(document.documentElement.classList.contains("light"));
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-[background] duration-50"
      style={{
        background: isLight
          ? // Light mode: subtle vignette/dim effect following cursor
            `radial-gradient(circle 90px at ${position.x}px ${position.y}px,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.10) 55%,
              rgba(0,0,0,0.16) 100%)`
          : // Dark mode: your original torch feel (but token-safe)
            `radial-gradient(circle 50px at ${position.x}px ${position.y}px,
              rgba(255,255,255,0.20) 0%,
              var(--bg) 80%)`,
        mixBlendMode: isLight ? "multiply" : "lighten",
      }}
    />
  );
}
