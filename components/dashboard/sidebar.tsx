"use client";

import { NAV_SECTIONS } from "@/components/dashboard/data";
import { SidebarNav } from "@kyber/dashboard-kit";

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return <SidebarNav sections={NAV_SECTIONS} collapsed={collapsed} onToggle={onToggle} brand="Vexly" />;
}
