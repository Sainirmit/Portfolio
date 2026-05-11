"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative inline-block h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 animate-aurora">
            <span className="absolute inset-0.5 rounded-full bg-[#06060c] flex items-center justify-center text-sm font-bold gradient-text">
              SN
            </span>
          </span>
          <span className="text-base font-semibold tracking-tight text-white/90">
            Sai Nirmit
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="relative rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white/80"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-strong border-t border-white/10"
        >
          <ul className="container mx-auto flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div
        style={{ scaleX }}
        className="h-[2px] origin-left bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400"
      />
    </motion.header>
  );
}
