import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword, generateToken } from '@/lib/auth'

const PHONE_REGEX = /^1[3-9]\d{9}$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, password, name, role } = body

    if (!PHONE_REGEX.test(phone)) {
      return NextResponse.json({ success: false, error: '手机号格式不正确' }, { status: 400 })
    }

    if (!password || password.length < 6) {
      return NextResponse.json({ success: false, error: '密码至少6位' }, { status: 400 })
    }

    if (!name || name.trim().length === 0) {
      return NextResponse.json({ success: false, error: '姓名不能为空' }, { status: 400 })
    }

    if (role !== 'PATIENT' && role !== 'FAMILY') {
      return NextResponse.json({ success: false, error: '身份类型不正确' }, { status: 400 })
    }

    const existing = await prisma.user.findUnique({ where: { phone } })
    if (existing) {
      return NextResponse.json({ success: false, error: '该手机号已注册' }, { status: 409 })
    }

    const passwordHash = await hashPassword(password)

    const user = await prisma.user.create({
      data: {
        phone,
        passwordHash,
        name: name.trim(),
        role: role as 'PATIENT' | 'FAMILY',
        alertSubscriptions: {
          create: {
            missAlertEnabled: true,
            inventoryAlertEnabled: true,
            sideEffectAlertEnabled: true,
            missThresholdMinutes: 60,
          },
        },
      },
    })

    const token = generateToken(user.id, user.role)

    const response = NextResponse.json({
      success: true,
      data: {
        token,
        user: {
          id: user.id,
          phone: user.phone,
          name: user.name,
          role: user.role,
          gender: user.gender,
          birthDate: user.birthDate?.toISOString(),
          avatarUrl: user.avatarUrl,
        },
      },
    })

    response.cookies.set('token', token, {
      httpOnly: true,
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('注册失败:', error)
    return NextResponse.json({ success: false, error: '注册失败，请稍后重试' }, { status: 500 })
  }
}
