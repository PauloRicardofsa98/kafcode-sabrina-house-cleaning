/**
 * Depoimentos reais.
 *
 * ⚠️ Está vazio de propósito. Depoimento inventado é fraude de prova social, e
 * `aggregateRating` no JSON-LD sem avaliação real viola as diretrizes do Google
 * (o resultado é perder o rich snippet inteiro, não ganhá-lo).
 *
 * TODO CLIENTE: colar aqui as avaliações reais do Google Business / Yelp.
 * Assim que houver ao menos uma, a seção de depoimentos troca sozinha do estado
 * vazio para os cards, e o `aggregateRating` passa a ser emitido, desde que
 * `site.stats.confirmed` também vire `true`.
 */

export type Review = {
  /** Nome como a pessoa autorizou publicar, ex.: "Megan R." */
  author: string;
  /** Bairro ou cidade, para dar contexto local. */
  location: string;
  /** 1 a 5. */
  rating: number;
  /** Texto literal da avaliação, sem edição. */
  body: string;
  /** ISO 8601, ex.: "2026-03-14". */
  date: string;
  /** De onde veio: "google" | "yelp" | "direct". */
  source: "google" | "yelp" | "direct";
};

export const reviews: Review[] = [];

export const hasReviews = reviews.length > 0;
