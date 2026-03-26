"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "Sending...", type: "" });

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
        setStatus({ message: "Message sent successfully!", type: "success" });
        form.reset();
      } else {
        setStatus({ message: "Failed to send message.", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "Error sending message.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    "px-5 py-3 rounded-xl outline-none transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] text-sm sm:text-base bg-glass border border-glass-border text-foreground backdrop-blur-md focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50";

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-gradient drop-shadow-sm pb-1"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground text-sm sm:text-base md:text-lg"
        >
          Have an opportunity, idea, or project to discuss? Let’s connect and
          explore how I can help.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
        >
          <div className="flex flex-col space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={inputBase}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputBase}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className={`${inputBase} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] bg-primary text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Inline status message */}
          {status.message && (
            <div
              className={`mt-3 flex items-center gap-2 text-sm sm:text-base md:text-lg transition-all duration-500 ${status.type === "success"
                ? "text-green-500"
                : status.type === "error"
                  ? "text-red-500"
                  : "text-muted-foreground"
                }`}
            >
              {status.type === "success" && <FaCheckCircle />}
              {status.type === "error" && <FaTimesCircle />}
              {status.message}
            </div>
          )}
        </motion.form>
      </div>

      {/* Decorative blurred circles (kept as accent visuals) */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-400/30 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
