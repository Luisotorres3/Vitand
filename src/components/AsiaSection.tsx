import { Eyebrow } from "./Primitives";
import { Icon } from "./Icon";
export default function AsiaSection() {
  return (
    <section className="section container asia-section reveal">
      <div className="section-heading">
        <div>
          <Eyebrow>DOS ORÍGENES. UNA MISMA PASIÓN.</Eyebrow>
          <h2>
            La colección empieza
            <br />
            en el origen.
          </h2>
        </div>
        <p>
          Idiomas, ediciones y una cultura propia.
          <br />
          Japón y Corea serán el corazón de nuestra selección inicial.
        </p>
      </div>
      <div className="origin-grid">
        <article className="origin-card origin-japan">
          <div className="origin-card-top">
            <span>
              <span className="flag-jp" /> JAPÓN
            </span>
            <span>01 / ORIGIN</span>
          </div>
          <div className="origin-art" aria-hidden="true">
            <span className="origin-code">JP</span>
            <div className="japan-sun" />
            <span className="origin-script">日本</span>
          </div>
          <div className="origin-card-bottom">
            <div>
              <h3>El punto de partida.</h3>
              <p>Booster boxes · Ediciones japonesas</p>
            </div>
            <Icon name="diagonal" size={25} />
          </div>
        </article>
        <article className="origin-card origin-korea">
          <div className="origin-card-top">
            <span>
              <span className="flag-kr">◒</span> COREA
            </span>
            <span>02 / ORIGIN</span>
          </div>
          <div className="origin-art" aria-hidden="true">
            <span className="origin-code">KR</span>
            <div className="korea-orbit" />
            <span className="origin-script">한국</span>
          </div>
          <div className="origin-card-bottom">
            <div>
              <h3>Otra forma de coleccionar.</h3>
              <p>Booster boxes · Ediciones coreanas</p>
            </div>
            <Icon name="diagonal" size={25} />
          </div>
        </article>
      </div>
      <p className="territory-note">
        <Icon name="globe" size={17} />
        Mercado inicial previsto: España peninsular, Portugal, Baleares y
        Canarias.
      </p>
    </section>
  );
}
