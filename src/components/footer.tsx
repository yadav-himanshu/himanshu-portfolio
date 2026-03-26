"use client";

import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 py-10 relative z-10">
      <div className="pt-8 text-center border-t border-glass-border relative">
        {/* Name */}
        <h2 className="text-xl font-bold text-foreground tracking-tight">
          Himanshu Yadav
        </h2>

        {/* Contact Info */}
        <div className="mt-4 flex flex-col items-center space-y-2">
          {/* Email */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FaEnvelope size={16} />
            <a
              href="mailto:himanshuyadav7852@gmail.com"
              className="transition-colors hover:underline text-foreground hover:text-primary"
            >
              himanshuyadav7852@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FaPhone size={16} />
            <a
              href="tel:+917499506824"
              className="transition-colors hover:underline text-foreground hover:text-primary"
            >
              +91 74995 06824
            </a>
          </div>
        </div>

        {/* Divider & Lower Section */}
        <div className="mt-8 pt-8 border-t border-glass-border flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/yadav-himanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://twitter.com/himanshu816y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com/in/himanshu-yadav-0706a1137"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-all hover:text-primary hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row justify-between w-full items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Himanshu. All rights reserved.</p>
            <div className="flex items-center gap-1">
              Made with ❤️ using{" "}
              <a href="https://nextjs.org" className="text-primary hover:underline font-medium">Next.js</a> &{" "}
              <a href="https://tailwindcss.com" className="text-primary hover:underline font-medium">Tailwind CSS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
