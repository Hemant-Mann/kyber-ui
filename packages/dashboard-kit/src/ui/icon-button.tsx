import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "ghost" | "outline" | "solid";
};

export function IconButton({ icon, size = "md", variant = "ghost", className, ...props }: IconButtonProps) {
  return (
    <button type="button" className={cn("kyb-icon-button", `is-${size}`, `is-${variant}`, className)} {...props}>
      {icon}
    </button>
  );
}
