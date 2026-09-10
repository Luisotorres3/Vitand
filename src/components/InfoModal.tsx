import { useEffect, useRef } from "react";
import { Icon } from "./Icon";
import type { ModalKind } from "./Primitives";
const content: Record<
  ModalKind,
  { label: string; title: string; text: string }
> = {
  access: {
    label: "ACCESO PROFESIONAL",
    title: "Estamos preparando tu acceso.",
    text: "El registro B2B todavía no está abierto. Cuando esté disponible, podrás presentar tu actividad profesional y, tras la revisión de Vitand, consultar el catálogo y las condiciones B2B.",
  },
  login: {
    label: "ÁREA PROFESIONAL",
    title: "Nos vemos en la próxima fase.",
    text: "El área de clientes se habilitará junto con el catálogo privado. Todavía no es posible crear una cuenta ni iniciar sesión.",
  },
  contact: {
    label: "HABLEMOS PRONTO",
    title: "Una conversación por empezar.",
    text: "Publicaremos los canales oficiales de contacto de Vitand cuando se abra el acceso profesional. Mientras tanto, puedes conocer el proyecto y consultar las preguntas frecuentes.",
  },
  legal: {
    label: "INFORMACIÓN LEGAL",
    title: "Información en preparación.",
    text: "Esta es una primera presentación de Vitand. El aviso legal completo, con la identidad del titular y las condiciones aplicables, se incorporará antes de habilitar el servicio comercial.",
  },
  privacy: {
    label: "PRIVACIDAD",
    title: "Una primera web para conocernos.",
    text: "Esta versión no incluye formularios de recogida de datos, analítica ni cookies de seguimiento. La política de privacidad completa se publicará antes de habilitar el registro profesional.",
  },
};
export default function InfoModal({
  kind,
  onClose,
}: {
  kind: ModalKind | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!kind) return;
    const previous = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = originalOverflow;
      previous?.focus();
    };
  }, [kind]);
  return (
    <dialog
      ref={dialog}
      className="info-modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const r = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < r.left ||
            event.clientX > r.right ||
            event.clientY < r.top ||
            event.clientY > r.bottom
          )
            onClose();
        }
      }}
    >
      {kind && (
        <>
          <button
            autoFocus
            className="modal-close"
            aria-label="Cerrar ventana"
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
          <span className="modal-icon">
            <Icon name={kind === "privacy" ? "lock" : "diagonal"} size={26} />
          </span>
          <p className="eyebrow">{content[kind].label}</p>
          <h2 id="modal-title">{content[kind].title}</h2>
          <p id="modal-description">{content[kind].text}</p>
          {["access", "login"].includes(kind) && (
            <p className="modal-note">
              No se ha enviado ninguna solicitud ni se han recogido datos.
            </p>
          )}
          <a
            className="button button-primary"
            href={kind === "contact" ? "#faq" : "#como-funciona"}
            onClick={onClose}
          >
            {kind === "contact"
              ? "Consultar preguntas frecuentes"
              : "Conocer los próximos pasos"}
            <Icon name="arrow" size={17} />
          </a>
        </>
      )}
    </dialog>
  );
}
