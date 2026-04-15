"use client";

import type { ReactNode } from "react";
import { XIcon } from "../icons";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
};

export function Dialog({ open, onClose, title, description, children, footer }: DialogProps) {
  if (!open) return null;

  return (
    <div className="kyb-dialog__backdrop" role="dialog" aria-modal onClick={onClose}>
      <section className="kyb-dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="kyb-dialog__close" onClick={onClose} aria-label="Close">
          <XIcon />
        </button>
        {title || description ? (
          <header className="kyb-dialog__header">
            {title ? <h3>{title}</h3> : null}
            {description ? <p>{description}</p> : null}
          </header>
        ) : null}
        {children ? <div className="kyb-dialog__body">{children}</div> : null}
        {footer ? <footer className="kyb-dialog__footer">{footer}</footer> : null}
      </section>
    </div>
  );
}
