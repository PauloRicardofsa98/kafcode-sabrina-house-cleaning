/**
 * Ponto único de verdade dos dados do negócio (NAP, canais, alegações).
 *
 * ⚠️ TODO CLIENTE: os valores marcados abaixo são PLACEHOLDERS.
 * Trocar aqui propaga para header, hero, barra fixa, rodapé, formulário e JSON-LD.
 * A lista completa de pendências está no README, seção "Pendências da cliente".
 */

export const site = {
  /** Nome comercial usado em toda a interface e no schema. */
  name: "Sabrina Cleaning Service",
  /** TODO CLIENTE: confirmar a razão social registrada. */
  legalName: "Sabrina Cleaning Service",

  /**
   * Domínio oficial, confirmado pela cliente.
   *
   * ⚠️ `.com.br` é um ccTLD do Brasil, e o Google trata ccTLD como sinal forte
   * de que o site é destinado àquele país. Não dá para sobrescrever: os
   * métodos de geotargeting que o Google documenta valem só para domínios
   * genéricos (.com, .org). Isso pesa na busca orgânica com intenção local nos
   * EUA ("cleaning service Concord"), e quase nada na busca por marca
   * ("Sabrina Cleaning Service") nem no bloco do mapa.
   *
   * Todo o resto que sinaliza os EUA já está feito: hreflang en-US, endereço e
   * telefone americanos no LocalBusiness, areaServed com as 18 cidades e o
   * conteúdo em inglês. Ver SEO.md, seção 0.
   */
  url: "https://sabrinacleaningservice.com.br",

  /**
   * Número oficial, confirmado pela cliente.
   *
   * O DDD 407 é da Flórida: ela manteve o celular ao mudar para a Bay Area.
   * Funciona igual para SMS e ligação. O único efeito é que morador local
   * reconhece um número de fora, o que custa um pouco de confiança à primeira
   * vista. Se um dia ela quiser um número 925 (Contra Costa), dá para portar
   * ou adicionar um segundo, e aqui é o único lugar que muda.
   */
  phone: {
    e164: "+14078539402",
    display: "(407) 853-9402",
  },

  /** TODO CLIENTE: e-mail de contato. */
  email: "hello@sabrinacleaningservice.com.br",

  /**
   * Data de última revisão das páginas legais (ISO 8601).
   * Constante em vez de `new Date()` para não mudar sozinha a cada deploy.
   * Atualizar à mão sempre que o texto de privacidade ou termos mudar.
   */
  legalUpdated: "2026-08-03",

  /**
   * Base de operação.
   * TODO CLIENTE: cidade e CEP reais. Assumi Concord por ser o centro
   * geográfico da lista de cidades atendidas, mas isso vai para o
   * `LocalBusiness` do JSON-LD e precisa bater com o endereço do Google
   * Business, senão atrapalha o ranqueamento local em vez de ajudar.
   */
  address: {
    locality: "Concord",
    region: "CA",
    postalCode: "94520",
    country: "US",
  },

  /** Centro aproximado da área atendida, usado no `geo` do JSON-LD. */
  geo: {
    latitude: 37.978,
    longitude: -122.0311,
    /**
     * Raio em metros. 60 km a partir de Concord cobrem a lista inteira:
     * Vallejo ao norte, San Ramon ao sul e São Francisco a oeste.
     */
    radiusMeters: 60000,
  },

  /** TODO CLIENTE: horário real de atendimento. */
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
    opens: "08:00",
    closes: "18:00",
  },

  /**
   * Canais secundários. Deixar `null` remove o ícone do rodapé, sem link morto.
   * TODO CLIENTE: preencher os que existirem.
   */
  socials: {
    instagram: null as string | null,
    facebook: null as string | null,
    yelp: null as string | null,
    google: null as string | null,
    nextdoor: null as string | null,
    /** WhatsApp fica discreto no rodapé, nunca como CTA principal. */
    whatsapp: null as string | null,
  },

  /**
   * Alegações que só podem ir ao ar depois de confirmadas.
   * "Licensed & insured" é afirmação legal, e publicar sem seguro é risco real.
   */
  claims: {
    /** TODO CLIENTE: virar `true` só depois de confirmar seguro/bond. */
    licensedAndInsured: false,
    /** TODO CLIENTE: virar `true` se a equipe passa por background check. */
    backgroundChecked: false,
  },

  /**
   * Prova social numérica.
   * Os números do site antigo (500+ homes, 4.9/5) são de Orlando e não foram reaproveitados.
   * Enquanto `confirmed` for `false`, a interface usa os selos não-numéricos do dicionário.
   * TODO CLIENTE: preencher com números reais e virar `confirmed` para `true`.
   */
  stats: {
    confirmed: false,
    yearsExperience: 0,
    homesCleaned: 0,
    rating: 0,
    reviewCount: 0,
  },
} as const;

/** Link de ligação pronto para uso em `href`. */
export const telHref = `tel:${site.phone.e164}`;

/** Link de e-mail pronto para uso em `href`. */
export const mailHref = `mailto:${site.email}`;

/**
 * Monta um link de SMS com mensagem pré-preenchida.
 *
 * A forma `?&body=` é a única que funciona tanto no iOS quanto no Android:
 * o iOS espera `&body=` e o Android espera `?body=`.
 */
export function smsHref(body: string): string {
  return `sms:${site.phone.e164}?&body=${encodeURIComponent(body)}`;
}

/** Link de WhatsApp, ou `null` quando o número não estiver cadastrado. */
export function whatsappHref(body?: string): string | null {
  const number = site.socials.whatsapp;
  if (!number) return null;
  const digits = number.replace(/\D/g, "");
  return body ? `https://wa.me/${digits}?text=${encodeURIComponent(body)}` : `https://wa.me/${digits}`;
}
