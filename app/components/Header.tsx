import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="text-gray-700 hover:text-gray-900 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#education" className="text-gray-700 hover:text-gray-900 transition-colors">
              Education
            </Link>
          </li>
          <li>
            <Link href="#certifications" className="text-gray-700 hover:text-gray-900 transition-colors">
              Certifications
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

