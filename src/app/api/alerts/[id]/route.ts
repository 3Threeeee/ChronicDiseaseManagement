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

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = getUserId(req)
    if (!userId) {
      return NextResponse.json({ success: false, error: '未登录' } as ApiResponse, { status: 401 })
    }

    const { id } = await params

    const body = await req.json()
    const { status } = body

    if (!status || !['READ', 'RESOLVED'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'status 必须是 READ 或 RESOLVED' } as ApiResponse,
        { status: 400 }
      )
    }

    const alert = await prisma.alert.findUnique({ where: { id } })
    if (!alert || alert.targetUserId !== userId) {
      return NextResponse.json({ success: false, error: '预警不存在' } as ApiResponse, { status: 404 })
    }

    const updateData: Record<string, unknown> = { status }
    if (status === 'READ' && !alert.readAt) {
      updateData.readAt = new Date()
    }

    const updated = await prisma.alert.update({
      where: { id },
      data: updateData,
      include: {
        sourceUser: { select: { name: true } },
      },
    })

    const data: AlertInfo = {
      id: updated.id,
      targetUserId: updated.targetUserId,
      sourceUserId: updated.sourceUserId,
      sourceUserName: updated.sourceUser.name,
      level: updated.level as AlertInfo['level'],
      title: updated.title,
      message: updated.message,
      status: updated.status as AlertInfo['status'],
      createdAt: updated.createdAt.toISOString(),
    }

    return NextResponse.json({ success: true, data } as ApiResponse<AlertInfo>)
  } catch (error) {
    console.error('更新预警状态失败:', error)
    return NextResponse.json({ success: false, error: '更新预警状态失败' } as ApiResponse, { status: 500 })
  }
}
