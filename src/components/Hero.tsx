import { Icon } from "./Icon";
import { AccessButton, Eyebrow, type OpenModal } from "./Primitives";
import { ProductArt } from "./ProductArt";
export default function Hero({ onOpen }: { onOpen: OpenModal }) {
  return (
    <>
      <section
        className="hero container"
        id="inicio"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <Eyebrow>DESDE ASIA. PARA TU NEGOCIO.</Eyebrow>
          <h1 id="hero-title">
            Tu próximo
            <br />
            origen:
            <br />
            <span>Japón & Corea.</span>
          </h1>
          <p className="hero-description">
            <strong>Pokémon TCG asiático. Visión profesional.</strong>
            <br />
            Cajas japonesas y coreanas para tiendas, revendedores y operadores
            de vending. Conoce tu próximo canal B2B.
          </p>
          <div className="hero-buttons">
            <AccessButton onOpen={onOpen} />
            <a href="#vitand" className="text-link">
              Conocer Vitand
              <Icon name="diagonal" size={17} />
            </a>
          </div>
          <div className="hero-note">
            <span className="status-dot" />
            Acceso profesional en preparación
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <span className="visual-coordinate">VITAND / ASIAN TCG CULTURE</span>
          <span className="visual-plus">+</span>
          <div className="background-type">ASIA</div>
          <div className="orbit-line" />
          <ProductArt
            variant="green"
            origin="KR"
            edition="02"
            className="hero-pack-back"
          />
          <ProductArt className="hero-pack-front" />
          <div className="origin-tag">
            <span className="flag-jp" /> JAPAN <span className="tag-divider" />{" "}
            <span className="flag-kr">◒</span> KOREA
            <Icon name="diagonal" size={14} />
          </div>
          <span className="visual-caption">
            EL ORIGEN DE TU PRÓXIMA COLECCIÓN.
          </span>
          <span className="concept-label">
            Composición conceptual · No es producto real
          </span>
        </div>
      </section>
      <div className="trust-strip">
        <div className="container flex flex-wrap items-center justify-between gap-5">
          <span>
            JAPAN <i>日本</i>
          </span>
          <b>✳</b>
          <span>
            KOREA <i>한국</i>
          </span>
          <b>✳</b>
          <span>POKÉMON TCG</span>
          <b>✳</b>
          <span>PROFESSIONAL SUPPLY</span>
          <b>✳</b>
          <span className="strip-b2b">
            B2B FIRST <Icon name="diagonal" size={17} />
          </span>
        </div>
      </div>
    </>
  );
}
