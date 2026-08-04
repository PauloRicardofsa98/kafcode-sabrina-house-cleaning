import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "@/components/sections/legal-page";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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
    path: "/terms",
    title: dict.meta.terms.title,
    description: dict.meta.terms.description,
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { sections } = dict.legal.terms;

  return (
    <LegalPage
      locale={locale}
      dict={dict}
      title={dict.meta.terms.title}
      intro={dict.legal.terms.intro}
      sections={[
        sections.quotes,
        sections.scheduling,
        sections.guarantee,
        sections.liability,
        sections.payment,
      ]}
    />
  );
}
