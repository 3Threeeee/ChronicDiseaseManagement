import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import { calculateAdherence } from '@/lib/adherence'
import type { SOAPRecordInfo } from '@/types'

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
    const url = new URL(req.url)
    const userId = url.searchParams.get('userId')
    const page = parseInt(url.searchParams.get('page') || '1', 10)
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10', 10)

    if (!userId) {
      return NextResponse.json({ success: false, error: '缺少userId参数' }, { status: 400 })
    }

    const skip = (page - 1) * pageSize

    const [records, total] = await Promise.all([
      prisma.sOAPRecord.findMany({
        where: { userId },
        orderBy: { recordedAt: 'desc' },
        skip,
        take: pageSize,
      }),
      prisma.sOAPRecord.count({ where: { userId } }),
    ])

    const data: SOAPRecordInfo[] = records.map((r) => ({
      id: r.id,
      userId: r.userId,
      subjectiveNote: r.subjectiveNote ?? undefined,
      symptomSeverity: (r.symptomSeverity as SOAPRecordInfo['symptomSeverity']) ?? undefined,
      symptomTags: r.symptomTags ? JSON.parse(r.symptomTags) : undefined,
      bloodPressure: r.bloodPressure ?? undefined,
      bloodSugar: r.bloodSugar ?? undefined,
      heartRate: r.heartRate ?? undefined,
      weight: r.weight ?? undefined,
      temperature: r.temperature ?? undefined,
      assessmentNote: r.assessmentNote ?? undefined,
      adherenceRate: r.adherenceRate ?? undefined,
      reportJson: r.reportJson ?? undefined,
      recordedAt: r.recordedAt.toISOString(),
    }))

    return NextResponse.json({
      success: true,
      data,
      total,
      page,
      pageSize,
    })
  } catch (error) {
    console.error('获取SOAP记录失败:', error)
    return NextResponse.json({ success: false, error: '获取SOAP记录失败' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const body = await req.json()
    const {
      subjectiveNote,
      symptomSeverity,
      symptomTags,
      bloodPressure,
      bloodSugar,
      heartRate,
      weight,
      temperature,
      assessmentNote,
      recordedAt,
    } = body

    const adherenceRate = await calculateAdherence(userId)

    const record = await prisma.sOAPRecord.create({
      data: {
        userId,
        subjectiveNote: subjectiveNote || null,
        symptomSeverity: symptomSeverity || null,
        symptomTags: symptomTags && symptomTags.length > 0 ? JSON.stringify(symptomTags) : null,
        bloodPressure: bloodPressure || null,
        bloodSugar: bloodSugar ?? null,
        heartRate: heartRate ?? null,
        weight: weight ?? null,
        temperature: temperature ?? null,
        assessmentNote: assessmentNote || null,
        adherenceRate,
        recordedAt: recordedAt ? new Date(recordedAt) : new Date(),
      },
    })

    const data: SOAPRecordInfo = {
      id: record.id,
      userId: record.userId,
      subjectiveNote: record.subjectiveNote ?? undefined,
      symptomSeverity: (record.symptomSeverity as SOAPRecordInfo['symptomSeverity']) ?? undefined,
      symptomTags: record.symptomTags ? JSON.parse(record.symptomTags) : undefined,
      bloodPressure: record.bloodPressure ?? undefined,
      bloodSugar: record.bloodSugar ?? undefined,
      heartRate: record.heartRate ?? undefined,
      weight: record.weight ?? undefined,
      temperature: record.temperature ?? undefined,
      assessmentNote: record.assessmentNote ?? undefined,
      adherenceRate: record.adherenceRate ?? undefined,
      reportJson: record.reportJson ?? undefined,
      recordedAt: record.recordedAt.toISOString(),
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('创建SOAP记录失败:', error)
    return NextResponse.json({ success: false, error: '创建SOAP记录失败' }, { status: 500 })
  }
}
