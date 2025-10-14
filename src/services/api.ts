// Base API client for property listing
export const API_BASE_URL = "http://93.127.166.99:5001";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  [key: string]: unknown;
}

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`API error ${response.status}: ${text}`);
  }

  // Some endpoints might return non-JSON; attempt JSON first
  const json = (await response.json().catch(() => null)) as ApiResponse<T> | null;
  if (json && typeof json === "object" && "success" in json && "data" in json) {
    return (json as ApiResponse<T>).data;
  }
  // If not wrapped, cast the parsed value
  return (json as unknown as T) ?? (undefined as unknown as T);
}


