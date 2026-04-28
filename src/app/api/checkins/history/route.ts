import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { CheckInInfo, ApiResponse } from '@/types'

function getUserId(req: NextRequest): string | null {
  const token =
    req.cookies.get('token')?.value ||
    req.headers.get('Authorization')?.replace('Bearer ', '')
  if (!token) return null
  const decoded = verifyToken(token)
  return decoded?.userId ?? null
}

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId') || getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    const startDate = req.nextUrl.searchParams.get('startDate')
    const endDate = req.nextUrl.searchParams.get('endDate')

    if (!startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: '缺少必填参数: startDate, endDate' } as ApiResponse,
        { status: 400 }
      )
    }

    const start = new Date(`${startDate}T00:00:00+08:00`)
    const end = new Date(`${endDate}T23:59:59+08:00`)

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { success: false, error: '日期格式错误，请使用 YYYY-MM-DD 格式' } as ApiResponse,
        { status: 400 }
      )
    }

    const checkIns = await prisma.checkIn.findMany({
      where: {
        userId,
        scheduledTime: {
          gte: start,
          lte: end,
        },
      },
      include: {
        medicine: {
          select: { name: true, dosage: true },
        },
      },
      orderBy: { scheduledTime: 'desc' },
    })

    const items: CheckInInfo[] = checkIns.map((c) => ({
      id: c.id,
      userId: c.userId,
      medicineId: c.medicineId,
      medicineName: c.medicine.name,
      dosage: c.medicine.dosage,
      scheduledTime: `${c.scheduledTime.getHours().toString().padStart(2, '0')}:${c.scheduledTime.getMinutes().toString().padStart(2, '0')}`,
      actualTime: c.actualTime
        ? `${c.actualTime.getHours().toString().padStart(2, '0')}:${c.actualTime.getMinutes().toString().padStart(2, '0')}`
        : undefined,
      missed: c.missed,
      confirmType: (c.confirmType as 'swipe' | 'manual') ?? undefined,
    }))

    return NextResponse.json({ success: true, data: items } as ApiResponse<CheckInInfo[]>)
  } catch (error) {
    console.error('获取历史打卡记录失败:', error)
    return NextResponse.json({ success: false, error: '获取历史打卡记录失败' } as ApiResponse, { status: 500 })
  }
}
