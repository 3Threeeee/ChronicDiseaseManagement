'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState<'PATIENT' | 'FAMILY'>('PATIENT')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async () => {
    setError('')

    if (!phone || !name || !password || !confirmPassword) {
      setError('请填写所有字段')
      return
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setError('手机号格式不正确')
      return
    }
    if (password.length < 6) {
      setError('密码至少6位')
      return
    }
    if (password !== confirmPassword) {
      setError('两次密码不一致')
      return
    }
    if (name.trim().length === 0) {
      setError('姓名不能为空')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, password, name: name.trim(), role }),
      })
      const json = await res.json()

      if (!json.success) {
        setError(json.error || '注册失败')
        setLoading(false)
        return
      }

      router.push('/login?registered=1')
    } catch {
      setError('网络错误，请稍后重试')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-patient-bg px-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl-patient font-bold text-center text-patient-primary mb-8">
          创建账号
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
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
                姓名
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="请输入姓名"
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
                placeholder="至少6位密码"
                className="w-full px-4 py-4 text-2xl-patient border-2 border-gray-200 rounded-xl focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-2xl-patient font-medium text-gray-700 mb-2">
                确认密码
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="再次输入密码"
                className="w-full px-4 py-4 text-2xl-patient border-2 border-gray-200 rounded-xl focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-2xl-patient font-medium text-gray-700 mb-2">
                身份
              </label>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setRole('PATIENT')}
                  className={`flex-1 py-3 text-2xl-patient font-medium rounded-xl transition-colors ${
                    role === 'PATIENT'
                      ? 'bg-patient-primary text-white shadow'
                      : 'text-gray-500'
                  }`}
                >
                  我是患者
                </button>
                <button
                  onClick={() => setRole('FAMILY')}
                  className={`flex-1 py-3 text-2xl-patient font-medium rounded-xl transition-colors ${
                    role === 'FAMILY'
                      ? 'bg-patient-primary text-white shadow'
                      : 'text-gray-500'
                  }`}
                >
                  我是家属
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                <p className="text-xl-patient text-patient-danger">{error}</p>
              </div>
            )}

            <button
              onClick={handleRegister}
              disabled={loading}
              className="w-full py-4 text-2xl-patient font-bold text-white bg-patient-primary rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {loading ? '注册中...' : '注册'}
            </button>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/login"
              className="text-2xl-patient text-patient-primary hover:underline"
            >
              已有账号？去登录
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
