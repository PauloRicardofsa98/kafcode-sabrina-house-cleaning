import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreasServed } from "@/components/sections/areas-served";
import { FinalCta } from "@/components/sections/final-cta";
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
    path: "/areas",
    title: dict.meta.areas.title,
    description: dict.meta.areas.description,
  });
}

export default async function AreasPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: dict.nav.areas, path: "/areas" },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />
      <AreasServed locale={locale} dict={dict} headingAs="h1" />
      <ServicesGrid locale={locale} dict={dict} />
      <FinalCta dict={dict} />

      <JsonLd data={breadcrumbSchema(locale, trail)} />
    </>
  );
}
