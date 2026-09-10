import { useEffect, useRef, useState } from "react";
import { navigation } from "../data";
import { Icon } from "./Icon";
import { AccessButton, type OpenModal } from "./Primitives";
export default function Header({ onOpen }: { onOpen: OpenModal }) {
  const [menu, setMenu] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menu) {
        setMenu(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth > 1100) setMenu(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [menu]);
  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href="#inicio"
          className="wordmark"
          aria-label="Vitand, inicio"
          onClick={() => setMenu(false)}
        >
          VITAND
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="login-button" onClick={() => onOpen("login")}>
            Iniciar sesión
            <Icon name="diagonal" size={14} />
          </button>
          <AccessButton onOpen={onOpen} />
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={menu ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menu}
          aria-controls="mobile-navigation"
          onClick={() => setMenu(!menu)}
        >
          <Icon name={menu ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegación móvil"
        hidden={!menu}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenu(false)}>
            {item.label}
            <Icon name="arrow" />
          </a>
        ))}
        <button
          className="button button-outline"
          onClick={() => {
            setMenu(false);
            onOpen("login");
          }}
        >
          Iniciar sesión
        </button>
        <AccessButton
          onOpen={(kind) => {
            setMenu(false);
            onOpen(kind);
          }}
        />
      </nav>
    </header>
  );
}
