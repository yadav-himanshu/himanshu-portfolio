"use client";

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
        <div className="pt-8 text-center border-t dark:border-gray-700 relative">

                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Himanshu Yadav
                </h2>

                {/* Contact Info */}
                <div className="mt-2 flex flex-col items-center space-y-2 text-gray-700 dark:text-gray-300">
                    {/* Email */}
                    <div className="flex items-center space-x-2">
                    <FaEnvelope size={16} />
                    <a
                        href="mailto:himanshuyadav7852@gmail.com"
                        className="hover:underline hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        himanshuyadav7852@gmail.com
                    </a>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                    <FaPhone size={16} />
                    <a
                        href="tel:+917499506824"
                        className="hover:underline hover:text-green-600 dark:hover:text-green-400"
                    >
                        +91 74995 06824
                    </a>
                    </div>
                </div>

                {/* Divider row */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between border-t pt-4 dark:border-gray-700 gap-4">
                    {/* Left side */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Himanshu. All rights reserved.
                    </p>

                    {/* Right side social icons */}
                    <div className="flex space-x-4 text-gray-600 dark:text-gray-400">
                    <a
                        href="https://github.com/yadav-himanshu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://twitter.com/himanshu816y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-500 transition-colors"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/himanshu-yadav-0706a1137"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    </div>
                </div>

                {/* Bottom note */}
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                    Made with ❤️ using{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Next.js
                    </span>{" "}
                    &{" "}
                    <span className="font-semibold text-teal-600 dark:text-teal-400">
                    Tailwind CSS
                    </span>
                </p>

                {/* Back to Top button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="absolute right-1 bottom-1 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-md hover:scale-110 transition-transform"
                    aria-label="Back to top"
                >
                    <FaArrowUp size={18} />
                </button>
        </div>
    </footer>
  );
}
