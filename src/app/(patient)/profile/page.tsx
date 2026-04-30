'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { UserProfile, ApiResponse } from '@/types'

export default function PatientProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let token = document.cookie
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1]
    if (!token) {
      try {
        token = localStorage.getItem('token') || ''
      } catch { /* ignore */ }
    }
    if (!token) {
      setError('请先登录')
      setLoading(false)
      return
    }

    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json: ApiResponse<UserProfile>) => {
        if (json.success && json.data) {
          setUser(json.data)
        } else {
          setError(json.error || '加载失败')
        }
      })
      .catch(() => setError('网络错误，请重试'))
      .finally(() => setLoading(false))
  }, [])

  const handleLogout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-2xl-patient text-gray-400">加载中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-2xl-patient text-gray-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="bg-white rounded-2xl p-6 shadow-sm text-center relative">
        <button
          onClick={() => router.push('/profile/settings')}
          className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 transition-colors"
          title="设置"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>

        <div className="w-20 h-20 rounded-full bg-patient-primary/10 flex items-center justify-center mx-auto mb-3 text-5xl">
          👤
        </div>
        <h1 className="text-3xl-patient font-extrabold text-gray-800">
          {user?.name || '用户'}
        </h1>
        <p className="text-xl-patient text-gray-400 mt-1">
          {user?.phone || ''}
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => router.push('/profile/alerts')}
          className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">🔔</span>
            <span className="text-2xl-patient font-bold text-gray-800">提醒设置</span>
          </div>
          <span className="text-2xl text-gray-300">›</span>
        </button>

        <button
          onClick={() => router.push('/medicines')}
          className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">💊</span>
            <span className="text-2xl-patient font-bold text-gray-800">药品管理</span>
          </div>
          <span className="text-2xl text-gray-300">›</span>
        </button>

        <button
          onClick={() => router.push('/inventory')}
          className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">📦</span>
            <span className="text-2xl-patient font-bold text-gray-800">库存管理</span>
          </div>
          <span className="text-2xl text-gray-300">›</span>
        </button>

        <button
          onClick={() => router.push('/checkin/history')}
          className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-4">
            <span className="text-3xl">📅</span>
            <span className="text-2xl-patient font-bold text-gray-800">打卡历史</span>
          </div>
          <span className="text-2xl text-gray-300">›</span>
        </button>
      </div>

      <button
        onClick={handleLogout}
        className="w-full py-5 rounded-2xl bg-red-50 border-2 border-red-200 text-patient-danger font-bold text-2xl-patient active:scale-[0.98] transition-transform"
      >
        退出登录
      </button>
    </div>
  )
}
