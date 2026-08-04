import type { Metadata } from "next";

import { site } from "@/content/site";
import {
  defaultLocale,
  localeHreflang,
  localeOpenGraph,
  locales,
  localizedHref,
  type Locale,
} from "@/i18n/config";

/** Imagem padrão de compartilhamento. Gerada à parte; ver ASSETS.md. */
export const defaultOgImage = "/images/og/sabrina-house-cleaning-og.jpg";

export function absoluteUrl(path = "/"): string {
  return new URL(path, site.url).toString();
}

type BuildMetadataInput = {
  locale: Locale;
  /** Rota neutra, sem prefixo de idioma. Ex.: "/services". */
  path: string;
  title: string;
  description: string;
  /** Caminho da imagem de OG, relativo à raiz. */
  image?: string;
  /** `true` quando a página existe apenas em inglês. */
  enOnly?: boolean;
  /** Usa o título exatamente como veio, sem o sufixo da marca. */
  absoluteTitle?: boolean;
};

/**
 * Metadata completa de uma página: canonical, hreflang, Open Graph e Twitter.
 *
 * O canonical sempre aponta para a URL do próprio idioma. Os `alternates`
 * listam apenas os idiomas em que a página realmente existe. Declarar um
 * hreflang para uma URL que devolve 404 é pior do que não declarar nada.
 */
export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = defaultOgImage,
  enOnly = false,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(localizedHref(locale, path));
  const availableLocales: Locale[] = enOnly ? [defaultLocale] : [...locales];

  const languages: Record<string, string> = {};
  for (const available of availableLocales) {
    languages[localeHreflang[available]] = absoluteUrl(localizedHref(available, path));
  }
  languages["x-default"] = absoluteUrl(localizedHref(defaultLocale, path));

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url: canonical,
      locale: localeOpenGraph[locale],
      alternateLocale: availableLocales
        .filter((available) => available !== locale)
        .map((available) => localeOpenGraph[available]),
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
