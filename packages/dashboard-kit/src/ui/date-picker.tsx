import type { InputHTMLAttributes } from "react";
import { Input } from "./input";

type BaseDateProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "defaultValue" | "onChange"> & {
  value?: Date | null;
  defaultValue?: Date | null;
  onChange?: (value: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
};

function toDateInputValue(value?: Date | null) {
  if (!value) return "";
  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function toDateTimeInputValue(value?: Date | null) {
  if (!value) return "";
  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");
  const hours = `${value.getHours()}`.padStart(2, "0");
  const minutes = `${value.getMinutes()}`.padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function DatePicker({ value, defaultValue, onChange, minDate, maxDate, ...props }: BaseDateProps) {
  return (
    <Input
      type="date"
      value={value !== undefined ? toDateInputValue(value) : undefined}
      defaultValue={defaultValue !== undefined ? toDateInputValue(defaultValue) : undefined}
      min={minDate ? toDateInputValue(minDate) : undefined}
      max={maxDate ? toDateInputValue(maxDate) : undefined}
      onChange={(event) => onChange?.(event.target.value ? new Date(`${event.target.value}T00:00:00`) : null)}
      {...props}
    />
  );
}

export function DateTimePicker({ value, defaultValue, onChange, minDate, maxDate, ...props }: BaseDateProps) {
  return (
    <Input
      type="datetime-local"
      value={value !== undefined ? toDateTimeInputValue(value) : undefined}
      defaultValue={defaultValue !== undefined ? toDateTimeInputValue(defaultValue) : undefined}
      min={minDate ? toDateTimeInputValue(minDate) : undefined}
      max={maxDate ? toDateTimeInputValue(maxDate) : undefined}
      onChange={(event) => onChange?.(event.target.value ? new Date(event.target.value) : null)}
      {...props}
    />
  );
}
