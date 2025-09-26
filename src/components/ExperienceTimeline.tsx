"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaGraduationCap, FaReact, FaSchool } from "react-icons/fa"; // example icons

// ------------------------
// Type Definitions
// ------------------------
export interface Experience {
  title: string;
  company: string;
  description: string;
  date: string;
  icon: ReactNode;
  side: "left" | "right";
}

interface TimelineCardProps {
  exp: Experience;
  mobile?: boolean;
}

// ------------------------
// Experiences Array
// ------------------------
export const experiences: Experience[] = [
  {
        side: "left",
        title: "Frontend Developer",
        company: "PureCode AI",
        description:
          "Working on diverse projects such as e-commerce platforms, application UIs, and marketing UIs. Building responsive and dynamic web pages using HTML, CSS, JavaScript, React, Tailwind, and MUI. Collaborating with teams to deliver scalable solutions.",
        icon: <FaReact className="text-cyan-400 text-xl" />,
        date: "Oct 2023 – Present",
      },
      {
        side: "right",
        title: "Bachelor of Technology in Computer Science",
        company: "Pranveer Singh Institute of Technology, Kanpur (AKTU)",
        description:
          "Completed B.Tech in Computer Science with a CGPA of 7.16. Focused on software development, algorithms, and full-stack web technologies.",
        icon: <FaGraduationCap className="text-purple-400 text-xl" />,
        date: "2019 – 2022",
      },
      {
        side: "left",
        title: "Diploma in Computer Science",
        company: "Board of Technical Education, Uttar Pradesh (BTEUP)",
        description:
          "Earned Diploma in Computer Science with 72.11%. Gained solid foundation in programming, databases, and computer networks.",
        icon: <FaGraduationCap className="text-pink-400 text-xl" />,
        date: "2016 – 2019",
      },
      {
        side: "right",
        title: "Intermediate (PCM)",
        company: "Uttar Pradesh State Board (UP Board)",
        description:
          "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Achieved 78%.",
        icon: <FaSchool className="text-green-400 text-xl" />,
        date: "2014 – 2016",
      },
      {
        side: "left",
        title: "High School (Matriculation)",
        company: "Uttar Pradesh State Board (UP Board)",
        description:
          "Completed matriculation with strong academic performance and achieved 80.33%.",
        icon: <FaSchool className="text-yellow-400 text-xl" />,
        date: "2012 – 2014",
      },
];

// ------------------------
// TimelineCard Component
// ------------------------
function TimelineCard({ exp, mobile = false }: TimelineCardProps) {
  return (
    <div
      className={`relative p-5 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 bg-transparent ${
        mobile ? "text-left" : ""
      }`}
    >
      <h3 className="text-lg font-semibold text-cyan-400">{exp.title}</h3>
      <p className="text-sm text-gray-300 mb-2">{exp.company}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
      <span className="block mt-3 text-xs text-gray-500">{exp.date}</span>
    </div>
  );
}

// ------------------------
// ExperienceTimeline Component
// ------------------------
export default function ExperienceTimeline() {
  return (
    <div className="w-full relative py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold mb-12"
        >
          Work Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 w-1 bg-cyan-500 h-full md:hidden z-0" />
          <div className="absolute left-1/2 top-0 w-1 bg-cyan-500 h-full -translate-x-1/2 hidden md:block z-0" />

          {experiences.map((exp: Experience, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: exp.side === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-[40px_1fr] md:grid md:grid-cols-[1fr_80px_1fr] items-start gap-4 mb-12 relative z-10"
            >
              {/* LEFT card (desktop only) */}
              <div className="hidden md:flex md:col-start-1 md:col-end-2 md:justify-end md:pr-8 md:text-right">
                {exp.side === "left" ? <TimelineCard exp={exp} /> : <div />}
              </div>

              {/* ICON column */}
              <div className="col-start-1 md:col-start-2 flex justify-center">
                <div className="flex flex-col items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 border-2 border-cyan-500 transform transition-transform duration-200 z-20">
                    {exp.icon}
                  </span>
                </div>
              </div>

              {/* RIGHT card (desktop only) */}
              <div className="hidden md:flex md:col-start-3 md:col-end-4 md:justify-start md:pl-8 md:text-left">
                {exp.side === "right" ? <TimelineCard exp={exp} /> : <div />}
              </div>

              {/* MOBILE card */}
              <div className="col-start-2 md:hidden pl-2">
                <TimelineCard exp={exp} mobile />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
