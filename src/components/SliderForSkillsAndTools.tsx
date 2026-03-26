"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skills, tools } from "@/data/toolsAndSkills";

const SliderCard = ({ item, index }: { item: any; index: number }) => {
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="min-w-[150px] md:min-w-[180px] flex-shrink-0 p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 glass-panel hover:glass-panel-hover border border-glass-border shadow-md group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div style={{ transform: "translateZ(30px)" }} className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10">
        {item.icon}
      </div>
      <div style={{ transform: "translateZ(50px)" }} className="text-sm font-bold text-foreground relative z-10">
        {item.label}
      </div>
    </motion.div>
  );
};

export default function ToolsAndSkills() {
  const skillsRow1 = skills.slice(0, Math.ceil(skills.length / 2));
  const skillsRow2 = skills.slice(Math.ceil(skills.length / 2));

  const toolsRow1 = tools.slice(0, Math.ceil(tools.length / 2));
  const toolsRow2 = tools.slice(Math.ceil(tools.length / 2));

  return (
    <section id="skill" className="w-full max-w-[1400px] py-24 px-6 sm:px-12 mx-auto overflow-hidden">

      {/* Skills Section */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl md:text-5xl font-black text-gradient tracking-tight">Expertise</h3>
          <a href="/skills-tools" className="text-sm font-bold text-primary hover:underline transition-all">
            View All Details →
          </a>
        </div>

        {/* Outer Slider Row 1 (Left) */}
        <div className="relative overflow-hidden slider mb-8">
          <div className="slider-track flex gap-8 is-sliding">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((s, i) => (
              <SliderCard key={`skill-r1-${i}`} item={s} index={i} />
            ))}
          </div>
        </div>

        {/* Outer Slider Row 2 (Right) */}
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-8 is-sliding-reverse">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((s, i) => (
              <SliderCard key={`skill-r2-${i}`} item={s} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl md:text-5xl font-black text-gradient tracking-tight">Modern Toolbox</h3>
          <a href="/skills-tools" className="text-sm font-bold text-secondary hover:underline transition-all">
            View All Tech →
          </a>
        </div>

        {/* Outer Slider Row 1 (Left) */}
        <div className="relative overflow-hidden slider mb-8">
          <div className="slider-track flex gap-8 is-sliding">
            {[...toolsRow1, ...toolsRow1, ...toolsRow1].map((t, i) => (
              <SliderCard key={`tool-r1-${i}`} item={t} index={i} />
            ))}
          </div>
        </div>

        {/* Outer Slider Row 2 (Right) */}
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-8 is-sliding-reverse">
            {[...toolsRow2, ...toolsRow2, ...toolsRow2].map((t, i) => (
              <SliderCard key={`tool-r2-${i}`} item={t} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Global Slider Styles */}
      <style jsx>{`
        .slider {
          --slider-speed: 45s; 
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .slider-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          will-change: transform;
        }

        .is-sliding {
          animation: moveSlider var(--slider-speed) linear infinite;
        }

        .is-sliding-reverse {
          animation: moveSliderReverse var(--slider-speed) linear infinite;
        }

        @keyframes moveSlider {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes moveSliderReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        .slider:hover .is-sliding,
        .slider:hover .is-sliding-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
