'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [tab, setTab] = useState<'PATIENT' | 'FAMILY'>('PATIENT')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError('')
    if (!phone || !password) {
      setError('请输入手机号和密码')
      return
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setError('手机号格式不正确')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password }),
      })
      const json = await res.json()

      if (!json.success) {
        setError(json.error || '登录失败')
        setLoading(false)
        return
      }

      localStorage.setItem('token', json.data.token)
      localStorage.setItem('user', JSON.stringify(json.data.user))
      document.cookie = `token=${json.data.token}; path=/; max-age=${7 * 24 * 60 * 60}`

      if (json.data.user.role === 'PATIENT') {
        router.push('/')
      } else {
        router.push('/monitor')
      }
    } catch {
      setError('网络错误，请稍后重试')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-patient-bg px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl-patient font-bold text-center text-patient-primary mb-8">
          慢病用药小管家
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => { setTab('PATIENT'); setError('') }}
              className={`flex-1 py-3 text-2xl-patient font-medium rounded-xl transition-colors ${
                tab === 'PATIENT'
                  ? 'bg-patient-primary text-white shadow'
                  : 'text-gray-500'
              }`}
            >
              患者登录
            </button>
            <button
              onClick={() => { setTab('FAMILY'); setError('') }}
              className={`flex-1 py-3 text-2xl-patient font-medium rounded-xl transition-colors ${
                tab === 'FAMILY'
                  ? 'bg-patient-primary text-white shadow'
                  : 'text-gray-500'
              }`}
            >
              家属登录
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-2xl-patient font-medium text-gray-700 mb-2">
                手机号
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                className="w-full px-4 py-4 text-2xl-patient border-2 border-gray-200 rounded-xl focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-2xl-patient font-medium text-gray-700 mb-2">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full px-4 py-4 text-2xl-patient border-2 border-gray-200 rounded-xl focus:border-patient-primary focus:outline-none"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-xl-patient text-patient-danger">{error}</p>
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full py-4 text-2xl-patient font-bold text-white bg-patient-primary rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/register"
              className="text-2xl-patient text-patient-primary hover:underline"
            >
              还没有账号？去注册
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
