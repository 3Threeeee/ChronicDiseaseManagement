'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface OcrApiConfig {
  apiUrl: string
  apiKey: string
  model: string
}

const DEFAULT_CONFIG: OcrApiConfig = {
  apiUrl: 'https://api.deepseek.com/v1/chat/completions',
  apiKey: '',
  model: 'deepseek-chat',
}

const STORAGE_KEY = 'ocrApiConfig'

export default function SettingsPage() {
  const router = useRouter()
  const [config, setConfig] = useState<OcrApiConfig>(DEFAULT_CONFIG)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setConfig({ ...DEFAULT_CONFIG, ...JSON.parse(stored) })
      }
    } catch { /* ignore */ }
  }, [])

  const handleSave = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch { /* ignore */ }
  }

  const updateConfig = (patch: Partial<OcrApiConfig>) => {
    setConfig((prev) => ({ ...prev, ...patch }))
  }

  return (
    <div className="min-h-screen bg-patient-bg px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-600"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <h1 className="text-3xl-patient font-extrabold text-gray-800">AI 识别配置</h1>
      </div>

      {saved && (
        <div className="mb-4 p-4 rounded-xl bg-green-50 border-2 border-green-300">
          <p className="text-xl-patient text-green-600 font-bold">保存成功</p>
        </div>
      )}

      <div className="bg-white rounded-2xl p-5 shadow-sm space-y-5">
        <div>
          <label className="text-2xl-patient font-bold text-gray-800 block mb-2">
            API 地址
          </label>
          <p className="text-xl-patient text-gray-500 mb-3">
            AI 大模型接口地址，支持 OpenAI 格式
          </p>
          <input
            type="text"
            value={config.apiUrl}
            onChange={(e) => updateConfig({ apiUrl: e.target.value })}
            placeholder="https://api.deepseek.com/v1/chat/completions"
            className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="text-2xl-patient font-bold text-gray-800 block mb-2">
            API 密钥
          </label>
          <p className="text-xl-patient text-gray-500 mb-3">
            调用 AI 接口所需的密钥
          </p>
          <input
            type="password"
            value={config.apiKey}
            onChange={(e) => updateConfig({ apiKey: e.target.value })}
            placeholder="sk-xxxxxxxxxxxxxxxx"
            className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="text-2xl-patient font-bold text-gray-800 block mb-2">
            模型名称
          </label>
          <p className="text-xl-patient text-gray-500 mb-3">
            使用的 AI 模型标识
          </p>
          <input
            type="text"
            value={config.model}
            onChange={(e) => updateConfig({ model: e.target.value })}
            placeholder="deepseek-chat"
            className="text-2xl-patient w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-patient-primary focus:outline-none"
          />
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xl-patient text-gray-600">
            <span className="font-bold">当前状态：</span>
            {config.apiKey.trim() ? (
              <span className="text-patient-primary font-bold">已配置</span>
            ) : (
              <span className="text-gray-500">未配置（使用服务端默认）</span>
            )}
          </p>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full mt-6 py-5 rounded-2xl bg-patient-primary text-white font-bold text-3xl-patient shadow-xl hover:opacity-90 transition-opacity"
      >
        保存配置
      </button>
    </div>
  )
}
