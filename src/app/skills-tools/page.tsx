"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { skills, tools } from "../data/toolsAndSkills";

type Tab = "all" | "skills" | "tools";

export default function SkillsToolsPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredSkills = useMemo(() => {
    if (!q) return skills;
    return skills.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        (s.description || "").toLowerCase().includes(q)
    );
  }, [q]);

  const filteredTools = useMemo(() => {
    if (!q) return tools;
    return tools.filter(
      (t) =>
        t.label.toLowerCase().includes(q) ||
        (t.description || "").toLowerCase().includes(q)
    );
  }, [q]);

  const showSkills = tab === "all" || tab === "skills";
  const showTools = tab === "all" || tab === "tools";

  const Card = ({
    icon,
    label,
    description,
  }: {
    icon: React.ReactNode;
    label: string;
    description?: string;
  }) => (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="p-6 rounded-2xl shadow-sm flex flex-col items-center text-center border transition-all duration-300"
      style={{
        backgroundColor: "var(--card-2)",
        borderColor: "var(--border-soft)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#06b6d4"; // cyan-500
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-soft)";
      }}
    >
      <div className="text-4xl">{icon}</div>
      <div className="mt-3 text-sm font-medium" style={{ color: "var(--text)" }}>
        {label}
      </div>
      <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </motion.div>
  );

  const TabButton = ({ value, label }: { value: Tab; label: string }) => {
    const active = tab === value;
    return (
      <button
        type="button"
        onClick={() => setTab(value)}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
        style={{
          backgroundColor: active ? "color-mix(in srgb, var(--card-2) 70%, var(--bg))" : "transparent",
          color: active ? "var(--text)" : "var(--muted)",
          border: `1px solid ${active ? "#06b6d4" : "var(--border-soft)"}`,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      {/* Top bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div className="flex items-center gap-3">
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

          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text)" }}>
            All Skills & Tools
          </h1>
        </div>

        <div className="text-sm" style={{ color: "var(--muted)" }}>
          {filteredSkills.length} skills • {filteredTools.length} tools
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
        <div className="flex gap-2">
          <TabButton value="all" label="All" />
          <TabButton value="skills" label="Skills" />
          <TabButton value="tools" label="Tools" />
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search skills/tools..."
          className="w-full sm:w-[360px] px-4 py-2 rounded-lg text-sm outline-none"
          style={{
            backgroundColor: "var(--card-2)",
            color: "var(--text)",
            border: "1px solid var(--border-soft)",
          }}
        />
      </div>

      {/* Skills */}
      {showSkills && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text)" }}>
            Skills
          </h2>

          {filteredSkills.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>No skills match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredSkills.map((s, i) => (
                <Card
                  key={`skill-${i}`}
                  icon={s.icon}
                  label={s.label}
                  description={s.description}
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Tools */}
      {showTools && (
        <section>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--text)" }}>
            Tools
          </h2>

          {filteredTools.length === 0 ? (
            <p style={{ color: "var(--muted)" }}>No tools match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredTools.map((t, i) => (
                <Card
                  key={`tool-${i}`}
                  icon={t.icon}
                  label={t.label}
                  description={t.description}
                />
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
