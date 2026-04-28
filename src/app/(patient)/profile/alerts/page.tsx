'use client'

import { useEffect, useState } from 'react'
import type { ApiResponse } from '@/types'

interface SubscriptionData {
  id: string
  userId: string
  missAlertEnabled: boolean
  inventoryAlertEnabled: boolean
  sideEffectAlertEnabled: boolean
  missThresholdMinutes: number
}

const THRESHOLD_OPTIONS = [30, 60, 90, 120]

export default function PatientAlertSettingsPage() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const [missAlertEnabled, setMissAlertEnabled] = useState(true)
  const [inventoryAlertEnabled, setInventoryAlertEnabled] = useState(true)
  const [sideEffectAlertEnabled, setSideEffectAlertEnabled] = useState(true)
  const [missThresholdMinutes, setMissThresholdMinutes] = useState(60)

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

    fetch('/api/alerts/subscription', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((json: ApiResponse<SubscriptionData>) => {
        if (json.success && json.data) {
          const sub = json.data
          setSubscription(sub)
          setMissAlertEnabled(sub.missAlertEnabled)
          setInventoryAlertEnabled(sub.inventoryAlertEnabled)
          setSideEffectAlertEnabled(sub.sideEffectAlertEnabled)
          setMissThresholdMinutes(sub.missThresholdMinutes)
        } else {
          setError(json.error || '加载失败')
        }
      })
      .catch(() => setError('网络错误，请重试'))
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    const token = document.cookie
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1]
    if (!token) {
      setError('请先登录')
      return
    }

    setSaving(true)
    setError('')
    setSuccessMsg('')

    try {
      const res = await fetch('/api/alerts/subscription', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          missAlertEnabled,
          inventoryAlertEnabled,
          sideEffectAlertEnabled,
          missThresholdMinutes,
        }),
      })
      const json: ApiResponse<SubscriptionData> = await res.json()
      if (json.success) {
        setSuccessMsg('设置已保存')
        setTimeout(() => setSuccessMsg(''), 3000)
      } else {
        setError(json.error || '保存失败')
      }
    } catch {
      setError('网络错误，请重试')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-2xl-patient text-gray-400">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <h1 className="text-3xl-patient font-extrabold text-gray-800 mb-6">
        提醒设置
      </h1>

      {error && (
        <div className="mb-4 p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <p className="text-xl-patient text-red-600 font-bold">{error}</p>
        </div>
      )}

      {successMsg && (
        <div className="mb-4 p-4 rounded-xl bg-green-50 border-2 border-green-300">
          <p className="text-xl-patient text-green-600 font-bold">{successMsg}</p>
        </div>
      )}

      <div className="flex flex-col gap-5">
        {/* 漏服提醒 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-2xl-patient font-bold text-gray-800">漏服提醒</h2>
              <p className="text-xl-patient text-gray-500 mt-1">超时未服药时通知家属</p>
            </div>
            <button
              onClick={() => setMissAlertEnabled(!missAlertEnabled)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                missAlertEnabled ? 'bg-patient-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                  missAlertEnabled ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {missAlertEnabled && (
            <div>
              <p className="text-xl-patient font-bold text-gray-600 mb-2">
                提醒阈值（超时多久后通知）
              </p>
              <div className="flex gap-2">
                {THRESHOLD_OPTIONS.map((val) => (
                  <button
                    key={val}
                    onClick={() => setMissThresholdMinutes(val)}
                    className={`text-xl-patient px-5 py-2 rounded-xl font-bold border-2 transition-all ${
                      missThresholdMinutes === val
                        ? 'border-patient-primary bg-blue-50 text-patient-primary'
                        : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {val}分钟
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 库存不足提醒 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl-patient font-bold text-gray-800">库存不足提醒</h2>
              <p className="text-xl-patient text-gray-500 mt-1">药品低于预警阈值时通知家属</p>
            </div>
            <button
              onClick={() => setInventoryAlertEnabled(!inventoryAlertEnabled)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                inventoryAlertEnabled ? 'bg-patient-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                  inventoryAlertEnabled ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </section>

        {/* 副作用提醒 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl-patient font-bold text-gray-800">副作用提醒</h2>
              <p className="text-xl-patient text-gray-500 mt-1">反馈严重副作用时通知家属</p>
            </div>
            <button
              onClick={() => setSideEffectAlertEnabled(!sideEffectAlertEnabled)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                sideEffectAlertEnabled ? 'bg-patient-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                  sideEffectAlertEnabled ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </section>

        {/* 保存按钮 */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-5 rounded-2xl bg-patient-primary text-white font-bold text-3xl-patient shadow-xl disabled:opacity-50 hover:opacity-90 transition-opacity"
        >
          {saving ? '保存中...' : '保存设置'}
        </button>
      </div>
    </div>
  )
}
