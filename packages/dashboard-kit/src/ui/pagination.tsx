import { Button } from "./button";
import { cn } from "../lib/cn";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

function buildPages(page: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  const pages: Array<number | "dots"> = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  if (start > 2) pages.push("dots");
  for (let value = start; value <= end; value += 1) pages.push(value);
  if (end < totalPages - 1) pages.push("dots");

  pages.push(totalPages);
  return pages;
}

export function Pagination({ page, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const safePage = Math.min(Math.max(page, 1), totalPages);
  const pages = buildPages(safePage, totalPages);

  return (
    <nav className={cn("kyb-pagination", className)} aria-label="Pagination">
      <Button
        type="button"
        variant="secondary"
        disabled={safePage <= 1}
        onClick={() => onPageChange(Math.max(1, safePage - 1))}
      >
        Prev
      </Button>

      <div className="kyb-pagination__pages">
        {pages.map((item, idx) => {
          if (item === "dots") {
            return (
              <span key={`dots-${idx}`} className="kyb-pagination__dots" aria-hidden>
                ...
              </span>
            );
          }

          return (
            <button
              key={item}
              type="button"
              className={cn("kyb-pagination__page", item === safePage && "is-active")}
              onClick={() => onPageChange(item)}
              aria-current={item === safePage ? "page" : undefined}
            >
              {item}
            </button>
          );
        })}
      </div>

      <Button
        type="button"
        variant="secondary"
        disabled={safePage >= totalPages}
        onClick={() => onPageChange(Math.min(totalPages, safePage + 1))}
      >
        Next
      </Button>
    </nav>
  );
}
