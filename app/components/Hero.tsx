import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-200 to-blue-50 text-white py-20 pt-36 scroll-mt-24"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 relative mx-auto">
          <div className="w-32 h-32 mx-auto relative overflow-hidden rounded-full border-4 border-white">
            <Image
              src="/Profile.jpg"
              alt="Sai Nirmit's Profile"
              className="object-cover"
              fill
              sizes="128px"
              priority
            />
          </div>
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
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sainirmit"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:sainirmit@gmail.com"
            className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
            aria-label="Email Me"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-block"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
