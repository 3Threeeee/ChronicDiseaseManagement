import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { InventoryInfo, ApiResponse } from '@/types'

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

    const { searchParams } = new URL(req.url)
    const targetUserId = searchParams.get('userId')

    if (targetUserId && targetUserId !== userId) {
      return NextResponse.json(
        { success: false, error: '无权查看其他用户的库存' },
        { status: 403 }
      )
    }

    const inventories = await prisma.medicineInventory.findMany({
      where: { medicine: { userId } },
      include: {
        medicine: { select: { name: true } },
      },
    })

    const list: InventoryInfo[] = inventories
      .map((inv) => ({
        id: inv.id,
        medicineId: inv.medicineId,
        medicineName: inv.medicine.name,
        totalCount: inv.totalCount,
        remainingCount: inv.remainingCount,
        unit: inv.unit,
        alertThreshold: inv.alertThreshold,
        isLow: inv.remainingCount <= inv.alertThreshold,
      }))
      .sort((a, b) => a.remainingCount - b.remainingCount)

    return NextResponse.json({ success: true, data: list })
  } catch (error) {
    console.error('获取库存列表失败:', error)
    return NextResponse.json({ success: false, error: '获取库存列表失败' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' }, { status: 401 })
    }

    const body = await req.json()
    const { medicineId, totalCount, unit, alertThreshold } = body

    if (!medicineId || totalCount === undefined || !unit) {
      return NextResponse.json(
        { success: false, error: '缺少必填字段: medicineId, totalCount, unit' },
        { status: 400 }
      )
    }

    const medicine = await prisma.medicine.findUnique({ where: { id: medicineId } })
    if (!medicine || medicine.userId !== userId) {
      return NextResponse.json(
        { success: false, error: '药品不存在或无权操作' },
        { status: 404 }
      )
    }

    const existing = await prisma.medicineInventory.findUnique({
      where: { medicineId },
      include: { medicine: { select: { name: true } } },
    })

    let result: InventoryInfo

    if (existing) {
      const countDiff = totalCount - existing.totalCount
      const newRemaining = Math.max(0, existing.remainingCount + countDiff)

      const updated = await prisma.medicineInventory.update({
        where: { medicineId },
        data: {
          totalCount,
          remainingCount: newRemaining,
          unit,
          alertThreshold: alertThreshold ?? existing.alertThreshold,
        },
        include: { medicine: { select: { name: true } } },
      })

      result = {
        id: updated.id,
        medicineId: updated.medicineId,
        medicineName: updated.medicine.name,
        totalCount: updated.totalCount,
        remainingCount: updated.remainingCount,
        unit: updated.unit,
        alertThreshold: updated.alertThreshold,
        isLow: updated.remainingCount <= updated.alertThreshold,
      }
    } else {
      const created = await prisma.medicineInventory.create({
        data: {
          medicineId,
          totalCount,
          remainingCount: totalCount,
          unit,
          alertThreshold: alertThreshold ?? 5,
        },
        include: { medicine: { select: { name: true } } },
      })

      result = {
        id: created.id,
        medicineId: created.medicineId,
        medicineName: created.medicine.name,
        totalCount: created.totalCount,
        remainingCount: created.remainingCount,
        unit: created.unit,
        alertThreshold: created.alertThreshold,
        isLow: created.remainingCount <= created.alertThreshold,
      }
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('更新库存失败:', error)
    return NextResponse.json({ success: false, error: '更新库存失败' }, { status: 500 })
  }
}
