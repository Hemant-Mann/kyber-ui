import type { KeyboardEvent, ReactNode } from "react";
import { Card } from "../ui/card";
import { cn } from "../lib/cn";

export function StatCard({
  title,
  value,
  meta,
  icon,
  className = "page-stat-card",
  selected,
  onSelect,
}: {
  title: string;
  value: ReactNode;
  meta?: string;
  icon?: ReactNode;
  className?: string;
  /** Selectable cards act as filters: amber outline when selected. */
  selected?: boolean;
  onSelect?: () => void;
}) {
  const selectable = onSelect
    ? {
        role: "button",
        tabIndex: 0,
        "aria-pressed": Boolean(selected),
        onClick: onSelect,
        onKeyDown: (event: KeyboardEvent) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect();
          }
        },
      }
    : {};

  return (
    <Card className={cn(className, onSelect && "is-selectable", selected && "is-selected")} {...selectable}>
      <h4>{title}</h4>
      <strong>{value}</strong>
      {meta ? <p>{meta}</p> : null}
      {icon ? <em>{icon}</em> : null}
    </Card>
  );
}
