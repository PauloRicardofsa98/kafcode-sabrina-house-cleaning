import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ArrowIcon, MessageIcon, PinIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cities } from "@/content/cities";
import { smsHref } from "@/content/site";
import { defaultLocale, localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Áreas atendidas.
 *
 * Em inglês, cada cidade é um card com link para a própria página (é o coração
 * do SEO local). Nos demais idiomas as páginas de cidade não existem, então a
 * seção vira uma lista de nomes, sem link morto e sem texto em inglês no meio
 * de uma página em português.
 */
export function AreasServed({
  locale,
  dict,
  headingAs = "h2",
  hubLink = false,
}: {
  locale: Locale;
  dict: Dictionary;
  headingAs?: "h1" | "h2";
  /** Mostra o link para `/areas`. Usado na home, onde o menu é âncora. */
  hubLink?: boolean;
}) {
  const linkable = locale === defaultLocale;

  return (
    <Section tone="ivory" id="areas" labelledBy="areas-title">
      <Container width="wide">
        <SectionHeading
          id="areas-title"
          eyebrow={dict.areas.eyebrow}
          title={dict.areas.title}
          subtitle={dict.areas.subtitle}
          as={headingAs}
        />

        {linkable ? (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={localizedHref(locale, `/areas/${city.slug}`)}
                  className="group flex h-full flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                    <PinIcon className="h-4 w-4" />
                    {city.county}
                  </span>
                  <span className="font-display text-2xl text-ink">{city.name}</span>
                  <span className="text-sm text-ink-soft">
                    {city.neighborhoods.slice(0, 3).join(" · ")}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-wine">
                    {dict.areas.viewCity} {city.name}
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="mt-12 flex flex-wrap gap-3">
            {cities.map((city) => (
              <li
                key={city.slug}
                className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-4 py-2 text-sm text-ink"
              >
                <PinIcon className="h-4 w-4 text-blue" />
                {city.name}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-base text-ink-soft">
            {dict.areas.note}{" "}
            <a
              href={smsHref(dict.cta.smsBody)}
              className="inline-flex items-center gap-1.5 font-semibold text-wine underline-offset-4 hover:underline"
            >
              <MessageIcon className="h-4 w-4" />
              {dict.cta.textShort}
            </a>
          </p>
          {hubLink ? (
            <Link
              href={localizedHref(locale, "/areas")}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wine underline-offset-4 hover:underline"
            >
              {dict.areas.allAreas}
              <ArrowIcon className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
