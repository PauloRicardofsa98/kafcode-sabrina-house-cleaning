import { Container } from "@/components/ui/container";
import { SparkleIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/types";

export function WhyUs({ dict }: { dict: Dictionary }) {
  const items = [
    dict.why.items.sameCleaner,
    dict.why.items.flatPrice,
    dict.why.items.safeProducts,
    dict.why.items.onTime,
    dict.why.items.details,
  ];

  return (
    <Section tone="white" labelledBy="why-title">
      <Container width="wide">
        <SectionHeading
          id="why-title"
          eyebrow={dict.why.eyebrow}
          title={dict.why.title}
          subtitle={dict.why.subtitle}
        />

        <ul className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="reveal flex flex-col gap-3 border-t border-line pt-6">
              <SparkleIcon className="h-5 w-5 text-blue" />
              <h3 className="font-display text-lg text-ink">{item.title}</h3>
              <p className="text-[0.95rem] leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
