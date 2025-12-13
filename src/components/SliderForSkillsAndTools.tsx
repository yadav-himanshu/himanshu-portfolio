"use client";

import React, { useEffect, useState } from "react";
import { skills, tools } from "@/app/data/toolsAndSkills";

export default function ToolsAndSkills() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section id="skill" className="w-full max-w-[1200px] py-20 px-6 sm:px-12 mx-auto">
      {/* Skills Slider */}
      <div>
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text)" }}>
          Skills
        </h3>

        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-6 is-sliding">
            {skills.concat(skills).map((s, i) => {
              const isDuplicate = i >= skills.length;
              return (
                <div
                  key={`skill-${i}`}
                  aria-hidden={isDuplicate}
                  className="min-w-[140px] md:min-w-[160px] flex-shrink-0 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--card-2)",
                    border: "1px solid var(--border-soft)",
                  }}
                >
                  <div className="text-4xl">{s.icon}</div>

                  <div
                    className="mt-3 text-sm text-center"
                    style={{ color: "var(--text)" }}
                  >
                    {s.label}
                  </div>

                  <p className="text-xs text-center mt-2" style={{ color: "var(--muted)" }}>
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
          className="px-4 py-2 rounded-lg text-white text-sm transition"
          style={{ backgroundColor: "#2563eb" }} // blue-600
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")} // blue-700
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          See All Skills
        </a>
      </div>

      {/* Tools Slider */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4" style={{ color: "var(--text)" }}>
          Tools
        </h3>

        <div className="relative overflow-hidden slider">
          <div className="slider-track flex gap-6 is-sliding-reverse">
            {tools.concat(tools).map((t, i) => (
              <div
                key={`tool-${i}`}
                className="min-w-[140px] md:min-w-[160px] flex-shrink-0 p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{
                  backgroundColor: "var(--card-2)",
                  border: "1px solid var(--border-soft)",
                }}
              >
                <div className="text-4xl">{t.icon}</div>

                <div className="mt-3 text-sm text-center" style={{ color: "var(--text)" }}>
                  {t.label}
                </div>

                <p className="text-xs text-center mt-2" style={{ color: "var(--muted)" }}>
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
          className="px-4 py-2 rounded-lg text-white text-sm transition"
          style={{ backgroundColor: "#16a34a" }} // green-600
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#15803d")} // green-700
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
        >
          See All Tools
        </a>
      </div>

      {/* Styles for continuous sliders (scoped) */}
      <style jsx>{`
        .slider {
          --slider-speed: 35s; /* lower = faster */
        }

        .slider-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          will-change: transform;
        }

        .slider-track > div {
          flex: 0 0 auto;
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

        /* UX: pause on hover */
        .slider:hover .is-sliding,
        .slider:hover .is-sliding-reverse {
          animation-play-state: paused;
        }

        .slider-track::-webkit-scrollbar {
          display: none;
        }
        .slider-track {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
