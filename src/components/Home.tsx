"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFileDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const SOCIALS = [
  { href: "https://github.com/yadav-himanshu", icon: <FaGithub size={14} />, label: "GitHub" },
  { href: "https://linkedin.com/in/himanshu-yadav-0706a1137", icon: <FaLinkedin size={14} />, label: "LinkedIn" },
  { href: "https://twitter.com/himanshu816y", icon: <FaTwitter size={14} />, label: "Twitter" },
  { href: "https://instagram.com/i_himanshhu", icon: <FaInstagram size={14} />, label: "Instagram" },
  { href: "mailto:himanshuyadav7852@gmail.com", icon: <FaEnvelope size={14} />, label: "Email" },
  { href: "https://wa.me/917499506824", icon: <FaWhatsapp size={14} />, label: "WhatsApp" },
] as const;

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-100px)] w-full flex items-center justify-center py-12 px-6 sm:px-12 relative overflow-hidden"
    >


      <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full max-w-[1100px] mx-auto z-10">
        {/* Left: Text */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 md:space-y-6 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            WordPress &amp; Front-End Architect
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] text-foreground">
              Hi, I&apos;m{" "}
              <motion.span
                className="inline-flex justify-center items-center align-middle w-9 h-9 rounded-full glass-panel border border-glass-border shadow-sm text-lg ml-1.5 cursor-pointer select-none"
                whileHover={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 0.5 }}
                aria-hidden="true"
              >
                👋
              </motion.span>
              <br />
              <span className="text-gradient">Himanshu Yadav</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 max-w-xl"
          >
            <h2 className="text-base sm:text-lg text-accent font-bold tracking-tight">
              Building high-fidelity interfaces from India.
            </h2>
            <p className="text-muted-foreground font-medium leading-relaxed text-xs sm:text-sm md:text-base">
              I specialize in building performant, accessible web applications using{" "}
              <span className="text-foreground font-semibold">React</span>,{" "}
              <span className="text-foreground font-semibold">Next.js</span>, and custom{" "}
              <span className="text-foreground font-semibold">WordPress / WooCommerce</span>{" "}
              architectures. Focused on creating premium user experiences through clean
              architecture and modern motion design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto pt-2"
          >
            <a
              href="/ResumeHimanshu.pdf"
              download
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:-translate-y-0.5 cursor-pointer"
            >
              <FaFileDownload size={14} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 glass-panel border border-glass-border text-foreground hover:glass-panel-hover hover:-translate-y-0.5 cursor-pointer"
            >
              <FaEnvelope size={14} />
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start gap-2 pt-3 w-full"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
              Connect with me
            </span>
            <div className="flex gap-3">
              {SOCIALS.map((soc) => (
                <motion.a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full glass-panel border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-[0_0_10px_rgba(13,148,136,0.15)] transition-all duration-300 cursor-pointer"
                  aria-label={soc.label}
                >
                  {soc.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Avatar */}
        <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2 py-6">
          {/* CSS orbital rings — no JS animation */}
          <div className="orbital-ring orbital-ring--inner pointer-events-none z-0">
            <div className="orbital-node orbital-node--top" />
          </div>
          <div className="orbital-ring orbital-ring--outer pointer-events-none z-0">
            <div className="orbital-node orbital-node--bottom" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] rounded-full overflow-hidden border border-glass-border shadow-2xl z-10 bg-black/40 backdrop-blur-[4px] group/avatar transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.35)]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 mix-blend-screen pointer-events-none" />
            <Image
              src="/HimanshuProfilePic.png"
              alt="Himanshu Yadav — Frontend Developer"
              fill
              sizes="(max-width: 640px) 230px, (max-width: 768px) 270px, 310px"
              className="object-cover object-top scale-[1.02] group-hover/avatar:scale-105 transition-all duration-700 ease-in-out select-none"
              priority
            />
          </motion.div>

          {/* Floating info card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.4, duration: 0.5 },
              x: { delay: 0.4, duration: 0.5 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
            }}
            className="absolute -right-2 sm:-right-4 top-8 p-3 rounded-xl glass-panel border border-glass-border shadow-md flex flex-col gap-1.5 max-w-[140px] text-left z-20 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between text-muted-foreground text-[8px] uppercase tracking-wider font-black">
              <span>Focused on</span>
              <span className="text-primary font-bold">&lt;/&gt;</span>
            </div>
            <div className="flex flex-col gap-0.5 text-[10px] font-bold text-foreground/95">
              {["Clean Code", "Great UX", "Performance"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Floating stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[85%] sm:w-[90%] max-w-[320px] p-3 rounded-xl glass-panel border border-glass-border shadow-xl z-20 hover:border-secondary/30 transition-all duration-300"
          >
            <div className="grid grid-cols-3 gap-1.5 divide-x divide-glass-border text-center">
              {[
                { value: "+3", label: "Years exp", colorClass: "text-primary" },
                { value: "+10", label: "Projects", colorClass: "text-secondary" },
                { value: "100%", label: "Passion", colorClass: "text-gradient" },
              ].map(({ value, label, colorClass }) => (
                <div key={label} className="flex flex-col justify-center">
                  <div className={`text-base sm:text-lg font-black hover:scale-105 transition-transform duration-300 cursor-default ${colorClass}`}>
                    {value}
                  </div>
                  <div className="text-[7.5px] uppercase tracking-widest font-black text-muted-foreground mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 cursor-pointer z-10 hidden lg:flex select-none"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground/45 hover:text-foreground transition-colors duration-300">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4.5 h-7 rounded-full border border-muted-foreground/20 flex justify-center p-1"
        >
          <div className="w-1 h-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
