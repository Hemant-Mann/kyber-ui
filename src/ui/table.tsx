import type { HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "../lib/cn";

export function Table({ className, ...props }: TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn("kyb-table", className)} {...props} />;
}

export function TableHead({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("kyb-table__head", className)} {...props} />;
}

export function TableBody({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn("kyb-table__body", className)} {...props} />;
}

export function TableRow({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("kyb-table__row", className)} {...props} />;
}

export function TableTh({ className, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("kyb-table__th", className)} {...props} />;
}

export function TableTd({ className, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("kyb-table__td", className)} {...props} />;
}
