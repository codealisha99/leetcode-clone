import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { searchProperties, PropertyQuery } from "../services/properties";
import { PropertyItem, PropertiesSearchResponse } from "../types/property";

export function useProperties(initialQuery: PropertyQuery = {}) {
  const [items, setItems] = useState<PropertyItem[]>([]);
  const [pagination, setPagination] = useState<PropertiesSearchResponse["pagination"] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const queryRef = useRef<PropertyQuery>({ ...initialQuery });

  const hasNext = !!pagination?.has_next;

  const load = useCallback(async (opts?: { reset?: boolean; override?: Partial<PropertyQuery> }) => {
    const reset = !!opts?.reset;
    const override = opts?.override ?? {};
    const nextQuery: PropertyQuery = {
      ...queryRef.current,
      ...override,
    };
    if (reset) {
      nextQuery.page = override.page ?? 1;
    } else {
      nextQuery.page = (override.page ?? queryRef.current.page ?? 1);
    }

    setLoading(true);
    setError(null);
    try {
      const res = await searchProperties(nextQuery);
      setPagination(res.pagination);
      setItems((prev) => (reset ? res.data : [...prev, ...res.data]));
      queryRef.current = nextQuery;
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (loading || !hasNext) return;
    const nextPage = (queryRef.current.page ?? 1) + 1;
    return load({ override: { page: nextPage } });
  }, [hasNext, load, loading]);

  useEffect(() => {
    load({ reset: true, override: { page: 1 } });
  }, [load]);

  const state = useMemo(() => ({ items, pagination, loading, error, hasNext }), [items, pagination, loading, error, hasNext]);

  return { ...state, load, loadMore, setQuery: (partial: Partial<PropertyQuery>) => load({ reset: true, override: partial }) };
}


