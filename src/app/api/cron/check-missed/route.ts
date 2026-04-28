import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { checkMissedAlert } from '@/lib/alertEngine'
import type { ApiResponse } from '@/types'

export async function GET() {
  try {
    const now = new Date()

    const missedCheckIns = await prisma.checkIn.findMany({
      where: {
        missed: false,
        actualTime: null,
        scheduledTime: { lt: now },
      },
    })

    let missedCount = 0
    let alertCount = 0

    for (const checkIn of missedCheckIns) {
      await prisma.checkIn.update({
        where: { id: checkIn.id },
        data: { missed: true },
      })
      missedCount++

      await checkMissedAlert(checkIn.id)
      alertCount++
    }

    return NextResponse.json({
      success: true,
      data: { missedCount, alertCount, checkedAt: now.toISOString() },
    } as ApiResponse<{ missedCount: number; alertCount: number; checkedAt: string }>)
  } catch (error) {
    console.error('自动标记漏服失败:', error)
    return NextResponse.json({ success: false, error: '自动标记漏服失败' } as ApiResponse, { status: 500 })
  }
}
