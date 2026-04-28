"use client";

import { useEffect, useState } from "react";
import NavBar from "@/components/ui/NavBar";

export default function FamilyLayout({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = document.cookie
      .split(";")
      .find((c) => c.trim().startsWith("token="))
      ?.split("=")[1];
    if (token) {
      fetch("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success && json.data) {
            setUserName(json.data.name);
          }
        })
        .catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-patient-bg flex flex-col">
      <header className="bg-white border-b shadow-sm px-6 py-4">
        <p className="text-2xl-patient text-gray-500">
          家人守护{userName && <span>，{userName}</span>}
        </p>
      </header>

      <main className="flex-1 pb-20">{children}</main>

      <NavBar
        role="family"
        items={[
          { label: "首页", icon: "🏠", href: "/", active: false },
          { label: "监控", icon: "📊", href: "/family/monitor", active: false },
          { label: "预警", icon: "🔔", href: "/family/alerts", active: false },
          { label: "添加", icon: "➕", href: "/family/bind", active: false },
        ]}
      />
    </div>
  );
}
