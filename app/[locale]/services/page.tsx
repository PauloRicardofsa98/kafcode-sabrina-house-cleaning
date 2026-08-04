import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
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
    path: "/services",
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: dict.nav.services, path: "/services" },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />
      <ServicesGrid locale={locale} dict={dict} headingAs="h1" />
      <HowItWorks dict={dict} />
      <Pricing locale={locale} dict={dict} />
      <FinalCta dict={dict} />

      <JsonLd data={breadcrumbSchema(locale, trail)} />
    </>
  );
}
