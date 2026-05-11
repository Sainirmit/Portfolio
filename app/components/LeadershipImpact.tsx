"use client";

import { DollarSign, Users, TrendingUp, Globe2 } from "lucide-react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import MotionSection, { fadeUp, stagger } from "./MotionSection";

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.floor(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const impacts = [
  {
    icon: DollarSign,
    value: 25000,
    prefix: "$",
    suffix: "+",
    label: "Revenue generated via tech & business initiatives",
  },
  {
    icon: Users,
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Industry professionals engaged across markets",
  },
  {
    icon: TrendingUp,
    value: 30,
    prefix: "",
    suffix: "%",
    label: "Team efficiency lift via Agile process optimization",
  },
  {
    icon: Globe2,
    value: 32,
    prefix: "",
    suffix: "nd",
    label: "International Leadership Workshop, Herrsching, Germany",
  },
];

export default function LeadershipImpact() {
  return (
    <MotionSection id="leadership" className="relative py-28">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/80">
            Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Leadership & Outcomes
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((it, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 p-3 ring-1 ring-white/10">
                  <it.icon className="w-6 h-6 text-violet-200" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  <Counter to={it.value} prefix={it.prefix} suffix={it.suffix} />
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {it.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionSection>
  );
}
