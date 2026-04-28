import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen px-6">
      <div className="text-center space-y-8 max-w-md w-full">
        <h1 className="text-4xl-patient font-bold text-patient-primary">
          慢病用药小管家
        </h1>
        <p className="text-xl-patient text-gray-600">
          请选择您的身份
        </p>
        <div className="flex flex-col gap-6 mt-12">
          <Link
            href="/login?role=PATIENT"
            className="w-full py-6 text-2xl-patient font-semibold rounded-2xl bg-patient-primary text-white hover:bg-blue-700 transition-colors shadow-lg"
          >
            我是患者
          </Link>
          <Link
            href="/login?role=FAMILY"
            className="w-full py-6 text-2xl-patient font-semibold rounded-2xl border-2 border-patient-primary text-patient-primary hover:bg-blue-50 transition-colors shadow-lg"
          >
            我是家属
          </Link>
        </div>
      </div>
    </div>
  );
}
