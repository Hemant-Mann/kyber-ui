import type { HTMLAttributes } from "react";
import { Badge } from "./badge";

type ChipProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "danger" | "warning" | "muted";
};

export function Chip({ variant = "default", ...props }: ChipProps) {
  return <Badge variant={variant} {...props} />;
}
