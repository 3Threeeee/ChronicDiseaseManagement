type Severity = "MILD" | "MODERATE" | "SEVERE";

interface SeverityBadgeProps {
  severity: Severity;
}

const config: Record<Severity, { bg: string; text: string; label: string }> = {
  MILD: { bg: "bg-yellow-100", text: "text-yellow-700", label: "轻微" },
  MODERATE: { bg: "bg-orange-100", text: "text-orange-700", label: "中度" },
  SEVERE: { bg: "bg-red-100", text: "text-red-700", label: "重度" },
};

export default function SeverityBadge({ severity }: SeverityBadgeProps) {
  const { bg, text, label } = config[severity];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${bg} ${text}`}>
      {label}
    </span>
  );
}
