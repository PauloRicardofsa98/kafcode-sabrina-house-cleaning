import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowIcon, CheckIcon, ClockIcon, MessageIcon, SparkleIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { enLabels } from "@/content/labels";
import { getService, serviceSlugs, services } from "@/content/services";
import { smsHref } from "@/content/site";
import { defaultLocale, localizedHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

/**
 * Páginas de serviço existem apenas em inglês, que é onde está o tráfego de busca.
 * `dynamicParams = false` faz `/pt/services/deep-cleaning` devolver 404 limpo em
 * vez de servir conteúdo duplicado num idioma que não é o dele.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ locale: defaultLocale, slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    locale: defaultLocale,
    path: `/services/${service.slug}`,
    title: service.page.metaTitle,
    description: service.page.metaDescription,
    image: service.image,
    enOnly: true,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const locale = defaultLocale;
  const dict = getDictionary(locale);
  const copy = service.page;
  const others = services.filter((item) => item.slug !== service.slug);

  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: enLabels.service.breadcrumb, path: "/services" },
    { name: dict.services.items[service.slug].name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />

      <PageHero eyebrow={enLabels.service.breadcrumb} title={copy.h1} lead={copy.lead}>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href={smsHref(dict.cta.smsBody)} size="lg">
            <MessageIcon className="h-5 w-5" />
            {dict.cta.text}
          </Button>
          <Button href={localizedHref(locale, "/quote")} variant="secondary" size="lg">
            {dict.nav.quote}
          </Button>
        </div>
      </PageHero>

      <Section tone="white">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              {copy.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-pretty text-ink-soft">
                  {paragraph}
                </p>
              ))}

              <div className="mt-2 flex items-start gap-3 rounded-[var(--radius-card)] border border-line bg-ivory p-6">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <h2 className="font-display text-lg text-ink">{enLabels.service.howLong}</h2>
                  <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {copy.duration}
                  </p>
                </div>
              </div>

              <div className="rounded-[var(--radius-card)] border border-blue/25 bg-blue-tint/50 p-6">
                <h2 className="flex items-center gap-2 font-display text-lg text-ink">
                  <SparkleIcon className="h-4 w-4 text-blue" />
                  {copy.tip.title}
                </h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{copy.tip.body}</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative aspect-4/3 overflow-hidden rounded-[var(--radius-card)] bg-sand">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="font-display text-xl text-ink">{enLabels.service.goodFor}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {copy.goodFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                      <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" labelledBy="included-title">
        <Container width="wide">
          <h2 id="included-title" className="font-display text-3xl text-ink sm:text-4xl">
            {enLabels.service.whatsIncluded}
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {copy.includes.map((group) => (
              <div
                key={group.group}
                className="reveal flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-white p-7"
              >
                <h3 className="font-display text-lg text-ink">{group.group}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Faq items={copy.faq} title={enLabels.service.questions} tone="white" />

      <Section tone="ivory" labelledBy="other-services-title">
        <Container width="wide">
          <h2 id="other-services-title" className="font-display text-2xl text-ink sm:text-3xl">
            {enLabels.service.otherServices}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={localizedHref(locale, `/services/${other.slug}`)}
                  className="group flex h-full flex-col gap-2 rounded-[var(--radius-card)] border border-line bg-white p-6 transition-shadow hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="font-display text-lg text-ink">
                    {dict.services.items[other.slug].name}
                  </span>
                  <span className="text-sm text-ink-soft">
                    {dict.services.items[other.slug].blurb}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-wine">
                    {dict.cta.learnMore}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta dict={dict} />

      <JsonLd
        data={[
          serviceSchema({
            name: dict.services.items[service.slug].name,
            description: copy.metaDescription,
            path: `/services/${service.slug}`,
          }),
          faqPageSchema(copy.faq),
          breadcrumbSchema(locale, trail),
        ]}
      />
    </>
  );
}
