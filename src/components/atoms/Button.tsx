import type { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses, type ButtonVariant } from "./buttonStyles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export default function Button({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classNames = [buttonBaseClasses, buttonSizeClasses.default, buttonVariantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}
