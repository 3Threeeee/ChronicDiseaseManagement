'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useCallback, useRef } from 'react'
import Timeline from '@/components/ui/Timeline'
import SwipeConfirm from '@/components/ui/SwipeConfirm'
import EmptyState from '@/components/ui/EmptyState'
import type { TimelineItem } from '@/components/ui/Timeline'
import type { TodaySchedule, CheckInInfo, ApiResponse } from '@/types'

function getWeekday(): string {
  const days = ['日', '一', '二', '三', '四', '五', '六']
  const d = new Date()
  return days[d.getDay()]
}

function getDateStr(): string {
  const now = new Date()
  return `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`
}

export default function CheckInPage() {
  const router = useRouter()
  const [schedule, setSchedule] = useState<TodaySchedule | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [swipeTarget, setSwipeTarget] = useState<CheckInInfo | null>(null)
  const [swipeOpen, setSwipeOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchToday = useCallback(async () => {
    try {
      const res = await fetch('/api/checkins/today')
      const json: ApiResponse<TodaySchedule> = await res.json()
      if (!json.success) {
        setError(json.error || '加载失败')
        return
      }
      setSchedule(json.data ?? null)
    } catch {
      setError('网络错误')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchToday()
    intervalRef.current = setInterval(fetchToday, 30000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [fetchToday])

  const handleItemClick = (item: TimelineItem) => {
    if (item.status === 'missed' || item.status === 'done') return
    const info = schedule?.items.find((i) =>
      i.medicineId + '_' + i.scheduledTime === item.id ||
      (i.id && i.id === item.id)
    )
    if (info) {
      setSwipeTarget(info)
      setSwipeOpen(true)
    }
  }

  const handleSwipeConfirm = async () => {
    if (!swipeTarget) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/checkins', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          medicineId: swipeTarget.medicineId,
          scheduledTime: swipeTarget.scheduledTime,
          confirmType: 'swipe',
        }),
      })
      const json: ApiResponse<CheckInInfo> = await res.json()
      if (json.success) {
        setSwipeOpen(false)
        setSwipeTarget(null)
        fetchToday()
      } else {
        setError(json.error || '打卡失败')
      }
    } catch {
      setError('网络错误')
    } finally {
      setSubmitting(false)
    }
  }

  const toTimelineItems = (): TimelineItem[] => {
    if (!schedule?.items) return []
    return schedule.items.map((item) => {
      const hasCheckIn = !!item.actualTime || (!!item.id && !item.missed)
      const now = new Date()
      const [h, m] = item.scheduledTime.split(':').map(Number)
      const scheduled = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0)
      const diffMin = (now.getTime() - scheduled.getTime()) / (1000 * 60)

      let status: TimelineItem['status'] = 'upcoming'
      if (hasCheckIn) {
        status = 'done'
      } else if (item.missed || diffMin > 30) {
        status = 'missed'
      } else if (diffMin >= -30 && diffMin <= 30) {
        status = 'pending'
      }

      return {
        id: item.id || `${item.medicineId}_${item.scheduledTime}`,
        time: item.scheduledTime,
        title: item.medicineName,
        subtitle: `${item.dosage}${item.confirmType ? ' · ' + (item.confirmType === 'swipe' ? '滑动确认' : '手动确认') : ''}`,
        status,
        current: !hasCheckIn && diffMin >= -30 && diffMin <= 30,
      }
    })
  }

  const items = toTimelineItems()
  const doneCount = items.filter((i) => i.status === 'done').length
  const missedCount = items.filter((i) => i.status === 'missed').length

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-3xl-patient text-gray-500">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      {error && (
        <div className="mb-4 p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <p className="text-xl-patient text-red-600 font-bold">{error}</p>
          <button
            onClick={() => setError('')}
            className="text-lg font-bold text-patient-primary underline mt-1"
          >
            关闭
          </button>
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-4xl-patient font-extrabold text-gray-800">
          {getDateStr()}
        </h1>
        <p className="text-2xl-patient text-gray-500 mt-1">
          星期{getWeekday()}
        </p>
      </div>

      {items.length === 0 ? (
        <EmptyState
          icon="💊"
          title="还没有添加药品"
          description="先去添加药品，才能开始服药打卡哦"
          action={{
            label: '去添加药品',
            onClick: () => router.push('/medicines'),
          }}
        />
      ) : (
        <>
          <div className="flex justify-center gap-6 mb-6">
            <div className="text-center">
              <p className="text-4xl-patient font-extrabold text-patient-success">
                {doneCount}
              </p>
              <p className="text-lg text-gray-500">已服药</p>
            </div>
            <div className="text-center">
              <p className="text-4xl-patient font-extrabold text-patient-danger">
                {missedCount}
              </p>
              <p className="text-lg text-gray-500">已漏服</p>
            </div>
            <div className="text-center">
              <p className="text-4xl-patient font-extrabold text-patient-primary">
                {items.length - doneCount - missedCount}
              </p>
              <p className="text-lg text-gray-500">待打卡</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-sm">
            <Timeline
              items={items}
              onItemClick={handleItemClick}
            />
          </div>

          {items.filter((i) => i.status === 'upcoming').length === items.length - doneCount - missedCount &&
           items.filter((i) => i.status === 'upcoming').length > 0 && (
            <div className="text-center mt-6">
              <p className="text-2xl-patient text-gray-600 font-bold">🎉 今日无服药任务</p>
            </div>
          )}
        </>
      )}

      <SwipeConfirm
        isOpen={swipeOpen}
        onConfirm={handleSwipeConfirm}
        onCancel={() => {
          setSwipeOpen(false)
          setSwipeTarget(null)
        }}
        title={swipeTarget?.medicineName || '确认服药'}
        subtitle={swipeTarget ? `${swipeTarget.dosage} · ${swipeTarget.scheduledTime}` : undefined}
        confirmText={submitting ? '打卡中...' : '滑动确认服药'}
      />

      <div className="fixed bottom-20 right-4 z-30">
        <button
          onClick={() => router.push('/checkin/history')}
          className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-2xl"
        >
          📅
        </button>
      </div>
    </div>
  )
}
