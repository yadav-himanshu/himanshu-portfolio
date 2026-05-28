"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaGithub, FaLinkedin } from "react-icons/fa";
import { Send, Mail, User, MessageSquare, ArrowUpRight } from "lucide-react";

const SOCIALS = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/yadav-himanshu" },
  { icon: FaLinkedin, label: "LinkedIn",  href: "https://linkedin.com/in/yadav-himanshu" },
  { icon: Mail,       label: "Email",     href: "mailto:himanshu@example.com" },
];

const INFO = [
  { label: "Based in",      value: "India 🇮🇳" },
  { label: "Available for", value: "Freelance & Full-time" },
  { label: "Response time", value: "Within 24 hours" },
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | "" }>({ message: "", type: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

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
        setStatus({ message: "Message sent! I'll get back to you soon.", type: "success" });
        form.reset();
      } else {
        setStatus({ message: "Failed to send. Please try again.", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setStatus({ message: "Something went wrong. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = () =>
    `w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors duration-200 py-2`;

  const wrapClass = (name: string) =>
    `flex items-start gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
      focused === name
        ? "border-primary/50 bg-primary/5 shadow-[0_0_0_3px_rgba(20,184,166,0.08)]"
        : "border-glass-border bg-foreground/[0.02] hover:border-primary/20 hover:bg-foreground/[0.04]"
    }`;

  return (
    <section id="contact" className="relative w-full py-20 px-6 sm:px-12 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">

        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-glass-border text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Get in Touch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-black text-gradient tracking-tight text-center mb-4"
        >
          Let&apos;s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-xs sm:text-sm text-muted-foreground text-center max-w-lg mx-auto leading-relaxed mb-12"
        >
          Have a project in mind, an idea to explore, or just want to say hi? My inbox is always open.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* LEFT — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Quick info */}
            <div className="p-6 rounded-2xl glass-panel border border-glass-border space-y-4">
              <h3 className="text-xs font-black text-muted-foreground/50 uppercase tracking-widest mb-3">Quick Info</h3>
              {INFO.map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2.5 border-b border-glass-border/40 last:border-0">
                  <span className="text-[11px] font-bold text-muted-foreground">{label}</span>
                  <span className="text-[11px] font-black text-foreground">{value}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="space-y-2">
              <h3 className="text-xs font-black text-muted-foreground/50 uppercase tracking-widest mb-3">Find me on</h3>
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-4 py-3 rounded-xl glass-panel border border-glass-border hover:border-primary/25 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors duration-300">{label}</span>
                  </div>
                  <ArrowUpRight size={12} className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className={wrapClass("name")}>
                <User size={15} className={`mt-2 shrink-0 transition-colors duration-200 ${focused === "name" ? "text-primary" : "text-muted-foreground/40"}`} />
                <input
                  type="text" name="name" placeholder="Your Name" required
                  className={fieldClass()}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Email */}
              <div className={wrapClass("email")}>
                <Mail size={15} className={`mt-2 shrink-0 transition-colors duration-200 ${focused === "email" ? "text-primary" : "text-muted-foreground/40"}`} />
                <input
                  type="email" name="email" placeholder="Your Email" required
                  className={fieldClass()}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message */}
              <div className={wrapClass("message")}>
                <MessageSquare size={15} className={`mt-2.5 shrink-0 transition-colors duration-200 ${focused === "message" ? "text-primary" : "text-muted-foreground/40"}`} />
                <textarea
                  name="message" placeholder="Tell me about your project or idea…" rows={6} required
                  className={`${fieldClass()} resize-none`}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-black bg-primary text-primary-foreground hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </>
                )}
              </button>

              {/* Status */}
              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                    className={`flex items-center gap-2 text-xs font-bold px-4 py-3 rounded-xl border ${
                      status.type === "success"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                        : "bg-red-500/10 border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? <FaCheckCircle size={12} /> : <FaTimesCircle size={12} />}
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
