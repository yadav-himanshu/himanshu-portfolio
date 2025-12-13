"use client";

import Image from "next/image";
import { FaFileDownload, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-10 gap-10"
    >
      {/* Left Column: Profile + Social */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:w-1/3">
        {/* Profile Image */}
        <div
          className={`w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg
            transition-all duration-1000 ease-out
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        >
          <Image
            src="/profilePic.jpg"
            alt="Himanshu Yadav"
            width={176}
            height={176}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Social Media (Desktop) */}
        <div
          className={`hidden md:flex flex-col items-center md:items-start gap-3 mt-2 transition-all duration-1000 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h3 className="text-sm font-medium text-muted">Connect with me</h3>

          <div className="flex gap-4 text-muted">
            <a
              href="https://github.com/yadav-himanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover-accent"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://linkedin.com/in/himanshu-yadav-0706a1137"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover-accent"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://twitter.com/himanshu816y"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover-accent"
              aria-label="Twitter"
              title="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3 space-y-4">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold
            transition-opacity duration-1000 ease-out delay-200
            ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ color: "var(--text)" }}
        >
          Hi, I’m{" "}
          <span className="text-cyan-600 dark:text-cyan-400">Himanshu Yadav</span>
        </h1>

        <h2
          className={`text-lg sm:text-xl md:text-2xl lg:text-2xl
            transition-opacity duration-1000 ease-out delay-400
            ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ color: "var(--muted-2)" }}
        >
          Frontend Developer based in India
        </h2>

        <p
          className={`max-w-3xl text-sm md:text-base leading-relaxed
            transition-opacity duration-1000 ease-out delay-600
            ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ color: "var(--muted)" }}
        >
          Frontend Developer with 2 years of experience building responsive and
          scalable web applications using JavaScript, React, Next.js, Tailwind
          CSS, Node.js, Express, MongoDB, and MUI.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 mt-6 transition-opacity duration-1000 ease-out delay-800
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href="/Himanshu_Resume_Frontend_Developer.pdf"
            download
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500
                       text-white text-sm sm:text-base font-medium shadow-md
                       transform transition-transform duration-300 ease-in-out origin-center
                       hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <FaFileDownload size={18} /> Download Resume
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-sm sm:text-base font-medium
                       transform transition-all duration-300 ease-in-out origin-center
                       hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white
                       hover:scale-105 hover:shadow-lg flex items-center gap-2"
            style={{ border: "1px solid #22d3ee", color: "#22d3ee" }}
          >
            <FaEnvelope size={18} /> Contact Me
          </a>
        </div>

        {/* Social Media (Mobile) */}
        <div
          className={`flex gap-4 mt-4 md:hidden transition-all duration-1000 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ color: "var(--muted)" }}
        >
          <a
            href="https://github.com/yadav-himanshu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover-accent"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/himanshu-yadav-0706a1137"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover-accent"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          <a
            href="https://twitter.com/himanshu816y"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover-accent"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
