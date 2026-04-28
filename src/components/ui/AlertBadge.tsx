type AlertLevel = "YELLOW" | "ORANGE" | "RED";

interface AlertBadgeProps {
  level: AlertLevel;
  showIcon?: boolean;
}

const config: Record<AlertLevel, { bg: string; textColor: string; icon: string; label: string }> = {
  YELLOW: { bg: "bg-alert-yellow", textColor: "text-alert-yellowText", icon: "\u26A0", label: "库存不足" },
  ORANGE: { bg: "bg-alert-orange", textColor: "text-alert-orangeText", icon: "\u26A0", label: "漏服提醒" },
  RED: { bg: "bg-alert-red", textColor: "text-alert-redText", icon: "\u{1F534}", label: "严重副作用" },
};

export default function AlertBadge({ level, showIcon = true }: AlertBadgeProps) {
  const { bg, textColor, icon, label } = config[level];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${bg} ${textColor}`}>
      {showIcon && <span className="mr-1">{icon}</span>}
      {label}
    </span>
  );
}
