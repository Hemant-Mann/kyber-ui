import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "danger" | "warning" | "muted";
};

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
  return <span className={cn("kyb-badge", `is-${variant}`, className)} {...props} />;
}
