import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CheckIcon, MessageIcon, PhoneIcon, StarIcon } from "@/components/ui/icons";
import { site, smsHref, telHref } from "@/content/site";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const badges = [
    dict.hero.badges.estimate,
    dict.hero.badges.availability,
    dict.hero.badges.supplies,
  ];

  return (
    <section className="hero-glow relative overflow-hidden border-b border-line/60">
      <Container width="wide">
        <div className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col gap-7">
            <Eyebrow>{dict.hero.eyebrow}</Eyebrow>

            <h1 className="font-display text-[2.6rem] leading-[1.05] text-balance text-ink sm:text-6xl lg:text-[4.25rem]">
              {dict.hero.titleLead}{" "}
              <em className="text-wine not-italic">{dict.hero.titleAccent}</em>{" "}
              {dict.hero.titleTail}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-pretty text-ink-soft">
              {dict.hero.subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={smsHref(dict.cta.smsBody)} size="lg" className="sm:w-auto">
                <MessageIcon className="h-5 w-5" />
                {dict.cta.text}
              </Button>
              <Button href={telHref} variant="secondary" size="lg">
                <PhoneIcon className="h-5 w-5" />
                {site.phone.display}
              </Button>
            </div>

            {/*
              Enquanto os números reais não forem confirmados, mostramos selos
              que são políticas nossas, nunca prova social inventada.
            */}
            {site.stats.confirmed ? (
              <dl className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-6">
                <div>
                  <dt className="sr-only">{dict.hero.stats.rating}</dt>
                  <dd className="flex items-baseline gap-2">
                    <StarIcon className="h-4 w-4 translate-y-px text-wine" />
                    <span className="font-display text-2xl text-ink">{site.stats.rating}</span>
                    <span className="text-sm text-ink-soft">{dict.hero.stats.rating}</span>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">{dict.hero.stats.homes}</dt>
                  <dd className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-ink">
                      {site.stats.homesCleaned}+
                    </span>
                    <span className="text-sm text-ink-soft">{dict.hero.stats.homes}</span>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">{dict.hero.stats.years}</dt>
                  <dd className="flex items-baseline gap-2">
                    <span className="font-display text-2xl text-ink">
                      {site.stats.yearsExperience}
                    </span>
                    <span className="text-sm text-ink-soft">{dict.hero.stats.years}</span>
                  </dd>
                </div>
              </dl>
            ) : (
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-6">
                {badges.map((badge) => (
                  <li key={badge} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                    <CheckIcon className="h-4 w-4 text-blue" />
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* `max-h` impede que o 4:5 estique demais o hero em telas largas. */}
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] bg-sand shadow-[var(--shadow-lift)] sm:aspect-3/2 lg:aspect-4/5 lg:max-h-[36rem]">
            <Image
              src="/images/hero-sabrina-house-cleaning-bay-area.webp"
              alt={dict.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            {/* Cartão flutuante: repete a promessa central no ponto de maior atenção. */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/92 p-5 shadow-[var(--shadow-soft)] backdrop-blur-md sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-72">
              <p className="text-xs font-semibold tracking-[0.16em] text-blue uppercase">
                {dict.pricing.eyebrow}
              </p>
              <p className="mt-2 font-display text-xl text-ink">{dict.pricing.title}</p>
              <p className="mt-1 text-sm text-ink-soft">{dict.pricing.note}</p>
              <Link
                href={localizedHref(locale, "/quote")}
                className="mt-3 inline-flex text-sm font-semibold text-wine underline-offset-4 hover:underline"
              >
                {dict.cta.quote}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
