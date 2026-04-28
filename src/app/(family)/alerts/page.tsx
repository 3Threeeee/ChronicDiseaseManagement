'use client'

import { useEffect, useState, useCallback } from 'react'
import AlertBadge from '@/components/ui/AlertBadge'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import type { AlertInfo, ApiResponse } from '@/types'

const STATUS_TABS = [
  { key: '', label: '全部' },
  { key: 'UNREAD', label: '未读' },
  { key: 'READ', label: '已读' },
  { key: 'RESOLVED', label: '已处理' },
] as const

function formatTime(iso: string): string {
  const d = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMin = Math.floor(diffMs / 60000)
  const diffHour = Math.floor(diffMs / 3600000)

  if (diffMin < 1) return '刚刚'
  if (diffMin < 60) return `${diffMin}分钟前`
  if (diffHour < 24) return `${diffHour}小时前`
  const m = d.getMonth() + 1
  const day = d.getDate()
  return `${m}月${day}日 ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
}

export default function FamilyAlertsPage() {
  const [alerts, setAlerts] = useState<AlertInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('')
  const [markingId, setMarkingId] = useState<string | null>(null)

  const fetchAlerts = useCallback(async () => {
    const token = document.cookie
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1]
    if (!token) {
      setError('请先登录')
      setLoading(false)
      return
    }

    try {
      const url = new URL('/api/alerts', window.location.origin)
      if (activeTab) url.searchParams.set('status', activeTab)

      const res = await fetch(url.toString(), {
        headers: { Authorization: `Bearer ${token}` },
      })
      const json: ApiResponse<AlertInfo[]> = await res.json()
      if (json.success && json.data) {
        setAlerts(json.data)
      } else {
        setError(json.error || '加载失败')
      }
    } catch {
      setError('网络错误，请重试')
    } finally {
      setLoading(false)
    }
  }, [activeTab])

  useEffect(() => {
    fetchAlerts()
  }, [fetchAlerts])

  const handleMarkAsRead = async (alertId: string) => {
    const token = document.cookie
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1]
    if (!token || markingId) return

    setMarkingId(alertId)
    try {
      const res = await fetch(`/api/alerts/${alertId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: 'READ' }),
      })
      const json: ApiResponse<AlertInfo> = await res.json()
      if (json.success) {
        setAlerts((prev) =>
          prev.map((a) =>
            a.id === alertId ? { ...a, status: 'READ' } : a
          )
        )
      }
    } catch {
      // ignore
    } finally {
      setMarkingId(null)
    }
  }

  const unreadCount = alerts.filter((a) => a.status === 'UNREAD').length

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl-patient font-bold text-gray-800">预警中心</h1>
        {unreadCount > 0 && (
          <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full bg-red-500 text-white text-sm font-bold">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key)
              setLoading(true)
            }}
            className={`text-xl-patient px-4 py-2 rounded-full font-bold shrink-0 transition-colors ${
              activeTab === tab.key
                ? 'bg-patient-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <p className="text-xl-patient text-red-600 font-bold">{error}</p>
        </div>
      )}

      {alerts.length === 0 && !error && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <span className="text-5xl">🎉</span>
          <p className="text-2xl-patient text-gray-400 font-bold">暂无预警消息</p>
        </div>
      )}

      <div className="space-y-3">
        {alerts.map((alert) => (
          <button
            key={alert.id}
            onClick={() => {
              if (alert.status === 'UNREAD') {
                handleMarkAsRead(alert.id)
              }
            }}
            disabled={markingId === alert.id}
            className={`w-full text-left bg-white rounded-2xl p-4 shadow-sm transition-all ${
              alert.status === 'UNREAD'
                ? 'border-l-4 border-blue-500'
                : 'border-l-4 border-transparent'
            } ${markingId === alert.id ? 'opacity-50' : 'active:scale-[0.98]'}`}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <AlertBadge level={alert.level} showIcon={true} />
              <span className="text-lg text-gray-400 shrink-0">
                {formatTime(alert.createdAt)}
              </span>
            </div>
            <h3 className="text-2xl-patient font-bold text-gray-800 mb-1">
              {alert.title}
            </h3>
            <p className="text-xl-patient text-gray-600 line-clamp-2">
              {alert.message}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg text-gray-400">
                患者：{alert.sourceUserName}
              </span>
              {alert.status === 'UNREAD' && (
                <span className="text-lg text-blue-500 font-bold">
                  点击标记已读
                </span>
              )}
              {alert.status === 'READ' && (
                <span className="text-lg text-gray-400">已读</span>
              )}
              {alert.status === 'RESOLVED' && (
                <span className="text-lg text-green-500 font-bold">已处理</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
