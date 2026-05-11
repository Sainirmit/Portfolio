"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function MotionSection({
  children,
  className,
  id,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: EASE },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
