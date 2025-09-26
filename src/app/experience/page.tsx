"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/ExperienceAndEducation";

export default function ExperiencePage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Experience & Education
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 
                       bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {exp.icon}
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {exp.title}
              </h2>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              {exp.description}
            </p>
            <span className="text-sm font-medium text-cyan-500">{exp.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
