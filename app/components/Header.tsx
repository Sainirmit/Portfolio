import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Sai Nirmit</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className="hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/certificates"
                className="hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Certificates
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
