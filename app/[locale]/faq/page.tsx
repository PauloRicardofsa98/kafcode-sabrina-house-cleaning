import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { dictionaryFaqItems, Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/ui/json-ld";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
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
    path: "/faq",
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
  });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const items = dictionaryFaqItems(dict);
  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: dict.nav.faq, path: "/faq" },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />
      <Faq
        items={items}
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        headingAs="h1"
        tone="white"
      />
      <FinalCta dict={dict} />

      <JsonLd data={[faqPageSchema(items), breadcrumbSchema(locale, trail)]} />
    </>
  );
}
