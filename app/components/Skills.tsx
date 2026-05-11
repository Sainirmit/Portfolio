"use client";

import { motion } from "framer-motion";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

const categories = [
  {
    title: "Languages",
    skills: ["Swift", "TypeScript", "JavaScript", "Python", "Java"],
  },
  {
    title: "Mobile",
    skills: ["SwiftUI", "UIKit", "React Native", "XCode", "Firebase", "RevenueCat"],
  },
  {
    title: "Web & Backend",
    skills: ["React", "Next.js", "Node.js", "Express", "Django", "TailwindCSS"],
  },
  {
    title: "AI / ML",
    skills: [
      "RAG / LLMs",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "Qdrant",
      "Transformers",
      "PyTorch",
      "TensorFlow",
      "Deep Learning",
    ],
  },
  {
    title: "Infra & Data",
    skills: ["Docker", "AWS S3", "BullMQ", "Elasticsearch", "ImapFlow", "Git"],
  },
  {
    title: "Product & Process",
    skills: ["Agile", "SCRUM", "Kanban", "Jira", "Linear", "UI/UX"],
  },
];

export default function Skills() {
  return (
    <MotionSection id="skills" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/80">
            Toolkit
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Stack
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl transition group-hover:bg-violet-500/40" />
              <h3 className="relative text-lg font-semibold text-white mb-4">
                {cat.title}
              </h3>
              <div className="relative flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
