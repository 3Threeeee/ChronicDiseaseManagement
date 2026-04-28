import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'

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
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const medicines = await prisma.medicine.findMany({
      where: { userId },
      include: {
        inventory: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    const list = medicines.map((m) => ({
      id: m.id,
      userId: m.userId,
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
      scheduleJson: m.scheduleJson,
      note: m.note,
      inventory: m.inventory
        ? {
            totalCount: m.inventory.totalCount,
            remainingCount: m.inventory.remainingCount,
            unit: m.inventory.unit,
            alertThreshold: m.inventory.alertThreshold,
            isLow: m.inventory.remainingCount <= m.inventory.alertThreshold,
          }
        : null,
    }))

    return NextResponse.json({ success: true, data: list })
  } catch (error) {
    console.error('获取药品列表失败:', error)
    return NextResponse.json({ success: false, error: '获取药品列表失败' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const body = await req.json()
    const { name, dosage, frequency, schedule, note } = body

    if (!name || !dosage || !frequency || !schedule || !Array.isArray(schedule)) {
      return NextResponse.json(
        { success: false, error: '缺少必填字段: name, dosage, frequency, schedule' },
        { status: 400 }
      )
    }

    const scheduleJson = JSON.stringify(schedule)

    const medicine = await prisma.medicine.create({
      data: {
        userId,
        name,
        dosage,
        frequency,
        scheduleJson,
        note: note || null,
        inventory: {
          create: {
            totalCount: 0,
            remainingCount: 0,
            unit: '片',
            alertThreshold: 5,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        id: medicine.id,
        userId: medicine.userId,
        name: medicine.name,
        dosage: medicine.dosage,
        frequency: medicine.frequency,
        scheduleJson: medicine.scheduleJson,
        note: medicine.note,
      },
    })
  } catch (error) {
    console.error('创建药品失败:', error)
    return NextResponse.json({ success: false, error: '创建药品失败' }, { status: 500 })
  }
}
