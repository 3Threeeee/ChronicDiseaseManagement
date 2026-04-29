'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md w-full">
        <p className="text-6xl">😵</p>
        <h1 className="text-4xl-patient font-extrabold text-gray-800">
          出错了
        </h1>
        <p className="text-2xl-patient text-gray-500">
          {error.message || '页面发生错误，请稍后重试'}
        </p>
        <button
          onClick={reset}
          className="inline-block w-full py-6 rounded-2xl bg-patient-primary text-white text-3xl-patient font-bold shadow-xl active:scale-[0.98] transition-transform"
        >
          重试
        </button>
      </div>
    </div>
  )
}
