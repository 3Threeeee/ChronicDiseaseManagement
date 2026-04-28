import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000)

    const missedCheckIns = await prisma.checkIn.findMany({
      where: {
        missed: false,
        actualTime: null,
        scheduledTime: { lt: oneHourAgo },
      },
    })

    let count = 0
    for (const checkIn of missedCheckIns) {
      await prisma.checkIn.update({
        where: { id: checkIn.id },
        data: { missed: true },
      })
      count++
    }

    return NextResponse.json({
      success: true,
      data: { markedMissed: count },
    } as ApiResponse<{ markedMissed: number }>)
  } catch (error) {
    console.error('自动标记漏服失败:', error)
    return NextResponse.json({ success: false, error: '自动标记漏服失败' } as ApiResponse, { status: 500 })
  }
}
