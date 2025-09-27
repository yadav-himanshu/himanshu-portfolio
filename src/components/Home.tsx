"use client";
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
        <img
          src="/profilePic.jpg"
          alt="Himanshu Yadav"
          className={`w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg 
            transition-all duration-1000 ease-out 
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
        />

        {/* Social Media */}
        <div
          className={`hidden md:flex flex-col items-center md:items-start gap-3 mt-2 transition-all duration-1000 ease-out 
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h3 className="text-gray-400 dark:text-gray-500 text-sm font-medium">Connect with me</h3>
          <div className="flex gap-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Name, Subtitle, Summary, Buttons */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3 space-y-4">
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
          className={`max-w-3xl text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed 
            transition-opacity duration-1000 ease-out delay-600 
            ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          Frontend Developer with 2 years of experience building responsive and
          scalable web applications using JavaScript, React, Next.js, Tailwind
          CSS, Node.js, Express, MongoDB, and MUI.
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

        {/* Social Media for Mobile */}
        <div
          className={`flex gap-4 mt-4 md:hidden transition-all duration-1000 ease-out
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="text-gray-500 hover:text-cyan-500 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
