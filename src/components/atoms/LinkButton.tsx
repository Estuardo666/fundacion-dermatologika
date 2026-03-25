import type { AnchorHTMLAttributes, ReactNode } from "react";
import { buttonBaseClasses, buttonSizeClasses, buttonVariantClasses, type ButtonSize, type ButtonVariant } from "./buttonStyles";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
};

export default function LinkButton({
  children,
  className = "",
  variant = "primary",
  size = "default",
  external = false,
  target,
  rel,
  ...props
}: LinkButtonProps) {
  const classNames = [buttonBaseClasses, buttonSizeClasses[size], buttonVariantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classNames}
      target={external ? target ?? "_blank" : target}
      rel={external ? rel ?? "noreferrer noopener" : rel}
      {...props}
    >
      {children}
    </a>
  );
}


