import { useEffect, useState } from "react";
import { fetchFilters } from "../services/properties";
import { FiltersResponseData } from "../types/property";

export function useFilters(state?: string, city?: string) {
  const [data, setData] = useState<FiltersResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchFilters({ state, city })
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [state, city]);

  return { data, loading, error };
}


