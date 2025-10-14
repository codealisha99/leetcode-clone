import { apiFetch, API_BASE_URL } from "./api";
import { PropertyMedia } from "../types/property";

export async function fetchPropertyMedia(propertyId: number, includeThumbnails = true): Promise<PropertyMedia> {
  const query = includeThumbnails ? "?include_thumbnails=true" : "";
  const data = await apiFetch<PropertyMedia>(`/api/properties/${propertyId}/media${query}`);
  return data;
}

export function absoluteMediaUrl(relativeOrAbsolute?: string): string | undefined {
  if (!relativeOrAbsolute) return undefined;
  if (relativeOrAbsolute.startsWith("http://") || relativeOrAbsolute.startsWith("https://")) {
    return relativeOrAbsolute;
  }
  return `${API_BASE_URL}${relativeOrAbsolute}`;
}


