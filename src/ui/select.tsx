import type { SelectHTMLAttributes } from "react";
import { ChevronDownIcon } from "../icons";
import { cn } from "../lib/cn";

type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  placeholder?: string;
};

export function Select({ className, options, placeholder, ...props }: SelectProps) {
  return (
    <div className={cn("kyb-select", className)}>
      <select className="kyb-select__field" {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="kyb-select__icon" />
    </div>
  );
}
