export const locales = ["en", "pt", "es"] as const;

export type Locale = (typeof locales)[number];

/** Inglês é a versão canônica e não carrega prefixo na URL. */
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
};

/** Rótulo curto usado no seletor de idioma. */
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

/** Valor de `hreflang`, mais específico que o código de rota. */
export const localeHreflang: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR",
  es: "es-US",
};

/** Valor de `og:locale`. */
export const localeOpenGraph: Record<Locale, string> = {
  en: "en_US",
  pt: "pt_BR",
  es: "es_US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Monta o caminho de uma rota num idioma.
 * `localizedHref("en", "/services")` -> "/services"
 * `localizedHref("pt", "/services")` -> "/pt/services"
 */
export function localizedHref(locale: Locale, path = "/"): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized || "/";
  return `/${locale}${normalized}`;
}

/**
 * Remove o prefixo de idioma de um pathname, devolvendo a rota "neutra".
 * `stripLocale("/pt/services")` -> { locale: "pt", path: "/services" }
 */
export function stripLocale(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && isLocale(first)) {
    return { locale: first, path: `/${segments.slice(1).join("/")}`.replace(/\/$/, "") || "/" };
  }
  return { locale: defaultLocale, path: pathname || "/" };
}
