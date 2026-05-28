"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe, ArrowRight, Code2, LayoutGrid } from "lucide-react";
import { projects, devProjects, wordpressProjects, Project } from "@/data/projects";
import Link from "next/link";
import { Suspense, useState, useEffect } from "react";

// ── Uniform project card ──────────────────────────────────────────────────────
function ProjectCard({ proj, idx }: { proj: Project; idx: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className="group relative rounded-2xl glass-panel border border-glass-border p-5 hover:border-primary/25 hover:shadow-lg transition-all duration-400 flex flex-col overflow-hidden"
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />

      {/* Header */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <span className="text-[9px] font-black text-primary/50 uppercase tracking-widest">
          #{String(idx + 1).padStart(2, "0")}
        </span>
        {proj.category && (
          <span className="px-2 py-0.5 rounded-full text-[8px] font-bold bg-foreground/5 border border-glass-border text-muted-foreground">
            {proj.category}
          </span>
        )}
      </div>

      {/* Title */}
      <h2 className="text-sm font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-2 relative z-10 line-clamp-2">
        {proj.title}
      </h2>

      {/* Description */}
      <p className="text-[11px] leading-relaxed text-muted-foreground font-medium line-clamp-3 mb-4 relative z-10 flex-1">
        {proj.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
        {proj.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-foreground/5 border border-glass-border text-muted-foreground"
          >
            {tech}
          </span>
        ))}
        {proj.techStack.length > 3 && (
          <span className="px-2 py-0.5 rounded-md text-[8px] font-bold bg-foreground/5 border border-glass-border text-muted-foreground">
            +{proj.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="relative z-10 pt-3 border-t border-glass-border/40 flex items-center gap-2">
        <Link
          href={`/projects/${proj.slug}`}
          className="flex-1 inline-flex items-center justify-between py-2 px-3 rounded-xl text-[10px] font-black text-foreground bg-foreground/5 border border-glass-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
        >
          View Details
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
        {proj.link && proj.link !== "#" && (
          <a
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground border border-glass-border bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
            aria-label="Live site"
          >
            <Globe size={12} />
          </a>
        )}
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground border border-glass-border bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
            aria-label="Source code"
          >
            <FaGithub size={12} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

// ── Section with label + uniform 3-col grid ───────────────────────────────────
function ProjectSection({
  label,
  icon: Icon,
  count,
  items,
  show,
}: {
  label: string;
  icon: React.ElementType;
  count: number;
  items: Project[];
  show: boolean;
}) {
  if (!show) return null;
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <Icon size={14} className="text-primary" />
          <h2 className="text-base font-black text-foreground">{label}</h2>
        </div>
        <div className="flex-1 h-px bg-glass-border" />
        <span className="text-xs font-bold text-muted-foreground">{count}</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((proj, idx) => (
          <ProjectCard key={proj.slug} proj={proj} idx={idx} />
        ))}
      </div>
    </div>
  );
}

// ── Main content ──────────────────────────────────────────────────────────────
function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState("all");

  useEffect(() => {
    const urlTab = searchParams.get("tab");
    if (urlTab) {
      setTab(urlTab);
    } else {
      setTab("all");
    }
  }, [searchParams]);

  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/");
  };

  const tabs = [
    { id: "all",       label: "All",         count: projects.length },
    { id: "dev",       label: "Dev / Code",  count: devProjects.length },
    { id: "wordpress", label: "WordPress",   count: wordpressProjects.length },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 max-w-[1100px] mx-auto min-h-screen relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top bar */}
      <div className="flex items-center justify-between mb-14 relative z-10">
        <button
          onClick={handleBack}
          className="px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 glass-panel hover:glass-panel-hover border border-glass-border text-foreground flex items-center gap-2 shadow-md cursor-pointer"
        >
          <span className="text-primary font-bold">←</span> Back
        </button>
        <span className="text-xs font-bold text-muted-foreground bg-glass px-5 py-2 rounded-full border border-glass-border shadow-sm backdrop-blur-md">
          {projects.length} Works
        </span>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-10 relative z-10">
        <h1 className="text-2xl md:text-4xl font-black mb-4 text-gradient tracking-tight leading-tight">
          Project Archive
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
          Frontend platforms, full-stack apps, and custom WordPress solutions — all in one place.
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex justify-center mb-12 relative z-10 max-w-full overflow-x-auto no-scrollbar px-4">
        <div className="inline-flex items-center gap-1 relative glass-panel border border-glass-border rounded-2xl p-1.5 shadow-sm select-none">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id);
                router.push(`/projects?tab=${t.id}`, { scroll: false });
              }}
              className={`relative px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-black whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                tab === t.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                {t.id === "dev" && <Code2 size={10} className="sm:w-3 sm:h-3" />}
                {t.id === "wordpress" && <LayoutGrid size={10} className="sm:w-3 sm:h-3" />}
                <span>{t.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[7px] sm:text-[8px] font-black ${tab === t.id ? "bg-white/20" : "bg-foreground/5"}`}>
                  {t.count}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grids */}
      <div className="relative z-10 space-y-14">
        <ProjectSection
          label="Dev / Code Projects"
          icon={Code2}
          count={devProjects.length}
          items={devProjects}
          show={tab === "all" || tab === "dev"}
        />
        <ProjectSection
          label="WordPress Sites"
          icon={LayoutGrid}
          count={wordpressProjects.length}
          items={wordpressProjects}
          show={tab === "all" || tab === "wordpress"}
        />
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense>
      <ProjectsContent />
    </Suspense>
  );
}
