import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: ReactNode;
  description?: ReactNode;
};

export function Checkbox({ className, label, description, id, ...props }: CheckboxProps) {
  if (!label && !description) {
    return <input id={id} type="checkbox" className={cn("kyb-checkbox", className)} {...props} />;
  }

  return (
    <label className="kyb-choice-field" htmlFor={id}>
      <input id={id} type="checkbox" className={cn("kyb-checkbox", className)} {...props} />
      <span className="kyb-choice-field__text">
        {label ? <span className="kyb-choice-field__label">{label}</span> : null}
        {description ? <span className="kyb-choice-field__description">{description}</span> : null}
      </span>
    </label>
  );
}
