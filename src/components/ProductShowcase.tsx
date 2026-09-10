import { useState } from "react";
import { products } from "../data";
import { ProductArt } from "./ProductArt";
import { Icon } from "./Icon";
import { Eyebrow, type OpenModal } from "./Primitives";
export default function ProductShowcase({ onOpen }: { onOpen: OpenModal }) {
  const [filter, setFilter] = useState("all");
  const filtered = products.filter(
    (product) => filter === "all" || product.origin === filter,
  );
  return (
    <section id="productos" className="products-section section reveal">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow>UNA SELECCIÓN CON ORIGEN</Eyebrow>
            <h2>
              Lo que viene
              <br />a Vitand.
            </h2>
          </div>
          <div className="product-intro">
            <p>
              Nuestra primera selección estará centrada en cajas Pokémon de
              Japón y Corea.
            </p>
            <div
              className="product-filters"
              role="group"
              aria-label="Filtrar selección por origen"
            >
              {[
                ["all", "Toda la selección"],
                ["JP", "Japón"],
                ["KR", "Corea"],
              ].map(([value, label]) => (
                <button
                  key={value}
                  aria-pressed={filter === value}
                  onClick={() => setFilter(value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="product-grid" aria-live="polite">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className={`product-image product-image-${product.variant}`}>
                <span className="product-country">
                  {product.origin} <span>• {product.language}</span>
                </span>
                <span className="sample-badge">VISTA PREVIA</span>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width="480"
                    height="400"
                  />
                ) : (
                  <ProductArt
                    variant={product.variant}
                    origin={product.origin}
                    edition={product.edition}
                  />
                )}
                <span className="product-image-caption">IMAGEN CONCEPTUAL</span>
              </div>
              <div className="product-details">
                <p>{product.type}</p>
                <h3>{product.name}</h3>
                <button onClick={() => onOpen("access")}>
                  Acceso B2B
                  <Icon name="diagonal" size={17} />
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className="product-disclaimer">
          <Icon name="lock" size={16} />
          <p>
            Los precios profesionales estarán disponibles para cuentas B2B
            verificadas.
            <span>
              Selección ilustrativa. Referencias y disponibilidad por confirmar.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
