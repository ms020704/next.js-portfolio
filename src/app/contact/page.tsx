'use client'
import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('kms02070424@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert('복사에 실패했습니다. 직접 복사해 주세요.')
    }
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-blue-700 text-center"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-700 mb-12 leading-relaxed"
      >
        😊 협업, 문의, 피드백은 아래의 채널로 연락 주세요.
      </motion.p>

      <div className="flex justify-center gap-8 mb-10 text-5xl">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FaEnvelope />
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.2 }}
          href="https://github.com/ms020704"
          target="_blank"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub />
        </motion.a>
      </div>

      {copied && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-blue-600 text-center font-semibold"
        >
          📋 이메일 주소가 복사되었습니다!
        </motion.p>
      )}

      <p className="text-center mt-8 text-gray-600">
        Email -{' '}
        <span className="font-medium text-gray-800">kms02070424@gmail.com</span>
      </p>
    </section>
  )
}
