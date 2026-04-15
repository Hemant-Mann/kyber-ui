"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "../lib/cn";
import { Pagination } from "./pagination";
import { Table, TableBody, TableHead, TableRow, TableTd, TableTh } from "./table";

export type DataTableColumn<T> = {
  id?: string;
  header: ReactNode;
  accessorKey?: keyof T;
  cell?: (row: T) => ReactNode;
  sortable?: boolean;
  className?: string;
};

type SortState = { columnId: string; direction: "asc" | "desc" } | null;

type DataTableProps<T extends Record<string, unknown>> = {
  columns: Array<DataTableColumn<T>>;
  rows: T[];
  rowKey: (row: T, index: number) => string;
  pageSize?: number;
  className?: string;
  emptyState?: ReactNode;
};

function compareValues(a: unknown, b: unknown) {
  if (a === b) return 0;
  if (a == null) return -1;
  if (b == null) return 1;

  if (typeof a === "number" && typeof b === "number") return a - b;

  const aDate = a instanceof Date ? a.getTime() : Date.parse(String(a));
  const bDate = b instanceof Date ? b.getTime() : Date.parse(String(b));
  if (!Number.isNaN(aDate) && !Number.isNaN(bDate)) return aDate - bDate;

  return String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: "base" });
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  rowKey,
  pageSize = 10,
  className,
  emptyState = "No data",
}: DataTableProps<T>) {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortState>(null);

  const normalizedColumns = useMemo(
    () =>
      columns.map((column, index) => ({
        ...column,
        id: column.id ?? String(column.accessorKey ?? `col-${index}`),
      })),
    [columns],
  );

  const sortedRows = useMemo(() => {
    if (!sort) return rows;
    const column = normalizedColumns.find((item) => item.id === sort.columnId);
    const accessorKey = column?.accessorKey;
    if (!accessorKey) return rows;

    const result = [...rows].sort((left, right) => compareValues(left[accessorKey], right[accessorKey]));
    return sort.direction === "asc" ? result : result.reverse();
  }, [normalizedColumns, rows, sort]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / pageSize));
  const safePage = Math.min(page, totalPages);

  const pagedRows = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return sortedRows.slice(start, start + pageSize);
  }, [pageSize, safePage, sortedRows]);

  const updateSort = (columnId: string) => {
    setSort((current) => {
      if (!current || current.columnId !== columnId) return { columnId, direction: "asc" };
      if (current.direction === "asc") return { columnId, direction: "desc" };
      return null;
    });
    setPage(1);
  };

  return (
    <div className={cn("kyb-data-table", className)}>
      <Table>
        <TableHead>
          <TableRow>
            {normalizedColumns.map((column) => {
              const isSorted = sort?.columnId === column.id;
              return (
                <TableTh key={column.id} className={column.className}>
                  {column.sortable ? (
                    <button type="button" className="kyb-data-table__sort" onClick={() => updateSort(column.id)}>
                      <span>{column.header}</span>
                      <span className="kyb-data-table__sort-indicator">{isSorted ? (sort?.direction === "asc" ? "↑" : "↓") : "↕"}</span>
                    </button>
                  ) : (
                    column.header
                  )}
                </TableTh>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {pagedRows.length === 0 ? (
            <TableRow>
              <TableTd colSpan={normalizedColumns.length} className="kyb-data-table__empty">
                {emptyState}
              </TableTd>
            </TableRow>
          ) : (
            pagedRows.map((row, idx) => (
              <TableRow key={rowKey(row, idx)}>
                {normalizedColumns.map((column) => (
                  <TableTd key={column.id} className={column.className}>
                    {column.cell
                      ? column.cell(row)
                      : column.accessorKey
                        ? (row[column.accessorKey] as ReactNode)
                        : null}
                  </TableTd>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {rows.length > pageSize ? (
        <div className="kyb-data-table__footer">
          <Pagination page={safePage} totalPages={totalPages} onPageChange={setPage} />
        </div>
      ) : null}
    </div>
  );
}
