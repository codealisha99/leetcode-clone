export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
  has_next: boolean;
  has_prev: boolean;
}

export interface FiltersResponseData {
  states: string[];
  cities: string[];
  localities: string[];
  property_types: string[];
}

export interface FiltersApplied {
  state?: string | null;
  city?: string | null;
  query?: string | null;
}

export interface PropertyItem {
  id: number;
  title: string;
  bank_name: string;
  reserve_price: number | null;
  area?: string | null;
  possession?: string | null;
  auction_start_date?: string | null;
  application_date?: string | null;
  location?: string | null; // composed or returned
}

export interface PropertiesSearchResponse {
  data: PropertyItem[];
  pagination: Pagination;
  filters_applied?: FiltersApplied;
}

export interface MediaThumbnailMap {
  small?: string;
  medium?: string;
  large?: string;
}

export interface PropertyImage {
  filename: string;
  url: string; // relative API path
  thumbnails?: MediaThumbnailMap;
}

export interface PropertyMedia {
  images: PropertyImage[];
  videos: unknown[];
  total_count: number;
}


