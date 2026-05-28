"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { experiences } from "@/data/experiences";
import { getIcon } from "@/lib/iconMap";

export default function ExperiencePage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const countText = useMemo(() => `${experiences.length} Items`, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 py-20 min-h-screen">
      <div className="flex items-center justify-between mb-16">
        <button
          type="button"
          onClick={handleBack}
          className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 glass-panel hover:glass-panel-hover border border-glass-border text-foreground flex items-center gap-2 shadow-lg"
          aria-label="Go back"
        >
          <span className="text-secondary font-bold">←</span> Back
        </button>
        <span className="text-sm font-bold text-muted-foreground bg-glass px-5 py-2.5 rounded-full border border-glass-border shadow-sm backdrop-blur-md">
          {countText} Found
        </span>
      </div>

      <h1 className="text-2xl md:text-4xl font-black text-center mb-12 text-gradient tracking-tight">
        History &amp; Education
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;
          const iconEl = getIcon(exp.iconKey);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden glass-panel group relative ${
                isOpen ? "ring-2 ring-primary/20 shadow-2xl" : "shadow-md hover:shadow-xl"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-500 ${
                  isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />

              {/* Header — clickable */}
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full p-8 relative z-10 text-left"
              >
                <div className="flex items-start gap-6">
                  <span className={`shrink-0 p-3 rounded-xl bg-foreground/5 border border-glass-border shadow-inner text-xl group-hover:scale-110 transition-transform duration-300 ${exp.iconColor}`}>
                    {iconEl}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-base font-black text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </h2>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl text-muted-foreground bg-foreground/5 w-10 h-10 flex items-center justify-center rounded-full border border-glass-border shrink-0"
                        aria-hidden="true"
                      >
                        ▾
                      </motion.span>
                    </div>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                      {exp.company}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                        {exp.date}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground/60 uppercase tracking-widest bg-foreground/5 px-3 py-1.5 rounded-full border border-glass-border">
                        Click to {isOpen ? "collapse" : "expand"}
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expandable description — no event bubbling issue */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 pb-8 text-left relative z-10">
                      <div className="h-px w-full bg-gradient-to-r from-glass-border via-primary/20 to-glass-border mb-6" />
                      <p className="text-xs leading-relaxed text-muted-foreground font-medium">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
