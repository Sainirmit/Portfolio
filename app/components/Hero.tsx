import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-200 to-blue-50 text-white py-20"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="Profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white"
          />
        </div>
        <h1 className="text-5xl font-bold text-black mb-4">Sai Nirmit</h1>
        <p className="text-xl mb-8 text-gray-800">
          iOS Developer | Full Stack Developer | Product Manager | AI/ML
          Enthusiast
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Link
            href="https://github.com/Sainirmit"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sainirmit"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:sainirmit@gmail.com"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
