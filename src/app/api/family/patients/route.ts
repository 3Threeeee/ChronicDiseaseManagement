import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const familyId = searchParams.get('familyId')

    if (!familyId) {
      return NextResponse.json({ success: false, error: '缺少familyId参数' }, { status: 400 })
    }

    const bindings = await prisma.familyBinding.findMany({
      where: { familyId, verified: true },
      include: {
        patient: true,
      },
    })

    const patients = bindings.map((b) => ({
      id: b.patient.id,
      phone: b.patient.phone,
      name: b.patient.name,
      role: b.patient.role,
      gender: b.patient.gender,
      birthDate: b.patient.birthDate?.toISOString(),
      avatarUrl: b.patient.avatarUrl,
    }))

    return NextResponse.json({
      success: true,
      data: patients,
    })
  } catch (error) {
    console.error('获取患者列表失败:', error)
    return NextResponse.json({ success: false, error: '获取患者列表失败' }, { status: 500 })
  }
}
