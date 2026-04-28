'use client'

import { useEffect, useState, useCallback } from 'react'
import type { InventoryInfo, MedicineInfo, ApiResponse, CheckInInfo } from '@/types'

interface VisitReminder {
  medicineName: string
  nextVisit: string
}

export default function InventoryPage() {
  const [inventoryList, setInventoryList] = useState<InventoryInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [todayCheckIns, setTodayCheckIns] = useState(0)
  const [visitReminders, setVisitReminders] = useState<VisitReminder[]>([])

  const [refillTarget, setRefillTarget] = useState<InventoryInfo | null>(null)
  const [refillAmount, setRefillAmount] = useState('')
  const [refilling, setRefilling] = useState(false)
  const [showRefillModal, setShowRefillModal] = useState(false)

  const todayStr = new Date().toISOString().split('T')[0]

  const fetchData = useCallback(async () => {
    try {
      const [invRes, medRes, chkRes] = await Promise.all([
        fetch('/api/inventory'),
        fetch('/api/medicines'),
        fetch(`/api/checkins?date=${todayStr}`),
      ])

      const invJson: ApiResponse<InventoryInfo[]> = await invRes.json()
      const medJson: ApiResponse<MedicineInfo[]> = await medRes.json()
      const chkJson: ApiResponse<CheckInInfo[]> = await chkRes.json()

      if (invJson.success && invJson.data) {
        setInventoryList(invJson.data)
      }

      if (chkJson.success && chkJson.data) {
        setTodayCheckIns(chkJson.data.length)
      }

      if (medJson.success && medJson.data) {
        const now = new Date()
        const threeDaysLater = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)
        const reminders: VisitReminder[] = []

        medJson.data.forEach((m) => {
          if (!m.note) return
          try {
            const parsed = JSON.parse(m.note)
            if (parsed.nextVisit) {
              const visitDate = new Date(parsed.nextVisit)
              if (visitDate >= now && visitDate <= threeDaysLater) {
                reminders.push({
                  medicineName: m.name,
                  nextVisit: parsed.nextVisit,
                })
              }
            }
          } catch {
            // note 不是有效 JSON，忽略
          }
        })

        reminders.sort(
          (a, b) => new Date(a.nextVisit).getTime() - new Date(b.nextVisit).getTime()
        )
        setVisitReminders(reminders)
      }
    } catch {
      setError('加载库存数据失败')
    } finally {
      setLoading(false)
    }
  }, [todayStr])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const lowCount = inventoryList.filter((i) => i.isLow && i.remainingCount > 0).length
  const emptyCount = inventoryList.filter((i) => i.remainingCount <= 0).length

  const openRefill = (item: InventoryInfo) => {
    setRefillTarget(item)
    setRefillAmount('')
    setShowRefillModal(true)
  }

  const handleRefill = async () => {
    if (!refillTarget || !refillAmount) return

    const amount = parseInt(refillAmount, 10)
    if (isNaN(amount) || amount <= 0) {
      setError('请输入有效的补充数量')
      return
    }

    setRefilling(true)
    setError('')

    try {
      const res = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          medicineId: refillTarget.medicineId,
          totalCount: refillTarget.totalCount + amount,
          unit: refillTarget.unit,
          alertThreshold: refillTarget.alertThreshold,
        }),
      })

      const json: ApiResponse<InventoryInfo> = await res.json()
      if (json.success) {
        setShowRefillModal(false)
        fetchData()
      } else {
        setError(json.error || '补充库存失败')
      }
    } catch {
      setError('网络错误，请重试')
    } finally {
      setRefilling(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-3xl-patient text-gray-500">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6 pb-32">
      <h1 className="text-4xl-patient font-extrabold text-foreground mb-6">
        库存管理
      </h1>

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

      {visitReminders.length > 0 && (
        <div className="mb-4 p-4 rounded-xl bg-orange-50 border-2 border-alert-orange">
          <h2 className="text-2xl-patient font-extrabold text-alert-orangeText mb-2">
            ⚕️ 复诊提醒
          </h2>
          {visitReminders.map((r, i) => (
            <p key={i} className="text-xl-patient text-alert-orangeText font-bold">
              {r.medicineName}：复诊日期 {r.nextVisit}
            </p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
          <p className="text-3xl-patient font-extrabold text-foreground">
            {inventoryList.length}
          </p>
          <p className="text-xl-patient text-gray-500 mt-1">药品总数</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
          <p className="text-3xl-patient font-extrabold text-patient-success">
            {todayCheckIns}
          </p>
          <p className="text-xl-patient text-gray-500 mt-1">今日已服</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
          <p className="text-3xl-patient font-extrabold text-patient-warning">
            {lowCount + emptyCount}
          </p>
          <p className="text-xl-patient text-gray-500 mt-1">库存预警</p>
        </div>
      </div>

      {inventoryList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-3xl-patient text-gray-400 mb-6">暂无库存记录</p>
          <p className="text-2xl-patient text-gray-400">
            请先在"我的药品"中添加药品
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {inventoryList.map((item) => {
            const ratio =
              item.totalCount > 0
                ? item.remainingCount / item.totalCount
                : 0
            const barColor =
              ratio > 0.3
                ? 'bg-patient-success'
                : ratio > 0.1
                  ? 'bg-patient-warning'
                  : 'bg-patient-danger'

            return (
              <div
                key={item.id}
                onClick={() => openRefill(item)}
                className={`bg-white rounded-2xl p-5 shadow-md border-2 cursor-pointer transition-colors ${
                  item.remainingCount <= 0
                    ? 'border-red-300'
                    : item.isLow
                      ? 'border-amber-300'
                      : 'border-gray-200'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-3xl-patient font-extrabold text-foreground">
                    {item.medicineName}
                  </h2>
                  {item.isLow && item.remainingCount > 0 && (
                    <span className="text-2xl-patient px-3 py-1 rounded-xl bg-red-50 text-patient-danger font-bold animate-pulse">
                      需要补充
                    </span>
                  )}
                  {item.remainingCount <= 0 && (
                    <span className="text-2xl-patient px-3 py-1 rounded-xl bg-red-100 text-patient-danger font-bold animate-pulse">
                      已用完
                    </span>
                  )}
                </div>

                <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                    style={{
                      width: `${Math.min(ratio * 100, 100)}%`,
                    }}
                  />
                </div>

                <div className="flex items-baseline justify-between">
                  <p className="text-4xl-patient font-extrabold text-foreground">
                    还剩 {item.remainingCount}{' '}
                    <span className="text-2xl-patient text-gray-500 font-bold">
                      {item.unit}
                    </span>
                  </p>
                  <p className="text-2xl-patient text-gray-400 font-bold">
                    {item.remainingCount}/{item.totalCount} {item.unit}
                  </p>
                </div>

                {item.isLow && item.remainingCount > 0 && (
                  <p className="text-xl-patient text-gray-500 mt-2">
                    预警阈值：{item.alertThreshold} {item.unit}
                  </p>
                )}
              </div>
            )
          })}

          <button
            type="button"
            onClick={() => {
              if (inventoryList.length > 0) {
                openRefill(inventoryList[0])
              }
            }}
            className="w-full py-5 rounded-2xl border-3 border-dashed border-patient-primary text-3xl-patient text-patient-primary font-bold hover:bg-blue-50 transition-colors"
          >
            + 补充库存
          </button>
        </div>
      )}

      {showRefillModal && refillTarget && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl-patient font-extrabold">
                补充库存 - {refillTarget.medicineName}
              </h2>
              <button
                type="button"
                onClick={() => setShowRefillModal(false)}
                className="text-3xl-patient text-gray-400 font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl-patient text-gray-600">
                  当前库存：{refillTarget.remainingCount} / {refillTarget.totalCount}{' '}
                  {refillTarget.unit}
                </p>
              </div>

              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  补充数量（{refillTarget.unit}）
                </label>
                <input
                  type="number"
                  value={refillAmount}
                  onChange={(e) => setRefillAmount(e.target.value)}
                  placeholder="请输入补充数量"
                  min="1"
                  className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
                  autoFocus
                />
              </div>

              {refillAmount && !isNaN(parseInt(refillAmount, 10)) && (
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-2xl-patient text-patient-primary font-bold">
                    补充后库存：{refillTarget.totalCount + parseInt(refillAmount, 10)}{' '}
                    {refillTarget.unit}
                  </p>
                </div>
              )}

              <button
                type="button"
                onClick={handleRefill}
                disabled={refilling}
                className="w-full py-4 rounded-xl bg-patient-success text-white text-3xl-patient font-bold shadow-lg disabled:opacity-50"
              >
                {refilling ? '处理中...' : '确认补充'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
