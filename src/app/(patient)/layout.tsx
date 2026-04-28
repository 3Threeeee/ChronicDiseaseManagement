'use client'

import { useEffect, useState } from 'react'
import NavBar from '@/components/ui/NavBar'

export default function PatientLayout({ children }: { children: React.ReactNode }) {
  const [greeting, setGreeting] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const hour = new Date().getHours()
    let greet = '早上好'
    if (hour >= 12 && hour < 18) greet = '下午好'
    else if (hour >= 18 || hour < 5) greet = '晚上好'
    setGreeting(greet)

    const token = document.cookie.split(';').find((c) => c.trim().startsWith('token='))?.split('=')[1]
    if (token) {
      fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success && json.data) {
            setUserName(json.data.name)
          }
        })
        .catch(() => {})
    }
  }, [])

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
          { label: '服药', icon: '💊', href: '/patient/checkin', active: false },
          { label: '记录', icon: '📋', href: '/patient/soap', active: false },
          { label: '我的', icon: '👤', href: '/patient/profile', active: false },
        ]}
        role="patient"
      />
    </div>
  )
}
