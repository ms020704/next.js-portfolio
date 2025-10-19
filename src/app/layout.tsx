import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Next.js 기반 개인 포트폴리오 사이트',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 text-gray-900">
        {/* ✅ 공통 Header */}
        <Header />

        {/* ✅ 각 페이지의 본문 내용 */}
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>

        {/* ✅ 공통 Footer */}
        <Footer />
      </body>
    </html>
  )
}
