"use client";

import { Calendar, Building2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

const experiences = [
  {
    title: "Full Stack App Developer",
    company: "myTrainr AI",
    tagline: "AI fitness coach",
    link: "#",
    period: "Mar 2026 – Apr 2026",
    responsibilities: [
      "Built AI-powered fitness app on React Native + SwiftUI with Node.js, Firebase, and LLM integration.",
      "Engineered scalable backend APIs and real-time data flows for workout tracking, progress analytics, and meal tracking.",
      "Shipped to App Store with focus on speed and scale.",
      "Integrated RevenueCat for payment processing and subscription management.",
    ],
  },
  {
    title: "Associate – Backend Engineer",
    company: "Outbox Labs",
    tagline: "Zapmail",
    link: "#",
    period: "May 2025 – Dec 2025",
    responsibilities: [
      "Owned end-to-end bug resolution, feature development, and maintenance across multiple backend services.",
      "Leveraged Cursor IDE AI-powered workflows with TypeScript to ship features faster.",
    ],
  },
  {
    title: "AI Developer Intern",
    company: "NET Solutions",
    tagline: "",
    link: "#",
    period: "Apr 2025 – May 2025",
    responsibilities: [
      "Built Django backend systems for enterprise software, improving API performance by 15% through RESTful design.",
      "Prototyped RAG workflows with LangChain/OpenAI, integrating Pinecone for 20% faster document retrieval.",
    ],
  },
  {
    title: "Founding Team Member",
    company: "Elevvia",
    tagline: "",
    link: "https://www.elevvia.tech/",
    period: "Aug 2024 – Dec 2025",
    responsibilities: [
      "Drove $5K+ revenue in 3 months deploying AI automation tools (Python/React), boosting client efficiency by 40%.",
      "Delivered 5+ scalable web apps (Next.js/Node.js), accelerating SMB digital transformation.",
    ],
  },
  {
    title: "Founding Team Member",
    company: "Wynngrid",
    tagline: "",
    link: "https://wynngrid.com/",
    period: "Dec 2024 – May 2025",
    responsibilities: [
      "Generated $20,000+ in revenue by building Wynngrid's digital presence.",
      "Automated workflows with Agile/Jira, improving operational efficiency by 30%.",
      "Engaged 500+ homeowners, architects, and interior designers, refining platform offerings and expanding market reach.",
    ],
  },
  {
    title: "iOS Developer",
    company: "StitchIt App",
    tagline: "",
    link: "#",
    period: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Boosted app engagement by 35% via SwiftUI UI enhancements, reducing latency by 20%.",
    ],
  },
  {
    title: "iOS Developer Intern",
    company: "Infosys",
    tagline: "Mysore DC",
    link: "https://drive.google.com/file/d/1-ICV6Aeg4JoHeVfGkf1t2SNipopOTn-N/view?usp=sharing",
    period: "May 2024 – Jun 2024",
    responsibilities: [
      "Shipped Library Management System (Swift/Firebase), improving productivity by 15% across 3 user roles.",
    ],
  },
];

export default function Experience() {
  return (
    <MotionSection
      id="experience"
      className="relative py-28 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-violet-400/80">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Professional Experience
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className={`relative mb-10 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-12 md:pl-0`}
            >
              <span className="absolute left-4 md:left-auto md:right-[-7px] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,0.7)] animate-glow"
                style={i % 2 === 0 ? {} : { right: "auto", left: "-7px" }}
              />

              <div className="group glass rounded-2xl p-6 transition hover:bg-white/[0.06] hover:-translate-y-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                {exp.link && exp.link !== "#" ? (
                  <Link
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200"
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>
                      {exp.company}
                      {exp.tagline && ` — ${exp.tagline}`}
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </Link>
                ) : (
                  <div className="mt-1 inline-flex items-center gap-2 text-sm text-violet-300">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>
                      {exp.company}
                      {exp.tagline && ` — ${exp.tagline}`}
                    </span>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((r, idx) => (
                    <li
                      key={idx}
                      className="relative pl-5 text-sm text-white/70 leading-relaxed"
                    >
                      <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
