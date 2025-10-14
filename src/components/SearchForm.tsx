import { useEffect, useMemo, useState } from "react";
import { debounce } from "../utils/helpers";
import { useFilters } from "../hooks/useFilters";

export interface SearchValues {
  query: string;
  locality: string;
  budget_min?: number;
  budget_max?: number;
  property_type?: string;
}

export interface SearchFormProps {
  initial?: Partial<SearchValues>;
  onSearch: (values: SearchValues) => void;
}

export default function SearchForm({ initial, onSearch }: SearchFormProps) {
  const [query, setQuery] = useState(initial?.query ?? "");
  const [locality, setLocality] = useState(initial?.locality ?? "");
  const [budgetMin, setBudgetMin] = useState<string>(initial?.budget_min?.toString() ?? "");
  const [budgetMax, setBudgetMax] = useState<string>(initial?.budget_max?.toString() ?? "");
  const [propertyType, setPropertyType] = useState<string>(initial?.property_type ?? "");

  const { data: filters } = useFilters();

  const debouncedSubmit = useMemo(
    () => debounce(() => onSearch({
      query,
      locality,
      budget_min: budgetMin ? Number(budgetMin) : undefined,
      budget_max: budgetMax ? Number(budgetMax) : undefined,
      property_type: propertyType || undefined,
    }), 400),
    [query, locality, budgetMin, budgetMax, propertyType, onSearch]
  );

  useEffect(() => {
    debouncedSubmit();
  }, [debouncedSubmit]);

  return (
    <form className="search-form" onSubmit={(e) => { e.preventDefault(); onSearch({
      query,
      locality,
      budget_min: budgetMin ? Number(budgetMin) : undefined,
      budget_max: budgetMax ? Number(budgetMax) : undefined,
      property_type: propertyType || undefined,
    }); }}>
      <input className="input" type="text" placeholder="Search by title" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search by title" />
      <input className="input" type="text" placeholder="Locality" value={locality} onChange={(e) => setLocality(e.target.value)} aria-label="Locality" />
      <input className="input" type="number" min="0" placeholder="Budget min" value={budgetMin} onChange={(e) => setBudgetMin(e.target.value)} aria-label="Budget minimum" />
      <input className="input" type="number" min="0" placeholder="Budget max" value={budgetMax} onChange={(e) => setBudgetMax(e.target.value)} aria-label="Budget maximum" />
      <select className="input" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} aria-label="Property type">
        <option value="">All property types</option>
        {(filters?.property_types ?? []).map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      <button className="btn" type="submit">Search</button>
    </form>
  );
}


