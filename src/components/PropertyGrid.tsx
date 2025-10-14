import { useEffect, useRef } from "react";
import { PropertyItem } from "../types/property";
import PropertyCard from "./PropertyCard";
import "../styles/grid.css";

export interface PropertyGridProps {
  items: PropertyItem[];
  hasNext: boolean;
  loading: boolean;
  onLoadMore: () => void;
}

export function PropertyGrid({ items, hasNext, loading, onLoadMore }: PropertyGridProps) {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && hasNext && !loading) {
          onLoadMore();
        }
      }
    }, { root: null, rootMargin: "200px", threshold: 0 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasNext, loading, onLoadMore]);

  return (
    <div className="property-grid-wrap">
      <div className="property-grid">
        {items.map((it) => (
          <PropertyCard key={it.id} property={it} />
        ))}
      </div>
      <div ref={sentinelRef} className="grid-sentinel" />
      {loading && <div className="grid-loading">Loading…</div>}
      {!hasNext && !loading && <div className="grid-end">End of results</div>}
    </div>
  );
}

export default PropertyGrid;


