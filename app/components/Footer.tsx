import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg font-bold mb-4">Contact Me</h2>
        <p className="mb-2 flex items-center justify-center">
          <FaEnvelope className="mr-2" />
          sainirmnit@gmail.com
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <Link
            href="https://www.linkedin.com/in/sainirmit"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/sainirmnit"
            target="_blank"
            className="flex items-center hover:underline"
          >
            <FaGithub className="mr-2" />
            GitHub
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Sainirmit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
