/**
 * Rótulos de interface das páginas que existem **apenas em inglês**
 * (serviço individual e cidade).
 *
 * Ficam aqui, e não no dicionário, exatamente porque não têm tradução: o
 * dicionário existe para o que precisa existir nos três idiomas. Deixá-los aqui
 * mantém a regra de "nenhuma string solta em componente" sem poluir `pt.ts` e
 * `es.ts` com chaves que nunca seriam usadas.
 */
export const enLabels = {
  service: {
    whatsIncluded: "What's included",
    goodFor: "Good for",
    howLong: "How long it takes",
    questions: "Common questions",
    otherServices: "Other services",
    breadcrumb: "Services",
  },
  city: {
    breadcrumb: "Areas",
    whatsDifferent: "What's different about cleaning here",
    localDetail: "How we work in",
    neighborhoods: "Neighborhoods we clean",
    zips: "ZIP codes",
    questions: "Questions from",
    nearby: "Nearby areas we also cover",
    servicesHere: "Services available in",
  },
} as const;
