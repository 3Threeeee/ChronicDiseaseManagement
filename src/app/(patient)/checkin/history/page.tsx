'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, useMemo } from 'react'
import Timeline from '@/components/ui/Timeline'
import type { TimelineItem } from '@/components/ui/Timeline'
import type { CheckInInfo, ApiResponse } from '@/types'

interface DayStatus {
  date: string
  hasCheckIn: boolean
  hasMissed: boolean
}

export default function CheckInHistoryPage() {
  const router = useRouter()
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  })
  const [selectedDate, setSelectedDate] = useState(() => {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
  })
  const [dayStatuses, setDayStatuses] = useState<DayStatus[]>([])
  const [detailItems, setDetailItems] = useState<CheckInInfo[]>([])
  const [loading, setLoading] = useState(false)
  const [detailLoading, setDetailLoading] = useState(false)

  const [year, month] = currentMonth.split('-').map(Number)

  const fetchMonthStatus = async () => {
    setLoading(true)
    try {
      const startDate = `${year}-${String(month).padStart(2, '0')}-01`
      const lastDay = new Date(year, month, 0).getDate()
      const endDate = `${year}-${String(month).padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`

      const res = await fetch(`/api/checkins/history?startDate=${startDate}&endDate=${endDate}`)
      const json: ApiResponse<CheckInInfo[]> = await res.json()

      if (!json.success || !json.data) {
        setDayStatuses([])
        return
      }

      const dateMap = new Map<string, { done: boolean; missed: boolean }>()
      for (const item of json.data) {
        const dateKey = item.scheduledTime.substring(0, 10) || ''
        if (!dateMap.has(dateKey)) {
          dateMap.set(dateKey, { done: false, missed: false })
        }
        const entry = dateMap.get(dateKey)!
        if (item.actualTime) entry.done = true
        if (item.missed) entry.missed = true
      }

      const statuses: DayStatus[] = []
      for (const [date, status] of dateMap) {
        statuses.push({
          date,
          hasCheckIn: status.done,
          hasMissed: status.missed && !status.done,
        })
      }

      setDayStatuses(statuses)
    } catch {
      setDayStatuses([])
    } finally {
      setLoading(false)
    }
  }

  const fetchDetail = async (date: string) => {
    setDetailLoading(true)
    try {
      const res = await fetch(`/api/checkins/history?startDate=${date}&endDate=${date}`)
      const json: ApiResponse<CheckInInfo[]> = await res.json()
      if (json.success && json.data) {
        const sorted = [...json.data].sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime))
        setDetailItems(sorted)
      } else {
        setDetailItems([])
      }
    } catch {
      setDetailItems([])
    } finally {
      setDetailLoading(false)
    }
  }

  useEffect(() => {
    fetchMonthStatus()
  }, [currentMonth])

  useEffect(() => {
    if (selectedDate) fetchDetail(selectedDate)
  }, [selectedDate])

  const prevMonth = () => {
    const d = new Date(year, month - 2, 1)
    setCurrentMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`)
    setSelectedDate('')
  }

  const nextMonth = () => {
    const d = new Date(year, month, 1)
    setCurrentMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`)
    setSelectedDate('')
  }

  const goToday = () => {
    const now = new Date()
    setCurrentMonth(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`)
    setSelectedDate(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`)
  }

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, month - 1, 1).getDay()
    const daysInMonth = new Date(year, month, 0).getDate()
    const daysInPrevMonth = new Date(year, month - 1, 0).getDate()

    const cells: { day: number; monthOffset: number; date: string }[] = []

    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i
      const m = month - 1 === 0 ? 12 : month - 1
      const y = month - 1 === 0 ? year - 1 : year
      cells.push({ day: d, monthOffset: -1, date: `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
    }

    for (let i = 1; i <= daysInMonth; i++) {
      cells.push({ day: i, monthOffset: 0, date: `${year}-${String(month).padStart(2, '0')}-${String(i).padStart(2, '0')}` })
    }

    const remaining = 42 - cells.length
    for (let i = 1; i <= remaining; i++) {
      const m = month + 1 > 12 ? 1 : month + 1
      const y = month + 1 > 12 ? year + 1 : year
      cells.push({ day: i, monthOffset: 1, date: `${y}-${String(m).padStart(2, '0')}-${String(i).padStart(2, '0')}` })
    }

    return cells
  }, [year, month])

  const statusMap = new Map(dayStatuses.map((s) => [s.date, s]))

  const detailTimelineItems: TimelineItem[] = detailItems.map((item) => ({
    id: item.id,
    time: item.scheduledTime,
    title: item.medicineName,
    subtitle: `${item.dosage}${item.actualTime ? ' · 实际 ' + item.actualTime : ''}`,
    status: item.actualTime ? 'done' : item.missed ? 'missed' : 'upcoming',
  }))

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.back()}
          className="text-3xl-patient text-patient-primary font-bold"
        >
          ←
        </button>
        <h1 className="text-4xl-patient font-extrabold text-gray-800">服药日历</h1>
        <button
          onClick={goToday}
          className="text-xl-patient text-patient-primary font-bold"
        >
          今天
        </button>
      </div>

      <div className="bg-white rounded-3xl p-4 shadow-sm mb-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prevMonth} className="text-3xl-patient text-gray-400 font-bold px-3">
            ‹
          </button>
          <h2 className="text-3xl-patient font-extrabold text-gray-700">
            {year}年{month}月
          </h2>
          <button onClick={nextMonth} className="text-3xl-patient text-gray-400 font-bold px-3">
            ›
          </button>
        </div>

        <div className="grid grid-cols-7 text-center mb-2">
          {['日', '一', '二', '三', '四', '五', '六'].map((w) => (
            <div key={w} className="text-lg text-gray-400 font-bold py-1">
              {w}
            </div>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-xl-patient text-gray-400 py-8">加载中...</p>
        ) : (
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((cell, idx) => {
              const s = statusMap.get(cell.date)
              const isSelected = cell.date === selectedDate
              const isToday = cell.date === new Date().toISOString().substring(0, 10)
              const isOtherMonth = cell.monthOffset !== 0

              return (
                <button
                  key={idx}
                  onClick={() => !isOtherMonth && setSelectedDate(cell.date)}
                  disabled={isOtherMonth}
                  className={`aspect-square flex flex-col items-center justify-center rounded-xl text-2xl-patient font-bold transition-colors
                    ${isOtherMonth ? 'text-gray-200' : ''}
                    ${isSelected ? 'bg-patient-primary text-white shadow-md scale-110' : ''}
                    ${isToday && !isSelected ? 'border-2 border-patient-primary' : ''}
                  `}
                >
                  <span>{cell.day}</span>
                  {s && !isOtherMonth && !isSelected && (
                    <span
                      className={`w-2 h-2 rounded-full mt-0.5 ${
                        s.hasCheckIn ? 'bg-patient-success' : s.hasMissed ? 'bg-patient-danger' : ''
                      }`}
                    />
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {selectedDate && (
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h3 className="text-2xl-patient font-bold text-gray-700 mb-3">
            {selectedDate}
          </h3>
          {detailLoading ? (
            <p className="text-xl-patient text-gray-400 py-4">加载中...</p>
          ) : detailTimelineItems.length === 0 ? (
            <p className="text-xl-patient text-gray-400 py-4">当天无服药记录</p>
          ) : (
            <Timeline items={detailTimelineItems} />
          )}
        </div>
      )}
    </div>
  )
}
