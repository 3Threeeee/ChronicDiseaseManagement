'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import EmotionPicker from '@/components/ui/EmotionPicker'
import BigInput from '@/components/ui/BigInput'
import type { ApiResponse, UserProfile } from '@/types'

const SEVERITY_OPTIONS = [
  { value: 'MILD' as const, label: '轻微', bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-400' },
  { value: 'MODERATE' as const, label: '中度', bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-400' },
  { value: 'SEVERE' as const, label: '重度', bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-400' },
]

export default function SoapPage() {
  const router = useRouter()
  const [symptomTags, setSymptomTags] = useState<string[]>([])
  const [severity, setSeverity] = useState<'MILD' | 'MODERATE' | 'SEVERE' | null>(null)
  const [subjectiveNote, setSubjectiveNote] = useState('')
  const [bloodPressure, setBloodPressure] = useState('')
  const [bloodSugar, setBloodSugar] = useState('')
  const [heartRate, setHeartRate] = useState('')
  const [weight, setWeight] = useState('')
  const [temperature, setTemperature] = useState('')
  const [assessmentNote, setAssessmentNote] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [userId, setUserId] = useState('')
  const [currentAdherence, setCurrentAdherence] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((json: ApiResponse<UserProfile>) => {
        if (json.success && json.data) {
          setUserId(json.data.id)
        }
      })
      .catch(() => {})
  }, [])

  const handleSave = async () => {
    if (!severity && symptomTags.length === 0 && !subjectiveNote && !bloodPressure && !bloodSugar && !heartRate && !weight && !temperature) {
      setError('请至少填写一项记录')
      return
    }

    setSaving(true)
    setError('')

    try {
      const res = await fetch('/api/soap', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectiveNote: subjectiveNote || undefined,
          symptomSeverity: severity || undefined,
          symptomTags: symptomTags.length > 0 ? symptomTags : undefined,
          bloodPressure: bloodPressure || undefined,
          bloodSugar: bloodSugar ? parseFloat(bloodSugar) : undefined,
          heartRate: heartRate ? parseInt(heartRate, 10) : undefined,
          weight: weight ? parseFloat(weight) : undefined,
          temperature: temperature ? parseFloat(temperature) : undefined,
          assessmentNote: assessmentNote || undefined,
        }),
      })

      const json: ApiResponse<{ adherenceRate?: number }> = await res.json()

      if (!json.success) {
        setError(json.error || '保存失败')
        return
      }

      setCurrentAdherence(json.data?.adherenceRate ?? null)
      router.push('/patient/soap/history')
    } catch {
      setError('网络错误，请重试')
    } finally {
      setSaving(false)
    }
  }

  const adherenceDisplay = currentAdherence
    ? `${currentAdherence}%`
    : '—'

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl-patient font-extrabold text-foreground">
          健康记录
        </h1>
        <button
          type="button"
          onClick={() => router.push('/patient/soap/history')}
          className="text-2xl-patient text-patient-primary font-bold underline"
        >
          历史记录
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <p className="text-xl-patient text-red-600 font-bold">{error}</p>
          <button
            type="button"
            onClick={() => setError('')}
            className="text-2xl-patient text-patient-primary font-bold underline mt-1"
          >
            关闭
          </button>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {/* S - 主观症状 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-3xl-patient font-extrabold text-patient-primary mb-4">
            S 主观症状
          </h2>

          <p className="text-2xl-patient font-bold text-gray-600 mb-3">
            选择您感受的症状：
          </p>
          <EmotionPicker
            selected={symptomTags}
            onChange={setSymptomTags}
          />

          <p className="text-2xl-patient font-bold text-gray-600 mt-5 mb-3">
            症状严重程度：
          </p>
          <div className="flex gap-3">
            {SEVERITY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSeverity(opt.value)}
                className={`text-2xl-patient px-5 py-3 rounded-xl border-2 font-bold transition-all ${
                  severity === opt.value
                    ? `${opt.bg} ${opt.text} ${opt.border} shadow-md`
                    : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <BigInput
              value={subjectiveNote}
              onChange={setSubjectiveNote}
              placeholder="补充描述您的不适感受（可选）"
              label="文字描述"
            />
          </div>
        </section>

        {/* O - 客观体征 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-3xl-patient font-extrabold text-patient-primary mb-4">
            O 客观体征
          </h2>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-2xl-patient font-bold text-gray-600 block mb-2">
                血压 (mmHg)
              </label>
              <input
                type="text"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                placeholder="如：120/80"
                className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-2xl-patient font-bold text-gray-600 block mb-2">
                血糖 (mmol/L)
              </label>
              <input
                type="number"
                step="0.1"
                value={bloodSugar}
                onChange={(e) => setBloodSugar(e.target.value)}
                placeholder="如：5.6"
                className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-2xl-patient font-bold text-gray-600 block mb-2">
                心率 (次/分)
              </label>
              <input
                type="number"
                value={heartRate}
                onChange={(e) => setHeartRate(e.target.value)}
                placeholder="如：72"
                className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-2xl-patient font-bold text-gray-600 block mb-2">
                体重 (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="如：65.0"
                className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-2xl-patient font-bold text-gray-600 block mb-2">
                体温 (℃)
              </label>
              <input
                type="number"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="如：36.5"
                className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
              />
            </div>
          </div>
        </section>

        {/* A/P - 评估与计划 */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-3xl-patient font-extrabold text-patient-primary mb-4">
            A/P 评估与计划
          </h2>

          <div className="mb-4">
            <p className="text-2xl-patient font-bold text-gray-600 mb-2">
              依从率（自动计算）
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl-patient font-extrabold text-patient-success">
                {adherenceDisplay}
              </span>
              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                  className="bg-patient-success h-4 rounded-full transition-all"
                  style={{ width: `${currentAdherence ?? 0}%` }}
                />
              </div>
            </div>
          </div>

          <div>
            <BigInput
              value={assessmentNote}
              onChange={setAssessmentNote}
              placeholder="评估备注或后续计划（可选）"
              label="评估备注"
            />
          </div>
        </section>

        {/* 保存按钮 */}
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="w-full py-5 rounded-2xl bg-patient-success text-white font-bold text-3xl-patient shadow-xl disabled:opacity-50 hover:opacity-90 transition-opacity"
        >
          {saving ? '保存中...' : '保存记录'}
        </button>

        <button
          type="button"
          onClick={() => router.push('/patient/soap/report')}
          className="w-full py-4 rounded-2xl border-3 border-dashed border-patient-primary text-3xl-patient text-patient-primary font-bold hover:bg-blue-50 transition-colors mb-4"
        >
          查看健康报告
        </button>
      </div>
    </div>
  )
}
