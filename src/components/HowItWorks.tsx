import { Eyebrow } from "./Primitives";
import { Icon } from "./Icon";
const steps = [
  [
    "Solicita acceso",
    "Cuando abramos el registro, presenta tu empresa o actividad profesional.",
  ],
  [
    "Validamos tu perfil",
    "Revisaremos manualmente la información para habilitar tu cuenta B2B.",
  ],
  [
    "Descubre el catálogo",
    "Con tu cuenta aprobada, podrás consultar productos y condiciones profesionales.",
  ],
];
export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="steps-section section container reveal"
    >
      <div className="section-heading">
        <div>
          <Eyebrow>ASÍ FUNCIONARÁ</Eyebrow>
          <h2>
            Tu próximo paso,
            <br />
            sin complicaciones.
          </h2>
        </div>
        <span className="coming-badge">
          <span className="status-dot" />
          PRÓXIMAMENTE
        </span>
      </div>
      <div className="steps-grid">
        {steps.map(([title, text], i) => (
          <article key={title}>
            <div className="step-number">
              0{i + 1}
              <Icon name={i === 2 ? "check" : "arrow"} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
