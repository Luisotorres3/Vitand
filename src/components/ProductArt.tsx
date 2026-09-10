import type { Product } from "../data";
export function ProductArt({
  variant = "lilac",
  origin = "JP",
  edition = "01",
  className = "",
}: {
  variant?: Product["variant"];
  origin?: string;
  edition?: string;
  className?: string;
}) {
  return (
    <div className={`pack-scene ${className}`} aria-hidden="true">
      <div className={`pack pack-${variant}`}>
        <div className="pack-top">
          <span>VITAND</span>
          <span>ASIAN TCG</span>
        </div>
        <div className="pack-front">
          <div className="pack-heading">
            <span>VITAND</span>
            <span>
              {origin} / {edition}
            </span>
          </div>
          <div className="foil-orbit orbit-one" />
          <div className="foil-orbit orbit-two" />
          <div className="foil-core" />
          <div className="pack-edition">
            {origin === "JP" ? "日本" : "한국"}
            <span>
              ASIAN
              <br />
              COLLECTION
            </span>
          </div>
          <div className="pack-bottom">
            <span>TCG SELECTION</span>
            <span>CONCEPT {edition}</span>
          </div>
        </div>
        <div className="pack-side">
          <span>VITAND — TCG COLLECTION</span>
          <i />
        </div>
      </div>
    </div>
  );
}
