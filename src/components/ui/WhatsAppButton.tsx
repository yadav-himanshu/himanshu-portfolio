"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      href="https://wa.me/917499506824"
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-20 right-6 z-[9999]
        group flex items-center justify-center
        w-12 h-12 rounded-full
        shadow-[0_4px_20px_rgba(37,211,102,0.4)]
        bg-[#25D366] hover:bg-[#20ba5a] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)]
        overflow-hidden
        transition-all duration-300
        hover:w-44
        cursor-pointer
      "
    >
      {/* Pulsing glow background */}
      <span className="absolute -inset-0.5 rounded-full bg-[#25D366]/20 blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

      <FaWhatsapp size={20} className="text-white shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300" />

      <span
        className="
          text-xs font-black whitespace-nowrap text-white relative z-10
          opacity-0 max-w-0
          group-hover:ml-2
          group-hover:opacity-100
          group-hover:max-w-[140px]
          transition-all duration-300
          uppercase tracking-wider
        "
      >
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
