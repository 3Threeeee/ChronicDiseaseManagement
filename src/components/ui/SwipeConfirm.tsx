"use client";

import { useRef, useState, useCallback } from "react";

interface SwipeConfirmProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  subtitle?: string;
  confirmText?: string;
}

export default function SwipeConfirm({
  isOpen,
  onConfirm,
  onCancel,
  title,
  subtitle,
  confirmText = "滑动确认服药",
}: SwipeConfirmProps) {
  const [swipeX, setSwipeX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const THUMB_SIZE = 56;

  const updateTrackWidth = useCallback(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }
  }, []);

  const handleTouchStart = () => {
    updateTrackWidth();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current || confirmed) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left - THUMB_SIZE / 2;
    const maxX = trackWidth - THUMB_SIZE;
    setSwipeX(Math.max(0, Math.min(x, maxX)));
  };

  const handleTouchEnd = () => {
    const maxX = trackWidth - THUMB_SIZE;
    if (swipeX >= maxX * 0.85) {
      setSwipeX(maxX);
      setConfirmed(true);
      setTimeout(() => {
        onConfirm();
        setSwipeX(0);
        setConfirmed(false);
      }, 300);
    } else {
      setSwipeX(0);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!trackRef.current || confirmed) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - THUMB_SIZE / 2;
    const maxX = trackWidth - THUMB_SIZE;
    setSwipeX(Math.max(0, Math.min(x, maxX)));
  };

  const handleMouseUp = handleTouchEnd;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    updateTrackWidth();
    document.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
    document.addEventListener("mouseup", handleMouseUp as unknown as EventListener, { once: true });
  };

  const progress = trackWidth > 0 ? swipeX / (trackWidth - THUMB_SIZE) : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-end bg-black/50 select-none">
      {/* 弹窗卡片 */}
      <div className="w-full max-w-lg bg-white rounded-t-3xl px-6 pt-8 pb-6 flex flex-col items-center gap-4">
        <h2 className="text-2xl-patient font-bold text-gray-800 text-center">{title}</h2>
        {subtitle && (
          <p className="text-xl-patient text-gray-500">{subtitle}</p>
        )}

        {/* 滑动轨道 */}
        <div
          ref={trackRef}
          className="relative w-full h-14 bg-gray-100 rounded-full overflow-hidden mt-2"
          onMouseDown={handleMouseDown}
        >
          {/* 进度条 */}
          <div
            className="absolute inset-y-0 left-0 bg-patient-success transition-all duration-100 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />

          {/* 提示文字 */}
          <div
            className="absolute inset-0 flex items-center justify-center text-lg font-medium text-gray-400 pointer-events-none"
            style={{ opacity: progress > 0.5 ? 0 : 1 }}
          >
            → {confirmText} →
          </div>

          {/* 滑块 */}
          <div
            className="absolute top-1 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl cursor-grab active:cursor-grabbing transition-transform duration-100 z-10"
            style={{ left: `${swipeX}px` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {confirmed ? "✓" : "→"}
          </div>
        </div>

        <button
          onClick={onCancel}
          className="mt-2 py-3 px-6 text-xl-patient text-gray-500 cursor-pointer"
        >
          取消
        </button>
      </div>
    </div>
  );
}
