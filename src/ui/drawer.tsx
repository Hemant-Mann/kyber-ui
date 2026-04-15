"use client";

import type { ReactNode } from "react";
import { XIcon } from "../icons";
import { cn } from "../lib/cn";

export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
}: {
  open: boolean;
  onClose: () => void;
  side?: "left" | "right";
  title?: ReactNode;
  children: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="kyb-drawer__backdrop" role="dialog" aria-modal onClick={onClose}>
      <aside className={cn("kyb-drawer", side === "left" ? "is-left" : "is-right")} onClick={(event) => event.stopPropagation()}>
        <header className="kyb-drawer__header">
          {title ? <h3>{title}</h3> : <span />}
          <button type="button" className="kyb-drawer__close" aria-label="Close" onClick={onClose}>
            <XIcon />
          </button>
        </header>
        <div className="kyb-drawer__body">{children}</div>
      </aside>
    </div>
  );
}
