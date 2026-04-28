"use client";

export interface TimelineItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  status: "pending" | "done" | "missed" | "upcoming";
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  onItemClick?: (item: TimelineItem) => void;
  onSwipeConfirm?: (item: TimelineItem) => void;
}

const statusDot: Record<TimelineItem["status"], string> = {
  pending: "bg-gray-300",
  done: "bg-patient-success",
  missed: "bg-patient-danger",
  upcoming: "bg-patient-primary",
};

const statusIcon: Record<TimelineItem["status"], string> = {
  pending: "",
  done: "✓",
  missed: "✕",
  upcoming: "",
};

export default function Timeline({ items, onItemClick }: TimelineProps) {
  return (
    <div className="flex flex-col gap-0">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className="relative flex items-start gap-4 py-3 cursor-pointer select-none"
          >
            {/* 时间列 */}
            <div className="w-16 shrink-0 text-right">
              <span className="text-2xl-patient font-bold text-gray-700">
                {item.time}
              </span>
            </div>

            {/* 连接线和圆点 */}
            <div className="relative flex flex-col items-center shrink-0">
              {/* 圆点 */}
              <div
                className={`
                  relative z-10 w-4 h-4 rounded-full flex items-center justify-center
                  ${statusDot[item.status]}
                  ${item.current ? "animate-pulse scale-125" : ""}
                `.trim()}
              >
                {statusIcon[item.status] && (
                  <span className="text-white text-xs font-bold">
                    {statusIcon[item.status]}
                  </span>
                )}
              </div>
              {/* 连接线 */}
              {!isLast && (
                <div className="absolute top-4 bottom-0 w-0.5 bg-gray-200" />
              )}
            </div>

            {/* 内容 */}
            <div className="flex-1 min-w-0 pb-1">
              <div className="text-xl-patient font-medium text-gray-800">
                {item.title}
              </div>
              {item.subtitle && (
                <div className="text-lg-patient text-gray-500">
                  {item.subtitle}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
