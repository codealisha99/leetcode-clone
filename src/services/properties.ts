import { apiFetch } from "./api";
import { FiltersResponseData, PropertiesSearchResponse } from "../types/property";

export interface PropertyQuery {
  state?: string;
  city?: string;
  property_type?: string;
  budget_min?: number;
  budget_max?: number;
  sort_by?: string;
  sort_order?: "ASC" | "DESC";
  page?: number;
  limit?: number;
  query?: string;
}

function toQueryString(params: Record<string, unknown>): string {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    search.append(key, String(value));
  });
  const qs = search.toString();
  return qs ? `?${qs}` : "";
}

export async function fetchFilters(params?: { state?: string; city?: string }): Promise<FiltersResponseData> {
  const qs = toQueryString(params ?? {});
  const data = await apiFetch<{ states: string[]; cities: string[]; localities: string[]; property_types: string[] }>(`/api/properties/filters${qs}`);
  return data;
}

export async function searchProperties(query: PropertyQuery = {}): Promise<PropertiesSearchResponse> {
  const qs = toQueryString(query);
  const data = await apiFetch<PropertiesSearchResponse>(`/api/properties${qs}`);
  return data;
}


