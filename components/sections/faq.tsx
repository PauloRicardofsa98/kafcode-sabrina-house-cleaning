import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ChevronIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export type FaqItem = { q: string; a: string };

/**
 * FAQ em `<details>/<summary>` nativo: acessível por padrão, funciona com
 * teclado e leitor de tela sem nenhum JavaScript e continua aberto ao imprimir.
 */
export function Faq({
  items,
  eyebrow,
  title,
  subtitle,
  moreHref,
  moreLabel,
  tone = "ivory",
  headingAs = "h2",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  moreHref?: string;
  moreLabel?: string;
  tone?: "ivory" | "sand" | "white";
  headingAs?: "h1" | "h2";
}) {
  return (
    <Section tone={tone} id="faq" labelledBy="faq-title">
      <Container>
        <SectionHeading
          id="faq-title"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          as={headingAs}
        />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-1">
              <summary className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg text-ink transition-colors hover:text-blue">
                <span>{item.q}</span>
                <ChevronIcon
                  className="h-5 w-5 shrink-0 text-blue transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pb-6 text-base leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>

        {moreHref && moreLabel ? (
          <Link
            href={moreHref}
            className="mt-8 inline-flex text-sm font-semibold text-wine underline-offset-4 hover:underline"
          >
            {moreLabel}
          </Link>
        ) : null}
      </Container>
    </Section>
  );
}

/** Ordem canônica das perguntas do dicionário, reutilizada na home e em `/faq`. */
export function dictionaryFaqItems(dict: Dictionary): FaqItem[] {
  return [
    dict.faq.items.booking,
    dict.faq.items.price,
    dict.faq.items.areas,
    dict.faq.items.home,
    dict.faq.items.supplies,
    dict.faq.items.frequency,
    dict.faq.items.pets,
    dict.faq.items.guarantee,
    dict.faq.items.access,
  ];
}

/** Subconjunto exibido na home: as cinco que mais aparecem antes de fechar. */
export function homeFaqItems(dict: Dictionary): FaqItem[] {
  return [
    dict.faq.items.booking,
    dict.faq.items.price,
    dict.faq.items.areas,
    dict.faq.items.home,
    dict.faq.items.supplies,
  ];
}

export function faqMoreHref(locale: Locale): string {
  return localizedHref(locale, "/faq");
}
