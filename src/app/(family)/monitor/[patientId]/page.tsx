"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import Timeline, { type TimelineItem } from "@/components/ui/Timeline";
import AlertBadge from "@/components/ui/AlertBadge";
import SeverityBadge from "@/components/ui/SeverityBadge";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import EmptyState from "@/components/ui/EmptyState";
import type { CheckInInfo, TodaySchedule, InventoryInfo, SOAPRecordInfo, AlertInfo } from "@/types";

type TabKey = "progress" | "inventory" | "health" | "alerts";

interface TabConfig {
  key: TabKey;
  label: string;
  icon: string;
}

const tabs: TabConfig[] = [
  { key: "progress", label: "服药进度", icon: "💊" },
  { key: "inventory", label: "库存状态", icon: "📦" },
  { key: "health", label: "健康记录", icon: "📋" },
  { key: "alerts", label: "预警历史", icon: "🔔" },
];

function getToken(): string | undefined {
  return document.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="))
    ?.split("=")[1];
}

export default function PatientDetailPage() {
  const { patientId } = useParams<{ patientId: string }>();
  const [activeTab, setActiveTab] = useState<TabKey>("progress");
  const [loading, setLoading] = useState(true);

  const [checkins, setCheckins] = useState<CheckInInfo[]>([]);
  const [inventories, setInventories] = useState<InventoryInfo[]>([]);
  const [soapRecords, setSoapRecords] = useState<SOAPRecordInfo[]>([]);
  const [alerts, setAlerts] = useState<AlertInfo[]>([]);

  const fetchData = useCallback(async () => {
    const token = getToken();
    if (!token || !patientId) return;
    setLoading(true);

    try {
      const headers = { Authorization: `Bearer ${token}` };

      const [checkinsRes, inventoryRes, soapRes, alertsRes] = await Promise.all([
        fetch(`/api/checkins/today?userId=${patientId}`, { headers }),
        fetch(`/api/inventory?userId=${patientId}`, { headers }),
        fetch(`/api/soap?userId=${patientId}&pageSize=20`, { headers }),
        fetch(`/api/alerts?sourceUserId=${patientId}`, { headers }),
      ]);

      if (checkinsRes.ok) {
        const json = await checkinsRes.json() as { success: boolean; data?: TodaySchedule };
        if (json.success && json.data) setCheckins(json.data.items);
      }

      if (inventoryRes.ok) {
        const json = await inventoryRes.json() as { success: boolean; data?: InventoryInfo[] };
        if (json.success && json.data) setInventories(json.data);
      }

      if (soapRes.ok) {
        const json = await soapRes.json() as { success: boolean; data?: SOAPRecordInfo[] };
        if (json.success && json.data) setSoapRecords(json.data);
      }

      if (alertsRes.ok) {
        const json = await alertsRes.json() as { success: boolean; data?: AlertInfo[] };
        if (json.success && json.data) setAlerts(json.data);
      }
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }, [patientId]);

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

  const todayProgress = (() => {
    const total = checkins.length;
    const done = checkins.filter((c) => !!c.actualTime && !c.missed).length;
    const missed = checkins.filter((c) => c.missed && !c.actualTime).length;
    const pending = total - done - missed;
    const rate = total > 0 ? Math.round((done / total) * 100) : 0;
    return { total, done, missed, pending, rate };
  })();

  const timelineItems: TimelineItem[] = checkins.map((c) => {
    let status: TimelineItem["status"] = "upcoming";
    if (c.actualTime) status = "done";
    else if (c.missed) status = "missed";
    else {
      const now = new Date();
      const [h, m] = c.scheduledTime.split(":").map(Number);
      const scheduled = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);
      const diffMin = (now.getTime() - scheduled.getTime()) / (1000 * 60);
      if (diffMin >= -30 && diffMin <= 30) status = "upcoming";
      else if (diffMin > 30) status = "missed";
      else status = "upcoming";
    }
    return {
      id: c.id || `${c.medicineId}_${c.scheduledTime}`,
      time: c.scheduledTime,
      title: c.medicineName,
      subtitle: `${c.dosage} ${status === "done" && c.actualTime ? `· ${c.actualTime} 已服` : ""}`,
      status,
    };
  });

  const recentSymptoms = soapRecords.slice(0, 5).map((r) => ({
    severity: r.symptomSeverity,
    tags: r.symptomTags,
    note: r.subjectiveNote,
    date: r.recordedAt,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-white border-b shadow-sm px-4 py-3">
        <div className="flex justify-around">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                activeTab === tab.key
                  ? "text-patient-primary bg-patient-primary/10"
                  : "text-gray-400"
              }`}
            >
              <span className="text-2xl">{tab.icon}</span>
              <span className="text-lg font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4">
        {activeTab === "progress" && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl-patient font-bold text-gray-800">
                  今日服药
                </span>
                <span className="text-xl-patient text-patient-primary font-bold">
                  {todayProgress.done}/{todayProgress.total} · {todayProgress.rate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700 bg-patient-success"
                  style={{ width: `${todayProgress.rate}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>✅ 完成 {todayProgress.done}</span>
                <span>⏳ 待办 {todayProgress.pending}</span>
                <span>⚠️ 漏服 {todayProgress.missed}</span>
              </div>
            </div>

            {timelineItems.length > 0 ? (
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <Timeline items={timelineItems} />
              </div>
            ) : (
              <EmptyState icon="💊" title="今日暂无服药安排" />
            )}
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="space-y-3">
            {inventories.length > 0 ? (
              inventories.map((inv) => {
                const pct = inv.totalCount > 0 ? Math.round((inv.remainingCount / inv.totalCount) * 100) : 0;
                return (
                  <div
                    key={inv.id}
                    className={`bg-white rounded-2xl p-4 shadow-sm border-l-4 ${
                      inv.isLow ? "border-patient-warning" : "border-patient-success"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl-patient font-bold text-gray-800">
                        {inv.medicineName}
                      </span>
                      <span className={`text-xl-patient font-bold ${inv.isLow ? "text-patient-warning" : "text-patient-success"}`}>
                        {inv.remainingCount}/{inv.totalCount} {inv.unit}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          inv.isLow ? "bg-patient-warning" : "bg-patient-success"
                        }`}
                        style={{ width: `${Math.min(pct, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <EmptyState icon="📦" title="暂无库存记录" />
            )}
          </div>
        )}

        {activeTab === "health" && (
          <div className="space-y-4">
            {soapRecords.length > 0 ? (
              <>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <h3 className="text-xl-patient font-bold text-gray-800 mb-3">
                    症状趋势（最近5次）
                  </h3>
                  <div className="flex items-end gap-2 h-24">
                    {recentSymptoms.reverse().map((s, i) => {
                      let h = 16;
                      if (s.severity === "MILD") h = 30;
                      else if (s.severity === "MODERATE") h = 60;
                      else if (s.severity === "SEVERE") h = 90;
                      let bg = "bg-gray-300";
                      if (s.severity === "MILD") bg = "bg-patient-success";
                      else if (s.severity === "MODERATE") bg = "bg-patient-warning";
                      else if (s.severity === "SEVERE") bg = "bg-patient-danger";
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className={`w-full rounded-t-lg ${bg} transition-all`}
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-xs text-gray-500">
                            {new Date(s.date).toLocaleDateString("zh-CN", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {soapRecords.map((r) => (
                  <div key={r.id} className="bg-white rounded-2xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg text-gray-500">
                        {new Date(r.recordedAt).toLocaleDateString("zh-CN", {
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {r.symptomSeverity && (
                        <SeverityBadge severity={r.symptomSeverity} />
                      )}
                    </div>
                    {r.subjectiveNote && (
                      <p className="text-xl-patient text-gray-800">{r.subjectiveNote}</p>
                    )}
                    {r.symptomTags && r.symptomTags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {r.symptomTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {(r.bloodPressure || r.bloodSugar != null || r.heartRate != null) && (
                      <div className="flex gap-4 mt-2 text-sm text-gray-600">
                        {r.bloodPressure && <span>血压: {r.bloodPressure}</span>}
                        {r.bloodSugar != null && <span>血糖: {r.bloodSugar}</span>}
                        {r.heartRate != null && <span>心率: {r.heartRate}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <EmptyState icon="📋" title="暂无健康记录" />
            )}
          </div>
        )}

        {activeTab === "alerts" && (
          <div className="space-y-3">
            {alerts.length > 0 ? (
              alerts.map((a) => (
                <div key={a.id} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <AlertBadge level={a.level} />
                    <span className="text-sm text-gray-400">
                      {new Date(a.createdAt).toLocaleDateString("zh-CN", {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <h4 className="text-xl-patient font-bold text-gray-800 mt-2">
                    {a.title}
                  </h4>
                  <p className="text-lg text-gray-600 mt-1">{a.message}</p>
                </div>
              ))
            ) : (
              <EmptyState icon="🔔" title="暂无预警记录" description="一切正常，没有预警" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
