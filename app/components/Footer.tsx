import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center text-white/70">
        <div className="flex items-center gap-5">
          <Link
            href="mailto:sainirmit@gmail.com"
            className="inline-flex items-center gap-2 transition hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope />
            <span className="text-sm">sainirmit@gmail.com</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sainirmit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-white"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Sainirmit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-white"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Sai Nirmit · Crafted with Next.js &
          Framer Motion
        </p>
      </div>
    </footer>
  );
}
