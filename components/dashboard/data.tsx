import {
  BellIcon,
  CalendarIcon,
  CardIcon,
  CategoriesIcon,
  ChartIcon,
  DashIcon,
  FamilyIcon,
  FeedbackIcon,
  HelpIcon,
  LinkIcon,
  SettingsIcon,
  SparklesIcon,
  WalletIcon,
} from "@/components/icons";
import type { NavSection, StatItem } from "@/components/dashboard/types";

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", icon: <DashIcon />, href: "/" },
      { label: "AI Agent", icon: <SparklesIcon />, href: "#" },
    ],
  },
  {
    label: "Subscriptions",
    items: [
      { label: "My Subscriptions", icon: <CardIcon />, href: "/subscriptions" },
      { label: "Analytics", icon: <ChartIcon />, href: "/analytics" },
      { label: "Categories", icon: <CategoriesIcon />, href: "/categories" },
      { label: "Family", icon: <FamilyIcon />, href: "/family" },
      { label: "Payment Methods", icon: <WalletIcon />, href: "/payment-methods" },
      { label: "Notifications", icon: <BellIcon />, href: "#" },
      { label: "Shared Links", icon: <LinkIcon />, href: "#" },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Billing", icon: <CardIcon />, href: "#" },
      { label: "Settings", icon: <SettingsIcon />, href: "#" },
      { label: "Feedback", icon: <FeedbackIcon />, href: "#" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Help Center", icon: <HelpIcon />, href: "#" },
      { label: "Discord", icon: <HelpIcon />, href: "https://discord.gg", external: true },
    ],
  },
];

export const STATS: StatItem[] = [
  {
    title: "Monthly Spending",
    value: "$235.34",
    meta: "Yearly: $2,824.02",
    sub: "↑ +5.2% from last month",
    icon: "$",
  },
  {
    title: "Active Subscriptions",
    value: "21",
    meta: "Average $11.21 each",
    icon: <CardIcon />,
  },
  {
    title: "Top Category",
    value: "Entertainment",
    meta: "$69.94/month",
    icon: "↗",
  },
  {
    title: "Next Renewal",
    value: "Tomorrow",
    meta: "Vercel Pro - $20.00",
    icon: <CalendarIcon />,
  },
];

export const SUBSCRIPTION_STEPS = [
  "Service",
  "Pricing",
  "Schedule",
  "Details",
  "Reminders",
  "Sharing",
  "Attachments",
] as const;
