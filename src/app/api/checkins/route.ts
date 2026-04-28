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

export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    const body = await req.json()
    const { medicineId, scheduledTime, confirmType } = body

    if (!medicineId || !scheduledTime) {
      return NextResponse.json(
        { success: false, error: '缺少必填字段: medicineId, scheduledTime' } as ApiResponse,
        { status: 400 }
      )
    }

    if (confirmType && !['swipe', 'manual'].includes(confirmType)) {
      return NextResponse.json(
        { success: false, error: 'confirmType 只能是 swipe 或 manual' } as ApiResponse,
        { status: 400 }
      )
    }

    const medicine = await prisma.medicine.findFirst({
      where: { id: medicineId, userId },
    })
    if (!medicine) {
      return NextResponse.json({ success: false, error: '药品不存在' } as ApiResponse, { status: 404 })
    }

    const [hours, minutes] = scheduledTime.split(':').map(Number)
    const today = new Date()
    const scheduled = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0)

    const existing = await prisma.checkIn.findFirst({
      where: { userId, medicineId, scheduledTime: scheduled },
    })

    if (existing && existing.actualTime) {
      return NextResponse.json(
        { success: false, error: '该时间点已打卡' } as ApiResponse,
        { status: 409 }
      )
    }

    const now = new Date()
    let checkIn

    if (existing) {
      checkIn = await prisma.checkIn.update({
        where: { id: existing.id },
        data: {
          actualTime: now,
          missed: false,
          confirmType: confirmType || 'swipe',
        },
      })
    } else {
      checkIn = await prisma.checkIn.create({
        data: {
          userId,
          medicineId,
          scheduledTime: scheduled,
          actualTime: now,
          missed: false,
          confirmType: confirmType || 'swipe',
        },
      })
    }

    const checkInInfo: CheckInInfo = {
      id: checkIn.id,
      userId: checkIn.userId,
      medicineId: checkIn.medicineId,
      medicineName: medicine.name,
      dosage: medicine.dosage,
      scheduledTime,
      actualTime: `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`,
      missed: checkIn.missed,
      confirmType: (checkIn.confirmType as 'swipe' | 'manual') ?? undefined,
    }

    return NextResponse.json({ success: true, data: checkInInfo } as ApiResponse<CheckInInfo>)
  } catch (error) {
    console.error('执行打卡失败:', error)
    return NextResponse.json({ success: false, error: '执行打卡失败' } as ApiResponse, { status: 500 })
  }
}
