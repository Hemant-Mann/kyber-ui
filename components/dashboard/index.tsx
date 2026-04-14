import { DashboardShell } from "@/components/dashboard/shell";
import type { DensityMode } from "@/lib/density";

export function DashboardDemo({ density = "comfortable" }: { density?: DensityMode }) {
  return <DashboardShell density={density} page="dashboard" />;
}
