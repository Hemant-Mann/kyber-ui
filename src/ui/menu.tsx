"use client";

import { cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, MouseEvent as ReactMouseEvent, ReactElement, ReactNode } from "react";
import { cn } from "../lib/cn";

type DropdownMenuProps = {
  trigger: ReactNode;
  align?: "start" | "end";
  className?: string;
  children: ReactNode;
};

export function DropdownMenu({ trigger, align = "start", className, children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onDocumentClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div className={cn("kyb-menu", className)} ref={rootRef}>
      {/* An element trigger (e.g. <Button>) gets the toggle directly; wrapping it in another <button> is invalid HTML. */}
      {isValidElement(trigger) ? (
        cloneElement(trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>, {
          "aria-haspopup": "menu",
          "aria-expanded": open,
          onClick: (event: ReactMouseEvent<HTMLButtonElement>) => {
            (trigger as ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>).props.onClick?.(event);
            setOpen((prev) => !prev);
          },
        })
      ) : (
        <button
          type="button"
          className="kyb-menu__trigger"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {trigger}
        </button>
      )}
      {open ? (
        <div className={cn("kyb-menu__content", align === "end" && "is-end")} role="menu" onClick={() => setOpen(false)}>
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function MenuItem({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" role="menuitem" className={cn("kyb-menu__item", className)} {...props} />;
}

export function MenuSeparator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("kyb-menu__separator", className)} role="separator" {...props} />;
}
