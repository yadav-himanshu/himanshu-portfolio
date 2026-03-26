"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Globe, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projectData";
import { techIcons } from "@/data/techIcons";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[400px] w-full cursor-pointer"
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-3xl glass-panel border border-glass-border shadow-2xl transition-all duration-500 group-hover:shadow-primary/20 group-hover:border-primary/30 overflow-hidden flex flex-col p-8"
      >
        {/* Decorative background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-glass-border shadow-inner">
            {project.techStack[0] && techIcons[project.techStack[0]] ? (
              <span className="text-3xl text-primary">{techIcons[project.techStack[0]]}</span>
            ) : (
              <Globe className="text-primary w-8 h-8" />
            )}
          </div>
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" className="p-2.5 rounded-full glass-panel border border-glass-border text-muted-foreground hover:text-primary transition-colors shadow-sm">
                <FaGithub size={18} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" className="p-2.5 rounded-full glass-panel border border-glass-border text-muted-foreground hover:text-secondary transition-colors shadow-sm">
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div style={{ transform: "translateZ(70px)" }} className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium line-clamp-4 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Footer: Tech Stack */}
        <div style={{ transform: "translateZ(30px)" }} className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.slice(0, 3).map((tech: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-foreground/5 dark:bg-white/5 border border-glass-border text-muted-foreground shadow-sm"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20">
              +{project.techStack.length - 3} More
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Showcase() {

  return (
    <section id="showcase" className="relative w-full py-24 px-6 sm:px-12 overflow-hidden">
      {/* Dynamic Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-glass-border text-primary text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gradient tracking-tight mb-6"
            >
              Recent Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground font-medium max-w-xl leading-relaxed"
            >
              A selection of digital experiences built with performance,
              scalability, and user-centric design at the core.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="/projects"
              className="group flex items-center gap-3 px-8 py-3.5 rounded-full bg-foreground text-background font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-foreground/20"
            >
              View All Archive
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 6).map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
