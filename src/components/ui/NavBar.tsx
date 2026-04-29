"use client";

import Link from "next/link";

interface NavItem {
  label: string;
  icon: string;
  href: string;
  active: boolean;
}

interface NavBarProps {
  items: NavItem[];
  role: "patient" | "family";
}

const defaultPatientItems: NavItem[] = [
  { label: "首页", icon: "\u{1F3E0}", href: "/", active: false },
  { label: "服药", icon: "\u{1F48A}", href: "/checkin", active: false },
  { label: "记录", icon: "\u{1F4CB}", href: "/soap", active: false },
  { label: "我的", icon: "\u{1F464}", href: "/profile", active: false },
];

const defaultFamilyItems: NavItem[] = [
  { label: "首页", icon: "\u{1F3E0}", href: "/monitor", active: false },
  { label: "监控", icon: "\u{1F4CA}", href: "/monitor", active: false },
  { label: "预警", icon: "\u{1F514}", href: "/alerts", active: false },
  { label: "我的", icon: "\u{1F464}", href: "/family/profile", active: false },
];

export default function NavBar({ items, role }: NavBarProps) {
  const navItems = items.length > 0 ? items : (role === "patient" ? defaultPatientItems : defaultFamilyItems);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-40">
      <div className="flex items-center justify-around max-w-lg mx-auto h-16">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 transition-colors duration-200 ${
              item.active ? "text-patient-primary" : "text-gray-400"
            }`}
          >
            <span className="text-2xl leading-none">{item.icon}</span>
            <span className="text-lg font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
