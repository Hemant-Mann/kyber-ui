"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AddSubscriptionModal } from "@/components/dashboard/add-subscription-modal";
import { OverviewSection } from "@/components/dashboard/overview";
import { AnalyticsPage } from "@/components/dashboard/pages/analytics-page";
import { CategoriesPage } from "@/components/dashboard/pages/categories-page";
import { FamilyPage } from "@/components/dashboard/pages/family-page";
import { PaymentMethodsPage } from "@/components/dashboard/pages/payment-methods-page";
import { SubscriptionsPage } from "@/components/dashboard/pages/subscriptions-page";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { DashboardFrame } from "@kyber/dashboard-kit";
import type { DensityMode } from "@/lib/density";

export type DemoPage = "dashboard" | "subscriptions" | "analytics" | "categories" | "family" | "payment-methods";

export function DashboardShell({ density, page }: { density: DensityMode; page: DemoPage }) {
  const [collapsed, setCollapsed] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  let content: ReactNode;
  if (page === "dashboard") content = <OverviewSection onAdd={openModal} />;
  else if (page === "subscriptions") content = <SubscriptionsPage onAdd={openModal} />;
  else if (page === "analytics") content = <AnalyticsPage />;
  else if (page === "categories") content = <CategoriesPage />;
  else if (page === "family") content = <FamilyPage />;
  else content = <PaymentMethodsPage />;

  return (
    <DashboardFrame
      density={density}
      sidebar={<Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} />}
      topbar={<Topbar onAdd={openModal} />}
      overlay={<AddSubscriptionModal open={modalOpen} onClose={() => setModalOpen(false)} />}
    >
      {content}
    </DashboardFrame>
  );
}
