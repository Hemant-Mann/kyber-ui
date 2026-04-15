import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: ReactNode;
  description?: ReactNode;
};

export function Radio({ className, label, description, id, ...props }: RadioProps) {
  if (!label && !description) {
    return <input id={id} type="radio" className={cn("kyb-radio", className)} {...props} />;
  }

  return (
    <label className="kyb-choice-field" htmlFor={id}>
      <input id={id} type="radio" className={cn("kyb-radio", className)} {...props} />
      <span className="kyb-choice-field__text">
        {label ? <span className="kyb-choice-field__label">{label}</span> : null}
        {description ? <span className="kyb-choice-field__description">{description}</span> : null}
      </span>
    </label>
  );
}
