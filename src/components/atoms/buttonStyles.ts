export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "default" | "icon";

type ButtonStyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-full text-[15px] font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-institutional-green focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

export const buttonSizeClasses: Record<ButtonSize, string> = {
  default: "px-5 py-2.5",
  icon: "h-12 w-12 p-0",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-transparent bg-[var(--button-primary-bg)] text-white shadow-[0_10px_24px_rgba(124,192,90,0.22)] hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-[0_14px_30px_rgba(124,192,90,0.28)] active:translate-y-0 active:scale-[0.995] active:bg-[var(--button-primary-active)]",
  secondary:
    "border border-[var(--button-secondary-border)] bg-white text-[var(--button-secondary-text)] shadow-none hover:-translate-y-0.5 hover:border-[var(--button-secondary-border-hover)] hover:bg-[var(--button-secondary-hover-bg)] hover:text-[var(--button-secondary-text-hover)] active:translate-y-0 active:scale-[0.995] active:bg-[var(--button-secondary-active-bg)]",
};


