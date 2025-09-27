"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// import ThemeToggle from "@/components/ThemeToggle";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes, FaCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode/> },
    { id: "ExperienceTimeline", label: "Experience", icon: <FaBriefcase /> }, 
    { id: "showcase", label: "Showcase", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  // Scroll spy + header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 150; // offset to highlight a bit early
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu on click
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-gray-300/40 dark:border-gray-700/40 bg-white/60 dark:bg-gray-900/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/#home"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:opacity-90 transition-opacity"
        >
          &lt;Himanshu/&gt;
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-900 dark:text-gray-100 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`hover:text-blue-500 transition-colors ${
                  activeSection === link.id ? "text-cyan-500 font-bold" : ""
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile & Theme Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 dark:text-gray-100 focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Theme Toggle */}
        {/* <div className="hidden md:flex">
          <ThemeToggle />
        </div> */}
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700 px-6 py-4 font-medium text-gray-900 dark:text-gray-100 shadow-lg transition-all duration-300">
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`flex items-center gap-2 py-3 hover:text-blue-500 transition-colors ${
                  activeSection === link.id ? "text-cyan-500 font-bold" : ""
                }`}
              >
                {link.icon} {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
