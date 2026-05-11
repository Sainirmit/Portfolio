"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EtherealBackground from "../components/EtherealBackground";

const skills = [
  "Swift", "SwiftUI", "UIKit", "ARKit", "React Native",
  "TypeScript", "JavaScript", "React", "Next.js", "Node.js",
  "Express", "Django", "Python", "Java",
  "RAG / LLMs", "LangChain", "Pinecone", "Qdrant", "Gemini",
  "Transformers", "PyTorch", "TensorFlow",
  "Docker", "AWS S3", "BullMQ", "Elasticsearch", "Firebase", "RevenueCat",
  "Agile", "SCRUM", "Jira", "Linear", "UI/UX",
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <EtherealBackground />
      <Header />

      <section className="container mx-auto px-6 pt-32 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/80 transition hover:text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>

        <div className="mt-12 grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-cyan-400/30 blur-3xl animate-blob" />
            <div className="relative rounded-3xl bg-gradient-to-br from-violet-500/40 via-indigo-500/40 to-cyan-400/40 p-1 animate-aurora">
              <div className="overflow-hidden rounded-[1.4rem] bg-[#06060c]">
                <Image
                  src="/About.JPG"
                  alt="Sai Nirmit"
                  width={500}
                  height={620}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">
              Hi there.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              I&apos;m a builder driven by curiosity. Whether it&apos;s an AI
              fitness coach on iOS, an LLM-powered email aggregator, or an
              AR-driven interior design tool — I love taking ideas from zero
              to shipped product.
            </p>
            <p className="text-white/65 leading-relaxed">
              Recent chapters: shipped <strong className="text-white/90">myTrainr AI</strong>{" "}
              (React Native + LLMs + RevenueCat) to the App Store, scaled
              backend services at <strong className="text-white/90">Outbox Labs</strong>,
              prototyped RAG pipelines at <strong className="text-white/90">NET Solutions</strong>{" "}
              with Pinecone + LangChain, and helped found{" "}
              <strong className="text-white/90">Elevvia</strong> and{" "}
              <strong className="text-white/90">Wynngrid</strong> — together
              generating $25K+ in early revenue.
            </p>
            <p className="text-white/65 leading-relaxed">
              Selected for the 32<sup>nd</sup> International Leadership
              Workshop for Rural Youth in Herrsching, Germany — a fully-paid
              global program that broadened how I think about product, people,
              and impact.
            </p>
          </motion.div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-8">
            Things I work with
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.03 } },
            }}
            className="flex flex-wrap gap-2"
          >
            {skills.map((s) => (
              <motion.span
                key={s}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-white/80 transition hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
