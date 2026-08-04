import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MessageIcon, StarIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/content/reviews";
import { smsHref } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

/**
 * Depoimentos.
 *
 * `content/reviews.ts` está vazio até a cliente enviar avaliações reais. Em vez
 * de esconder a seção ou inventar depoimento, mostramos um estado vazio honesto
 * que ainda serve à conversão (oferece uma referência de verdade). Assim que o
 * array tiver conteúdo, a seção troca sozinha para os cards.
 */
export function Testimonials({ dict }: { dict: Dictionary }) {
  return (
    <Section tone="sand" labelledBy="testimonials-title">
      <Container width="wide">
        <SectionHeading
          id="testimonials-title"
          eyebrow={dict.testimonials.eyebrow}
          title={dict.testimonials.title}
          subtitle={reviews.length > 0 ? dict.testimonials.subtitle : undefined}
        />

        {reviews.length > 0 ? (
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li
                key={`${review.author}-${review.date}`}
                className="reveal flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-white p-7"
              >
                <div className="flex gap-1" aria-label={`${review.rating} / 5`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarIcon
                      key={index}
                      className={
                        index < review.rating ? "h-4 w-4 text-wine" : "h-4 w-4 text-line"
                      }
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {review.body}
                </blockquote>
                <footer className="text-sm text-ink-soft">
                  <span className="font-semibold text-ink">{review.author}</span> · {review.location}
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 max-w-2xl rounded-[var(--radius-card)] border border-dashed border-line bg-white/70 p-8 sm:p-10">
            <h3 className="font-display text-2xl text-ink">{dict.testimonials.empty.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {dict.testimonials.empty.body}
            </p>
            <Button
              href={smsHref(dict.testimonials.empty.smsBody)}
              variant="secondary"
              className="mt-6"
            >
              <MessageIcon className="h-4 w-4" />
              {dict.testimonials.empty.cta}
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
