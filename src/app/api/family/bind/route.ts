import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { familyId, patientPhone } = body

    if (!familyId || !patientPhone) {
      return NextResponse.json({ success: false, error: '家属ID和患者手机号不能为空' }, { status: 400 })
    }

    const patient = await prisma.user.findUnique({ where: { phone: patientPhone } })
    if (!patient || patient.role !== 'PATIENT') {
      return NextResponse.json({ success: false, error: '未找到该患者' }, { status: 404 })
    }

    const existing = await prisma.familyBinding.findFirst({
      where: { familyId, patientId: patient.id },
    })
    if (existing) {
      return NextResponse.json({ success: false, error: '已绑定该患者' }, { status: 409 })
    }

    const binding = await prisma.familyBinding.create({
      data: {
        familyId,
        patientId: patient.id,
        verified: true,
      },
    })

    return NextResponse.json({
      success: true,
      data: binding,
    })
  } catch (error) {
    console.error('绑定失败:', error)
    return NextResponse.json({ success: false, error: '绑定失败，请稍后重试' }, { status: 500 })
  }
}
