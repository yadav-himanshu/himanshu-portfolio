"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full py-20 px-6 sm:px-10 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-cyan-400 mb-4">
          Get in Touch
        </h2>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12">
          Have a project idea or just want to say hi? Fill out the form and I’ll
          get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none 
                         transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg text-sm sm:text-base md:text-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none 
                         transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg text-sm sm:text-base md:text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none 
                         transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg text-sm sm:text-base md:text-lg"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 sm:py-3 rounded-lg 
                       bg-gradient-to-r from-cyan-500 to-blue-600 
                       text-white font-semibold 
                       shadow-md hover:from-cyan-600 hover:to-blue-700 
                       hover:scale-[1.02] hover:shadow-lg 
                       transition-all duration-300 
                       text-sm sm:text-base md:text-lg
                       disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-400/30 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
}
