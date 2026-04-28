'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import SeverityBadge from '@/components/ui/SeverityBadge'
import type { SOAPRecordInfo, ApiResponse, PaginatedResponse, UserProfile } from '@/types'

const SYMPTOM_EMOJI_MAP: Record<string, string> = {
  '头晕': '\u{1F635}',
  '恶心': '\u{1F922}',
  '乏力': '\u{1F62B}',
  '嗜睡': '\u{1F634}',
  '头痛': '\u{1F915}',
  '胸闷': '\u{1F624}',
  '无不适': '\u{1F48A}',
  '感觉良好': '\u{1F60A}',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDays = ['日', '一', '二', '三', '四', '五', '六']
  const weekDay = weekDays[date.getDay()]
  return `${month}月${day}日 周${weekDay}`
}

function formatRecordedAt(dateStr: string): string {
  const date = new Date(dateStr)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export default function SoapHistoryPage() {
  const router = useRouter()
  const [records, setRecords] = useState<SOAPRecordInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [userId, setUserId] = useState('')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const pageSize = 10

  const fetchRecords = useCallback(async (uid: string, p: number) => {
    try {
      setLoading(true)
      const res = await fetch(`/api/soap?userId=${uid}&page=${p}&pageSize=${pageSize}`)
      const json: PaginatedResponse<SOAPRecordInfo> = await res.json()
      if (json.success && json.data) {
        setRecords(json.data)
        setTotal(json.total)
      } else {
        setError(json.error || '加载失败')
      }
    } catch {
      setError('网络错误，请重试')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((json: ApiResponse<UserProfile>) => {
        if (json.success && json.data) {
          setUserId(json.data.id)
          fetchRecords(json.data.id, 1)
        }
      })
      .catch(() => setError('获取用户信息失败'))
  }, [fetchRecords])

  const totalPages = Math.ceil(total / pageSize)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-patient-bg">
        <p className="text-3xl-patient text-gray-500">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl-patient font-extrabold text-foreground">
          历史记录
        </h1>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push('/patient/soap/report')}
            className="text-2xl-patient px-5 py-3 rounded-xl bg-patient-primary text-white font-bold shadow-lg hover:opacity-90"
          >
            导出报告
          </button>
          <button
            type="button"
            onClick={() => router.push('/patient/soap')}
            className="text-2xl-patient px-5 py-3 rounded-xl bg-patient-success text-white font-bold shadow-lg hover:opacity-90"
          >
            + 新增
          </button>
        </div>
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

      {records.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-3xl-patient text-gray-400 mb-4">
            还没有健康记录
          </p>
          <button
            type="button"
            onClick={() => router.push('/patient/soap')}
            className="px-8 py-5 rounded-2xl bg-patient-primary text-white text-3xl-patient font-bold shadow-xl"
          >
            记录健康数据
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {records.map((record) => {
            const isExpanded = expandedId === record.id
            const tags = record.symptomTags || []

            return (
              <div
                key={record.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : record.id)}
                  className="w-full p-4 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="text-3xl">
                    {tags.length > 0
                      ? SYMPTOM_EMOJI_MAP[tags[0]] || '\u{1F4CB}'
                      : '\u{1F4CB}'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-2xl-patient font-bold text-foreground">
                      {formatDate(record.recordedAt)}
                    </p>
                    <p className="text-xl-patient text-gray-500">
                      {formatRecordedAt(record.recordedAt)}
                      {tags.length > 0 && ` · ${tags.join('、')}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {record.symptomSeverity && (
                      <SeverityBadge severity={record.symptomSeverity} />
                    )}
                    {record.adherenceRate != null && (
                      <span className={`text-xl-patient font-bold px-3 py-1 rounded-full ${
                        record.adherenceRate >= 90 ? 'bg-green-100 text-green-700' :
                        record.adherenceRate >= 70 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {record.adherenceRate}%
                      </span>
                    )}
                  </div>
                  <span className="text-2xl text-gray-400 shrink-0">
                    {isExpanded ? '\u25B2' : '\u25BC'}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    {/* S - 主观 */}
                    <div className="py-3 border-b border-gray-50">
                      <p className="text-xl-patient font-bold text-patient-primary mb-2">
                        S 主观症状
                      </p>
                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xl-patient px-3 py-1 rounded-xl bg-blue-50 text-patient-primary"
                            >
                              {SYMPTOM_EMOJI_MAP[tag] || ''} {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {record.subjectiveNote && (
                        <p className="text-xl-patient text-gray-600">
                          {record.subjectiveNote}
                        </p>
                      )}
                    </div>

                    {/* O - 客观 */}
                    <div className="py-3 border-b border-gray-50">
                      <p className="text-xl-patient font-bold text-patient-primary mb-2">
                        O 客观体征
                      </p>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xl-patient text-gray-600">
                        {record.bloodPressure && (
                          <span>血压: {record.bloodPressure} mmHg</span>
                        )}
                        {record.bloodSugar != null && (
                          <span>血糖: {record.bloodSugar} mmol/L</span>
                        )}
                        {record.heartRate != null && (
                          <span>心率: {record.heartRate} 次/分</span>
                        )}
                        {record.weight != null && (
                          <span>体重: {record.weight} kg</span>
                        )}
                        {record.temperature != null && (
                          <span>体温: {record.temperature}℃</span>
                        )}
                        {!record.bloodPressure && record.bloodSugar == null && record.heartRate == null && record.weight == null && record.temperature == null && (
                          <span className="text-gray-400">无记录</span>
                        )}
                      </div>
                    </div>

                    {/* A/P - 评估 */}
                    <div className="py-3">
                      <p className="text-xl-patient font-bold text-patient-primary mb-2">
                        A/P 评估与计划
                      </p>
                      {record.adherenceRate != null && (
                        <p className="text-xl-patient text-gray-600 mb-1">
                          依从率: {record.adherenceRate}%
                        </p>
                      )}
                      {record.assessmentNote && (
                        <p className="text-xl-patient text-gray-600">
                          {record.assessmentNote}
                        </p>
                      )}
                      {record.adherenceRate == null && !record.assessmentNote && (
                        <span className="text-gray-400 text-xl-patient">无记录</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          {/* 分页 */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                type="button"
                disabled={page <= 1}
                onClick={() => {
                  const newPage = page - 1
                  setPage(newPage)
                  fetchRecords(userId, newPage)
                }}
                className="text-2xl-patient px-4 py-2 rounded-xl bg-gray-100 font-bold disabled:opacity-40"
              >
                上一页
              </button>
              <span className="text-2xl-patient font-bold text-gray-600">
                {page} / {totalPages}
              </span>
              <button
                type="button"
                disabled={page >= totalPages}
                onClick={() => {
                  const newPage = page + 1
                  setPage(newPage)
                  fetchRecords(userId, newPage)
                }}
                className="text-2xl-patient px-4 py-2 rounded-xl bg-gray-100 font-bold disabled:opacity-40"
              >
                下一页
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
