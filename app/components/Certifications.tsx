"use client";

import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

const certifications = [
  { title: "Explore Machine Learning using Python", institution: "Infosys Springboard", link: "https://drive.google.com/file/d/1d4p_ynrV1YsrdjmnwaE_aucbKbUk83TX/view?usp=sharing" },
  { title: "Meta iOS Developer", institution: "Meta", link: "https://coursera.org/share/6f8205dbdf7455f931273638ed11691b" },
  { title: "Introduction to Swift Programming", institution: "University of Toronto", link: "https://coursera.org/share/84705067fa892db4947228f3af6bf794" },
  { title: "Software Engineering", institution: "HKUST", link: "https://coursera.org/share/54b84cb3f6fca03677d23709165aee76" },
  { title: "Introduction to Programming in Swift 5", institution: "LearnQuest", link: "https://coursera.org/share/8201558ffd2d637e2f80f836438c126a" },
  { title: "Introduction to Cloud Computing", institution: "IBM", link: "https://coursera.org/share/e094e9fdfb867e9bea060a78368f7218" },
  { title: "Prototyping and Design", institution: "University of Minnesota", link: "https://coursera.org/share/2ab93f4f30c50b7cf943859c1c533527" },
  { title: "Foundations of UX Design", institution: "Google UX", link: "https://coursera.org/share/f6b9d297a11e9760e974ea4af4abed7f" },
  { title: "Start the UX Design Process", institution: "Google UX", link: "https://coursera.org/share/274bcc6c942550c7914b6fdb6a60ef68" },
  { title: "Build Wireframes and Low-Fidelity Prototypes", institution: "Google UX", link: "https://coursera.org/share/1fddc1d1a840151eea8f57e187a86dcc" },
  { title: "Agile Scrum Certification", institution: "Infosys Springboard", link: "https://drive.google.com/file/d/1I-fp3OEDFIWCXEWcLXTFT-nqkabagkwH/view?usp=sharing" },
  { title: "Agile Scrum in Practice", institution: "Infosys Springboard", link: "https://drive.google.com/file/d/1BOUm1lgGHOKE2mQto0mVBuyswZ4KlI9x/view?usp=sharing" },
  { title: "Software Engineering and Agile", institution: "Infosys Springboard", link: "https://drive.google.com/file/d/1srpbW_5lhnZWfAFryGUZgSlWovFH1XfI/view?usp=sharing" },
  { title: "Programming Fundamentals in Swift", institution: "Meta", link: "https://coursera.org/share/197cdb1030c2a157766155baf95eff7e" },
  { title: "Version Control", institution: "Meta", link: "https://coursera.org/share/72bb08b9daf2940fb07724e73b2e985b" },
  { title: "Intro to iOS Mobile App Development", institution: "Meta", link: "https://coursera.org/share/6e6f5f9be308f752dccd5eda3f4a8e8a" },
  { title: "Principles of UX/UI Design", institution: "Meta", link: "https://coursera.org/share/e093193fdcbb5b0f4e911d6d2b70e3fb" },
  { title: "Create the UI with SwiftUI", institution: "Meta", link: "https://coursera.org/share/34674af188c366f93d4436e85f40fe29" },
  { title: "Working with Data in iOS", institution: "Meta", link: "https://coursera.org/share/b69ca2db1b8a8972501e175b803c0ace" },
  { title: "Mobile Development and JavaScript", institution: "Meta", link: "https://coursera.org/share/2b1e8509af8fbadaca2a9094c0d22c84" },
  { title: "Advanced Programming in Swift", institution: "Meta", link: "https://coursera.org/share/7c7424930b4ef088e1b98d3ff4e444d9" },
  { title: "React Native", institution: "Meta", link: "https://coursera.org/share/9c9bca6e77b1559f10fecca47c2f5c12" },
  { title: "React Basics", institution: "Meta", link: "https://coursera.org/share/0b67f54d0eac60ba125159e0d8e823c0" },
  { title: "iOS App Capstone", institution: "Meta", link: "https://coursera.org/share/ec287d95e37567328a2ed093155fbb33" },
];

export default function Certifications() {
  return (
    <MotionSection id="certifications" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-400/80">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Certifications
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              custom={i % 12}
              whileHover={{ y: -4 }}
              className="group glass rounded-xl p-5 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-500/30 p-2 ring-1 ring-white/10">
                  <Award className="w-4 h-4 text-violet-200" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/55">{c.institution}</p>
                  <Link
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs text-violet-300 transition hover:text-violet-200"
                  >
                    View certificate
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
