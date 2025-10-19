import { NextResponse } from 'next/server'

// GET 요청 처리 함수
export async function GET() {
  return NextResponse.json({
    message: 'Hello from Next.js API 👋',
    time: new Date().toISOString(),
  })
}
