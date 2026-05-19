"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaCheck } from "react-icons/fa";
import { Globe, ArrowUpRight, ShieldCheck, Terminal, Heart, Play } from "lucide-react";
import { projects } from "@/data/projectData";

const RenderProjectVisual = ({ title }: { title: string }) => {
  if (title.includes("OpenThoughts")) {
    return (
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {/* Soft floating background orb */}
        <div className="absolute w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        
        {/* Poem Card */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left font-serif text-[10px] space-y-2 select-none"
        >
          <div className="text-primary font-bold tracking-wider font-mono text-[9px] uppercase">Featured Thought</div>
          <p className="italic text-foreground/80 leading-relaxed">
            "The thoughts we share<br />
            are the stars that light the dark,<br />
            an eternal spark."
          </p>
          <div className="text-right text-[8px] text-muted-foreground">- Anonymous</div>
        </motion.div>
        
        {/* Firestore Sync Node */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 right-4 w-[130px] p-3 rounded-xl glass-panel border border-glass-border shadow-md flex items-center gap-2 select-none bg-black/40"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="text-[8px] font-mono text-muted-foreground">Firestore Active</span>
        </motion.div>
      </div>
    );
  }
  
  if (title.includes("Bombay Facility")) {
    return (
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {/* Soft glowing radial gradient background */}
        <div className="absolute w-36 h-36 bg-sky-500/10 rounded-full blur-2xl" />
        
        {/* Security Shield Card */}
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[180px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-center select-none bg-black/40"
        >
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-2.5" />
          <div className="text-xs font-black text-foreground">BFS Security Portal</div>
          <div className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Status: Secured & Active</div>
          <div className="mt-3 px-2.5 py-0.5 rounded-full bg-primary/10 text-[8px] font-bold text-primary inline-block">140+ Guards Deployed</div>
        </motion.div>
      </div>
    );
  }
  
  if (title.includes("Recipe")) {
    return (
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {/* Recipe Search Card */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[190px] p-4 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3 bg-black/40"
        >
          <div className="px-2 py-1 rounded-lg bg-foreground/5 border border-glass-border text-[8px] text-muted-foreground/60 flex items-center gap-1.5 font-mono">
            <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
            <span>Search: "Italian Pasta..."</span>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-foreground/10 relative overflow-hidden flex items-center justify-center text-[10px] font-black text-muted-foreground/30 border border-glass-border">
            <Heart size={16} className="text-primary/40 animate-pulse" />
          </div>
          <div className="flex justify-between items-center text-[9px] px-0.5">
            <span className="font-bold text-foreground">Garlic Penne</span>
            <span className="text-primary font-bold">★ 4.9</span>
          </div>
        </motion.div>
      </div>
    );
  }

  if (title.includes("Shop Nest") || title.includes("ShopNest")) {
    return (
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {/* Cart Item Card */}
        <motion.div
          animate={{ scale: [1, 1.01, 1], y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[180px] p-4 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3 bg-black/40"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 border-b border-glass-border pb-1.5">Checkout Cart</div>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 rounded-lg bg-foreground/10 border border-glass-border shrink-0 flex items-center justify-center text-[8px] text-muted-foreground font-black">
              🎧
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-bold text-foreground truncate">Wireless Buds</div>
              <div className="text-[8px] text-muted-foreground">$89.99 x 1</div>
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-bold text-foreground pt-1.5 border-t border-glass-border">
            <span>Total:</span>
            <span className="text-primary">$89.99</span>
          </div>
          <button className="w-full py-1 rounded-lg bg-primary text-primary-foreground font-bold text-[8px] hover:bg-accent transition-colors flex items-center justify-center gap-1">
            <Play size={8} /> Pay Now
          </button>
        </motion.div>
      </div>
    );
  }

  if (title.includes("Portfolio")) {
    return (
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {/* Portfolio Stats Card */}
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[190px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3.5 bg-black/40"
        >
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-primary font-mono uppercase tracking-wider">Metrics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[8px] font-mono text-muted-foreground border-b border-glass-border/30 pb-1">
              <span>Performance:</span>
              <span className="text-emerald-500 font-bold">100%</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-muted-foreground border-b border-glass-border/30 pb-1">
              <span>Responsive:</span>
              <span className="text-primary font-bold">Grid/Flex</span>
            </div>
            <div className="flex justify-between text-[8px] font-mono text-muted-foreground pb-1">
              <span>Motion:</span>
              <span className="text-primary font-bold">Framer</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Fallback / Contact Management App
  return (
    <div className="relative w-full h-[280px] flex items-center justify-center">
      {/* Mini Terminal/Code Card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-[190px] p-4 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left font-mono text-[9px] text-muted-foreground space-y-2 bg-black/60"
      >
        <div className="flex gap-1.5 items-center border-b border-glass-border pb-1.5 mb-2">
          <Terminal size={10} className="text-primary" />
          <span className="text-[8px]">contact-sync.sh</span>
        </div>
        <div className="text-emerald-400">&gt; syncing database...</div>
        <div className="text-foreground/80 pl-2">yadav_himanshu</div>
        <div className="text-foreground/80 pl-2">7499506824</div>
        <div className="text-emerald-500 font-bold">&gt; done. 0 errors</div>
      </motion.div>
    </div>
  );
};

export default function Showcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = projects[activeIdx];

  return (
    <section id="showcase" className="relative w-full py-24 px-6 sm:px-12 overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-glass-border text-primary text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              Featured Work
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-gradient tracking-tight mb-4"
            >
              Recent Projects
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium max-w-lg leading-relaxed"
            >
              A selection of digital experiences built with performance,
              scalability, and user-centric design at the core.
            </motion.p>
          </div>
        </div>

        {/* Dynamic Navigation Pills */}
        <div className="flex flex-wrap justify-start gap-2 mb-12 border-b border-glass-border pb-6 overflow-x-auto select-none no-scrollbar">
          {projects.map((proj, idx) => {
            const shortTitle = proj.title.split(" — ")[0];
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 relative cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectPill"
                    className="absolute inset-0 bg-primary rounded-full z-0 shadow-md shadow-primary/20"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Stage */}
        <div className="w-full relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl glass-panel border border-glass-border relative overflow-hidden text-left"
            >
              {/* Left Side: Information details */}
              <div className="lg:col-span-7 space-y-6 relative z-10 order-2 lg:order-1">
                <div className="space-y-3.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-primary/70">
                    Project #0{activeIdx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gradient leading-tight tracking-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
                    {activeProject.description}
                  </p>
                </div>

                {/* Checklist of previously hidden highlights */}
                {activeProject.highlights && activeProject.highlights.length > 0 && (
                  <div className="space-y-3 pt-3 border-t border-glass-border/30">
                    <h4 className="text-[9px] uppercase tracking-widest font-black text-muted-foreground/40">
                      Core Implementation Highlights
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {activeProject.highlights.slice(0, 4).map((hl, idx) => (
                        <div key={idx} className="flex gap-2 items-start">
                          <span className="mt-0.5 w-3.5 h-3.5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                            <FaCheck size={7} className="text-primary" />
                          </span>
                          <span className="text-[11px] font-medium leading-relaxed text-muted-foreground/80">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack wrap */}
                <div className="space-y-3 pt-3 border-t border-glass-border/30">
                  <h4 className="text-[9px] uppercase tracking-widest font-black text-muted-foreground/40">
                    Tech Stack & Integrations
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider bg-foreground/5 dark:bg-white/5 border border-glass-border text-muted-foreground shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-4">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all duration-300 bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 cursor-pointer"
                    >
                      <Globe size={13} />
                      Live Preview
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all duration-300 glass-panel border border-glass-border text-foreground hover:glass-panel-hover hover:-translate-y-0.5 cursor-pointer"
                    >
                      <FaGithub size={13} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side: Interactive Virtual Dashboard */}
              <div className="lg:col-span-5 relative z-10 flex justify-center items-center order-1 lg:order-2 bg-gradient-to-br from-foreground/[0.01] to-foreground/[0.02] border border-glass-border/30 rounded-2xl py-6 overflow-hidden">
                <RenderProjectVisual title={activeProject.title} />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
