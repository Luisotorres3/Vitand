export const navigation = [
  { label: "Para profesionales", href: "#profesionales" },
  { label: "Productos", href: "#productos" },
  { label: "Por qué Vitand", href: "#vitand" },
  { label: "FAQ", href: "#faq" },
];
export type Product = {
  id: string;
  name: string;
  origin: "JP" | "KR";
  language: string;
  type: string;
  variant: "lilac" | "green" | "peach" | "blue";
  edition: string;
  image?: string;
};
export const products: Product[] = [
  {
    id: "jp-box",
    name: "Japanese Booster Box",
    origin: "JP",
    language: "Japonés",
    type: "Caja de sobres",
    variant: "lilac",
    edition: "01",
  },
  {
    id: "kr-box",
    name: "Korean Booster Box",
    origin: "KR",
    language: "Coreano",
    type: "Caja de sobres",
    variant: "green",
    edition: "02",
  },
  {
    id: "jp-sealed",
    name: "Japan Sealed Selection",
    origin: "JP",
    language: "Japonés",
    type: "Selección con embalaje",
    variant: "peach",
    edition: "03",
  },
  {
    id: "kr-selection",
    name: "Korea TCG Selection",
    origin: "KR",
    language: "Coreano",
    type: "Selección de cajas",
    variant: "blue",
    edition: "04",
  },
];
export const features = [
  {
    icon: "globe",
    title: "Especialización asiática",
    text: "El punto de partida: cajas Pokémon TCG japonesas y coreanas. Una selección con un foco claro.",
  },
  {
    icon: "store",
    title: "Mentalidad profesional",
    text: "Una propuesta pensada para las necesidades de tiendas, revendedores y operadores de vending.",
  },
  {
    icon: "layers",
    title: "Un punto de encuentro",
    text: "Estamos preparando un espacio para consultar el catálogo y gestionar tus futuros pedidos B2B.",
  },
  {
    icon: "chat",
    title: "Conversaciones directas",
    text: "Queremos conocer lo que necesita tu negocio y construir una relación profesional desde el inicio.",
  },
];
export const faqItems = [
  {
    question: "¿Quién podrá solicitar acceso B2B?",
    answer:
      "Empresas y autónomos que vendan productos Pokémon TCG: tiendas especializadas, comercios, revendedores y operadores de vending. El acceso estará sujeto a una revisión manual de la información profesional.",
  },
  {
    question: "¿Los precios serán públicos?",
    answer:
      "Los precios profesionales estarán disponibles únicamente para cuentas B2B verificadas y aprobadas. Esta primera web presenta el proyecto y no permite comprar ni consultar tarifas.",
  },
  {
    question: "¿Qué productos ofrecerá Vitand?",
    answer:
      "La selección inicial se centrará en booster boxes japonesas y coreanas, con opciones de producto con y sin embalaje. Más adelante podrán incorporarse cartas AR, SR y cartas graduadas. Las composiciones que ves en esta página son ilustrativas; no representan referencias disponibles.",
  },
  {
    question: "¿Dónde estará disponible inicialmente?",
    answer:
      "El mercado inicial previsto incluye España peninsular, Portugal, Baleares y Canarias. Los detalles de envío y las condiciones para cada destino se comunicarán cuando se habilite el servicio.",
  },
  {
    question: "¿Habrá una tienda para particulares?",
    answer:
      "Sí, el proyecto contempla una futura etapa B2C. En esta primera fase, Vitand está enfocado en el canal profesional. Todavía no hay una fecha de apertura confirmada.",
  },
  {
    question: "¿Cómo podré contactar o solicitar acceso?",
    answer:
      "Los canales de contacto y el formulario de solicitud se habilitarán al abrir el acceso B2B. Por ahora puedes consultar aquí cómo funcionará la validación. Esta web no recoge ni envía datos personales.",
  },
];
