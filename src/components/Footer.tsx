import { navigation } from "../data";
import { Icon } from "./Icon";
import type { OpenModal } from "./Primitives";
export default function Footer({ onOpen }: { onOpen: OpenModal }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#inicio" className="wordmark">
              VITAND
            </a>
            <p>
              TCG asiático.
              <br />
              Visión profesional.
            </p>
          </div>
          <div className="footer-links">
            <span>EXPLORA</span>
            {navigation.slice(0, 3).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="footer-links">
            <span>CONECTA</span>
            <button onClick={() => onOpen("access")}>
              Acceso B2B
              <Icon name="diagonal" size={13} />
            </button>
            <button onClick={() => onOpen("contact")}>
              Contacto
              <Icon name="diagonal" size={13} />
            </button>
            <a href="#faq">Preguntas frecuentes</a>
          </div>
          <div className="footer-location">
            <Icon name="globe" size={22} />
            <span>
              Desde Asia.
              <br />
              Con visión europea.
            </span>
            <small>España / Europa</small>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vitand</span>
          <p>
            Pokémon es una marca de sus respectivos titulares. Vitand es un
            proyecto independiente.
          </p>
          <div>
            <button onClick={() => onOpen("legal")}>Aviso legal</button>
            <button onClick={() => onOpen("privacy")}>Privacidad</button>
            <a href="#inicio" aria-label="Volver al inicio">
              <Icon name="arrow" className="back-top" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
