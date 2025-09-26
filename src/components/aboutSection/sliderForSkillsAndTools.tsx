"use client";

import React, { useEffect, useState } from "react";
import { skills, tools } from "@/app/data/toolsAndSkills";

export default function ToolsAndSkills() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>

      {/* Skills Slider */}

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Skills
        </h3>
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-6 is-sliding">
            {skills.concat(skills).map((s, i) => {
              const isDuplicate = i >= skills.length; // hide duplicates from screen readers
              return (
                <div
                  key={`skill-${i}`}
                  aria-hidden={isDuplicate}
                  className="min-w-[140px] md:min-w-[160px] flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105"
                >
                  <div className="text-4xl">{s.icon}</div>
                  <div className="mt-3 text-sm text-center text-gray-800 dark:text-gray-200">
                    {s.label}
                  </div>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <a
          href="/skills-tools"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
        >
          See All Skills
        </a>
      </div>

      {/* Tools Slider */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Tools
        </h3>
        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-6 is-sliding-reverse">
            {tools.concat(tools).map((t, i) => (
              <div
                key={`tool-${i}`}
                className="min-w-[140px] md:min-w-[160px] flex-shrink-0 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105"
              >
                <div className="text-4xl">{t.icon}</div>
                <div className="mt-3 text-sm text-center text-gray-800 dark:text-gray-200">
                  {t.label}
                </div>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <a
          href="/skills-tools"
          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
        >
          See All Tools
        </a>
      </div>

      {/* Styles for continuous sliders (scoped) */}

      {/* Tools slider: add same .slider wrapper around the track as above */}

      <style jsx>{`
        /* put the speed on the wrapper to avoid scoping :root issues */
        .slider {
          --slider-speed: 35s; /* lower = faster */
        }

        .slider {
          --slider-speed: 35s; /* ⬅️ slower (increase as needed) */
        }

        .is-sliding {
          animation: moveSlider var(--slider-speed) linear infinite;
        }

        .is-sliding-reverse {
          animation: moveSliderReverse var(--slider-speed) linear infinite;
        }

        @keyframes moveSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes moveSliderReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .slider-track {
          display: flex;
          gap: 1.25rem;
          width: max-content; /* ensure width grows to fit children */
          will-change: transform;
        }

        /* make sure items never shrink so the layout stays predictable */
        .slider-track > div {
          flex: 0 0 auto;
        }

        /* animation class (avoid clashing with Tailwind's animate- names) */
        .is-sliding {
          animation: moveSlider var(--slider-speed) linear infinite;
        }

        /* loop by moving exactly half the full duplicated track */
        @keyframes moveSlider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* UX nicety: pause on hover */
        .slider:hover .is-sliding {
          animation-play-state: paused;
        }

        /* hide any accidental scrollbar (optional) */
        .slider-track::-webkit-scrollbar {
          display: none;
        }
        .slider-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
