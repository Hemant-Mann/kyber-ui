import type { ReactNode } from "react";

export type KitNavItem = {
  label: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
};

export type KitNavSection = {
  label: string;
  items: KitNavItem[];
};

export type KitStatItem = {
  title: string;
  value: string;
  meta?: string;
  sub?: string;
  icon?: ReactNode;
};
