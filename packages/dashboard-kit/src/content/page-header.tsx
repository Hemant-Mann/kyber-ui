import type { ReactNode } from "react";

export function PageHeader({
  title,
  description,
  badge,
  actions,
}: {
  title: string;
  description?: string;
  badge?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <header className="page-head">
      <div>
        {badge ? (
          <div className="page-title-with-chip">
            <h1>{title}</h1>
            {badge}
          </div>
        ) : (
          <h1>{title}</h1>
        )}
        {description ? <p>{description}</p> : null}
      </div>
      {actions}
    </header>
  );
}
