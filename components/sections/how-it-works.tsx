import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MessageIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { smsHref } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

export function HowItWorks({ dict }: { dict: Dictionary }) {
  const steps = [dict.how.steps.one, dict.how.steps.two, dict.how.steps.three];

  return (
    <Section tone="sand" labelledBy="how-title">
      <Container width="wide">
        <SectionHeading
          id="how-title"
          eyebrow={dict.how.eyebrow}
          title={dict.how.title}
          subtitle={dict.how.subtitle}
        />

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="reveal relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white font-display text-lg text-blue ring-1 ring-line"
                >
                  {index + 1}
                </span>
                {/* Régua de conexão entre os passos, só no desktop. */}
                {index < steps.length - 1 ? (
                  <span aria-hidden="true" className="rule-accent hidden h-px flex-1 md:block" />
                ) : null}
              </div>
              <h3 className="font-display text-xl text-ink">{step.title}</h3>
              <p className="text-base leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button href={smsHref(dict.cta.smsBody)} size="lg">
            <MessageIcon className="h-5 w-5" />
            {dict.cta.text}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
