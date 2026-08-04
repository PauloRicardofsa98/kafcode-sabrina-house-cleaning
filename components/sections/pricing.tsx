import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckIcon, MessageIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { smsHref } from "@/content/site";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/**
 * Preços.
 *
 * A cliente não expõe valores, então a seção vende a política de "free estimate"
 * em vez de fingir uma tabela. Os quatro pontos existem justamente para
 * responder o que o visitante realmente quer saber antes de mandar mensagem.
 */
export function Pricing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const points = [
    dict.pricing.points.flat,
    dict.pricing.points.recurring,
    dict.pricing.points.cancel,
    dict.pricing.points.supplies,
  ];

  return (
    <Section tone="white" labelledBy="pricing-title">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="pricing-title"
            eyebrow={dict.pricing.eyebrow}
            title={dict.pricing.title}
            subtitle={dict.pricing.subtitle}
          />

          <div className="flex flex-col gap-8 rounded-[var(--radius-card)] border border-line bg-ivory p-8 sm:p-10">
            <ul className="flex flex-col gap-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base text-ink">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center">
              <Button href={smsHref(dict.cta.smsBody)} size="lg">
                <MessageIcon className="h-5 w-5" />
                {dict.pricing.cta}
              </Button>
              <Button href={localizedHref(locale, "/quote")} variant="secondary" size="lg">
                {dict.nav.quote}
              </Button>
            </div>

            <p className="text-sm text-ink-muted">{dict.pricing.note}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
