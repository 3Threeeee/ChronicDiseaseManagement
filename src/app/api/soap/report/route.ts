import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { calculateAdherence } from '@/lib/adherence'

function parseBloodPressure(bp: string | null): { systolic: number; diastolic: number } | null {
  if (!bp) return null
  const parts = bp.split('/')
  if (parts.length !== 2) return null
  const systolic = parseInt(parts[0], 10)
  const diastolic = parseInt(parts[1], 10)
  if (isNaN(systolic) || isNaN(diastolic)) return null
  return { systolic, diastolic }
}

function generateSummary(
  adherence: number,
  bloodPressureRecords: { systolic: number; diastolic: number }[],
  bloodSugarRecords: number[],
  symptomSeverities: string[]
): string {
  const parts: string[] = []

  if (adherence >= 90) {
    parts.push('依从性良好')
  } else if (adherence >= 70) {
    parts.push('依从性一般，建议加强服药提醒')
  } else {
    parts.push('依从性较差，请重点关注服药情况')
  }

  if (bloodPressureRecords.length > 0) {
    const highBpCount = bloodPressureRecords.filter(
      (bp) => bp.systolic >= 140 || bp.diastolic >= 90
    ).length
    if (highBpCount > bloodPressureRecords.length * 0.5) {
      parts.push('血压持续偏高，建议关注血压控制')
    }
  }

  if (bloodSugarRecords.length > 0) {
    const highSugarCount = bloodSugarRecords.filter((v) => v > 7.0).length
    if (highSugarCount > bloodSugarRecords.length * 0.5) {
      parts.push('血糖偏高，建议监测饮食和用药')
    }
  }

  const severeCount = symptomSeverities.filter((s) => s === 'SEVERE').length
  if (severeCount > 0) {
    parts.push(`出现${severeCount}次重度症状，建议及时就医`)
  }

  if (parts.length === 0) {
    parts.push('各项指标基本正常，继续保持')
  }

  return parts.join('；') + '。'
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')
    const startDate = url.searchParams.get('startDate')
    const endDate = url.searchParams.get('endDate')

    if (!userId || !startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: '缺少必填参数: userId, startDate, endDate' },
        { status: 400 }
      )
    }

    const start = new Date(startDate)
    const end = new Date(endDate)
    end.setHours(23, 59, 59, 999)

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true },
    })

    const [soapRecords, adherenceRate, allCheckIns] = await Promise.all([
      prisma.sOAPRecord.findMany({
        where: {
          userId,
          recordedAt: { gte: start, lte: end },
        },
        orderBy: { recordedAt: 'asc' },
      }),
      calculateAdherence(userId),
      prisma.checkIn.findMany({
        where: {
          userId,
          scheduledTime: { gte: start, lte: end },
        },
        select: { missed: true },
      }),
    ])

    const missedCount = allCheckIns.filter((c) => c.missed).length

    const symptoms = soapRecords
      .filter((r) => r.symptomSeverity || (r.symptomTags && r.symptomTags !== '[]'))
      .map((r) => ({
        date: r.recordedAt.toISOString().split('T')[0],
        severity: r.symptomSeverity || 'MILD',
        tags: r.symptomTags ? (JSON.parse(r.symptomTags) as string[]) : [],
      }))

    const bpValues: { systolic: number; diastolic: number }[] = []
    const sugarValues: number[] = []
    const heartRateValues: number[] = []
    const weightValues: number[] = []
    const symptomSeverities: string[] = []

    for (const r of soapRecords) {
      const bp = parseBloodPressure(r.bloodPressure)
      if (bp) bpValues.push(bp)
      if (r.bloodSugar != null) sugarValues.push(r.bloodSugar)
      if (r.heartRate != null) heartRateValues.push(r.heartRate)
      if (r.weight != null) weightValues.push(r.weight)
      if (r.symptomSeverity) symptomSeverities.push(r.symptomSeverity)
    }

    const avgBpSystolic = bpValues.length > 0
      ? Math.round(bpValues.reduce((s, v) => s + v.systolic, 0) / bpValues.length)
      : 0
    const avgBpDiastolic = bpValues.length > 0
      ? Math.round(bpValues.reduce((s, v) => s + v.diastolic, 0) / bpValues.length)
      : 0
    const minBpSystolic = bpValues.length > 0
      ? Math.min(...bpValues.map((v) => v.systolic))
      : 0
    const maxBpSystolic = bpValues.length > 0
      ? Math.max(...bpValues.map((v) => v.systolic))
      : 0
    const minBpDiastolic = bpValues.length > 0
      ? Math.min(...bpValues.map((v) => v.diastolic))
      : 0
    const maxBpDiastolic = bpValues.length > 0
      ? Math.max(...bpValues.map((v) => v.diastolic))
      : 0

    const avgSugar = sugarValues.length > 0
      ? Math.round(sugarValues.reduce((s, v) => s + v, 0) / sugarValues.length * 10) / 10
      : 0
    const minSugar = sugarValues.length > 0 ? Math.min(...sugarValues) : 0
    const maxSugar = sugarValues.length > 0 ? Math.max(...sugarValues) : 0

    const avgHeartRate = heartRateValues.length > 0
      ? Math.round(heartRateValues.reduce((s, v) => s + v, 0) / heartRateValues.length)
      : 0

    const latestWeight = weightValues.length > 0 ? weightValues[weightValues.length - 1] : null
    let weightTrend: 'up' | 'down' | 'stable' = 'stable'
    if (weightValues.length >= 2) {
      const first = weightValues[0]
      const last = weightValues[weightValues.length - 1]
      if (last > first + 1) weightTrend = 'up'
      else if (last < first - 1) weightTrend = 'down'
    }

    const summary = generateSummary(
      adherenceRate,
      bpValues,
      sugarValues,
      symptomSeverities
    )

    const report = {
      patientName: user?.name || '未知患者',
      period: {
        start: startDate,
        end: endDate,
      },
      adherence: {
        rate: adherenceRate,
        total: allCheckIns.length,
        missed: missedCount,
      },
      symptoms,
      vitals: {
        bloodPressure: {
          avg: bpValues.length > 0 ? `${avgBpSystolic}/${avgBpDiastolic}` : '无数据',
          min: bpValues.length > 0 ? `${minBpSystolic}/${minBpDiastolic}` : '无数据',
          max: bpValues.length > 0 ? `${maxBpSystolic}/${maxBpDiastolic}` : '无数据',
        },
        bloodSugar: {
          avg: avgSugar,
          min: minSugar,
          max: maxSugar,
        },
        heartRate: { avg: avgHeartRate },
        weight: {
          latest: latestWeight ?? 0,
          trend: weightTrend,
        },
      },
      summary,
    }

    return NextResponse.json({ success: true, data: report })
  } catch (error) {
    console.error('生成报告失败:', error)
    return NextResponse.json({ success: false, error: '生成报告失败' }, { status: 500 })
  }
}
