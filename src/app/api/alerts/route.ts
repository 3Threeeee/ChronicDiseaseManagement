import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyToken } from '@/lib/auth'
import type { AlertInfo, ApiResponse } from '@/types'

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

    const { searchParams } = new URL(req.url)
    const sourceUserId = searchParams.get('sourceUserId')
    const targetUserId = searchParams.get('targetUserId')

    const where: Record<string, unknown> = {}

    if (sourceUserId) {
      const binding = await prisma.familyBinding.findFirst({
        where: { familyId: userId, patientId: sourceUserId, verified: true },
      })
      if (!binding) {
        return NextResponse.json(
          { success: false, error: '无权查看该患者的预警' } as ApiResponse,
          { status: 403 }
        )
      }
      where.sourceUserId = sourceUserId
    } else if (targetUserId && targetUserId !== userId) {
      return NextResponse.json(
        { success: false, error: '无权查看其他用户的预警' } as ApiResponse,
        { status: 403 }
      )
    } else if (targetUserId) {
      where.targetUserId = targetUserId
    } else {
      where.targetUserId = userId
    }

    const alerts = await prisma.alert.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        targetUser: { select: { name: true } },
        sourceUser: { select: { name: true } },
      },
    })

    const data: AlertInfo[] = alerts.map((a) => ({
      id: a.id,
      targetUserId: a.targetUserId,
      sourceUserId: a.sourceUserId,
      sourceUserName: a.sourceUser.name,
      level: a.level as AlertInfo['level'],
      title: a.title,
      message: a.message,
      status: a.status as AlertInfo['status'],
      createdAt: a.createdAt.toISOString(),
    }))

    return NextResponse.json({ success: true, data } as ApiResponse<AlertInfo[]>)
  } catch (error) {
    console.error('获取预警列表失败:', error)
    return NextResponse.json({ success: false, error: '获取预警列表失败' } as ApiResponse, { status: 500 })
  }
}
