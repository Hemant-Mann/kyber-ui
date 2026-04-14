import { DashboardShell } from "@/components/dashboard/shell";
import { resolveDensity } from "@/lib/density";

type PageProps = {
  searchParams?: Promise<{ density?: string }>;
};

export default async function AnalyticsRoute({ searchParams }: PageProps) {
  const density = await resolveDensity(searchParams);
  return <DashboardShell density={density} page="analytics" />;
}
