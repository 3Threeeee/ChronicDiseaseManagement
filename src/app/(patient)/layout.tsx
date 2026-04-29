'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NavBar from '@/components/ui/NavBar'

function getToken(): string | null {
  const cookieToken = document.cookie.split(';').find((c) => c.trim().startsWith('token='))?.split('=')[1]
  if (cookieToken) return cookieToken
  try {
    const localToken = localStorage.getItem('token')
    if (localToken) return localToken
  } catch { /* ignore */ }
  return null
}

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [greeting, setGreeting] = useState('')
  const [userName, setUserName] = useState('')
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const hour = new Date().getHours()
    let greet = '早上好'
    if (hour >= 12 && hour < 18) greet = '下午好'
    else if (hour >= 18 || hour < 5) greet = '晚上好'
    setGreeting(greet)

    const token = getToken()
    if (!token) {
      router.replace('/login')
      return
    }

    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success && json.data) {
          setUserName(json.data.name)
        } else {
          router.replace('/login')
        }
      })
      .catch(() => {
        router.replace('/login')
      })
      .finally(() => setChecking(false))
  }, [router])

  if (checking) {
    return (
      <div className="min-h-screen bg-patient-bg flex items-center justify-center">
        <p className="text-2xl-patient text-gray-400">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-patient-bg flex flex-col">
      <header className="bg-white border-b shadow-sm px-6 py-4">
        <p className="text-2xl-patient text-gray-500">
          {greeting}
          {userName && <span>，{userName}</span>}
        </p>
      </header>

      <main className="flex-1 pb-20">
        {children}
      </main>

      <NavBar
        items={[
          { label: '首页', icon: '🏠', href: '/', active: false },
          { label: '服药', icon: '💊', href: '/checkin', active: false },
          { label: '记录', icon: '📋', href: '/soap', active: false },
          { label: '我的', icon: '👤', href: '/profile', active: false },
        ]}
        role="patient"
      />
    </div>
  )
}
