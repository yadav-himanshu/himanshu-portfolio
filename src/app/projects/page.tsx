"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import { projects } from "../data/projectData";
import { techIcons } from "../data/techIcons";

export default function ProjectsPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-10 px-6 sm:px-10 max-w-[1200px] mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
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
          {projects.length} projects
        </span>
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
        style={{ color: "var(--text)" }}
      >
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="group flex flex-col rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "var(--card-2)",
                borderColor: "var(--border-soft)",
              }}
              onClick={() => toggle(idx)}
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
                if (e.key === "Enter" || e.key === " ") toggle(idx);
              }}
            >
              {/* Card header/body */}
              <div className="p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-xl font-bold transition-colors"
                    style={{ color: "var(--text)" }}
                  >
                    {proj.title}
                  </h3>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="select-none text-lg"
                    style={{ color: "var(--muted)" }}
                    aria-hidden="true"
                  >
                    ▾
                  </motion.span>
                </div>

                {/* Description (collapsed short) */}
                <p className="text-base leading-relaxed" style={{ color: "var(--muted-2)" }}>
                  {proj.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium shadow-sm transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: "color-mix(in srgb, var(--card-2) 65%, var(--bg))",
                        border: "1px solid var(--border-soft)",
                        color: "var(--text)",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {techIcons[tech] || <Globe className="w-4 h-4" />}
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hint */}
                <div className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
                  Click to {isOpen ? "collapse" : "expand"} links
                </div>
              </div>

              {/* Expandable links section */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <div
                      className="px-6 pb-6 pt-2 flex gap-4"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 transition-colors text-sm"
                          style={{ color: "var(--text)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")} // cyan-500
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                        >
                          <FaGithub className="text-lg" /> GitHub
                        </a>
                      )}

                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 transition-colors text-sm"
                          style={{ color: "var(--text)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")} // green-500
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                        >
                          <Globe className="w-5 h-5" /> Live
                        </a>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
