import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const WHITELIST_PATHS = ['/login', '/register', '/api/auth/login', '/api/auth/register']

function isWhitelisted(pathname: string): boolean {
  return WHITELIST_PATHS.some(
    (path) => pathname === path || pathname.startsWith('/api/auth/')
  )
}

function isApiRoute(pathname: string): boolean {
  return pathname.startsWith('/api/')
}

function isStaticResource(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|ico|css|js|woff|woff2|ttf|eot)$/) !== null
  )
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (isStaticResource(pathname)) {
    return NextResponse.next()
  }

  if (isWhitelisted(pathname)) {
    return NextResponse.next()
  }

  const token =
    request.cookies.get('token')?.value ||
    request.headers.get('Authorization')?.replace('Bearer ', '')

  if (!token) {
    if (isApiRoute(pathname)) {
      return NextResponse.json(
        { success: false, error: '未登录，请先登录' },
        { status: 401 }
      )
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
