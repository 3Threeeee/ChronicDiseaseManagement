import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "慢病用药小管家",
  description: "慢病患者用药管理平台 - 服药提醒、库存管理、家属监控",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col bg-patient-bg text-foreground">
        {children}
      </body>
    </html>
  );
}
