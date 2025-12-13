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
    <footer className="px-6 py-8">
      <div
        className="pt-8 text-center border-t relative"
        style={{ borderColor: "var(--border-soft)" }}
      >
        {/* Name */}
        <h2 className="text-lg font-semibold" style={{ color: "var(--text)" }}>
          Himanshu Yadav
        </h2>

        {/* Contact Info */}
        <div className="mt-2 flex flex-col items-center space-y-2">
          {/* Email */}
          <div className="flex items-center space-x-2" style={{ color: "var(--muted-2)" }}>
            <FaEnvelope size={16} />
            <a
              href="mailto:himanshuyadav7852@gmail.com"
              className="transition-colors hover:underline"
              style={{ color: "var(--link)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")} // blue-600
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--link)")}
            >
              himanshuyadav7852@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2" style={{ color: "var(--muted-2)" }}>
            <FaPhone size={16} />
            <a
              href="tel:+917499506824"
              className="transition-colors hover:underline"
              style={{ color: "var(--link)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#16a34a")} // green-600
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--link)")}
            >
              +91 74995 06824
            </a>
          </div>
        </div>

        {/* Divider row */}
        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t pt-4 gap-4"
          style={{ borderColor: "var(--border-soft)" }}
        >
          {/* Left */}
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Himanshu. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4" style={{ color: "var(--muted)" }}>
            <a
              href="https://github.com/yadav-himanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              aria-label="GitHub"
              title="GitHub"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://twitter.com/himanshu816y"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              aria-label="Twitter"
              title="Twitter"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0ea5e9")} // sky-500
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <FaTwitter size={20} />
            </a>

            <a
              href="https://linkedin.com/in/himanshu-yadav-0706a1137"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#2563eb")} // blue-600
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
          Made with ❤️ using{" "}
          <span className="font-semibold" style={{ color: "#2563eb" }}>
            Next.js
          </span>{" "}
          &{" "}
          <span className="font-semibold" style={{ color: "#0d9488" }}>
            Tailwind CSS
          </span>
        </p>

        {/* Back to Top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-1 bottom-1 p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          style={{
            backgroundColor: "var(--card-2)",
            color: "var(--text)",
            border: "1px solid var(--border-soft)",
          }}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
