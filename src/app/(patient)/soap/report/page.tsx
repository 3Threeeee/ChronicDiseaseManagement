'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SeverityBadge from '@/components/ui/SeverityBadge'
import type { ApiResponse, UserProfile } from '@/types'

interface ReportData {
  patientName: string
  period: { start: string; end: string }
  adherence: { rate: number; total: number; missed: number }
  symptoms: { date: string; severity: string; tags: string[] }[]
  vitals: {
    bloodPressure: { avg: string; min: string; max: string }
    bloodSugar: { avg: number; min: number; max: number }
    heartRate: { avg: number }
    weight: { latest: number; trend: 'up' | 'down' | 'stable' }
  }
  summary: string
}

type DateRange = '7d' | '30d' | 'custom'

function getDateRange(range: DateRange): { startDate: string; endDate: string } {
  const end = new Date()
  const endStr = end.toISOString().split('T')[0]

  const start = new Date()
  if (range === '7d') {
    start.setDate(start.getDate() - 7)
  } else if (range === '30d') {
    start.setDate(start.getDate() - 30)
  }
  const startStr = start.toISOString().split('T')[0]

  return { startDate: startStr, endDate: endStr }
}

const TREND_LABELS: Record<string, string> = {
  up: '上升 ↑',
  down: '下降 ↓',
  stable: '稳定 →',
}

const TREND_COLORS: Record<string, string> = {
  up: 'text-orange-600 bg-orange-100',
  down: 'text-green-600 bg-green-100',
  stable: 'text-gray-600 bg-gray-100',
}

function SimpleBarChart({ data, maxValue, unit, label }: {
  data: { label: string; value: number }[]
  maxValue: number
  unit: string
  label: string
}) {
  if (data.length === 0) {
    return (
      <div className="text-center py-4 text-xl-patient text-gray-400">
        暂无{label}数据
      </div>
    )
  }

  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((item, i) => {
        const height = maxValue > 0 ? (item.value / maxValue) * 100 : 0
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 min-w-0">
            <span className="text-lg font-bold text-gray-600 truncate w-full text-center">
              {item.value}{unit}
            </span>
            <div className="w-full flex-1 flex items-end justify-center">
              <div
                className="w-full max-w-[40px] rounded-t-lg bg-patient-primary/60 min-h-[4px]"
                style={{ height: `${Math.max(height, 4)}%` }}
              />
            </div>
            <span className="text-sm text-gray-400 truncate w-full text-center">
              {item.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default function SoapReportPage() {
  const router = useRouter()
  const [userId, setUserId] = useState('')
  const [dateRange, setDateRange] = useState<DateRange>('7d')
  const [customStart, setCustomStart] = useState('')
  const [customEnd, setCustomEnd] = useState('')
  const [report, setReport] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchReport = async (uid: string, startDate: string, endDate: string) => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `/api/soap/report?userId=${uid}&startDate=${startDate}&endDate=${endDate}`
      )
      const json: ApiResponse<ReportData> = await res.json()
      if (json.success && json.data) {
        setReport(json.data)
      } else {
        setError(json.error || '获取报告失败')
      }
    } catch {
      setError('网络错误，请重试')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((json: ApiResponse<UserProfile>) => {
        if (json.success && json.data) {
          setUserId(json.data.id)
          const { startDate, endDate } = getDateRange('7d')
          fetchReport(json.data.id, startDate, endDate)
        } else {
          setError('获取用户信息失败')
        }
      })
      .catch(() => setError('获取用户信息失败'))
  }, [])

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range)
    if (range !== 'custom' && userId) {
      const { startDate, endDate } = getDateRange(range)
      fetchReport(userId, startDate, endDate)
    }
  }

  const handleCustomQuery = () => {
    if (!customStart || !customEnd) {
      setError('请选择开始和结束日期')
      return
    }
    if (userId) {
      fetchReport(userId, customStart, customEnd)
    }
  }

  const adherenceColor =
    (report?.adherence.rate ?? 0) >= 90 ? 'text-patient-success' :
    (report?.adherence.rate ?? 0) >= 70 ? 'text-patient-warning' :
    'text-patient-danger'

  const adherenceBg =
    (report?.adherence.rate ?? 0) >= 90 ? 'bg-patient-success' :
    (report?.adherence.rate ?? 0) >= 70 ? 'bg-patient-warning' :
    'bg-patient-danger'

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => router.push('/soap')}
          className="text-3xl-patient text-gray-400 font-bold"
        >
          ←
        </button>
        <h1 className="text-4xl-patient font-extrabold text-foreground">
          健康报告
        </h1>
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

      {/* 日期范围选择器 */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
        <div className="flex gap-2 mb-3">
          {([
            { value: '7d' as DateRange, label: '近7天' },
            { value: '30d' as DateRange, label: '近30天' },
            { value: 'custom' as DateRange, label: '自定义' },
          ]).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleDateRangeChange(opt.value)}
              className={`text-2xl-patient px-5 py-3 rounded-xl font-bold transition-colors flex-1 ${
                dateRange === opt.value
                  ? 'bg-patient-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {dateRange === 'custom' && (
          <div className="flex items-center gap-3">
            <input
              type="date"
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="text-xl-patient flex-1 px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
            />
            <span className="text-2xl-patient text-gray-500">至</span>
            <input
              type="date"
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="text-xl-patient flex-1 px-3 py-3 rounded-xl border-2 border-gray-200 focus:border-patient-primary focus:outline-none"
            />
            <button
              type="button"
              onClick={handleCustomQuery}
              className="text-xl-patient px-5 py-3 rounded-xl bg-patient-primary text-white font-bold"
            >
              查询
            </button>
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-3xl-patient text-gray-500">加载中...</p>
        </div>
      ) : report ? (
        <div className="flex flex-col gap-4">
          {/* 患者信息 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <p className="text-2xl-patient text-gray-500">
              {report.patientName}
            </p>
            <p className="text-xl-patient text-gray-400">
              {report.period.start} ~ {report.period.end}
            </p>
          </div>

          {/* 依从率环形展示 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-3xl-patient font-extrabold text-foreground mb-4">
              服药依从率
            </h2>
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke={report.adherence.rate >= 90 ? '#16A34A' : report.adherence.rate >= 70 ? '#F59E0B' : '#DC2626'}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(report.adherence.rate / 100) * 264} 264`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-3xl-patient font-extrabold ${adherenceColor}`}>
                    {report.adherence.rate}%
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-xl-patient mb-2">
                  <span className="text-gray-500">总服药次数</span>
                  <span className="font-bold text-foreground">{report.adherence.total}</span>
                </div>
                <div className="flex justify-between text-xl-patient">
                  <span className="text-gray-500">漏服次数</span>
                  <span className="font-bold text-patient-danger">{report.adherence.missed}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 症状趋势 */}
          {report.symptoms.length > 0 && (
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-3xl-patient font-extrabold text-foreground mb-4">
                症状记录
              </h2>
              <div className="flex flex-col gap-3">
                {report.symptoms.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50"
                  >
                    <span className="text-2xl-patient font-bold text-gray-600 min-w-[80px]">
                      {s.date.slice(5)}
                    </span>
                    <SeverityBadge severity={s.severity as 'MILD' | 'MODERATE' | 'SEVERE'} />
                    {s.tags.length > 0 && (
                      <span className="text-xl-patient text-gray-500">
                        {s.tags.join('、')}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 体征指标 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-3xl-patient font-extrabold text-foreground mb-4">
              体征指标
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-xl bg-blue-50">
                <p className="text-xl-patient text-blue-600 font-bold mb-1">
                  血压 (mmHg)
                </p>
                <p className="text-3xl-patient font-extrabold text-blue-700">
                  {report.vitals.bloodPressure.avg}
                </p>
                <p className="text-lg text-blue-500 mt-1">
                  范围 {report.vitals.bloodPressure.min} ~ {report.vitals.bloodPressure.max}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-purple-50">
                <p className="text-xl-patient text-purple-600 font-bold mb-1">
                  血糖 (mmol/L)
                </p>
                <p className="text-3xl-patient font-extrabold text-purple-700">
                  {report.vitals.bloodSugar.avg || '—'}
                </p>
                <p className="text-lg text-purple-500 mt-1">
                  范围 {report.vitals.bloodSugar.min || '—'} ~ {report.vitals.bloodSugar.max || '—'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-green-50">
                <p className="text-xl-patient text-green-600 font-bold mb-1">
                  心率 (次/分)
                </p>
                <p className="text-3xl-patient font-extrabold text-green-700">
                  {report.vitals.heartRate.avg || '—'}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-orange-50">
                <p className="text-xl-patient text-orange-600 font-bold mb-1">
                  体重 (kg)
                </p>
                <p className="text-3xl-patient font-extrabold text-orange-700">
                  {report.vitals.weight.latest || '—'}
                </p>
                {report.vitals.weight.latest > 0 && (
                  <span
                    className={`inline-block text-lg font-bold px-2 py-0.5 rounded-full mt-1 ${
                      TREND_COLORS[report.vitals.weight.trend] || ''
                    }`}
                  >
                    {TREND_LABELS[report.vitals.weight.trend] || ''}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 文字总结 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <h2 className="text-3xl-patient font-extrabold text-foreground mb-3">
              健康总结
            </h2>
            <div className="p-4 bg-patient-bg rounded-xl">
              <p className="text-xl-patient text-gray-700 leading-relaxed">
                {report.summary}
              </p>
            </div>
          </div>

          {/* 导出按钮 */}
          <button
            type="button"
            onClick={() => window.print()}
            className="w-full py-4 rounded-2xl border-3 border-dashed border-patient-primary text-3xl-patient text-patient-primary font-bold hover:bg-blue-50 transition-colors mb-4"
          >
            打印报告
          </button>
        </div>
      ) : null}
    </div>
  )
}
