import type { MetadataRoute } from "next";

import { cities } from "@/content/cities";
import { services } from "@/content/services";
import { defaultLocale, localeHreflang, locales, localizedHref } from "@/i18n/config";
import { absoluteUrl } from "@/lib/seo";

/** Rota traduzida nos três idiomas, com prioridade relativa. */
type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

const multilingual: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/quote", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

/** Rotas que existem apenas em inglês. Entram sem `alternates`. */
const englishOnly: Entry[] = [
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  ...cities.map((city) => ({
    path: `/areas/${city.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const entry of multilingual) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      languages[localeHreflang[locale]] = absoluteUrl(localizedHref(locale, entry.path));
    }

    for (const locale of locales) {
      entries.push({
        url: absoluteUrl(localizedHref(locale, entry.path)),
        changeFrequency: entry.changeFrequency,
        // Traduções são versões alternativas, não páginas de menor valor,
        // mas a versão canônica em inglês continua sendo a prioritária.
        priority: locale === defaultLocale ? entry.priority : entry.priority - 0.1,
        alternates: { languages },
      });
    }
  }

  for (const entry of englishOnly) {
    entries.push({
      url: absoluteUrl(localizedHref(defaultLocale, entry.path)),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    });
  }

  return entries;
}
