'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { UserProfile, ApiResponse } from '@/types'

export default function FamilyProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = document.cookie
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1]
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
    <div className="min-h-screen bg-patient-bg flex flex-col">
      <header className="bg-white border-b shadow-sm px-6 py-4">
        <p className="text-2xl-patient text-gray-500">
          家人守护{user?.name && <span>，{user.name}</span>}
        </p>
      </header>

      <main className="flex-1 px-4 py-6 space-y-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="w-20 h-20 rounded-full bg-patient-primary/10 flex items-center justify-center mx-auto mb-3 text-5xl">
            👨‍👩‍👧
          </div>
          <h1 className="text-3xl-patient font-extrabold text-gray-800">
            {user?.name || '用户'}
          </h1>
          <p className="text-xl-patient text-gray-400 mt-1">
            {user?.phone || ''}
          </p>
          <span className="inline-block mt-2 px-4 py-1 rounded-full bg-blue-50 text-patient-primary text-lg font-bold">
            家属端
          </span>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => router.push('/monitor')}
            className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">📊</span>
              <span className="text-2xl-patient font-bold text-gray-800">家人监控</span>
            </div>
            <span className="text-2xl text-gray-300">›</span>
          </button>

          <button
            onClick={() => router.push('/alerts')}
            className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">🔔</span>
              <span className="text-2xl-patient font-bold text-gray-800">预警中心</span>
            </div>
            <span className="text-2xl text-gray-300">›</span>
          </button>

          <button
            onClick={() => router.push('/bind')}
            className="w-full bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">➕</span>
              <span className="text-2xl-patient font-bold text-gray-800">添加家人</span>
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
      </main>
    </div>
  )
}
