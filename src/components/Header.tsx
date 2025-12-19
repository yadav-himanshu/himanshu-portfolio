"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skills", label: "Skills", icon: <FaCode /> },
    { id: "ExperienceTimeline", label: "Experience", icon: <FaBriefcase /> },
    { id: "showcase", label: "Showcase", icon: <FaProjectDiagram /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  // Scroll spy + header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY + 150;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent border-transparent",
      ].join(" ")}
      style={
        scrolled
          ? {
              // replaces: bg-white/60 dark:bg-gray-900/60 + borders
              backgroundColor: "color-mix(in srgb, var(--bg) 60%, transparent)",
              borderColor: "var(--border-soft)",
            }
          : undefined
      }
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:opacity-90 transition-opacity"
        >
          &lt;Himanshu/&gt;
        </Link>

        {/* Desktop Nav */}
        <ul
          className="hidden md:flex space-x-8 font-medium items-center"
          style={{ color: "var(--text)" }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={[
                  "transition-colors",
                  activeSection === link.id ? "font-bold" : "",
                ].join(" ")}
                style={{
                  color: activeSection === link.id ? "#22d3ee" : "var(--text)", // cyan-400ish
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id)
                    e.currentTarget.style.color = "#3b82f6"; // blue-500
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    activeSection === link.id ? "#22d3ee" : "var(--text)";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            style={{ color: "var(--text)" }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 font-medium shadow-lg transition-all duration-300"
          style={{
            backgroundColor: "var(--card-2)",
            color: "var(--text)",
            borderColor: "var(--border-soft)",
          }}
        >
          <div
            className="flex flex-col divide-y"
            style={{ borderColor: "var(--border-soft)" }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={[
                  "flex items-center gap-2 py-3 transition-colors",
                  activeSection === link.id ? "font-bold" : "",
                ].join(" ")}
                style={{
                  color: activeSection === link.id ? "#22d3ee" : "var(--text)",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id)
                    e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    activeSection === link.id ? "#22d3ee" : "var(--text)";
                }}
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
