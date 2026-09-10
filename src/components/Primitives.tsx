import type { ReactNode } from "react";
import { Icon } from "./Icon";
export type ModalKind = "access" | "login" | "contact" | "legal" | "privacy";
export type OpenModal = (kind: ModalKind) => void;
export function AccessButton({
  onOpen,
  children = "Solicitar acceso B2B",
  className = "",
}: {
  onOpen: OpenModal;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`button button-primary ${className}`}
      onClick={() => onOpen("access")}
    >
      {children}
      <Icon name="arrow" size={18} />
    </button>
  );
}
export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
