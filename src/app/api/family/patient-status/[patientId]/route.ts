import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { UserProfile, CheckInInfo, InventoryInfo, SOAPRecordInfo } from '@/types'

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

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ patientId: string }> }
) {
  try {
    const familyId = getUserId(req)
    if (!familyId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const { patientId } = await params

    const binding = await prisma.familyBinding.findFirst({
      where: { familyId, patientId, verified: true },
    })
    if (!binding) {
      return NextResponse.json({ success: false, error: '无权查看该患者信息' }, { status: 403 })
    }

    const patient = await prisma.user.findUnique({ where: { id: patientId } })
    if (!patient) {
      return NextResponse.json({ success: false, error: '患者不存在' }, { status: 404 })
    }

    const today = getToday()
    const todayStart = new Date(`${today}T00:00:00+08:00`)
    const todayEnd = new Date(`${today}T23:59:59+08:00`)

    const [medicines, checkIns, inventories, latestSOAP, unreadAlerts] = await Promise.all([
      prisma.medicine.findMany({ where: { userId: patientId } }),
      prisma.checkIn.findMany({
        where: {
          userId: patientId,
          scheduledTime: { gte: todayStart, lte: todayEnd },
        },
      }),
      prisma.medicineInventory.findMany({
        where: { medicine: { userId: patientId } },
        include: { medicine: { select: { name: true } } },
      }),
      prisma.sOAPRecord.findFirst({
        where: { userId: patientId },
        orderBy: { recordedAt: 'desc' },
      }),
      prisma.alert.count({
        where: { targetUserId: familyId, status: 'UNREAD' },
      }),
    ])

    const allScheduleTimes: string[] = []
    for (const m of medicines) {
      try {
        const schedule = JSON.parse(m.scheduleJson) as string[]
        allScheduleTimes.push(...schedule)
      } catch { /* ignore invalid schedule */ }
    }

    const total = allScheduleTimes.length
    let done = 0
    let missed = 0

    const checkInMap = new Map<string, boolean>()
    for (const c of checkIns) {
      const timeKey = `${c.medicineId}_${c.scheduledTime.getHours().toString().padStart(2, '0')}:${c.scheduledTime.getMinutes().toString().padStart(2, '0')}`
      if (c.actualTime) {
        checkInMap.set(timeKey, false)
        done++
      } else if (c.missed) {
        missed++
      }
    }

    const now = new Date()
    for (const time of allScheduleTimes) {
      const [h, m] = time.split(':').map(Number)
      const scheduled = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0)
      const diffMin = (now.getTime() - scheduled.getTime()) / (1000 * 60)
      if (diffMin >= 30) {
        let isChecked = false
        for (const m of medicines) {
          const timeKey = `${m.id}_${time}`
          if (checkInMap.has(timeKey)) {
            isChecked = true
            break
          }
        }
        if (!isChecked) {
          const isMissed = diffMin > 30
          if (isMissed) missed++
        }
      }
    }

    const pending = total - done - missed
    const rate = total > 0 ? Math.round((done / total) * 100) : 0

    const todayCheckins: CheckInInfo[] = checkIns.map((c) => {
      const medicine = medicines.find((m) => m.id === c.medicineId)
      return {
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
      }
    })

    const inventoryAlerts: InventoryInfo[] = inventories
      .filter((inv) => inv.remainingCount <= inv.alertThreshold)
      .map((inv) => ({
        id: inv.id,
        medicineId: inv.medicineId,
        medicineName: inv.medicine.name,
        totalCount: inv.totalCount,
        remainingCount: inv.remainingCount,
        unit: inv.unit,
        alertThreshold: inv.alertThreshold,
        isLow: true,
      }))

    let latestSOAPData: SOAPRecordInfo | null = null
    if (latestSOAP) {
      latestSOAPData = {
        id: latestSOAP.id,
        userId: latestSOAP.userId,
        subjectiveNote: latestSOAP.subjectiveNote ?? undefined,
        symptomSeverity: (latestSOAP.symptomSeverity as SOAPRecordInfo['symptomSeverity']) ?? undefined,
        symptomTags: latestSOAP.symptomTags ? JSON.parse(latestSOAP.symptomTags) : undefined,
        bloodPressure: latestSOAP.bloodPressure ?? undefined,
        bloodSugar: latestSOAP.bloodSugar ?? undefined,
        heartRate: latestSOAP.heartRate ?? undefined,
        weight: latestSOAP.weight ?? undefined,
        temperature: latestSOAP.temperature ?? undefined,
        assessmentNote: latestSOAP.assessmentNote ?? undefined,
        adherenceRate: latestSOAP.adherenceRate ?? undefined,
        reportJson: latestSOAP.reportJson ?? undefined,
        recordedAt: latestSOAP.recordedAt.toISOString(),
      }
    }

    const profile: UserProfile = {
      id: patient.id,
      phone: patient.phone,
      name: patient.name,
      role: patient.role as 'PATIENT',
      gender: patient.gender as UserProfile['gender'] ?? undefined,
      birthDate: patient.birthDate?.toISOString(),
      avatarUrl: patient.avatarUrl ?? undefined,
    }

    return NextResponse.json({
      success: true,
      data: {
        profile,
        todayCheckins,
        todayProgress: { total, done, missed, pending, rate },
        inventoryAlerts,
        latestSOAP: latestSOAPData,
        unreadAlerts,
      },
    })
  } catch (error) {
    console.error('获取患者状态失败:', error)
    return NextResponse.json({ success: false, error: '获取患者状态失败' }, { status: 500 })
  }
}
