import { type ReactNode } from "react";

type PretitleProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  size?: "xs" | "sm" | "md";
  className?: string;
  icon?: ReactNode;
};

const toneClasses = {
  light: "border-[color:color-mix(in_srgb,var(--institutional-green)_18%,white)] bg-[color:color-mix(in_srgb,var(--institutional-green)_12%,white)] text-[var(--institutional-green)]",
  dark: "border-white/25 bg-white/92 text-[var(--institutional-green)]",
};

const sizeClasses = {
  xs: "px-3 py-1.5 text-[9px]",
  sm: "px-3.5 py-1.5 text-[10px]",
  md: "px-4 py-2 text-[11px]",
};

export default function Pretitle({
  children,
  tone = "light",
  size = "md",
  className = "",
  icon,
}: PretitleProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border font-semibold uppercase tracking-[0.24em] backdrop-blur-sm ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
    >
      {icon ? <span className="flex h-4 w-4 items-center justify-center">{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}