import { Container } from "@/components/ui/container";
import { StarIcon } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Dictionary } from "@/i18n/types";
import { createClient } from "@/lib/supabase/server";

type Feedback = {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  created_at: string;
};

export async function Testimonials({ dict }: { dict: Dictionary }) {
  const supabase = await createClient();

  const { data: feedbacks, error } = await supabase
    .from("feedbacks")
    .select("id, name, city, rating, comment, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error loading testimonials:", error);
    return null;
  }

  if (!feedbacks || feedbacks.length === 0) {
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
          {(feedbacks as Feedback[]).map((feedback) => (
            <li
              key={feedback.id}
              className="reveal flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-white p-7"
            >
              <div
                className="flex gap-1"
                aria-label={`${feedback.rating} / 5`}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <StarIcon
                    key={index}
                    className={
                      index < feedback.rating
                        ? "h-4 w-4 text-wine"
                        : "h-4 w-4 text-line"
                    }
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink">
                {feedback.comment}
              </blockquote>

              <footer className="text-sm text-ink-soft">
                <span className="font-semibold text-ink">
                  {feedback.name}
                </span>{" "}
                · {feedback.city}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}