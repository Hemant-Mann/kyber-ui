"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export type ToastTone = "info" | "success" | "warning" | "danger";

export type ToastInput = {
  title: ReactNode;
  description?: ReactNode;
  tone?: ToastTone;
  durationMs?: number;
};

type ToastRecord = ToastInput & { id: string };

type ToastListener = (entry: ToastInput) => void;

const listeners = new Set<ToastListener>();

function emitToast(entry: ToastInput) {
  listeners.forEach((listener) => listener(entry));
}

export function toast(entry: ToastInput | string) {
  if (typeof entry === "string") {
    emitToast({ title: entry });
    return;
  }
  emitToast(entry);
}

export function ToastProvider({ children, limit = 4 }: { children: ReactNode; limit?: number }) {
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  useEffect(() => {
    const listener: ToastListener = (entry) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      const nextToast: ToastRecord = {
        id,
        tone: "info",
        durationMs: 3000,
        ...entry,
      };

      setToasts((current) => [nextToast, ...current].slice(0, limit));

      window.setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }, nextToast.durationMs);
    };

    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [limit]);

  return (
    <>
      {children}
      <div className="kyb-toast-stack" aria-live="polite" aria-atomic="true">
        {toasts.map((item) => (
          <article key={item.id} className={`kyb-toast kyb-toast--${item.tone}`}>
            <div className="kyb-toast__content">
              <h5>{item.title}</h5>
              {item.description ? <p>{item.description}</p> : null}
            </div>
            <button
              type="button"
              className="kyb-toast__close"
              onClick={() => setToasts((current) => current.filter((toastItem) => toastItem.id !== item.id))}
              aria-label="Close notification"
            >
              ×
            </button>
          </article>
        ))}
      </div>
    </>
  );
}
