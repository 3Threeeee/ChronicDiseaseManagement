"use client";

interface BigInputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  label?: string;
}

export default function BigInput({
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  label,
}: BigInputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-xl-patient font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          text-2xl-patient p-4 rounded-2xl border-2 w-full outline-none transition-colors duration-200
          ${error ? "border-red-500" : "border-gray-200 focus:border-patient-primary"}
          focus:ring-2 focus:ring-patient-primary/20
        `.trim()}
      />
      {error && (
        <p className="text-lg text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
