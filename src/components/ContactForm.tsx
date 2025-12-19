"use client";

import { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });

  useEffect(() => {
    setLoaded(true);
  }, []);

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
    "px-4 py-3 rounded-lg outline-none transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-lg text-sm sm:text-base md:text-lg";

  return (
    <section
      id="contact"
      className="relative w-full py-20 px-6 sm:px-10 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{ color: "#22d3ee" }} // cyan accent stays consistent across themes
        >
          Let’s Connect
        </h2>

        <p
          className={`text-sm sm:text-base md:text-lg mb-12 transition-all duration-1000 ease-out delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ color: "var(--muted)" }}
        >
          Have an opportunity, idea, or project to discuss? Let’s connect and
          explore how I can help.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-6 text-left transition-all duration-1000 ease-out delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={inputBase}
              style={{
                backgroundColor: "var(--card-2)",
                color: "var(--text)",
                border: "1px solid var(--border-soft)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={inputBase}
              style={{
                backgroundColor: "var(--card-2)",
                color: "var(--text)",
                border: "1px solid var(--border-soft)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
              }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className={inputBase}
              style={{
                backgroundColor: "var(--card-2)",
                color: "var(--text)",
                border: "1px solid var(--border-soft)",
                boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
    w-full
    py-2.5 sm:py-3
    rounded-lg
    text-sm sm:text-base md:text-lg
    font-medium
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:-translate-y-0.5
  "
            style={{
              backgroundColor: "var(--text)",
              color: "var(--bg)",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Inline status message */}
          {status.message && (
            <div
              className="mt-3 flex items-center gap-2 text-sm sm:text-base md:text-lg transition-all duration-500"
              style={{
                color:
                  status.type === "success"
                    ? "#22c55e" // green-500
                    : status.type === "error"
                      ? "#ef4444" // red-500
                      : "var(--muted)",
              }}
            >
              {status.type === "success" && <FaCheckCircle />}
              {status.type === "error" && <FaTimesCircle />}
              {status.message}
            </div>
          )}
        </form>
      </div>

      {/* Decorative blurred circles (kept as accent visuals) */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-400/30 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
