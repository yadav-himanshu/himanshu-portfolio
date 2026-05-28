"use client";

import React, { useState, useEffect, useCallback } from "react";
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
import Logo from "@/components/Logo";

const NAV_LINKS = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "skills", label: "Skills", icon: <FaCode /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "showcase", label: "Showcase", icon: <FaProjectDiagram /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 10);
          const scrollPos = window.scrollY + 150;
          for (const link of NAV_LINKS) {
            const section = document.getElementById(link.id);
            if (section) {
              const { offsetTop, offsetHeight } = section;
              if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                setActiveSection(link.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Element;
      if (!target.closest("[data-mobile-menu]")) closeMenu();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen, closeMenu]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1100px] z-50 transition-all duration-300 rounded-2xl border ${
        scrolled
          ? "glass-panel py-2 shadow-lg"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <nav className="grid grid-cols-2 md:grid-cols-3 items-center px-6 w-full">
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/" aria-label="Himanshu — Home">
            <Logo textClassName="text-xl md:text-2xl" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-center space-x-1 font-bold items-center text-foreground">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-300 text-xs hover:bg-foreground/5 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-foreground/70"
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

        {/* CTA + Mobile toggle */}
        <div className="flex justify-end items-center gap-3">
          <a
            href="/ResumeHimanshu.pdf"
            download
            className="hidden md:inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 border border-primary/20 hover:border-primary/40 bg-primary/5 text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_15px_rgba(13,148,136,0.2)] cursor-pointer"
          >
            <FaFileDownload size={12} />
            Resume
          </a>

          <div className="md:hidden" data-mobile-menu>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                menuOpen
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-foreground/5"
              }`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-mobile-menu
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[110%] left-0 w-full glass-panel border border-glass-border rounded-2xl p-2 mt-2 shadow-2xl z-40 md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300 ${
                    activeSection === link.id
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
        )}
      </AnimatePresence>
    </header>
  );
}
