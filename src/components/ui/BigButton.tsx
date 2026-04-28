"use client";

import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "success" | "warning" | "danger" | "outline";
type ButtonSize = "lg" | "xl";

interface BigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-patient-primary text-white",
  success: "bg-patient-success text-white",
  warning: "bg-patient-warning text-white",
  danger: "bg-patient-danger text-white",
  outline: "border-2 border-patient-primary text-patient-primary bg-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  lg: "px-6 py-3 text-xl-patient",
  xl: "px-8 py-4 text-2xl-patient",
};

export default function BigButton({
  variant = "primary",
  size = "lg",
  loading = false,
  disabled = false,
  className = "",
  children,
  onClick,
  ...rest
}: BigButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`
        rounded-2xl font-medium transition-all duration-200 select-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "active:scale-95 cursor-pointer"}
        ${className}
      `.trim()}
      {...rest}
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
