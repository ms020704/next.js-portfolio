'use client'
import { motion } from 'framer-motion'
import { FaReact, FaLock, FaDatabase, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export default function About() {
  const skills = [
    { name: 'React / Next.js', icon: <FaReact />, color: 'text-sky-500' },
    { name: '정보보안', icon: <FaLock />, color: 'text-red-500' },
    {
      name: '데이터베이스',
      icon: <FaDatabase />,
      color: 'text-green-600',
    },
    { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-700' },
  ]

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-10 text-blue-700"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 mb-10 leading-relaxed"
      >
        👋 안녕하세요. 저는 정보보호학을 전공하며, 보안이 강화된 웹서비스를
        만들기 위해 노력하고 있습니다. 입니다. 기술적인 완성도와 시각적인
        아름다움을 모두 추구하며, 지속적인 학습을 통해 성장하고 있습니다.
      </motion.p>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="flex items-center bg-white shadow-md p-5 rounded-lg border hover:shadow-xl transition"
          >
            <div className={`text-4xl mr-4 ${skill.color}`}>{skill.icon}</div>
            <p className="font-semibold text-gray-800">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="text-center"
      >
        <Link
          href="/projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          🚀 GitHub Projects 보러가기
        </Link>
      </motion.div>
    </section>
  )
}
