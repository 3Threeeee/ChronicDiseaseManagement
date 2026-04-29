import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md w-full">
        <p className="text-6xl">🔍</p>
        <h1 className="text-4xl-patient font-extrabold text-gray-800">
          页面未找到
        </h1>
        <p className="text-2xl-patient text-gray-500">
          您访问的页面不存在
        </p>
        <Link
          href="/"
          className="inline-block w-full py-6 rounded-2xl bg-patient-primary text-white text-3xl-patient font-bold shadow-xl active:scale-[0.98] transition-transform"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
