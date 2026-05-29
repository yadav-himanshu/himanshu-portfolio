"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaCheck } from "react-icons/fa";
import { Globe, ArrowLeft, ShieldCheck, Terminal, Heart, Play } from "lucide-react";
import { projects } from "@/data/projects";
import { techIcons } from "@/lib/techIcons";

function ProjectVisual({ title }: { title: string }) {
  if (title.includes("OpenThoughts")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[220px] p-6 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left font-serif text-xs space-y-3 bg-black/40"
        >
          <div className="text-primary font-bold tracking-wider font-mono text-[10px] uppercase">Featured Thought</div>
          <p className="italic text-foreground/80 leading-relaxed">
            &quot;The thoughts we share<br />are the stars that light the dark,<br />an eternal spark.&quot;
          </p>
          <div className="text-right text-[10px] text-muted-foreground font-sans">- Anonymous</div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-8 right-6 w-[140px] p-3 rounded-xl glass-panel border border-glass-border shadow-md flex items-center gap-2 select-none bg-black/60"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <span className="text-[10px] font-mono text-muted-foreground">Firestore Active</span>
        </motion.div>
      </div>
    );
  }
  if (title.includes("Bombay Facility")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] p-6 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-center bg-black/40"
        >
          <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-3" />
          <div className="text-sm font-black text-foreground">BFS Security Portal</div>
          <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mt-1">Status: Secured &amp; Active</div>
          <div className="mt-3.5 px-3 py-1 rounded-full bg-primary/10 text-[9px] font-bold text-primary inline-block">140+ Guards Deployed</div>
        </motion.div>
      </div>
    );
  }
  if (title.includes("Recipe")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3.5 bg-black/40"
        >
          <div className="px-2 py-1 rounded-lg bg-foreground/5 border border-glass-border text-[9px] text-muted-foreground/60 flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Search: &quot;Italian Pasta...&quot;</span>
          </div>
          <div className="aspect-[4/3] rounded-xl bg-foreground/10 relative overflow-hidden flex items-center justify-center border border-glass-border">
            <Heart size={18} className="text-primary/40 animate-pulse" />
          </div>
          <div className="flex justify-between items-center text-[10px] px-0.5">
            <span className="font-bold text-foreground">Garlic Penne</span>
            <span className="text-primary font-bold">★ 4.9</span>
          </div>
        </motion.div>
      </div>
    );
  }
  if (title.includes("Shop Nest") || title.includes("ShopNest")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.01, 1], y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[190px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3.5 bg-black/40"
        >
          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 border-b border-glass-border pb-2">Checkout Cart</div>
          <div className="flex gap-2.5 items-center">
            <div className="w-9 h-9 rounded-lg bg-foreground/10 border border-glass-border shrink-0 flex items-center justify-center text-xs">🎧</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold text-foreground truncate">Wireless Buds</div>
              <div className="text-[9px] text-muted-foreground">$89.99 x 1</div>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-foreground pt-2 border-t border-glass-border">
            <span>Total:</span>
            <span className="text-primary">$89.99</span>
          </div>
          <button className="w-full py-1.5 rounded-lg bg-primary text-primary-foreground font-bold text-[9px] hover:bg-accent transition-colors flex items-center justify-center gap-1">
            <Play size={10} /> Pay Now
          </button>
        </motion.div>
      </div>
    );
  }
  if (title.includes("ElectroNest") || title.includes("Genics Wellness")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3.5 bg-black/40"
        >
          <div className="flex items-center justify-between text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider">
            <span>WooCommerce</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-ping shrink-0" />
          </div>
          <div className="space-y-1.5 pb-2.5 border-b border-glass-border/30">
            <div className="text-xs font-black text-foreground truncate">
              {title.includes("Genics Wellness") ? "Genics Herbal Extract" : "Ryzen 9 Gaming PC"}
            </div>
            <div className="text-[9px] text-muted-foreground">
              {title.includes("Genics Wellness") ? "Qty: 1 • spec: 500ml Organic" : "Qty: 1 • spec: 32GB RAM"}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="text-muted-foreground">Subtotal:</span>
            <span className="text-foreground font-black">
              {title.includes("Genics Wellness") ? "$49.00" : "$1,499.00"}
            </span>
          </div>
          <div className="px-2.5 py-1.5 rounded bg-purple-500/10 border border-purple-500/20 text-[8px] font-mono text-purple-300 text-center">
            ✓ Stripe payment active
          </div>
        </motion.div>
      </div>
    );
  }
  if (title.includes("Aura Homes") || title.includes("Jagpreet") || title.includes("Naidu")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[190px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-3 bg-black/40"
        >
          <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
            <span>{title.includes("Aura Homes") ? "ACF Directory" : "Medical Booking"}</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[7px]">Elementor</span>
          </div>
          <div className="aspect-[16/10] rounded-lg bg-foreground/10 relative overflow-hidden border border-glass-border/40 flex items-center justify-center">
            <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="absolute w-2 h-2 rounded-full bg-emerald-500 border border-white" />
            <span className="absolute bottom-1.5 left-2 px-1.5 rounded bg-black/80 text-[7px] font-mono text-white">
              {title.includes("Aura Homes") ? "$4.2M • Aspen" : "Consultation Active"}
            </span>
          </div>
          <div className="text-[10px] font-bold text-foreground leading-snug">
            {title.includes("Aura Homes") ? "Aura Crest Villa" : "Dr. Appointment Slot"}
          </div>
        </motion.div>
      </div>
    );
  }
  if (title.includes("Portfolio")) {
    return (
      <div className="relative w-full h-[320px] flex items-center justify-center">
        <motion.div
          animate={{ rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[200px] p-6 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left select-none space-y-4 bg-black/40"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-primary font-mono uppercase tracking-wider">Metrics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
          </div>
          <div className="space-y-2">
            {[["Performance:", "100%", "text-emerald-500"], ["Responsive:", "Grid/Flex", "text-primary"], ["Motion:", "Framer", "text-primary"]].map(([k, v, cls]) => (
              <div key={k} className="flex justify-between text-[9px] font-mono text-muted-foreground border-b border-glass-border/30 pb-1 last:border-0">
                <span>{k}</span>
                <span className={`font-bold ${cls}`}>{v}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-[200px] p-5 rounded-2xl glass-panel border border-glass-border shadow-2xl relative z-10 text-left font-mono text-[10px] text-muted-foreground space-y-2 bg-black/60"
      >
        <div className="flex gap-1.5 items-center border-b border-glass-border pb-1.5 mb-2.5">
          <Terminal size={12} className="text-primary" />
          <span className="text-[9px]">contact-sync.sh</span>
        </div>
        <div className="text-emerald-400">&gt; syncing database...</div>
        <div className="text-foreground/80 pl-2">yadav_himanshu</div>
        <div className="text-foreground/80 pl-2">7499506824</div>
        <div className="text-emerald-500 font-bold">&gt; done. 0 errors</div>
      </motion.div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/projects");
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 text-center">
        <h2 className="text-xl font-black text-gradient mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
        <button
          onClick={() => router.push("/projects")}
          className="px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 bg-primary text-primary-foreground cursor-pointer"
        >
          View All Projects
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 sm:px-12 max-w-[1100px] mx-auto min-h-screen relative overflow-hidden">


      <div className="flex items-center justify-between mb-16 relative z-10">
        <button
          onClick={handleBack}
          className="px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 glass-panel border border-glass-border text-foreground hover:glass-panel-hover flex items-center gap-2 shadow-md cursor-pointer"
        >
          <ArrowLeft size={14} className="text-primary" /> Back to Archive
        </button>
        <span className="text-[10px] font-black uppercase tracking-widest text-primary/70 bg-glass px-4 py-1.5 rounded-full border border-glass-border shadow-sm">
          Project Details
        </span>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10 text-left">
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-black text-gradient leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-5 pt-8 border-t border-glass-border/30">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary/80">
              Key Features &amp; Implementation Details
            </h3>
            <div className="flex flex-col gap-4">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <FaCheck size={9} className="text-primary" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed text-muted-foreground">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 pt-8 border-t border-glass-border/30">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary/80">
              Technologies &amp; System Integrations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
              {project.techStack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-3 p-3 rounded-xl glass-panel border border-glass-border shadow-sm font-semibold text-xs text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 select-none"
                >
                  <span className="shrink-0">{techIcons[tech] ?? <Globe className="w-5 h-5" />}</span>
                  <span className="truncate">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-10">
          <div className="rounded-3xl border border-glass-border bg-gradient-to-br from-foreground/[0.01] to-foreground/[0.02] overflow-hidden flex justify-center items-center py-8 relative shadow-lg">
            <div className="absolute rounded-full border border-dashed border-primary/5 w-64 h-64 pointer-events-none" />
            <ProjectVisual title={project.title} />
          </div>

          <div className="flex flex-col gap-3.5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-black transition-all duration-300 bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Globe size={15} /> Visit Live Site Preview
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs font-black transition-all duration-300 glass-panel border border-glass-border text-foreground hover:glass-panel-hover hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <FaGithub size={15} /> Explore Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
