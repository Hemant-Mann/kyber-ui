import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: ReactNode;
  description?: ReactNode;
};

export function Switch({ className, label, description, id, ...props }: SwitchProps) {
  const control = (
    <span className={cn("kyb-switch", className)}>
      <input id={id} type="checkbox" className="kyb-switch__input" role="switch" {...props} />
      <span className="kyb-switch__track" />
    </span>
  );

  if (!label && !description) return control;

  return (
    <label className="kyb-choice-field" htmlFor={id}>
      {control}
      <span className="kyb-choice-field__text">
        {label ? <span className="kyb-choice-field__label">{label}</span> : null}
        {description ? <span className="kyb-choice-field__description">{description}</span> : null}
      </span>
    </label>
  );
}
