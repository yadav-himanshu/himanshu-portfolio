"use client";
import { FaFileDownload, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function HomeSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Profile Image */}
        <img
          src="/profilePic.jpg"
          alt="Himanshu Yadav"
          className={`w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg 
            transition-all duration-1000 ease-out 
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        />

        {/* Name */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-cyan-400 
            transition-opacity duration-1000 ease-out delay-200 
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          Hi, I’m Himanshu Yadav
        </h1>

        {/* Subtitle */}
        <h2
          className={`text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-700 dark:text-gray-300 
            transition-opacity duration-1000 ease-out delay-400 
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          Frontend Developer based in India
        </h2>

        {/* Quick Summary */}
        <p
          className={`max-w-2xl text-sm sm:text-base md:text-lg
             lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed 
            transition-opacity duration-1000 ease-out delay-600 
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          I’m a detail-oriented Frontend Developer skilled in building responsive,
          reusable, and user-centric web applications using React.js and Tailwind
          CSS. I focus on creating optimized, scalable UI components for smooth
          user experiences.
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mt-6 transition-opacity duration-1000 ease-out delay-800 
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          {/* Resume Button */}
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

          {/* Contact Button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-cyan-500 text-cyan-500 
                       dark:border-cyan-400 dark:text-cyan-400 text-sm sm:text-base font-medium 
                       transform transition-all duration-300 ease-in-out origin-center
                       hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white 
                       hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            <FaEnvelope size={18} /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
