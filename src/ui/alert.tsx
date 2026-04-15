import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type AlertTone = "info" | "success" | "warning" | "danger";

export function Alert({
  tone = "info",
  title,
  description,
  className,
  ...props
}: HTMLAttributes<HTMLElement> & {
  tone?: AlertTone;
  title: string;
  description?: string;
}) {
  return (
    <section className={cn("kyb-alert", `kyb-alert--${tone}`, className)} role="status" {...props}>
      <h5 className="kyb-alert__title">{title}</h5>
      {description ? <p className="kyb-alert__description">{description}</p> : null}
    </section>
  );
}
