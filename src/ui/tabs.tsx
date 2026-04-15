"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type TabsContextValue = {
  value: string;
  setValue: (nextValue: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used within <Tabs>");
  return context;
}

type TabsProps = {
  value?: string;
  defaultValue: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
};

export function Tabs({ value, defaultValue, onValueChange, className, children }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const currentValue = value ?? internalValue;

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      setValue: (nextValue: string) => {
        if (value === undefined) setInternalValue(nextValue);
        onValueChange?.(nextValue);
      },
    }),
    [currentValue, onValueChange, value],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn("kyb-tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabList({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("kyb-tab-list", className)} role="tablist" {...props} />;
}

type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export function Tab({ value, className, children, ...props }: TabProps) {
  const tabs = useTabsContext();
  const selected = tabs.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      className={cn("kyb-tab", selected && "is-active", className)}
      onClick={() => tabs.setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

type TabPanelProps = HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function TabPanel({ value, className, children, ...props }: TabPanelProps) {
  const tabs = useTabsContext();
  if (tabs.value !== value) return null;

  return (
    <div role="tabpanel" className={cn("kyb-tab-panel", className)} {...props}>
      {children}
    </div>
  );
}
