"use client";

import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

const education = [
  {
    school: "Chitkara University",
    location: "Punjab, India",
    degree: "B.E. Computer Science",
    period: "Sep 2021 – Aug 2025",
  },
  {
    school: "Metropolia University of Applied Sciences",
    location: "Myyrmäki, Finland",
    degree: "ICT Summer School",
    period: "Aug 2024",
  },
  {
    school: "Metropolia University of Applied Sciences",
    location: "Myyrmäki, Finland",
    degree: "ICT Summer School",
    period: "Aug 2023",
  },
];

export default function Education() {
  return (
    <MotionSection id="education" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-pink-400/80">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Education
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto max-w-3xl space-y-5"
        >
          {education.map((e, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ x: 6 }}
              className="group flex items-start gap-4 glass rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 p-3 ring-1 ring-white/10">
                <GraduationCap className="w-6 h-6 text-violet-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {e.school}
                </h3>
                <p className="text-sm text-white/70 mt-0.5">{e.degree}</p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-white/50">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {e.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {e.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
