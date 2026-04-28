import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { ApiResponse } from '@/types'

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
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    let subscription = await prisma.alertSubscription.findFirst({
      where: { userId },
    })

    if (!subscription) {
      subscription = await prisma.alertSubscription.create({
        data: { userId },
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        id: subscription.id,
        userId: subscription.userId,
        missAlertEnabled: subscription.missAlertEnabled,
        inventoryAlertEnabled: subscription.inventoryAlertEnabled,
        sideEffectAlertEnabled: subscription.sideEffectAlertEnabled,
        missThresholdMinutes: subscription.missThresholdMinutes,
      },
    } as ApiResponse)
  } catch (error) {
    console.error('获取预警订阅失败:', error)
    return NextResponse.json({ success: false, error: '获取预警订阅失败' } as ApiResponse, { status: 500 })
  }
}

export async function PUT(req: NextRequest) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    const body = await req.json()
    const { missAlertEnabled, inventoryAlertEnabled, sideEffectAlertEnabled, missThresholdMinutes } = body

    const updateData: Record<string, unknown> = {}
    if (typeof missAlertEnabled === 'boolean') updateData.missAlertEnabled = missAlertEnabled
    if (typeof inventoryAlertEnabled === 'boolean') updateData.inventoryAlertEnabled = inventoryAlertEnabled
    if (typeof sideEffectAlertEnabled === 'boolean') updateData.sideEffectAlertEnabled = sideEffectAlertEnabled
    if (typeof missThresholdMinutes === 'number' && [30, 60, 90, 120].includes(missThresholdMinutes)) {
      updateData.missThresholdMinutes = missThresholdMinutes
    }

    const existing = await prisma.alertSubscription.findFirst({
      where: { userId },
    })

    let subscription
    if (existing) {
      subscription = await prisma.alertSubscription.update({
        where: { id: existing.id },
        data: updateData,
      })
    } else {
      subscription = await prisma.alertSubscription.create({
        data: {
          userId,
          ...updateData,
        },
      })
    }

    return NextResponse.json({
      success: true,
      data: {
        id: subscription.id,
        userId: subscription.userId,
        missAlertEnabled: subscription.missAlertEnabled,
        inventoryAlertEnabled: subscription.inventoryAlertEnabled,
        sideEffectAlertEnabled: subscription.sideEffectAlertEnabled,
        missThresholdMinutes: subscription.missThresholdMinutes,
      },
    } as ApiResponse)
  } catch (error) {
    console.error('更新预警订阅失败:', error)
    return NextResponse.json({ success: false, error: '更新预警订阅失败' } as ApiResponse, { status: 500 })
  }
}
