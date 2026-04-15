"use client";

import { useState } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type AccordionProps = {
  title: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: ReactNode;
  actions?: ReactNode;
};

export function Accordion({ title, defaultOpen = false, open, onOpenChange, className, children, actions }: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;

  const setOpen = (next: boolean) => {
    if (open === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  };

  return (
    <section className={cn("kyb-accordion", className)}>
      <button type="button" className="kyb-accordion__trigger" aria-expanded={isOpen} onClick={() => setOpen(!isOpen)}>
        <span>{title}</span>
        <span className={cn("kyb-accordion__chevron", isOpen && "is-open")}>⌄</span>
      </button>
      {isOpen ? <div className="kyb-accordion__content">{children}</div> : null}
      {isOpen && actions ? <footer className="kyb-accordion__actions">{actions}</footer> : null}
    </section>
  );
}

export function AccordionBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("kyb-accordion__body", className)} {...props} />;
}
