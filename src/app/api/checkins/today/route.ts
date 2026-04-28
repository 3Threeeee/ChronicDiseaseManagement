import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { CheckInInfo, TodaySchedule, ApiResponse } from '@/types'

function getUserId(req: NextRequest): string | null {
  const token =
    req.cookies.get('token')?.value ||
    req.headers.get('Authorization')?.replace('Bearer ', '')
  if (!token) return null
  const decoded = verifyToken(token)
  return decoded?.userId ?? null
}

function getToday(): string {
  const now = new Date()
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function getStatus(scheduledTime: string, hasCheckIn: boolean): 'missed' | 'done' | 'current' | 'upcoming' {
  if (hasCheckIn) return 'done'

  const now = new Date()
  const [h, m] = scheduledTime.split(':').map(Number)
  const scheduled = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0)
  const diffMs = now.getTime() - scheduled.getTime()
  const diffMin = diffMs / (1000 * 60)

  if (diffMin < -30) return 'upcoming'
  if (diffMin >= -30 && diffMin <= 30) return 'current'
  return 'missed'
}

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId') || getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    const medicines = await prisma.medicine.findMany({
      where: { userId },
    })

    if (medicines.length === 0) {
      return NextResponse.json({
        success: true,
        data: { date: getToday(), items: [] } as TodaySchedule,
      } as ApiResponse<TodaySchedule>)
    }

    const today = getToday()
    const todayStart = new Date(`${today}T00:00:00+08:00`)
    const todayEnd = new Date(`${today}T23:59:59+08:00`)

    const existingCheckIns = await prisma.checkIn.findMany({
      where: {
        userId,
        scheduledTime: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    })

    const checkInMap = new Map<string, CheckInInfo>()
    for (const c of existingCheckIns) {
      const medicine = medicines.find((m) => m.id === c.medicineId)
      const timeKey = `${c.medicineId}_${c.scheduledTime.getHours().toString().padStart(2, '0')}:${c.scheduledTime.getMinutes().toString().padStart(2, '0')}`
      checkInMap.set(timeKey, {
        id: c.id,
        userId: c.userId,
        medicineId: c.medicineId,
        medicineName: medicine?.name ?? '',
        dosage: medicine?.dosage ?? '',
        scheduledTime: `${c.scheduledTime.getHours().toString().padStart(2, '0')}:${c.scheduledTime.getMinutes().toString().padStart(2, '0')}`,
        actualTime: c.actualTime
          ? `${c.actualTime.getHours().toString().padStart(2, '0')}:${c.actualTime.getMinutes().toString().padStart(2, '0')}`
          : undefined,
        missed: c.missed,
        confirmType: (c.confirmType as 'swipe' | 'manual') ?? undefined,
      })
    }

    const items: CheckInInfo[] = []
    for (const medicine of medicines) {
      let schedule: string[] = []
      try {
        schedule = JSON.parse(medicine.scheduleJson)
      } catch {
        continue
      }

      for (const time of schedule) {
        const timeKey = `${medicine.id}_${time}`
        const existing = checkInMap.get(timeKey)

        if (existing) {
          items.push(existing)
        } else {
          const status = getStatus(time, false)
          items.push({
            id: '',
            userId,
            medicineId: medicine.id,
            medicineName: medicine.name,
            dosage: medicine.dosage,
            scheduledTime: time,
            missed: status === 'missed',
          })
        }
      }
    }

    items.sort((a, b) => {
      const aDone = !!a.actualTime || (a.id && !a.missed)
      const bDone = !!b.actualTime || (b.id && !b.missed)
      if (aDone !== bDone) return aDone ? 1 : -1
      return a.scheduledTime.localeCompare(b.scheduledTime)
    })

    return NextResponse.json({
      success: true,
      data: { date: today, items } as TodaySchedule,
    } as ApiResponse<TodaySchedule>)
  } catch (error) {
    console.error('获取今日打卡任务失败:', error)
    return NextResponse.json({ success: false, error: '获取今日打卡任务失败' } as ApiResponse, { status: 500 })
  }
}
