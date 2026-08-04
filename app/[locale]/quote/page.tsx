import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { QuoteForm } from "@/components/quote/quote-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { CheckIcon, ClockIcon, MailIcon, MessageIcon, PhoneIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { mailHref, site, smsHref, telHref } from "@/content/site";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    path: "/quote",
    title: dict.meta.quote.title,
    description: dict.meta.quote.description,
  });
}

export default async function QuotePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: dict.services.items[service.slug].name,
  }));

  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: dict.nav.quote, path: "/quote" },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />

      <Section tone="ivory">
        <Container width="wide">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow={dict.quoteForm.eyebrow}
                title={dict.quoteForm.title}
                subtitle={dict.quoteForm.subtitle}
                as="h1"
              />
              <div className="mt-10">
                <QuoteForm dict={dict} serviceOptions={serviceOptions} />
              </div>
            </div>

            <aside className="flex flex-col gap-6 self-start rounded-[var(--radius-card)] border border-line bg-white p-8 lg:sticky lg:top-28">
              <div className="flex flex-col gap-3">
                <h2 className="font-display text-xl text-ink">{dict.pricing.title}</h2>
                <ul className="flex flex-col gap-3">
                  {[
                    dict.pricing.points.flat,
                    dict.pricing.points.recurring,
                    dict.pricing.points.cancel,
                    dict.pricing.points.supplies,
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 border-t border-line pt-6">
                <a
                  href={smsHref(dict.cta.smsBody)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine-deep"
                >
                  <MessageIcon className="h-4 w-4" />
                  {dict.cta.text}
                </a>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
                >
                  <PhoneIcon className="h-4 w-4 text-blue" />
                  {site.phone.display}
                </a>
                <a
                  href={mailHref}
                  className="inline-flex items-center gap-2 break-all text-sm text-ink-soft transition-colors hover:text-blue"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-blue" />
                  {site.email}
                </a>
                <p className="inline-flex items-center gap-2 text-sm text-ink-soft">
                  <ClockIcon className="h-4 w-4 shrink-0 text-blue" />
                  {dict.footer.hoursValue}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <JsonLd data={breadcrumbSchema(locale, trail)} />
    </>
  );
}
