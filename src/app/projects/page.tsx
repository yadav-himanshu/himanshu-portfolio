"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import { projects } from "../../data/projectData";
import { techIcons } from "../../data/techIcons";

export default function ProjectsPage() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-10">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-lg text-sm font-medium border"
          style={{
            backgroundColor: "var(--card-2)",
            color: "var(--text)",
            borderColor: "var(--border-soft)",
          }}
        >
          ← Back
        </button>

        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {projects.length} projects
        </span>
      </div>

      <h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
        style={{ color: "var(--text)" }}
      >
        All Projects
      </h2>

      {/* Stacked list */}
      <div className="flex flex-col gap-6">
        {projects.map((proj, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.article
              key={idx}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition cursor-pointer"
              style={{
                backgroundColor: "var(--card-2)",
                borderColor: "var(--border-soft)",
              }}
              onClick={() => toggle(idx)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle(idx);
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--text)]">
                  {proj.title}
                </h3>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-lg text-[var(--muted)]"
                >
                  ▾
                </motion.span>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted-2)]">
                {proj.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 px-2 py-1 rounded-full text-xs border"
                    style={{
                      borderColor: "var(--border-soft)",
                      color: "var(--text)",
                    }}
                  >
                    {techIcons[tech] || <Globe className="w-4 h-4" />}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (always visible) */}
              <div
                className="flex gap-6 mt-4 text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    className="flex items-center gap-1 hover:text-cyan-500 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    className="flex items-center gap-1 hover:text-green-500 transition"
                  >
                    <Globe className="w-4 h-4" /> Live
                  </a>
                )}
              </div>

              {/* Expandable highlights */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-5 pl-5 list-disc text-sm space-y-2 text-[var(--muted-2)]">
                      {proj.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
