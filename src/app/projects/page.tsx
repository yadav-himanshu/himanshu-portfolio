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
    <section className="py-12 px-6 max-w-4xl mx-auto min-h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-12">
        <button
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 glass-panel glass-panel-hover border border-glass-border text-foreground flex items-center gap-2 shadow-lg"
        >
          <span className="text-primary font-bold">←</span> Back
        </button>

        <span className="text-sm font-semibold text-muted-foreground bg-glass px-5 py-2 rounded-full border border-glass-border shadow-sm backdrop-blur-md">
          {projects.length} Projects
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-16 text-center text-gradient tracking-tight drop-shadow-sm">
        All Projects
      </h1>

      {/* Stacked list */}
      <div className="flex flex-col gap-8">
        {projects.map((proj, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl border border-glass-border p-8 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer glass-panel glass-panel-hover group relative overflow-hidden"
              onClick={() => toggle(idx)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggle(idx);
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {proj.title}
                </h3>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-muted-foreground bg-foreground/5 w-10 h-10 flex items-center justify-center rounded-full border border-glass-border shadow-inner"
                >
                  ▾
                </motion.span>
              </div>

              {/* Description */}
              <p className="mt-4 text-base leading-relaxed text-muted-foreground relative z-10 font-medium">
                {proj.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {proj.techStack.map((tech, i) => (
                  <span
                    key={i}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border border-glass-border text-foreground bg-glass backdrop-blur-xl shadow-sm hover:border-primary/50 transition-colors"
                  >
                    <span className="text-primary">{techIcons[tech] || <Globe className="w-4 h-4" />}</span>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links (always visible) */}
              <div
                className="flex gap-10 mt-8 text-sm font-bold relative z-10 border-t border-glass-border pt-6"
                onClick={(e) => e.stopPropagation()}
              >
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    className="flex items-center gap-2.5 text-foreground hover:text-primary transition-all duration-300 hover:scale-105 group/link"
                  >
                    <FaGithub size={20} className="group-hover/link:animate-pulse" /> GitHub
                  </a>
                )}

                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    className="flex items-center gap-2.5 text-foreground hover:text-secondary transition-all duration-300 hover:scale-105 group/link"
                  >
                    <Globe size={20} className="group-hover/link:animate-pulse" /> Live
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
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8">
                      <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Key Features</h4>
                      <ul className="pl-5 list-disc text-sm space-y-3 text-muted-foreground border-l-2 border-primary/30 relative z-10 font-medium">
                        {proj.highlights.map((point, i) => (
                          <li key={i} className="pl-2 marker:text-primary">{point}</li>
                        ))}
                      </ul>
                    </div>
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
