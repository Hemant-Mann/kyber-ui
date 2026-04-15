"use client";

import type { ReactNode } from "react";
import { XIcon } from "../icons";

export function Popup({
  open,
  onClose,
  title,
  description,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="kyb-popup__backdrop" role="dialog" aria-modal onClick={onClose}>
      <section className="kyb-popup kyb-fade-up" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="kyb-popup__close" onClick={onClose} aria-label="Close">
          <XIcon />
        </button>
        {title || description ? (
          <header className="kyb-popup__header">
            {title ? <h3>{title}</h3> : null}
            {description ? <p>{description}</p> : null}
          </header>
        ) : null}
        <div className="kyb-popup__body">{children}</div>
        {footer ? <footer className="kyb-popup__footer">{footer}</footer> : null}
      </section>
    </div>
  );
}
