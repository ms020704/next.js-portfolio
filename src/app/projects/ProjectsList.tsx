'use client'

import { motion } from 'framer-motion'
import { Repository } from '@/types/repo'

export default function ProjectsList({ repos }: { repos: Repository[] }) {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-blue-700 text-center"
      >
        My GitHub Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="group p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition relative overflow-hidden"
          >
            {/* 카드에 배경 그라데이션 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <a
              href={repo.html_url}
              target="_blank"
              className="relative z-10 block h-full"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2 group-hover:underline">
                {repo.name}
              </h3>
              <p className="text-gray-700 text-sm line-clamp-3">
                {repo.description || '설명이 없는 프로젝트입니다.'}
              </p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
