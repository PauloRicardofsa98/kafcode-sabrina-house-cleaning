import { Container } from "@/components/ui/container";
import { StarIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/content/reviews";
import type { Dictionary } from "@/i18n/types";

/**
 * Depoimentos.
 *
 * `content/reviews.ts` está vazio até a cliente enviar avaliações reais.
 * Enquanto estiver vazio, a seção inteira é omitida — nada de depoimento
 * inventado nem de texto explicando a ausência. Assim que o array tiver
 * conteúdo, a seção volta a aparecer sozinha com os cards.
 */
export function Testimonials({ dict }: { dict: Dictionary }) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <Section tone="sand" labelledBy="testimonials-title">
      <Container width="wide">
        <SectionHeading
          id="testimonials-title"
          eyebrow={dict.testimonials.eyebrow}
          title={dict.testimonials.title}
          subtitle={dict.testimonials.subtitle}
        />

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
      </Container>
    </Section>
  );
}
