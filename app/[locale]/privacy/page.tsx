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
    path: "/privacy",
    title: dict.meta.privacy.title,
    description: dict.meta.privacy.description,
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const { sections } = dict.legal.privacy;

  return (
    <LegalPage
      locale={locale}
      dict={dict}
      title={dict.meta.privacy.title}
      intro={dict.legal.privacy.intro}
      sections={[sections.form, sections.contact, sections.analytics, sections.rights]}
    />
  );
}
