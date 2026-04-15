import type { ReactNode } from "react";

export function Tooltip({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <span className="kyb-tooltip">
      {children}
      <span className="kyb-tooltip__content" role="tooltip">
        {label}
      </span>
    </span>
  );
}
