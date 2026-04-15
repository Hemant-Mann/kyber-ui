"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "../icons";
import { cn } from "../lib/cn";

type MultiSelectOption = {
  label: string;
  value: string;
};

export function MultiSelect({
  options,
  values,
  onChange,
  placeholder = "Select options",
  className,
}: {
  options: MultiSelectOption[];
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = useMemo(() => options.filter((option) => values.includes(option.value)), [options, values]);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, []);

  const toggleValue = (value: string) => {
    if (values.includes(value)) onChange(values.filter((item) => item !== value));
    else onChange([...values, value]);
  };

  return (
    <div className={cn("kyb-multi-select", className)} ref={ref}>
      <button type="button" className="kyb-multi-select__trigger" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        <span className="kyb-multi-select__value">
          {selected.length ? selected.map((item) => item.label).join(", ") : placeholder}
        </span>
        <ChevronDownIcon className="kyb-multi-select__icon" />
      </button>
      {open ? (
        <div className="kyb-multi-select__panel kyb-fade-up" role="listbox" aria-multiselectable>
          {options.map((option) => {
            const active = values.includes(option.value);
            return (
              <button type="button" key={option.value} className={cn("kyb-multi-select__item", active && "is-active")} onClick={() => toggleValue(option.value)}>
                <span>{option.label}</span>
                {active ? <CheckIcon className="kyb-multi-select__check" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
