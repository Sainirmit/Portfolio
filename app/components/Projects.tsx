"use client";

import { Github, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

const projects = [
  {
    title: "Hopple",
    description:
      "AI-powered fashion stylist built with Node.js, BullMQ, React, and LLM integration for real-time outfit generation.",
    tags: ["Node.js", "BullMQ", "React", "LLM"],
    link: "#",
    type: "Web",
  },
  {
    title: "Mailbox Aggregator",
    description:
      "IMAP email aggregator using ImapFlow + Express/TS, Elasticsearch for storage, Gemini for categorization, and Qdrant for vector embeddings and AI replies.",
    tags: ["TypeScript", "Elasticsearch", "Qdrant", "Gemini"],
    link: "#",
    type: "AI",
  },
  {
    title: "Interior Design AI Tool",
    description:
      "AI-powered interior design generator leveraging SDXL and ControlNets for room-aware composition.",
    tags: ["SDXL", "ControlNet", "Python", "Diffusers"],
    link: "#",
    type: "AI",
  },
  {
    title: "RndR — AR Interior Design",
    description:
      "AR-based interior design iOS app with 95% rendering accuracy. Agile cycles improved dev speed by 30%.",
    tags: ["Swift", "ARKit", "iOS", "MVVM"],
    link: "https://apps.apple.com/in/app/rndr/id6739525102",
    type: "iOS",
  },
  {
    title: "Handwritten Character Recognition",
    description:
      "Deep-learning OCR model achieving 92% accuracy across handwritten character classes.",
    tags: ["Python", "Deep Learning", "OCR"],
    link: "https://github.com/Sainirmit/MachineLearning",
    type: "ML",
  },
  {
    title: "House Price Estimation",
    description:
      "ML model for real estate valuation with a 3% error rate across test markets.",
    tags: ["Python", "ML", "Regression"],
    link: "https://github.com/Sainirmit/Bharat-Intern/blob/main/House%20Price%20Prediction.py",
    type: "ML",
  },
  {
    title: "Flower Classification",
    description:
      "97% accuracy CNN classifier for automated species identification of iris flowers.",
    tags: ["Python", "ML", "Classification"],
    link: "https://github.com/Sainirmit/Bharat-Intern/blob/main/IRES%20FLOWER.py",
    type: "ML",
  },
];

const filters = ["All", "Web", "iOS", "AI", "ML"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <MotionSection id="projects" className="relative py-28 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/80">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Key Projects
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                filter === f
                  ? "bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_4px_20px_rgba(139,92,246,0.4)]"
                  : "glass text-white/70 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl transition group-hover:bg-cyan-500/30" />
              <div className="relative">
                <div className="mb-4 flex items-start justify-between">
                  <Sparkles className="w-5 h-5 text-violet-300" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/60">
                    {p.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed min-h-[64px]">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link !== "#" && (
                  <Link
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-violet-300 transition hover:text-violet-200"
                  >
                    {p.type === "iOS" ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <Github className="w-4 h-4" />
                    )}
                    <span>
                      {p.type === "iOS" ? "View on App Store" : "View on GitHub"}
                    </span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
