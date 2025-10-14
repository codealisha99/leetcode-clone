import SearchForm, { SearchValues } from "./SearchForm";
import PaginationControls from "./PaginationControls";
import PropertyGrid from "./PropertyGrid";
import { useProperties } from "../hooks/useProperties";

export default function PropertyListingPage() {
  const { items, pagination, hasNext, loading, loadMore, setQuery, load } = useProperties({ limit: 12, sort_by: "bn_auction_start_date", sort_order: "DESC" });

  function onSearch(values: SearchValues) {
    setQuery({
      query: values.query,
      property_type: values.property_type,
      budget_min: values.budget_min,
      budget_max: values.budget_max,
      page: 1,
    });
  }

  return (
    <div className="listing-page">
      <SearchForm onSearch={onSearch} />
      <PropertyGrid items={items} hasNext={hasNext} loading={loading} onLoadMore={loadMore} />
      {pagination && (
        <PaginationControls
          page={pagination.page}
          pages={pagination.pages}
          hasPrev={pagination.has_prev}
          hasNext={pagination.has_next}
          total={pagination.total}
          limit={pagination.limit}
          onLimitChange={(n) => setQuery({ limit: n, page: 1 })}
          onPrev={() => load({ override: { page: Math.max(1, pagination.page - 1) } })}
          onNext={() => load({ override: { page: pagination.page + 1 } })}
        />
      )}
    </div>
  );
}


