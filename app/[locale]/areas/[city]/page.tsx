import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowIcon, CheckIcon, MessageIcon, PinIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { cities, getCities, getCity } from "@/content/cities";
import { enLabels } from "@/content/labels";
import { services } from "@/content/services";
import { smsHref } from "@/content/site";
import { defaultLocale, localizedHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import { absoluteUrl, buildMetadata } from "@/lib/seo";

/** Páginas de cidade existem apenas em inglês. Ver a página de serviço. */
export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({ locale: defaultLocale, city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  return buildMetadata({
    locale: defaultLocale,
    path: `/areas/${city.slug}`,
    title: city.page.metaTitle,
    description: city.page.metaDescription,
    enOnly: true,
  });
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const locale = defaultLocale;
  const dict = getDictionary(locale);
  const copy = city.page;
  const nearby = getCities(city.nearby);

  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: enLabels.city.breadcrumb, path: "/areas" },
    { name: city.name, path: `/areas/${city.slug}` },
  ];

  /**
   * `areaServed` restrito a esta cidade, apontando para a mesma entidade de
   * negócio declarada no layout. Não duplicamos o `LocalBusiness` inteiro.
   */
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "House cleaning",
    name: copy.h1,
    description: copy.metaDescription,
    url: absoluteUrl(`/areas/${city.slug}`),
    provider: { "@id": `${absoluteUrl("/")}#business` },
    areaServed: {
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "CA",
        postalCode: city.zips[0],
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />

      <PageHero eyebrow={city.county} title={copy.h1} lead={copy.lead}>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={smsHref(`${dict.cta.smsBody}${city.zips[0]}`)} size="lg">
            <MessageIcon className="h-5 w-5" />
            {dict.cta.text}
          </Button>
          <Button href={localizedHref(locale, "/quote")} variant="secondary" size="lg">
            {dict.nav.quote}
          </Button>
        </div>
      </PageHero>

      <Section tone="white" labelledBy="different-title">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-10">
              <h2 id="different-title" className="font-display text-3xl text-ink sm:text-4xl">
                {enLabels.city.whatsDifferent}
              </h2>
              {copy.angle.map((block) => (
                <article key={block.title} className="reveal flex flex-col gap-3">
                  <h3 className="font-display text-xl text-ink">{block.title}</h3>
                  <p className="text-base leading-relaxed text-pretty text-ink-soft">
                    {block.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              {/*
                Sem foto: com 19 cidades, uma imagem crível para cada uma custaria
                mais do que entrega. O que sustenta a página é o texto local.
              */}
              <div className="rounded-[var(--radius-card)] border border-line bg-ivory p-7 lg:sticky lg:top-28">
                <h2 className="font-display text-lg text-ink">
                  {enLabels.city.localDetail} {city.name}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {copy.localNotes.map((note) => (
                    <li key={note} className="flex items-start gap-3 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" labelledBy="neighborhoods-title">
        <Container width="wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="neighborhoods-title" className="font-display text-2xl text-ink sm:text-3xl">
                {enLabels.city.neighborhoods}
              </h2>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {city.neighborhoods.map((neighborhood) => (
                  <li
                    key={neighborhood}
                    className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-white px-4 py-2 text-sm text-ink"
                  >
                    <PinIcon className="h-3.5 w-3.5 text-blue" />
                    {neighborhood}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                {enLabels.city.zips}
              </h3>
              <p className="mt-3 text-sm text-ink-soft">{city.zips.join(" · ")}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {enLabels.city.servicesHere} {city.name}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={localizedHref(locale, `/services/${service.slug}`)}
                      className="group flex h-full flex-col gap-1.5 rounded-[var(--radius-card)] border border-line bg-white p-5 transition-shadow hover:shadow-[var(--shadow-soft)]"
                    >
                      <span className="font-display text-base text-ink">
                        {dict.services.items[service.slug].name}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-wine">
                        {dict.cta.learnMore}
                        <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Faq
        items={copy.faq}
        title={`${enLabels.city.questions} ${city.name}`}
        tone="white"
      />

      <Section tone="ivory" labelledBy="nearby-title">
        <Container width="wide">
          <h2 id="nearby-title" className="font-display text-2xl text-ink sm:text-3xl">
            {enLabels.city.nearby}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {nearby.map((other) => (
              <li key={other.slug}>
                <Link
                  href={localizedHref(locale, `/areas/${other.slug}`)}
                  className="group flex h-full flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                    {other.county}
                  </span>
                  <span className="font-display text-xl text-ink">{other.name}</span>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-wine">
                    {dict.areas.viewCity} {other.name}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta dict={dict} />

      <JsonLd data={[localSchema, faqPageSchema(copy.faq), breadcrumbSchema(locale, trail)]} />
    </>
  );
}
