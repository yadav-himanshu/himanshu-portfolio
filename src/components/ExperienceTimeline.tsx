"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";
import { experiences, Experience } from "@/data/ExperienceAndEducation";

const TimelineCard = ({ exp, index }: { exp: Experience; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative p-8 rounded-3xl glass-panel hover:glass-panel-hover border border-glass-border shadow-xl group transition-all duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{exp.title}</h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
            {exp.date}
          </span>
        </div>
        <p className="text-sm font-bold text-muted-foreground mb-4">{exp.company}</p>
        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors font-medium">
          {exp.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scrollLineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="w-full relative py-24 px-6 sm:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">

        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-gradient tracking-tight mb-6"
          >
            The Journey
          </motion.h2>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            A timeline of professional milestones and educational growth,
            marking the evolution of skills and contributions.
          </p>
        </div>

        {/* The Timeline Container */}
        <div className="relative">

          {/* Central Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-foreground/[0.03] dark:bg-white/[0.03] -translate-x-1/2 hidden md:block" />
          <motion.div
            style={{
              scaleY: scrollLineHeight,
              originY: 0,
            }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary -translate-x-1/2 hidden md:block z-0"
          />

          {/* Mobile Progress Line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-1 bg-foreground/[0.03] dark:bg-white/[0.03] md:hidden" />
          <motion.div
            style={{
              scaleY: scrollLineHeight,
              originY: 0,
            }}
            className="absolute left-[24px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary md:hidden z-0"
          />

          {experiences.map((exp, i) => {
            const isLeft = exp.side === "left";

            return (
              <div key={i} className="relative mb-20 md:mb-32 flex flex-col md:grid md:grid-cols-2 md:gap-x-24 items-center">

                {/* Desktop alternate layout */}
                <div className={`w-full ${isLeft ? "md:text-right" : "md:col-start-2"}`}>
                  <TimelineCard exp={exp} index={i} />
                </div>

                {/* The Center Icon Node */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className="w-12 h-12 rounded-2xl bg-background border-2 border-primary shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center text-primary text-xl relative"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" />
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Spacer for secondary column on desktop */}
                <div className={`hidden md:block ${isLeft ? "md:col-start-2" : "md:col-start-1"}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
