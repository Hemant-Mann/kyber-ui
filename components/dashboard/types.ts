import type { ReactNode } from "react";

export type NavItem = {
  label: string;
  icon: ReactNode;
  href?: string;
  external?: boolean;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export type StatItem = {
  title: string;
  value: string;
  meta: string;
  sub?: string;
  icon: ReactNode;
};
