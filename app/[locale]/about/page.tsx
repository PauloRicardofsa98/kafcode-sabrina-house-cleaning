import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon, MessageIcon, PinIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/ui/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { aboutPhoto, aboutStory } from "@/content/about";
import { cityRegions, getCities } from "@/content/cities";
import { smsHref } from "@/content/site";
import { isLocale, locales, localizedHref } from "@/i18n/config";
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
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const story = aboutStory[locale];

  const how = [
    dict.about.how.quote,
    dict.about.how.supplies,
    dict.about.how.report,
  ];

  const trail = [
    { name: dict.breadcrumbs.home, path: "/" },
    { name: dict.nav.about, path: "/about" },
  ];

  return (
    <>
      <Breadcrumbs locale={locale} trail={trail} label={dict.breadcrumbs.label} />

      <PageHero eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} />

      <Section tone="white">
        <Container width="wide">
          <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <p className="text-lg leading-relaxed text-pretty text-ink-soft">
                {dict.about.intro.one}
              </p>
              <p className="text-lg leading-relaxed text-pretty text-ink-soft">
                {dict.about.intro.two}
              </p>

              {/*
                A história em primeira pessoa só entra quando a Sabrina escrever
                a dela. Inventar biografia não é uma opção. Ver content/about.ts.
              */}
              {story.length > 0 ? (
                <div className="mt-6 flex flex-col gap-5 border-l-2 border-wine/30 pl-6">
                  <h2 className="font-display text-2xl text-ink">{dict.about.storyTitle}</h2>
                  {story.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-ink-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}
            </div>

            {aboutPhoto ? (
              <div className="relative aspect-4/5 overflow-hidden rounded-[var(--radius-card)] bg-sand">
                <Image
                  src={aboutPhoto}
                  alt={dict.about.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            ) : (
              // Sem foto real ainda: a mascote da logo segura o lugar sem fingir
              // ser uma fotografia. Proporção quadrada de propósito: num 4:5 a
              // ilustração, que é cortada na cintura, fica boiando no vazio.
              <div className="relative flex aspect-square items-end justify-center overflow-hidden rounded-[var(--radius-card)] bg-linear-to-b from-blue-tint to-sand px-6">
                <Image
                  src="/images/sabrina-house-cleaning-mascot.webp"
                  alt={dict.finalCta.imageAlt}
                  width={718}
                  height={900}
                  sizes="(max-width: 1024px) 70vw, 380px"
                  className="h-[88%] w-auto object-contain"
                />
              </div>
            )}
          </div>
        </Container>
      </Section>

      <Section tone="sand" labelledBy="how-we-work-title">
        <Container width="wide">
          <h2 id="how-we-work-title" className="font-display text-3xl text-ink sm:text-4xl">
            {dict.about.howTitle}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {how.map((item) => (
              <div
                key={item.title}
                className="reveal flex flex-col gap-3 rounded-[var(--radius-card)] border border-line bg-white p-7"
              >
                <CheckIcon className="h-5 w-5 text-blue" />
                <h3 className="font-display text-lg text-ink">{item.title}</h3>
                <p className="text-[0.95rem] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ivory" labelledBy="about-area-title">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 id="about-area-title" className="font-display text-3xl text-ink sm:text-4xl">
                {dict.about.areaTitle}
              </h2>
              <p className="text-lg leading-relaxed text-ink-soft">{dict.about.areaBody}</p>
              {/* Agrupado por região: 18 chips soltos viram ruído visual. */}
              <dl className="mt-2 flex flex-col gap-4">
                {cityRegions.map((region) => (
                  <div key={region.label} className="flex flex-col gap-1">
                    <dt className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-blue uppercase">
                      <PinIcon className="h-3.5 w-3.5" />
                      {region.label}
                    </dt>
                    <dd className="text-base text-ink-soft">
                      {getCities(region.slugs)
                        .map((city) => city.name)
                        .join(", ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col justify-center gap-5 rounded-[var(--radius-card)] border border-line bg-white p-8 sm:p-10">
              <h2 className="font-display text-2xl text-ink">{dict.about.ctaTitle}</h2>
              <p className="text-base leading-relaxed text-ink-soft">{dict.about.ctaBody}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={smsHref(dict.cta.smsBody)}>
                  <MessageIcon className="h-4 w-4" />
                  {dict.cta.text}
                </Button>
                <Button href={localizedHref(locale, "/quote")} variant="secondary">
                  {dict.nav.quote}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCta dict={dict} />

      <JsonLd data={breadcrumbSchema(locale, trail)} />
    </>
  );
}
