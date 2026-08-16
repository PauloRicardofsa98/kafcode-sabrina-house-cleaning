import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AreasServed } from "@/components/sections/areas-served";
import { Faq, faqMoreHref, homeFaqItems } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyUs } from "@/components/sections/why-us";
import { Feedback } from "@/components/sections/feedback";
import { JsonLd } from "@/components/ui/json-ld";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { faqPageSchema } from "@/lib/schema";
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
    path: "/",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const faqItems = homeFaqItems(dict);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <TrustStrip dict={dict} />
      <ServicesGrid locale={locale} dict={dict} hubLink />
      <HowItWorks dict={dict} />
      <WhyUs dict={dict} />
      <AreasServed locale={locale} dict={dict} hubLink />
      <Testimonials dict={dict} />
      <Pricing locale={locale} dict={dict} />
      <Faq
        items={faqItems}
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.title}
        subtitle={dict.faq.subtitle}
        moreHref={faqMoreHref(locale)}
        moreLabel={dict.faq.more}
      />
      <Feedback locale={locale} dict={dict} />
      <FinalCta dict={dict} />

      {/* Só as perguntas realmente exibidas nesta página entram no FAQPage. */}
      <JsonLd data={faqPageSchema(faqItems)} />
    </>
  );
}
