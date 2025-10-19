'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-extrabold text-gray-900 mb-6"
      >
        👋 Hello! <br />
        <span className="text-blue-600">MINSEOK</span>&apos;s Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg text-gray-700 max-w-2xl mb-10"
      >
        정보보호와 웹을 공부하고 있습니다.
        <br />
        Next.js와 TailwindCSS를 토대로 실습하며 웹을 만들고 있습니다.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-6"
      >
        <Link
          href="/about"
          className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          About Me
        </Link>
        <Link
          href="/projects"
          className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-transform transform hover:scale-105"
        >
          View Projects
        </Link>
      </motion.div>
    </section>
  )
}
