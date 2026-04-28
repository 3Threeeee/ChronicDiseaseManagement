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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const { id } = await params

    const existing = await prisma.medicine.findUnique({ where: { id } })
    if (!existing || existing.userId !== userId) {
      return NextResponse.json(
        { success: false, error: '药品不存在或无权操作' },
        { status: 404 }
      )
    }

    const body = await req.json()
    const { name, dosage, frequency, schedule, note } = body

    const data: Record<string, unknown> = {}
    if (name !== undefined) data.name = name
    if (dosage !== undefined) data.dosage = dosage
    if (frequency !== undefined) data.frequency = frequency
    if (note !== undefined) data.note = note
    if (schedule !== undefined && Array.isArray(schedule)) {
      data.scheduleJson = JSON.stringify(schedule)
    }

    const updated = await prisma.medicine.update({
      where: { id },
      data,
    })

    return NextResponse.json({
      success: true,
      data: {
        id: updated.id,
        userId: updated.userId,
        name: updated.name,
        dosage: updated.dosage,
        frequency: updated.frequency,
        scheduleJson: updated.scheduleJson,
        note: updated.note,
      },
    })
  } catch (error) {
    console.error('更新药品失败:', error)
    return NextResponse.json({ success: false, error: '更新药品失败' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const { id } = await params

    const existing = await prisma.medicine.findUnique({ where: { id } })
    if (!existing || existing.userId !== userId) {
      return NextResponse.json(
        { success: false, error: '药品不存在或无权操作' },
        { status: 404 }
      )
    }

    await prisma.checkIn.deleteMany({ where: { medicineId: id } })
    await prisma.medicinePrescription.deleteMany({ where: { medicineId: id } })
    await prisma.medicineInventory.deleteMany({ where: { medicineId: id } })
    await prisma.medicine.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('删除药品失败:', error)
    return NextResponse.json({ success: false, error: '删除药品失败' }, { status: 500 })
  }
}
