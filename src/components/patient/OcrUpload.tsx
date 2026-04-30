'use client'

import { useRef, useState } from 'react'
import type { OcrResult, ApiResponse } from '@/types'

interface OcrUploadProps {
  onConfirm: (data: {
    name: string
    dosage: string
    frequency: string
    schedule: string[]
    ocrResult: OcrResult
  }) => void
}

export default function OcrUpload({ onConfirm }: OcrUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<OcrResult | null>(null)
  const [editable, setEditable] = useState({ name: '', dosage: '', frequency: '' })

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    setError('')
    setResult(null)

    try {
      const buffer = await file.arrayBuffer()
      const base64 = btoa(
        new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
      )
      const mimeType = file.type || 'image/jpeg'
      const dataUrl = `data:${mimeType};base64,${base64}`

      let clientConfig = {}
      try {
        const stored = localStorage.getItem('ocrApiConfig')
        if (stored) {
          const parsed = JSON.parse(stored)
          if (parsed.apiKey) {
            clientConfig = {
              apiUrl: parsed.apiUrl,
              apiKey: parsed.apiKey,
              model: parsed.model,
            }
          }
        }
      } catch { /* ignore */ }

      const res = await fetch('/api/medicines/ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: dataUrl,
          ...clientConfig,
        }),
      })

      const json: ApiResponse<OcrResult> = await res.json()

      if (!res.ok || !json.success || !json.data) {
        setError(json.error || '识别失败，请重试')
        return
      }

      setResult(json.data)
      setEditable({
        name: json.data.name,
        dosage: json.data.dosage,
        frequency: json.data.frequency,
      })
    } catch {
      setError('网络错误，请检查网络后重试')
    } finally {
      setLoading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleConfirm = () => {
    if (!result) return
    onConfirm({
      name: editable.name,
      dosage: editable.dosage,
      frequency: editable.frequency,
      schedule: result.schedule,
      ocrResult: result,
    })
    setResult(null)
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />

      {!loading && !result && (
        <button
          type="button"
          onClick={triggerFileInput}
          className="w-full py-6 rounded-2xl bg-patient-primary text-white font-bold text-3xl-patient shadow-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          拍照识别处方/药盒
        </button>
      )}

      {loading && (
        <div className="flex flex-col items-center gap-4 py-10">
          <div className="w-16 h-16 border-4 border-patient-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-3xl-patient font-bold text-patient-primary">
            AI 识别中...
          </p>
          <p className="text-xl-patient text-gray-500">请稍候，正在分析图片</p>
        </div>
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border-2 border-red-300">
          <p className="text-xl-patient text-red-600 font-bold">{error}</p>
          <button
            type="button"
            onClick={triggerFileInput}
            className="mt-3 text-2xl-patient text-patient-primary font-bold underline"
          >
            重新拍照
          </button>
        </div>
      )}

      {result && !loading && (
        <div className="flex flex-col gap-4 p-5 rounded-2xl bg-green-50 border-2 border-green-300">
          <p className="text-2xl-patient font-bold text-green-700">
            识别结果 (置信度: {(result.confidence * 100).toFixed(0)}%)
          </p>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xl-patient font-bold text-gray-600">
                药品名称
              </label>
              <input
                type="text"
                value={editable.name}
                onChange={(e) =>
                  setEditable({ ...editable, name: e.target.value })
                }
                className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 bg-white focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xl-patient font-bold text-gray-600">
                剂量
              </label>
              <input
                type="text"
                value={editable.dosage}
                onChange={(e) =>
                  setEditable({ ...editable, dosage: e.target.value })
                }
                className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 bg-white focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xl-patient font-bold text-gray-600">
                频次
              </label>
              <input
                type="text"
                value={editable.frequency}
                onChange={(e) =>
                  setEditable({ ...editable, frequency: e.target.value })
                }
                className="text-2xl-patient w-full px-4 py-3 mt-1 rounded-xl border-2 border-gray-300 bg-white focus:border-patient-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xl-patient font-bold text-gray-600">
                服药时间点
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                {result.schedule.map((time) => (
                  <span
                    key={time}
                    className="text-2xl-patient px-4 py-2 rounded-xl bg-patient-primary text-white font-bold"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={triggerFileInput}
              className="flex-1 py-4 rounded-xl border-2 border-gray-400 text-2xl-patient font-bold text-gray-600"
            >
              重新拍照
            </button>
            <button
              type="button"
              onClick={handleConfirm}
              className="flex-1 py-4 rounded-xl bg-patient-success text-2xl-patient font-bold text-white shadow-lg"
            >
              确认添加
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
