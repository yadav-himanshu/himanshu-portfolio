"use client";

import React from "react";
import { skills, tools } from "../data/toolsAndSkills";

export default function SkillsToolsPage() {

  return (
    <div className="w-full max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        All Skills & Tools
      </h1>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <div
              key={`skill-${i}`}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-4xl">{s.icon}</div>
              <div className="mt-3 text-sm text-gray-800 dark:text-gray-200 font-medium">
                {s.label}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Tools
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((t, i) => (
            <div
              key={`tool-${i}`}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-sm flex flex-col items-center text-center"
            >
              <div className="text-4xl">{t.icon}</div>
              <div className="mt-3 text-sm text-gray-800 dark:text-gray-200 font-medium">
                {t.label}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                {t.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
