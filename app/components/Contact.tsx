"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, CheckCircle, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import MotionSection from "./MotionSection";

type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<FormData>;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (
    ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1200);
    }
  };

  return (
    <MotionSection id="contact" className="relative py-28 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-pink-400/80">
            Reach Out
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Building something? Hiring? Or just curious. I read every message.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl p-7 space-y-5"
          >
            <h3 className="text-lg font-semibold text-white">Direct channels</h3>
            {[
              { icon: Mail, label: "sainirmit@gmail.com", href: "mailto:sainirmit@gmail.com" },
              { icon: Linkedin, label: "linkedin.com/in/sainirmit", href: "https://www.linkedin.com/in/sainirmit" },
              { icon: Github, label: "github.com/Sainirmit", href: "https://github.com/Sainirmit" },
            ].map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                <div className="rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-500/30 p-2 ring-1 ring-white/10">
                  <c.icon className="w-4 h-4 text-violet-200" />
                </div>
                <span className="text-sm text-white/85">{c.label}</span>
              </Link>
            ))}
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center"
            >
              <CheckCircle className="w-14 h-14 text-emerald-400 mb-4 animate-glow rounded-full" />
              <h3 className="text-xl font-bold text-white">Message sent</h3>
              <p className="mt-2 text-white/60">Will get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 space-y-4"
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/50 ${
                      errors[field] ? "border-red-500/50" : "border-white/10"
                    }`}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-xs text-red-400">{errors[field]}</p>
                  )}
                </div>
              ))}
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none transition focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/50 ${
                    errors.message ? "border-red-500/50" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.4)] transition hover:shadow-[0_12px_40px_rgba(139,92,246,0.6)] disabled:opacity-60"
              >
                {submitting ? (
                  "Sending…"
                ) : (
                  <>
                    Send message
                    <Send className="w-4 h-4 transition group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </MotionSection>
  );
}
