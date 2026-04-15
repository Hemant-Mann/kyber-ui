import type { TextareaHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("kyb-textarea", className)} />;
}
