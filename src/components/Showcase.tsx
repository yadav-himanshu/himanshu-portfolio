"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe, ArrowUpRight, ArrowRight, Code2, LayoutGrid, ChevronLeft, ChevronRight } from "lucide-react";
import { devProjects, wordpressProjects, Project } from "@/data/projects";
import Link from "next/link";

// ── Single project card (no nested anchors) ───────────────────────────────────
function ProjectCard({ proj, onNavigate }: { proj: Project; onNavigate: () => void }) {
  return (
    <div
      onClick={onNavigate}
      className="group w-full h-full flex flex-col p-6 rounded-2xl glass-panel border border-glass-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      {/* Label */}
      <span className="text-[9px] font-black text-primary/60 uppercase tracking-widest mb-3 relative z-10 block">
        {proj.category ?? (proj.type === "dev" ? "Dev / Code" : "WordPress")}
      </span>

      {/* Title */}
      <h3 className="text-base font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-3 relative z-10 line-clamp-2">
        {proj.title}
      </h3>

      {/* Description */}
      <p className="text-[11px] text-muted-foreground font-medium leading-relaxed line-clamp-3 mb-4 relative z-10 flex-1">
        {proj.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
        {proj.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-foreground/5 border border-glass-border text-muted-foreground">
            {tech}
          </span>
        ))}
        {proj.techStack.length > 3 && (
          <span className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-foreground/5 border border-glass-border text-muted-foreground">
            +{proj.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-glass-border/40">
        <span className="text-[10px] font-black text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all duration-200">
          View Details <ArrowUpRight size={10} />
        </span>
        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          {proj.link && proj.link !== "#" && (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Live site"
            >
              <Globe size={13} />
            </a>
          )}
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Source code"
            >
              <FaGithub size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Step-by-step carousel ─────────────────────────────────────────────────────
const AUTO_DELAY = 4000;

function ProjectCarousel({ items }: { items: Project[] }) {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Touch / swipe
  const touchStartX = useRef<number | null>(null);

  const total = items.length;
  const maxIndex = Math.max(0, total - visibleCount);

  // Handle dynamic sizing to ensure exactly one row is displayed
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clamp index if viewport changes shrink maxIndex
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(0, total - visibleCount)));
  }, [visibleCount, total]);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => Math.min(Math.max(prev + dir, 0), maxIndex));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused) { if (intervalRef.current) clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_DELAY);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, maxIndex]);

  const visible = items.slice(index, index + visibleCount);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.25 } }),
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Cards row */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {visible.map((proj) => (
              <ProjectCard
                key={proj.slug}
                proj={proj}
                onNavigate={() => router.push(`/projects/${proj.slug}`)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-5 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-foreground/15 hover:bg-foreground/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(-1)}
            disabled={index === 0}
            className="w-8 h-8 rounded-full glass-panel border border-glass-border text-muted-foreground hover:text-foreground hover:glass-panel-hover disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={() => go(1)}
            disabled={index >= maxIndex}
            className="w-8 h-8 rounded-full glass-panel border border-glass-border text-muted-foreground hover:text-foreground hover:glass-panel-hover disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Section wrapper (same for both) ──────────────────────────────────────────
function ShowcaseSection({
  id, badge, icon: Icon, title, subtitle, items, viewAllHref, viewAllLabel,
}: {
  id: string; badge: string; icon: React.ElementType; title: string;
  subtitle: string; items: Project[]; viewAllHref: string; viewAllLabel: string;
}) {
  return (
    <section id={id} className="relative w-full py-20 px-6 sm:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-glass-border text-primary text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              {badge}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient tracking-tight mb-2"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black glass-panel border border-glass-border text-foreground hover:glass-panel-hover hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group shrink-0"
            >
              <Icon size={12} className="text-primary" />
              {viewAllLabel}
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform text-primary" />
            </Link>
          </motion.div>
        </div>

        {/* Carousel */}
        <ProjectCarousel items={items} />
      </div>
    </section>
  );
}

// ── Exports ───────────────────────────────────────────────────────────────────
export default function Showcase() {
  return (
    <>
      <ShowcaseSection
        id="showcase"
        badge="Featured Work"
        icon={Code2}
        title="Recent Projects"
        subtitle="A selection of frontend platforms and full-stack applications built for real users."
        items={devProjects}
        viewAllHref="/projects?tab=dev"
        viewAllLabel="View All Projects"
      />
      <ShowcaseSection
        id="wordpress-projects"
        badge="WordPress Work"
        icon={LayoutGrid}
        title="WordPress Sites"
        subtitle="Custom WordPress sites built for clients since Jan 2026 — using Elementor Pro, WooCommerce & ACF."
        items={wordpressProjects}
        viewAllHref="/projects?tab=wordpress"
        viewAllLabel="View All WordPress Sites"
      />
    </>
  );
}
