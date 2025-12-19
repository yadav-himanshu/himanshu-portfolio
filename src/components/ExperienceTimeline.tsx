"use client";

import { motion } from "framer-motion";
import { experiences, Experience } from "@/data/ExperienceAndEducation";

interface TimelineCardProps {
  exp: Experience;
  mobile?: boolean;
}

// ------------------------
// TimelineCard Component
// ------------------------
function TimelineCard({ exp, mobile = false }: TimelineCardProps) {
  return (
    <div
      className={`relative p-5 rounded-lg border transition-all duration-300 bg-transparent ${
        mobile ? "text-left" : ""
      }`}
      style={{
        borderColor: "var(--border-soft)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "#06b6d4"; // cyan-500
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--border-soft)";
      }}
    >
      <h3 className="text-lg font-semibold text-cyan-400">{exp.title}</h3>
      <p className="text-sm mb-2" style={{ color: "var(--muted-2)" }}>
        {exp.company}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {exp.description}
      </p>
      <span className="block mt-3 text-xs" style={{ color: "var(--muted)" }}>
        {exp.date}
      </span>
    </div>
  );
}

// ------------------------
// ExperienceTimeline Component
// ------------------------
export default function ExperienceTimeline() {
  return (
    <div className="w-full relative py-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12"
          style={{ color: "var(--text)" }}
        >
          Work Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 w-1 bg-cyan-500 h-full md:hidden z-0" />
          <div className="absolute left-1/2 top-0 w-1 bg-cyan-500 h-full -translate-x-1/2 hidden md:block z-0" />

          {experiences.map((exp: Experience, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: exp.side === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-[40px_1fr] md:grid md:grid-cols-[1fr_80px_1fr] items-start gap-4 mb-12 relative z-10"
            >
              {/* LEFT card (desktop only) */}
              <div className="hidden md:flex md:col-start-1 md:col-end-2 md:justify-end md:pr-8 md:text-right">
                {exp.side === "left" ? <TimelineCard exp={exp} /> : <div />}
              </div>

              {/* ICON column */}
              <div className="col-start-1 md:col-start-2 flex justify-center">
                <div className="flex flex-col items-center">
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-cyan-500 transform transition-transform duration-200 z-20"
                    style={{ backgroundColor: "var(--card-2)" }}
                  >
                    {exp.icon}
                  </span>
                </div>
              </div>

              {/* RIGHT card (desktop only) */}
              <div className="hidden md:flex md:col-start-3 md:col-end-4 md:justify-start md:pl-8 md:text-left">
                {exp.side === "right" ? <TimelineCard exp={exp} /> : <div />}
              </div>

              {/* MOBILE card */}
              <div className="col-start-2 md:hidden pl-2">
                <TimelineCard exp={exp} mobile />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
