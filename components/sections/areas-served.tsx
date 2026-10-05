import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ArrowIcon, MessageIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { cityRegions, getCities } from "@/content/cities";
import { smsHref } from "@/content/site";
import { defaultLocale, localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Áreas atendidas.
 *
 * São 18 cidades. Uma grade de cards com bairro e CTA em cada uma vira um muro
 * exatamente no ponto da página em que o visitante só quer saber se a casa dele
 * entra. Agrupar por região resolve isso: seis colunas curtas, escaneáveis, e a
 * pessoa se localiza mais rápido do que numa lista alfabética.
 *
 * Em inglês cada cidade é link para a própria página (é o coração do SEO local).
 * Nos demais idiomas as páginas não existem, então os nomes ficam como texto,
 * sem link morto e sem inglês no meio de uma página em português.
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

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {cityRegions.map((region) => (
            <div key={region.label} className="reveal flex flex-col gap-4 border-t border-line pt-5">
              <h3 className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">
                {region.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {getCities(region.slugs).map((city) => (
                  <li key={city.slug}>
                    {linkable ? (
                      <Link
                        href={localizedHref(locale, `/areas/${city.slug}`)}
                        className="group inline-flex items-center gap-1.5 font-display text-lg text-ink transition-colors hover:text-blue"
                      >
                        {city.name}
                        <ArrowIcon className="h-3.5 w-3.5 -translate-x-1 text-blue opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    ) : (
                      <span className="font-display text-lg text-ink">{city.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
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
