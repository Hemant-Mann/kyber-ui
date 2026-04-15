import type { ReactNode } from "react";

export function DashboardFrame({
  density,
  sidebar,
  topbar,
  children,
  overlay,
}: {
  density: "comfortable" | "compact";
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
  overlay?: ReactNode;
}) {
  return (
    <main className="dashboard-root" data-density={density} data-kyber-kit>
      {sidebar}
      <div className="dashboard-content">
        {topbar}
        {children}
      </div>
      {overlay}
    </main>
  );
}
