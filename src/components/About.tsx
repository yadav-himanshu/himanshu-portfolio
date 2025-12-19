"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section id="about" className="w-full max-w-[1200px] p-6 sm:px-12 mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left side: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: loaded ? 1 : 0, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            About Me
          </h2>

          <p
            className="text-sm md:text-base leading-relaxed mb-4"
            style={{ color: "var(--muted-2)" }}
          >
            Hey! I’m{" "}
            <strong className="text-cyan-600 dark:text-cyan-400">
              Himanshu Yadav
            </strong>
            , a <strong>Frontend Developer</strong> focused on building clean,
            performant, and production-ready web applications. I primarily work
            with <strong>React</strong> and <strong>Next.js</strong>, paying
            close attention to UI structure, performance, and real-world
            usability.
          </p>

          <p
            className="text-sm md:text-base leading-relaxed mb-4"
            style={{ color: "var(--muted-2)" }}
          >
            Through hands-on projects, I’ve worked extensively with the
            <strong> Next.js App Router</strong>, implementing features like
            server-side rendering, dynamic routing, SEO optimization, and
            client–server separation. I enjoy designing interfaces that feel
            intuitive while remaining scalable and maintainable.
          </p>

          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: "var(--muted-2)" }}
          >
            My workflow includes <strong>Tailwind CSS</strong> and
            component-based design systems, along with tools like{" "}
            <strong>Git/GitHub</strong> for collaboration and{" "}
            <strong>Vercel</strong> for deployment. I also have experience
            integrating APIs and services like <strong>Firebase</strong>,
            handling real production issues, and continuously improving
            performance and accessibility.
          </p>
        </motion.div>

        {/* Right side: Cards */}
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
              className="flex items-center gap-4 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer surface-2"
            >
              <FaLaptopCode className="text-2xl sm:text-3xl text-cyan-600 dark:text-cyan-400" />
              <div>
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  Skills & Tools
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted">
                  Explore my core tech stack & favorite tools.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Showcase */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/projects"
              className="flex items-center gap-4 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer surface-2"
            >
              <FaBriefcase className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400" />
              <div>
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  Showcase
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted">
                  Take a look at some of my favorite projects.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Experience & Education */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/experience"
              className="flex items-center gap-4 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer surface-2"
            >
              <FaGraduationCap className="text-2xl sm:text-3xl text-green-600 dark:text-green-400" />
              <div>
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  Experience & Education
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted">
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
