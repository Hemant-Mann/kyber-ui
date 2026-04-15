import type { ReactNode } from "react";
import { Card } from "../ui/card";

export function StatCard({
  title,
  value,
  meta,
  icon,
  className = "page-stat-card",
}: {
  title: string;
  value: string;
  meta?: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <h4>{title}</h4>
      <strong>{value}</strong>
      {meta ? <p>{meta}</p> : null}
      {icon ? <em>{icon}</em> : null}
    </Card>
  );
}
