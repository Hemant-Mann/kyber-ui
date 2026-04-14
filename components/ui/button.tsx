import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "pill";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  iconLeft?: ReactNode;
};

export function Button({ className, variant = "primary", iconLeft, children, ...props }: ButtonProps) {
  return (
    <button className={cn("ui-btn", `ui-btn--${variant}`, className)} {...props}>
      {iconLeft ? <span className="ui-btn__icon">{iconLeft}</span> : null}
      <span>{children}</span>
    </button>
  );
}
