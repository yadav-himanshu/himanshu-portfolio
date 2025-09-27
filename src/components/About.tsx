"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section id="about" className="w-full max-w-[1200px] py-20 px-6 sm:px-12 mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left side: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hey! I’m{" "}
            <strong className="text-cyan-600 dark:text-cyan-400">
              Himanshu Yadav
            </strong>
            , a <strong>Frontend Developer</strong> passionate about building
            clean, fast, and responsive web interfaces. I enjoy working with{" "}
            <strong>React.js</strong> and <strong>Tailwind CSS</strong> to
            create modern and scalable user experiences.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            While my primary focus is frontend, I also have a working knowledge
            of <strong>Node.js</strong> and <strong>APIs</strong>, which helps
            me integrate the backend with the UI smoothly.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            My toolkit includes <strong>Git/GitHub</strong> for collaboration,
            <strong> VS Code</strong> for development, and deployment platforms
            like <strong>Vercel</strong> and <strong>Netlify</strong>. I love
            writing reusable components and continuously improving performance
            and accessibility.
          </p>
        </motion.div>

        {/* Right side: Fancy Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: loaded ? 1 : 0, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="grid gap-6"
        >
          {/* Skills & Tools */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/skills-tools"
              className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <FaLaptopCode className="text-2xl sm:text-3xl text-cyan-600 dark:text-cyan-400" />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Skills & Tools
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Explore my core tech stack & favorite tools.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Showcase */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <FaBriefcase className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Showcase
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Take a look at some of my favorite projects.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Experience & Education */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/experience"
              className="flex items-center gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <FaGraduationCap className="text-2xl sm:text-3xl text-green-600 dark:text-green-400" />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Experience & Education
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                  Learn about my journey and professional growth.
                </p>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
