"use client";

import { FaGithub } from "react-icons/fa";
import { Globe } from "lucide-react";
import { projects } from "../data/projectData";
import { techIcons } from "../data/techIcons";

export default function ProjectsPage() {
  return (
    <section className="py-10 px-6 sm:px-10 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        All Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md 
              transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-blue-400/60 dark:hover:border-cyan-400/60"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-cyan-400 mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-300 transition-colors">
              {proj.title}
            </h3>
            <p className="text-gray-700 text-base dark:text-gray-300 mb-4 leading-relaxed">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {proj.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs font-medium shadow-sm 
                    transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-cyan-800"
                >
                  {techIcons[tech] || <Globe className="w-4 h-4" />}
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-900 dark:text-gray-100 
                    hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
              )}
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-900 dark:text-gray-100 
                    hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  <Globe className="w-5 h-5" /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
