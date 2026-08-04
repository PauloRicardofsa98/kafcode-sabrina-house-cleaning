import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { localeHreflang, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

/** Layout compartilhado por privacidade e termos. */
export function LegalPage({
  locale,
  dict,
  title,
  intro,
  sections,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
}) {
  const updated = new Intl.DateTimeFormat(localeHreflang[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${site.legalUpdated}T00:00:00Z`));

  return (
    <>
      <PageHero title={title} lead={intro} />

      <Section tone="white">
        <Container>
          <p className="text-sm text-ink-muted">
            {dict.legal.updated}: <time dateTime={site.legalUpdated}>{updated}</time>
          </p>

          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.title} className="flex flex-col gap-3">
                <h2 className="font-display text-2xl text-ink">{section.title}</h2>
                <p className="text-base leading-relaxed text-pretty text-ink-soft">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
