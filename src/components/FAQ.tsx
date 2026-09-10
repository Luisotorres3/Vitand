import { useState } from "react";
import { faqItems } from "../data";
import { Eyebrow } from "./Primitives";
import { Icon } from "./Icon";
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section container faq-section reveal">
      <div>
        <Eyebrow>HABLEMOS CLARO</Eyebrow>
        <h2>
          Antes de
          <br />
          empezar.
        </h2>
        <p>
          Lo que necesitas saber
          <br />
          sobre esta primera etapa.
        </p>
      </div>
      <div className="faq-list">
        {faqItems.map((item, i) => (
          <div
            className={`faq-item ${open === i ? "is-open" : ""}`}
            key={item.question}
          >
            <h3>
              <button
                id={`faq-button-${i}`}
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.question}
                <Icon name="plus" />
              </button>
            </h3>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={open !== i}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
