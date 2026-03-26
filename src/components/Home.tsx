"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import {
  FaFileDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const ProfileImage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-2 group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-glass-border shadow-2xl z-10"
      >
        <Image
          src="/profilePic.jpg"
          alt="Himanshu Yadav"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          priority
        />
      </div>
    </motion.div>
  );
};

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center py-20 px-6 sm:px-12 gap-12 lg:gap-20"
    >
      {/* Left Column: Profile + Social */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:w-1/3">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
        >
          <ProfileImage />
        </motion.div>

        {/* Social Media (Desktop/Tablet) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:flex flex-col items-center lg:items-start gap-4"
        >
          <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground">Connect</h3>

          <div className="flex gap-6 text-muted-foreground">
            {[
              { href: "https://github.com/yadav-himanshu", icon: <FaGithub size={22} />, label: "GitHub" },
              { href: "https://linkedin.com/in/himanshu-yadav-0706a1137", icon: <FaLinkedin size={22} />, label: "LinkedIn" },
              { href: "https://twitter.com/himanshu816y", icon: <FaTwitter size={22} />, label: "Twitter" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:text-primary hover:-translate-y-1"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Hero Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-4">
            Front-End Architect
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
            Hi, I’m <br />
            <span className="text-gradient">Himanshu Yadav</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-bold tracking-tight">
            Building high-fidelity interfaces from India.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl text-muted-foreground font-medium leading-relaxed text-base sm:text-lg"
        >
          I specialize in building performant, accessible web applications
          using <span className="text-foreground">React</span> and
          <span className="text-foreground"> Next.js</span>. Focused on creating
          premium user experiences through clean architecture and modern motion design.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6 w-full"
        >
          <a
            href="/Himanshu_Frontend_Developer.pdf"
            download
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-10 py-4 rounded-2xl text-sm font-black transition-all duration-300 bg-primary text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1"
          >
            <FaFileDownload size={18} />
            Download Resume
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-10 py-4 rounded-2xl text-sm font-black transition-all duration-300 glass-panel border border-glass-border text-foreground hover:glass-panel-hover hover:-translate-y-1"
          >
            <FaEnvelope size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
