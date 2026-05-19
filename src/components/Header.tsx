"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
  FaFileDownload,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "skill", label: "Skills", icon: <FaCode /> },
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

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-2xl border ${scrolled ? "glass-panel py-2 shadow-lg" : "bg-transparent border-transparent py-4"
        }`}
    >
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center px-6 w-full">
        {/* Logo (Left Column) */}
        <div className="flex justify-start">
          <Link
            href="/"
            className="text-xl md:text-2xl font-black text-gradient hover:opacity-90 transition-opacity tracking-tighter"
          >
            &lt;Himanshu/&gt;
          </Link>
        </div>

        {/* Desktop Nav Links (Center Column) */}
        <ul className="hidden md:flex justify-center space-x-1 font-bold items-center text-foreground">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-300 text-xs hover:bg-foreground/5 ${activeSection === link.id ? "text-primary" : "text-foreground/70"
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button + Mobile Menu Trigger (Right Column) */}
        <div className="flex justify-end items-center gap-3">
          <a
            href="/ResumeHimanshu.pdf"
            download
            className="hidden md:inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 border border-primary/20 hover:border-primary/40 bg-primary/5 text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(13,148,136,0.2)] cursor-pointer"
          >
            <FaFileDownload size={12} />
            Resume
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${menuOpen ? "bg-primary text-white" : "text-foreground hover:bg-foreground/5"
                }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-background/40 backdrop-blur-sm z-[-1] md:hidden"
            />

            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[110%] left-0 w-full glass-panel border border-glass-border rounded-2xl p-2 mt-2 shadow-2xl z-40 md:hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleClick(link.id)}
                    className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300 ${activeSection === link.id
                        ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                        : "text-foreground/70 hover:bg-foreground/5 border border-transparent"
                      }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-xs font-bold">{link.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
