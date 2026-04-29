import { NextResponse } from 'next/server'

export function successResponse<T>(data: T): NextResponse {
  return NextResponse.json({ success: true, data })
}

export function errorResponse(error: string, status: number = 400): NextResponse {
  return NextResponse.json({ success: false, error }, { status })
}
