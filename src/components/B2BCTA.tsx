import { AccessButton, Eyebrow, type OpenModal } from "./Primitives";
import { Icon } from "./Icon";
export default function B2BCTA({ onOpen }: { onOpen: OpenModal }) {
  return (
    <section id="acceso" className="container cta-wrapper reveal">
      <div className="b2b-cta">
        <div className="cta-text">
          <Eyebrow>EL SIGUIENTE CAPÍTULO ES PROFESIONAL</Eyebrow>
          <h2>
            Tu negocio.
            <br />
            Nuestra próxima conexión.
          </h2>
          <p>
            Estamos preparando el acceso B2B de Vitand.
            <br />
            Un nuevo canal para tiendas, revendedores y operadores
            profesionales.
          </p>
          <div className="cta-buttons">
            <AccessButton onOpen={onOpen} />
            <button className="text-link" onClick={() => onOpen("contact")}>
              Contactar
              <Icon name="diagonal" size={17} />
            </button>
          </div>
        </div>
        <div className="cta-art" aria-hidden="true">
          <div />
          <div />
          <div />
          <span>
            LET’S
            <br />
            CONNECT.<b>↗</b>
          </span>
        </div>
      </div>
    </section>
  );
}
