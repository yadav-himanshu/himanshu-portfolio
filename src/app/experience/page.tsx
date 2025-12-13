"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { experiences } from "../data/ExperienceAndEducation";

export default function ExperiencePage() {
  const router = useRouter();

  // open first item by default (you can change to null if you want all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const countText = useMemo(() => `${experiences.length} items`, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: "var(--card-2)",
            color: "var(--text)",
            border: "1px solid var(--border-soft)",
          }}
          aria-label="Go back"
          title="Go back"
        >
          ← Back
        </button>

        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {countText}
        </span>
      </div>

      <h1 className="text-4xl font-bold text-center mb-12" style={{ color: "var(--text)" }}>
        Experience & Education
      </h1>

      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "var(--card-2)",
                borderColor: "var(--border-soft)",
              }}
              onClick={() => toggle(index)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#06b6d4"; // cyan-500
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-soft)";
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle(index);
              }}
            >
              {/* Header row */}
              <div className="p-6 flex items-start gap-4">
                <span className="shrink-0 mt-1">{exp.icon}</span>

                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                      {exp.title}
                    </h2>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="select-none text-lg"
                      style={{ color: "var(--muted)" }}
                    >
                      ▾
                    </motion.span>
                  </div>

                  <p className="mt-1" style={{ color: "var(--muted)" }}>
                    {exp.company}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-cyan-500">{exp.date}</span>
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card-2) 60%, var(--bg))",
                        border: "1px solid var(--border-soft)",
                        color: "var(--muted)",
                      }}
                    >
                      Click to {isOpen ? "collapse" : "expand"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Expandable content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-6 text-left"
                      style={{ color: "var(--muted-2)" }}
                      onClick={(e) => e.stopPropagation()} // allow text selection without toggling
                    >
                      <p className="leading-relaxed">{exp.description}</p>
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
