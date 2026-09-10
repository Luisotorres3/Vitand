import { Eyebrow, AccessButton, type OpenModal } from "./Primitives";
import { Icon } from "./Icon";
const audiences = [
  [
    "store",
    "Tiendas especializadas",
    "Para quienes hacen del TCG su punto de encuentro.",
  ],
  [
    "layers",
    "Revendedores",
    "Para quienes conectan producto y coleccionistas.",
  ],
  [
    "vending",
    "Operadores de vending",
    "Para quienes acercan el coleccionismo a nuevos espacios.",
  ],
  [
    "cards",
    "Profesionales TCG",
    "Para negocios que comparten nuestra pasión por las cartas.",
  ],
];
export default function Audience({ onOpen }: { onOpen: OpenModal }) {
  return (
    <section className="audience-section" id="profesionales">
      <div className="container audience-layout reveal">
        <div>
          <Eyebrow light>EL MISMO IDIOMA QUE TU NEGOCIO</Eyebrow>
          <h2>
            Tú conoces
            <br />a tus clientes.
            <br />
            <span>
              Hablemos de
              <br />
              tu producto.
            </span>
          </h2>
          <p>
            Un proyecto para quienes viven el TCG desde el otro lado del
            mostrador.
          </p>
          <AccessButton onOpen={onOpen}>Conocer el acceso B2B</AccessButton>
        </div>
        <div className="audience-list">
          {audiences.map(([icon, title, text], i) => (
            <article key={title}>
              <span className="audience-icon">
                <Icon name={icon} size={27} />
              </span>
              <div>
                <span className="audience-number">
                  0{i + 1} / PROFESIONALES
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <Icon name="diagonal" className="audience-arrow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
