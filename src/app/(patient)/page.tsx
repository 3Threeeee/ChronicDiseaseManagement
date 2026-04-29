'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback } from 'react'
import type { TodaySchedule, ApiResponse } from '@/types'

export default function PatientHomePage() {
  const router = useRouter()
  const [schedule, setSchedule] = useState<TodaySchedule | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchToday = useCallback(async () => {
    try {
      const res = await fetch('/api/checkins/today')
      const json: ApiResponse<TodaySchedule> = await res.json()
      if (json.success) {
        setSchedule(json.data ?? null)
      }
    } catch {
      // ignore
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchToday()
  }, [fetchToday])

  const items = schedule?.items ?? []
  const doneCount = items.filter((i) => !!i.actualTime || (i.id && !i.missed)).length
  const missedCount = items.filter((i) => i.missed).length
  const pendingCount = items.length - doneCount - missedCount
  const rate = items.length > 0 ? Math.round((doneCount / items.length) * 100) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-2xl-patient text-gray-400">加载中...</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="bg-white rounded-3xl p-6 shadow-sm">
        <h2 className="text-2xl-patient font-bold text-gray-800 mb-4">
          今日服药进度
        </h2>

        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-5xl mb-4">💊</p>
            <p className="text-2xl-patient text-gray-500 mb-4">还没有服药任务</p>
            <button
              onClick={() => router.push('/patient/medicines')}
              className="text-xl-patient font-bold text-patient-primary underline"
            >
              去添加药品
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-around mb-6">
              <div className="text-center">
                <p className="text-4xl-patient font-extrabold text-patient-success">
                  {doneCount}
                </p>
                <p className="text-lg text-gray-500">已服药</p>
              </div>
              <div className="text-center">
                <p className="text-4xl-patient font-extrabold text-patient-warning">
                  {pendingCount}
                </p>
                <p className="text-lg text-gray-500">待服药</p>
              </div>
              <div className="text-center">
                <p className="text-4xl-patient font-extrabold text-patient-danger">
                  {missedCount}
                </p>
                <p className="text-lg text-gray-500">已漏服</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    rate === 100
                      ? 'bg-patient-success'
                      : rate >= 50
                      ? 'bg-patient-warning'
                      : 'bg-patient-danger'
                  }`}
                  style={{ width: `${rate}%` }}
                />
              </div>
              <span className="text-xl-patient font-bold text-gray-600 shrink-0">
                {rate}%
              </span>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => router.push('/patient/checkin')}
          className="bg-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-4xl mb-2">💊</p>
          <p className="text-2xl-patient font-bold text-gray-800">服药打卡</p>
          <p className="text-lg text-gray-400 mt-1">今日服药记录</p>
        </button>
        <button
          onClick={() => router.push('/patient/inventory')}
          className="bg-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-4xl mb-2">📦</p>
          <p className="text-2xl-patient font-bold text-gray-800">库存管理</p>
          <p className="text-lg text-gray-400 mt-1">查看药品库存</p>
        </button>
        <button
          onClick={() => router.push('/patient/soap')}
          className="bg-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-4xl mb-2">📋</p>
          <p className="text-2xl-patient font-bold text-gray-800">SOAP记录</p>
          <p className="text-lg text-gray-400 mt-1">记录健康状态</p>
        </button>
        <button
          onClick={() => router.push('/patient/checkin/history')}
          className="bg-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
        >
          <p className="text-4xl mb-2">📅</p>
          <p className="text-2xl-patient font-bold text-gray-800">打卡历史</p>
          <p className="text-lg text-gray-400 mt-1">查看历史记录</p>
        </button>
      </div>
    </div>
  )
}
