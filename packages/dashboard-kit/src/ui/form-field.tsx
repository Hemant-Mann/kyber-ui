import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Label } from "./label";

type FormFieldProps = {
  label?: ReactNode;
  htmlFor?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

export function FormField({ label, htmlFor, hint, error, required, className, children }: FormFieldProps) {
  return (
    <div className={cn("kyb-form-field", className)}>
      {label ? (
        <Label className="kyb-form-field__label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="kyb-form-field__required">*</span> : null}
        </Label>
      ) : null}
      {children}
      {error ? <p className="kyb-form-field__error">{error}</p> : hint ? <p className="kyb-form-field__hint">{hint}</p> : null}
    </div>
  );
}
