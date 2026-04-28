"use client";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function EmptyState({
  icon = "\u{1F4ED}",
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <span className="text-6xl mb-4">{icon}</span>
      <h3 className="text-2xl-patient font-bold text-gray-800 mb-2">{title}</h3>
      {description && (
        <p className="text-lg text-gray-500 mb-6">{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className="px-6 py-3 bg-patient-primary text-white text-xl-patient font-medium rounded-2xl active:scale-95 transition-transform cursor-pointer"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
