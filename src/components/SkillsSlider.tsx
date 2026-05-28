import React from "react";
import { skills, tools, type Skill } from "@/data/skills";
import { getIcon } from "@/lib/iconMap";

function SliderCard({ item }: { item: Skill }) {
  return (
    <div
      className="min-w-[150px] md:min-w-[180px] flex-shrink-0 p-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-300 hover:duration-200 glass-panel hover:glass-panel-hover hover:scale-[1.04] hover:-translate-y-1 hover:border-primary/25 border border-glass-border shadow-md group relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div
        className={`text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10 ${item.iconColor}`}
      >
        {getIcon(item.iconKey)}
      </div>
      <div
        className="text-sm font-bold text-foreground relative z-10 text-center transition-transform duration-300 group-hover:translate-y-[-2px]"
      >
        {item.label}
      </div>
    </div>
  );
}

export default function SkillsSlider() {
  const skillsRow1 = skills.slice(0, Math.ceil(skills.length / 2));
  const skillsRow2 = skills.slice(Math.ceil(skills.length / 2));
  const toolsRow1 = tools.slice(0, Math.ceil(tools.length / 2));
  const toolsRow2 = tools.slice(Math.ceil(tools.length / 2));

  return (
    <section id="skills" className="w-full max-w-[1400px] py-24 px-6 sm:px-12 mx-auto overflow-hidden">
      {/* Skills */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gradient tracking-tight">Expertise</h2>
          <a href="/skills" className="text-sm font-bold text-primary hover:underline transition-all">
            View All Details →
          </a>
        </div>
        <div className="relative overflow-hidden slider mb-8">
          <div className="slider-track flex gap-8 is-sliding">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((s, i) => (
              <SliderCard key={`skill-r1-${i}`} item={s} />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-8 is-sliding-reverse">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((s, i) => (
              <SliderCard key={`skill-r2-${i}`} item={s} />
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
      <div>
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-gradient tracking-tight">Modern Toolbox</h2>
          <a href="/skills" className="text-sm font-bold text-secondary hover:underline transition-all">
            View All Tech →
          </a>
        </div>
        <div className="relative overflow-hidden slider mb-8">
          <div className="slider-track flex gap-8 is-sliding">
            {[...toolsRow1, ...toolsRow1, ...toolsRow1].map((t, i) => (
              <SliderCard key={`tool-r1-${i}`} item={t} />
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-8 is-sliding-reverse">
            {[...toolsRow2, ...toolsRow2, ...toolsRow2].map((t, i) => (
              <SliderCard key={`tool-r2-${i}`} item={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
