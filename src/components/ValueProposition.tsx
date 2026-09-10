import { features } from "../data";
import { Eyebrow } from "./Primitives";
import { Icon } from "./Icon";
export default function ValueProposition() {
  return (
    <section id="vitand" className="section container reveal">
      <div className="section-heading">
        <div>
          <Eyebrow>EL PROYECTO</Eyebrow>
          <h2>
            Tu acceso al
            <br />
            TCG asiático.
          </h2>
        </div>
        <p>
          Menos distancia entre tu negocio y las colecciones que buscas. Vitand
          nace para acercar el producto asiático al canal profesional.
        </p>
      </div>
      <div className="feature-grid">
        {features.map((feature, i) => (
          <article className="feature" key={feature.title}>
            <div className="feature-top">
              <Icon name={feature.icon} size={25} />
              <span>0{i + 1}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
