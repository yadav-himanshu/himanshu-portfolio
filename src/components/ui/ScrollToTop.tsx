"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="
    fixed bottom-6 right-6 z-50
    group flex items-center justify-center
    w-12 h-12 rounded-full
    backdrop-blur shadow-lg
    glass-panel border border-glass-border
    overflow-hidden
    transition-all duration-300
    hover:w-44 hover:glass-panel-hover
  "
        >
          <ArrowUp className="w-5 h-5 shrink-0 text-foreground" />

          <span
            className="
       text-sm font-medium whitespace-nowrap
      opacity-0 max-w-0
      group-hover:ml-2
      group-hover:opacity-100
      group-hover:max-w-[120px]
      transition-all duration-300
    "
          >
            Scroll to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
