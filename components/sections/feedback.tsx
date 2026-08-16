import { FeedbackForm } from "@/components/feedback/feedback-form";
import { FeedbackModal } from "@/components/feedback/feedback-modal";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Feedback({
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section tone="white" labelledBy="feedback-title">
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="feedback-title"
            eyebrow={dict.feedback.eyebrow}
            title={dict.feedback.title}
            subtitle={dict.feedback.subtitle}
          />

          <div className="flex flex-col items-start justify-center gap-6 rounded-[var(--radius-card)] border border-line bg-ivory p-8 sm:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-2xl text-ink">
                {dict.feedback.cardTitle}
              </h3>

              <p className="max-w-lg text-base leading-relaxed text-ink-soft">
                {dict.feedback.cardBody}
              </p>
            </div>

            <FeedbackModal
              triggerLabel={dict.feedback.trigger}
              title={dict.feedback.modal.title}
              closeLabel={dict.feedback.modal.close}
            >
              <FeedbackForm dict={dict} />
            </FeedbackModal>

            <p className="text-sm text-ink-muted">
              {dict.feedback.note}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}