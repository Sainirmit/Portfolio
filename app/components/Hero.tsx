"use client";

import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "iOS Engineer",
  "AI/ML Builder",
  "Product Thinker",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-36 pb-28 overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="block text-white/95">Hi, I&apos;m Sai</span>
              <span className="block gradient-text animate-aurora">
                Nirmit.
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-white/70 h-8">
              <motion.span
                key={idx}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {roles[idx]}
              </motion.span>
            </div>

            <p className="max-w-xl text-white/60 leading-relaxed">
              I build AI-native products end to end — from SwiftUI mobile apps
              and React Native experiences to scalable Node/Django backends,
              RAG pipelines, and LLM agents.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(139,92,246,0.4)] transition hover:shadow-[0_12px_40px_rgba(139,92,246,0.6)]"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
              >
                View work
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-4">
              {[
                { icon: Github, href: "https://github.com/Sainirmit", label: "GitHub" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/sainirmit",
                  label: "LinkedIn",
                },
                { icon: Mail, href: "mailto:sainirmit@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-full glass p-2.5 text-white/70 transition hover:scale-110 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 blur-2xl opacity-50 animate-blob" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-pink-500 via-violet-500 to-indigo-500 animate-aurora p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-[#06060c]">
                  <Image
                    src="/Profile.jpg"
                    alt="Sai Nirmit"
                    fill
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 14 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: `${160 + i * 20}px 0px`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
