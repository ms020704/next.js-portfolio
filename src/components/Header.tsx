'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold tracking-tight">
          My <span className="text-yellow-300">Portfolio</span>
        </h1>

        <nav className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-yellow-300 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
