"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { skills, tools, type Skill } from "@/data/skills";
import { getIcon } from "@/lib/iconMap";

type Tab = "all" | "skills" | "tools";

function SkillCard({ icon, label, description }: { icon: React.ReactNode; label: string; description?: string }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8, scale: 1.02 }}
      className="p-5 rounded-2xl shadow-sm flex flex-col items-center text-center border border-glass-border glass-panel hover:glass-panel-hover transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">{icon}</div>
      <div className="text-base font-bold text-foreground relative z-10">{label}</div>
      {description && (
        <p className="text-sm mt-3 text-muted-foreground font-medium relative z-10">{description}</p>
      )}
    </motion.div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
        active
          ? "bg-primary text-white border-primary shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
          : "glass-panel border-glass-border text-muted-foreground hover:text-foreground hover:glass-panel-hover"
      }`}
    >
      {label}
    </button>
  );
}

export default function SkillsPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredSkills = useMemo(() => {
    if (!q) return skills;
    return skills.filter(
      (s) => s.label.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
  }, [q]);

  const filteredTools = useMemo(() => {
    if (!q) return tools;
    return tools.filter(
      (t) => t.label.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
    );
  }, [q]);

  const showSkills = tab === "all" || tab === "skills";
  const showTools = tab === "all" || tab === "tools";

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const renderGrid = (items: Skill[]) => (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map((item, i) => (
        <SkillCard
          key={`${item.iconKey}-${i}`}
          icon={<span className={item.iconColor}>{getIcon(item.iconKey)}</span>}
          label={item.label}
          description={item.description}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-[1100px] mx-auto py-20 px-6 sm:px-12 min-h-screen">
      {/* Top bar */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-16">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 glass-panel hover:glass-panel-hover border border-glass-border text-foreground flex items-center gap-2 shadow-lg"
          >
            <span className="text-primary font-bold">←</span> Back
          </button>
          <h1 className="text-2xl md:text-4xl font-black text-gradient tracking-tight">
            Skills &amp; Tools
          </h1>
        </div>
        <div className="text-sm font-bold text-muted-foreground bg-glass px-5 py-2.5 rounded-full border border-glass-border shadow-sm backdrop-blur-md">
          <span className="text-primary">{filteredSkills.length}</span> Skills •{" "}
          <span className="text-secondary">{filteredTools.length}</span> Tools
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-16 relative z-20">
        <div className="flex gap-3 bg-glass p-1.5 rounded-full border border-glass-border backdrop-blur-md shadow-inner">
          {(["all", "skills", "tools"] as Tab[]).map((v) => (
            <TabButton key={v} label={v.charAt(0).toUpperCase() + v.slice(1)} active={tab === v} onClick={() => setTab(v)} />
          ))}
        </div>
        <div className="relative group w-full sm:w-[400px]">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search expertise..."
            className="w-full px-6 py-3.5 rounded-full text-sm font-medium outline-none glass-panel border border-glass-border shadow-lg focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all text-foreground"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none group-focus-within:text-primary transition-colors">
            🔍
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab + q}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {showSkills && (
            <section className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-sm font-black text-foreground">Skills</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
              </div>
              {filteredSkills.length === 0 ? (
                <div className="text-center py-12 glass-panel rounded-3xl border border-glass-border">
                  <p className="text-muted-foreground font-medium">No matching skills found.</p>
                </div>
              ) : (
                renderGrid(filteredSkills)
              )}
            </section>
          )}

          {showTools && (
            <section className="pb-20">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-sm font-black text-foreground">Tools</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-secondary/30 to-transparent" />
              </div>
              {filteredTools.length === 0 ? (
                <div className="text-center py-12 glass-panel rounded-3xl border border-glass-border">
                  <p className="text-muted-foreground font-medium">No matching tools found.</p>
                </div>
              ) : (
                renderGrid(filteredTools)
              )}
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
