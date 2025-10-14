export interface PaginationControlsProps {
  page: number;
  pages?: number;
  hasPrev?: boolean;
  hasNext?: boolean;
  total?: number;
  limit?: number;
  onPrev: () => void;
  onNext: () => void;
  onLimitChange?: (limit: number) => void;
}

export default function PaginationControls({ page, pages, hasPrev, hasNext, total, limit, onPrev, onNext, onLimitChange }: PaginationControlsProps) {
  return (
    <div className="pagination" role="navigation" aria-label="Pagination">
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button className="btn" onClick={onPrev} disabled={!hasPrev}>Prev</button>
        <span className="page-info">Page {page}{pages ? ` / ${pages}` : ""}</span>
        <button className="btn" onClick={onNext} disabled={!hasNext}>Next</button>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="page-info">{typeof total === "number" ? `${total} results` : ""}</span>
        {onLimitChange && (
          <select className="input" value={limit ?? 12} onChange={(e) => onLimitChange(Number(e.target.value))} aria-label="Results per page">
            {[12, 24, 36, 48].map((n) => <option key={n} value={n}>{n}/page</option>)}
          </select>
        )}
      </div>
    </div>
  );
}


