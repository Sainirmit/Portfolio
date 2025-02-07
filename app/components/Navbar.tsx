import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/experience" className="text-white hover:underline">
            Experience
          </Link>
          <Link href="/projects" className="text-white hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
