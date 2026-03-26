"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaGraduationCap, FaRocket, FaFire, FaCode } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const StatCard = ({ icon, value, label, delay }: { icon: any; value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center p-4 rounded-2xl glass-panel border border-glass-border shadow-sm group hover:border-primary/50 transition-colors"
  >
    <div className="text-primary mb-2 text-xl group-hover:scale-110 transition-transform">{icon}</div>
    <div className="text-xl font-black text-foreground">{value}</div>
    <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">{label}</div>
  </motion.div>
);

const NavCard = ({ href, icon, title, colorClass }: { href: string; icon: any; title: string; colorClass: string }) => (
  <motion.div whileHover={{ y: -5, scale: 1.05 }} className="flex-1">
    <Link
      href={href}
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl glass-panel border border-glass-border hover:glass-panel-hover transition-all duration-300 shadow-md ${colorClass}`}
    >
      <div className="text-2xl">{icon}</div>
      <span className="text-xs font-bold text-foreground">{title}</span>
    </Link>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 px-6 sm:px-12 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left: Content & Stats */}
          <div className="lg:col-span-7 space-y-10 order-2 lg:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-gradient leading-tight tracking-tight mb-8">
                Crafting High-Performance <br /> Digital Experiences
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed max-w-2xl">
                <p>
                  Hey, I’m <span className="text-primary font-bold">Himanshu Yadav</span>.
                  I’m a Frontend Developer specializing in building scalable
                  and production-grade web applications using
                  <span className="text-foreground"> React</span> and
                  <span className="text-foreground"> Next.js</span>.
                </p>
                <p>
                  My focus is on bridging the gap between design and functionality,
                  ensuring every interaction is purposeful, fast, and accessible.
                  I thrive on solving complex frontend challenges with elegant,
                  maintainable code.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
              <StatCard icon={<FaRocket />} value="6+" label="Core Projects" delay={0.2} />
              <StatCard icon={<FaCode />} value="10+" label="Tools Used" delay={0.3} />
              <StatCard icon={<FaFire />} value="100%" label="Focused on UX" delay={0.4} />
            </div>

            {/* In-Section Navigation */}
            <div className="pt-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Explore More</h3>
              <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                <NavCard
                  href="/skills-tools"
                  icon={<FaLaptopCode className="text-cyan-500" />}
                  title="Skills & Tools"
                  colorClass="hover:shadow-cyan-500/10"
                />
                <NavCard
                  href="/projects"
                  icon={<FaBriefcase className="text-violet-500" />}
                  title="Work Archive"
                  colorClass="hover:shadow-violet-500/10"
                />
                <NavCard
                  href="/experience"
                  icon={<FaGraduationCap className="text-emerald-500" />}
                  title="My Journey"
                  colorClass="hover:shadow-emerald-500/10"
                />
              </div>
            </div>
          </div>

          {/* Right: Premium Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="lg:col-span-5 order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              {/* Image Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[40px] blur-2xl animate-pulse" />
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-glass-border shadow-2xl glass-panel">
                <Image
                  src="/about_3d_developer_illustration.png"
                  alt="Developer Workspace Illustration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Decorative floating shapes */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-bounce delay-1000" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
