"use client";

import { useEffect, useState, useCallback } from "react";
import BigInput from "@/components/ui/BigInput";
import BigButton from "@/components/ui/BigButton";

interface BoundPatient {
  id: string;
  name: string;
  avatarUrl?: string;
}

export default function BindPage() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [boundPatients, setBoundPatients] = useState<BoundPatient[]>([]);
  const [familyId, setFamilyId] = useState("");

  const fetchPatients = useCallback(async () => {
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];
    if (!token) return;

    try {
      const meRes = await fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const meJson = await meRes.json();
      if (!meJson.success) return;
      setFamilyId(meJson.data.id);

      const res = await fetch(`/api/family/patients?familyId=${meJson.data.id}`);
      const json = await res.json();
      if (json.success) {
        setBoundPatients(json.data);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients]);

  const handleBind = async () => {
    setError("");
    setMessage("");

    if (!phone.trim()) {
      setError("请输入患者手机号");
      return;
    }

    if (!familyId) {
      setError("请先登录");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/family/bind", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ familyId, patientPhone: phone.trim() }),
      });
      const json = await res.json();
      if (json.success) {
        setMessage("绑定成功！");
        setPhone("");
        fetchPatients();
      } else {
        setError(json.error || "绑定失败");
      }
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl-patient font-bold text-gray-800">添加家人</h1>

      <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
        <BigInput
          label="患者手机号"
          type="tel"
          placeholder="请输入家人的注册手机号"
          value={phone}
          onChange={setPhone}
          error={error}
        />
        <BigButton
          variant="primary"
          size="xl"
          loading={loading}
          onClick={handleBind}
          className="w-full"
        >
          添加家人
        </BigButton>
        {message && (
          <p className="text-xl-patient text-patient-success text-center font-medium">
            {message}
          </p>
        )}
      </div>

      {boundPatients.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-2xl-patient font-semibold text-gray-700">
            已绑定家人（{boundPatients.length}）
          </h2>
          <div className="space-y-2">
            {boundPatients.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-patient-primary/10 flex items-center justify-center text-2xl">
                  {p.avatarUrl ? (
                    <img
                      src={p.avatarUrl}
                      alt={p.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    "👤"
                  )}
                </div>
                <span className="text-2xl-patient font-medium text-gray-800">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
