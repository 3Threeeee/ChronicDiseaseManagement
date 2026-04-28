"use client";

interface SymptomOption {
  emoji: string;
  label: string;
}

const SYMPTOM_OPTIONS: SymptomOption[] = [
  { emoji: "\u{1F635}", label: "\u5934\u6655" },
  { emoji: "\u{1F922}", label: "\u6076\u5FC3" },
  { emoji: "\u{1F62B}", label: "\u4E4F\u529B" },
  { emoji: "\u{1F634}", label: "\u55DC\u7761" },
  { emoji: "\u{1F915}", label: "\u5934\u75DB" },
  { emoji: "\u{1F624}", label: "\u80F8\u95F7" },
  { emoji: "\u{1F48A}", label: "\u65E0\u4E0D\u9002" },
  { emoji: "\u{1F60A}", label: "\u611F\u89C9\u826F\u597D" },
];

interface EmotionPickerProps {
  selected: string[];
  onChange: (tags: string[]) => void;
  className?: string;
}

export default function EmotionPicker({
  selected,
  onChange,
  className = "",
}: EmotionPickerProps) {
  const toggle = (label: string) => {
    if (selected.includes(label)) {
      onChange(selected.filter((s) => s !== label));
    } else {
      onChange([...selected, label]);
    }
  };

  return (
    <div className={`grid grid-cols-4 gap-3 ${className}`.trim()}>
      {SYMPTOM_OPTIONS.map((option) => {
        const isSelected = selected.includes(option.label);
        return (
          <button
            key={option.label}
            type="button"
            onClick={() => toggle(option.label)}
            className={`
              flex flex-col items-center gap-1 p-3 rounded-2xl border-2 transition-all duration-200 cursor-pointer select-none
              ${
                isSelected
                  ? "border-patient-primary bg-blue-50"
                  : "border-gray-200 bg-white"
              }
            `.trim()}
          >
            <span className="text-4xl leading-none">{option.emoji}</span>
            <span
              className={`text-lg font-medium ${
                isSelected ? "text-patient-primary" : "text-gray-600"
              }`}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
