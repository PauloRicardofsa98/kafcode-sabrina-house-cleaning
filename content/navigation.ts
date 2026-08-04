import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Links de navegação.
 *
 * O rótulo vem do dicionário, então o menu funciona nos três idiomas sem
 * duplicar a lista de rotas.
 */

export type NavLink = {
  /** Rota neutra, sem prefixo de idioma. */
  path: string;
  /** Âncora dentro da rota, quando o destino é uma seção. */
  hash?: string;
  label: (dict: Dictionary) => string;
};

/**
 * Menu do topo.
 *
 * A home já cobre serviços, áreas e dúvidas em rolagem contínua, então o menu
 * leva às seções dela em vez de tirar o visitante da página que converte. Os
 * hubs `/services` e `/areas` continuam existindo (e linkados a partir das
 * próprias seções e do rodapé), porque são eles que sustentam as páginas de
 * cidade e de serviço no Google.
 *
 * "About" é a exceção: não há seção equivalente na home, então continua página.
 */
export const primaryNav: NavLink[] = [
  { path: "/", hash: "services", label: (d) => d.nav.services },
  { path: "/", hash: "areas", label: (d) => d.nav.areas },
  { path: "/about", label: (d) => d.nav.about },
  { path: "/", hash: "faq", label: (d) => d.nav.faq },
];

/** Resolve um `NavLink` para href, juntando prefixo de idioma e âncora. */
export function navHref(locale: Locale, link: NavLink): string {
  const base = localizedHref(locale, link.path);
  if (!link.hash) return base;
  return base === "/" ? `/#${link.hash}` : `${base}#${link.hash}`;
}

export const footerCompanyNav: NavLink[] = [
  { path: "/", label: (d) => d.nav.home },
  { path: "/about", label: (d) => d.nav.about },
  { path: "/areas", label: (d) => d.nav.areas },
  { path: "/faq", label: (d) => d.nav.faq },
  { path: "/quote", label: (d) => d.nav.quote },
];

/**
 * Rotas que existem apenas em inglês.
 *
 * Usado em dois lugares: o seletor de idioma (para não gerar link para uma
 * página que dá 404) e o `sitemap.ts` (para não declarar alternates falsos).
 */
export const englishOnlyPathPrefixes = ["/services/", "/areas/"];

export function isEnglishOnlyPath(path: string): boolean {
  return englishOnlyPathPrefixes.some((prefix) => path.startsWith(prefix));
}
