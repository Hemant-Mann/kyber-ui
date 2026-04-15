"use client";

import { NAV_SECTIONS } from "@/components/dashboard/data";
import { DashboardTopbar } from "@kyber/dashboard-kit";

export function Topbar({ onAdd }: { onAdd: () => void }) {
  return <DashboardTopbar searchSections={NAV_SECTIONS} modeLabel="Demo Mode" primaryActionLabel="Get started" onPrimaryAction={onAdd} />;
}
