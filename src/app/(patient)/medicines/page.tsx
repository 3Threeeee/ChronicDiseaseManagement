'use client'

import { useEffect, useState, useCallback } from 'react'
import TimePicker from '@/components/ui/TimePicker'
import OcrUpload from '@/components/patient/OcrUpload'
import type { MedicineInfo, MedicineCreateInput, ApiResponse } from '@/types'

interface FormData {
  name: string
  dosage: string
  frequency: string
  schedule: string[]
  note: string
}

const EMPTY_FORM: FormData = {
  name: '',
  dosage: '',
  frequency: '',
  schedule: [],
  note: '',
}

const FREQUENCY_OPTIONS = [
  { label: '一日1次', schedule: ['08:00'] },
  { label: '一日2次', schedule: ['08:00', '20:00'] },
  { label: '一日3次', schedule: ['08:00', '12:00', '18:00'] },
  { label: '一日4次', schedule: ['08:00', '12:00', '18:00', '21:00'] },
]

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState<MedicineInfo[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [showOcr, setShowOcr] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const fetchMedicines = useCallback(async () => {
    try {
      const res = await fetch('/api/medicines')
      const json: ApiResponse<MedicineInfo[]> = await res.json()
      if (json.success && json.data) {
        setMedicines(json.data)
      }
    } catch {
      setError('加载药品列表失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchMedicines()
  }, [fetchMedicines])

  const handleFrequencySelect = (label: string) => {
    const option = FREQUENCY_OPTIONS.find((o) => o.label === label)
    setForm((prev) => ({
      ...prev,
      frequency: label,
      schedule: option ? option.schedule : [],
    }))
  }

  const openAddForm = () => {
    setEditingId(null)
    setForm(EMPTY_FORM)
    setShowForm(true)
    setShowOcr(false)
  }

  const openEditForm = (m: MedicineInfo) => {
    setEditingId(m.id)
    setForm({
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
      schedule: JSON.parse(m.scheduleJson),
      note: m.note || '',
    })
    setShowForm(true)
    setShowOcr(false)
  }

  const handleSave = async () => {
    if (!form.name || !form.dosage || !form.frequency || form.schedule.length === 0) {
      setError('请填写完整的药品信息和服药时间')
      return
    }

    setSaving(true)
    setError('')

    try {
      const body: MedicineCreateInput = {
        name: form.name,
        dosage: form.dosage,
        frequency: form.frequency,
        schedule: form.schedule,
        note: form.note || undefined,
      }

      const url = editingId ? `/api/medicines/${editingId}` : '/api/medicines'
      const method = editingId ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const json: ApiResponse<MedicineInfo> = await res.json()

      if (!json.success) {
        setError(json.error || '保存失败')
        return
      }

      setShowForm(false)
      fetchMedicines()
    } catch {
      setError('网络错误，请重试')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`确定删除药品"${name}"吗？相关记录将被一并删除。`)) return

    try {
      const res = await fetch(`/api/medicines/${id}`, { method: 'DELETE' })
      const json: ApiResponse = await res.json()
      if (json.success) {
        fetchMedicines()
      } else {
        setError(json.error || '删除失败')
      }
    } catch {
      setError('网络错误，请重试')
    }
  }

  const handleOcrConfirm = (data: {
    name: string
    dosage: string
    frequency: string
    schedule: string[]
  }) => {
    setForm({
      name: data.name,
      dosage: data.dosage,
      frequency: data.frequency,
      schedule: data.schedule,
      note: '',
    })
    setShowOcr(false)
    setShowForm(true)
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
        我的药品
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

      {medicines.length === 0 && !showForm && !showOcr ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-3xl-patient text-gray-400 mb-6">
            还没有添加药品
          </p>
          <button
            type="button"
            onClick={openAddForm}
            className="px-8 py-5 rounded-2xl bg-patient-primary text-white text-3xl-patient font-bold shadow-xl"
          >
            + 添加药品
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {medicines.map((m) => {
            const schedule = JSON.parse(m.scheduleJson) as string[]
            return (
              <div
                key={m.id}
                className="bg-white rounded-2xl p-5 shadow-md border border-gray-200"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl-patient font-extrabold text-foreground truncate">
                      {m.name}
                    </h2>
                    <p className="text-2xl-patient text-gray-600 mt-2">
                      {m.dosage} · {m.frequency}
                    </p>
                    {m.note && (
                      <p className="text-xl-patient text-gray-400 mt-1">
                        {m.note}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {schedule.map((time: string) => (
                        <span
                          key={time}
                          className="text-2xl-patient px-4 py-2 rounded-xl bg-patient-primary/10 text-patient-primary font-bold"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3 shrink-0">
                    <button
                      type="button"
                      onClick={() => openEditForm(m)}
                      className="text-2xl-patient px-4 py-2 rounded-xl bg-gray-100 text-gray-600 font-bold hover:bg-gray-200"
                    >
                      编辑
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(m.id, m.name)}
                      className="text-2xl-patient px-4 py-2 rounded-xl bg-red-50 text-patient-danger font-bold hover:bg-red-100"
                    >
                      删除
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

          <button
            type="button"
            onClick={openAddForm}
            className="w-full py-5 rounded-2xl border-3 border-dashed border-patient-primary text-3xl-patient text-patient-primary font-bold hover:bg-blue-50 transition-colors"
          >
            + 添加药品
          </button>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl-patient font-extrabold">
                {editingId ? '编辑药品' : '添加药品'}
              </h2>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-3xl-patient text-gray-400 font-bold px-2"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  药品名称 *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="如：阿司匹林肠溶片"
                  className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  剂量 *
                </label>
                <input
                  type="text"
                  value={form.dosage}
                  onChange={(e) => setForm({ ...form, dosage: e.target.value })}
                  placeholder="如：500mg"
                  className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  频次 *
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {FREQUENCY_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => handleFrequencySelect(opt.label)}
                      className={`text-2xl-patient px-4 py-3 rounded-xl font-bold transition-colors ${
                        form.frequency === opt.label
                          ? 'bg-patient-primary text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={form.frequency}
                  onChange={(e) =>
                    setForm({ ...form, frequency: e.target.value })
                  }
                  placeholder="或自定义频次描述"
                  className="text-2xl-patient w-full px-4 py-3 mt-2 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  服药时间点 *
                </label>
                <div className="mt-1">
                  <TimePicker
                    value={form.schedule}
                    onChange={(times) => setForm({ ...form, schedule: times })}
                  />
                </div>
              </div>

              <div>
                <label className="text-2xl-patient font-bold text-gray-600">
                  备注
                </label>
                <input
                  type="text"
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="如：饭后服用"
                  className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
                />
              </div>

              {error && (
                <p className="text-xl-patient text-red-500 font-bold">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="w-full py-4 rounded-xl bg-patient-success text-white text-3xl-patient font-bold shadow-lg disabled:opacity-50"
              >
                {saving ? '保存中...' : editingId ? '保存修改' : '添加药品'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showOcr && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-3xl-patient font-extrabold">拍照识别</h2>
              <button
                type="button"
                onClick={() => setShowOcr(false)}
                className="text-3xl-patient text-gray-400 font-bold px-2"
              >
                ✕
              </button>
            </div>
            <OcrUpload onConfirm={handleOcrConfirm} />
          </div>
        </div>
      )}

      <div className="fixed bottom-24 left-4 right-4 z-40 max-w-lg mx-auto">
        <button
          type="button"
          onClick={() => setShowOcr(true)}
          className="w-full py-5 rounded-2xl bg-patient-primary text-white font-bold text-3xl-patient shadow-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          导入识别
        </button>
      </div>
    </div>
  )
}
