import { useEffect, useMemo, useState } from "react";
import { PropertyItem } from "../types/property";
import { absoluteMediaUrl, fetchPropertyMedia } from "../services/media";
import { formatCurrencyINR, formatDateShort } from "../utils/helpers";
import "../styles/card.css";

export interface PropertyCardProps {
  property: PropertyItem;
}

const FALLBACK_IMG = "/images/image.png";

export function PropertyCard({ property }: PropertyCardProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  useEffect(() => {
    let cancelled = false;
    setImgSrc(undefined);
    setImgLoaded(false);
    setImgError(false);
    fetchPropertyMedia(property.id, true)
      .then((media) => {
        if (cancelled) return;
        const first = media.images?.[0];
        const url = absoluteMediaUrl(first?.thumbnails?.medium || first?.url);
        if (!url) return;
        const img = new Image();
        img.onload = () => {
          if (!cancelled) {
            setImgSrc(url);
            setImgLoaded(true);
          }
        };
        img.onerror = () => {
          if (!cancelled) setImgError(true);
        };
        img.src = url;
      })
      .catch(() => {
        if (!cancelled) setImgError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [property.id]);

  const title = property.title;
  const location = property.location || "";

  const imageElement = useMemo(() => {
    const showFallback = imgError || !imgLoaded || !imgSrc;
    if (showFallback) {
      return (
        <img className="card-image" src={FALLBACK_IMG} alt="No image available" loading="lazy" />
      );
    }
    return (
      <img
        className="card-image"
        src={imgSrc}
        alt={title}
        loading="lazy"
        srcSet={imgSrc}
      />
    );
  }, [imgError, imgLoaded, imgSrc, title]);

  return (
    <article className="property-card">
      {imageElement}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {location && <div className="card-location">{location}</div>}
        <div className="card-meta">
          <div><span className="label">Bank</span><span className="value">{property.bank_name || "—"}</span></div>
          <div><span className="label">Reserve price</span><span className="value">{formatCurrencyINR(property.reserve_price)}</span></div>
          <div><span className="label">Area</span><span className="value">{property.area || "—"}</span></div>
          <div><span className="label">Possession</span><span className="value">{property.possession || "—"}</span></div>
          <div><span className="label">Auction starts</span><span className="value">{formatDateShort(property.auction_start_date)}</span></div>
          <div><span className="label">Apply by</span><span className="value">{formatDateShort(property.application_date)}</span></div>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;


