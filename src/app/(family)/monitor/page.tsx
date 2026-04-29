"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface PatientStatus {
  profile: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  todayProgress: {
    total: number;
    done: number;
    missed: number;
    pending: number;
    rate: number;
  };
  inventoryAlerts: { id: string; medicineName: string; remainingCount: number; isLow: boolean }[];
  latestSOAP: { subjectiveNote?: string; symptomSeverity?: string } | null;
  unreadAlerts: number;
}

export default function MonitorPage() {
  const [patients, setPatients] = useState<PatientStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];
    if (!token) {
      setError("请先登录");
      setLoading(false);
      return;
    }

    try {
      const meRes = await fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const meJson = await meRes.json();
      if (!meJson.success) {
        setError("登录已过期");
        setLoading(false);
        return;
      }

      const familyId = meJson.data.id;
      const patientsRes = await fetch(`/api/family/patients?familyId=${familyId}`);
      const patientsJson = await patientsRes.json();
      if (!patientsJson.success || !patientsJson.data.length) {
        setPatients([]);
        setLoading(false);
        return;
      }

      const statusList = await Promise.all(
        patientsJson.data.map(async (p: { id: string }) => {
          try {
            const res = await fetch(`/api/family/patient-status/${p.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const json = await res.json();
            return json.success ? json.data : null;
          } catch {
            return null;
          }
        })
      );

      setPatients(statusList.filter(Boolean));
    } catch {
      setError("加载失败，请稍后重试");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-2xl-patient text-gray-500">{error}</p>
      </div>
    );
  }

  if (patients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-6">
        <p className="text-4xl">👨‍👩‍👧</p>
        <p className="text-2xl-patient text-gray-500 text-center">
          还没有绑定家人
        </p>
        <Link
          href="/bind"
          className="text-xl-patient text-patient-primary underline"
        >
          去添加家人
        </Link>
      </div>
    );
  }

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl-patient font-bold text-gray-800">家人健康监控</h1>

      <div className="space-y-4">
        {patients.map((ps) => {
          const tp = ps.todayProgress;
          const rate = tp.rate;
          const hasMissed = tp.missed > 0;
          const hasInventoryAlert = ps.inventoryAlerts.length > 0;

          return (
            <Link
              key={ps.profile.id}
              href={`/monitor/${ps.profile.id}`}
              className="block bg-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-patient-primary/10 flex items-center justify-center text-3xl shrink-0">
                  {ps.profile.avatarUrl ? (
                    <img
                      src={ps.profile.avatarUrl}
                      alt={ps.profile.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    "👤"
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-3xl-patient font-bold text-gray-800 truncate">
                    {ps.profile.name}
                  </h2>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {hasMissed && (
                    <span className="text-2xl" title="有漏服">⚠️</span>
                  )}
                  {hasInventoryAlert && (
                    <span className="text-2xl" title="库存不足">
                      📦<sup className="text-xs text-patient-warning">{ps.inventoryAlerts.length}</sup>
                    </span>
                  )}
                  {ps.unreadAlerts > 0 && (
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-patient-danger text-white text-sm font-bold">
                      {ps.unreadAlerts}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 shrink-0">
                  <svg className="w-20 h-20 -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke={
                        rate === 100
                          ? "#16A34A"
                          : rate >= 50
                          ? "#F59E0B"
                          : "#DC2626"
                      }
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={
                        circumference - (rate / 100) * circumference
                      }
                      strokeLinecap="round"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-gray-700">
                    {rate}%
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xl-patient text-gray-700">
                    已完成 {tp.done}/{tp.total}
                    {tp.total > 0 && `（${rate}%）`}
                  </p>
                  {hasMissed && (
                    <p className="text-lg text-patient-warning font-medium mt-1">
                      漏服 {tp.missed} 次
                    </p>
                  )}
                  {ps.latestSOAP?.subjectiveNote && (
                    <p className="text-lg text-gray-500 mt-1 truncate">
                      {ps.latestSOAP.symptomSeverity && (
                        <span className="mr-1">
                          {ps.latestSOAP.symptomSeverity === "SEVERE"
                            ? "🔴"
                            : ps.latestSOAP.symptomSeverity === "MODERATE"
                            ? "🟡"
                            : "🟢"}
                        </span>
                      )}
                      {ps.latestSOAP.subjectiveNote}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
