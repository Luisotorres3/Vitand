import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueProposition from "./components/ValueProposition";
import ProductShowcase from "./components/ProductShowcase";
import Audience from "./components/Audience";
import AsiaSection from "./components/AsiaSection";
import HowItWorks from "./components/HowItWorks";
import B2BCTA from "./components/B2BCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import InfoModal from "./components/InfoModal";
import type { ModalKind } from "./components/Primitives";
export default function App() {
  const [modal, setModal] = useState<ModalKind | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.07 },
    );
    document.querySelectorAll(".reveal").forEach((element) => {
      element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      document
        .querySelectorAll(".will-reveal")
        .forEach((element) => element.classList.remove("will-reveal"));
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header onOpen={setModal} />
      <main id="contenido">
        <Hero onOpen={setModal} />
        <ValueProposition />
        <ProductShowcase onOpen={setModal} />
        <Audience onOpen={setModal} />
        <AsiaSection />
        <HowItWorks />
        <B2BCTA onOpen={setModal} />
        <FAQ />
      </main>
      <Footer onOpen={setModal} />
      <InfoModal kind={modal} onClose={() => setModal(null)} />
    </>
  );
}
