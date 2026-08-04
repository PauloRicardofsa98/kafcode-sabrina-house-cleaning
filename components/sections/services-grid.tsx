import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ArrowIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { defaultLocale, localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Grade de serviços, usada na home e no hub `/services`.
 *
 * As páginas individuais existem só em inglês; nos outros idiomas o card não
 * vira link, porque mandar o visitante para uma página em outro idioma (ou para
 * um 404) é pior do que simplesmente não linkar.
 */
export function ServicesGrid({
  locale,
  dict,
  headingAs = "h2",
  hubLink = false,
}: {
  locale: Locale;
  dict: Dictionary;
  headingAs?: "h1" | "h2";
  /** Mostra o link para `/services`. Usado na home, onde o menu é âncora. */
  hubLink?: boolean;
}) {
  const linkable = locale === defaultLocale;

  return (
    <Section tone="white" id="services" labelledBy="services-title">
      <Container width="wide">
        <SectionHeading
          id="services-title"
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          subtitle={dict.services.subtitle}
          as={headingAs}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const copy = dict.services.items[service.slug];
            const href = localizedHref(locale, `/services/${service.slug}`);

            const card = (
              <>
                <div className="relative aspect-4/3 overflow-hidden rounded-t-[var(--radius-card)] bg-sand">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-xl text-ink">{copy.name}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">{copy.blurb}</p>
                  {linkable ? (
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-wine">
                      {dict.cta.learnMore}
                      <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  ) : null}
                </div>
              </>
            );

            const shell =
              "group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-shadow duration-300";

            return linkable ? (
              <Link
                key={service.slug}
                id={service.slug}
                href={href}
                className={`${shell} hover:shadow-[var(--shadow-lift)] scroll-mt-28`}
              >
                {card}
              </Link>
            ) : (
              <article key={service.slug} id={service.slug} className={`${shell} scroll-mt-28`}>
                {card}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">{dict.services.startingNote}</p>
          {hubLink ? (
            <Link
              href={localizedHref(locale, "/services")}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-wine underline-offset-4 hover:underline"
            >
              {dict.services.allServices}
              <ArrowIcon className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
