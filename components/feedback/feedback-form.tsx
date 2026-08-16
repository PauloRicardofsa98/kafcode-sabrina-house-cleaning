"use client";

import type { Dictionary } from "@/i18n/types";
import { useState } from "react";

import { createClient } from "@/lib/supabase/client";

type FeedbackFormProps = {
  dict: Dictionary;
  onSuccess?: () => void;
};

export function FeedbackForm({
  dict,
  onSuccess,
}: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const city = String(formData.get("city") ?? "").trim();
    const comment = String(formData.get("comment") ?? "").trim();

    if (!name || !city || !comment || rating === 0) {
      setError(dict.feedback.form.validationError);
      setIsSubmitting(false);
      return;
    }

    const { error: insertError } = await supabase.from("feedbacks").insert({
      name,
      city,
      rating,
      comment,
      approved: false,
    });

    if (insertError) {
      console.error(insertError);
      setError(dict.feedback.form.submitError);
      setIsSubmitting(false);
      return;
    }

    setSuccess(true);
    setIsSubmitting(false);
    form.reset();
    setRating(0);
    setHoveredRating(0);

    onSuccess?.();
  }

  if (success) {
    return (
      <div
        role="status"
        className="flex flex-col gap-3 rounded-[var(--radius-card)] border border-blue/20 bg-blue-tint/40 p-6"
      >
        <h3 className="font-display text-2xl text-ink">
          {dict.feedback.form.successTitle}
        </h3>

        <p className="text-sm leading-relaxed text-ink-soft">
          {dict.feedback.form.successBody}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <label className="flex flex-col gap-2 text-sm font-medium text-ink">
        {dict.feedback.form.name}
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          className="h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-ink">
        {dict.feedback.form.city}
        <input
          name="city"
          type="text"
          required
          autoComplete="address-level2"
          className="h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none"
        />
      </label>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-sm font-medium text-ink">
          {dict.feedback.form.rating}
        </legend>

        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            const star = index + 1;
            const active = star <= (hoveredRating || rating);

            return (
              <button
                key={star}
                type="button"
                aria-label={`${star} ${dict.feedback.form.ratingLabel}`}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="text-3xl leading-none transition-transform hover:scale-110 focus:outline-none"
              >
                <span
                  className={active ? "text-wine" : "text-line"}
                  aria-hidden="true"
                >
                  ★
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2 text-sm font-medium text-ink">
        {dict.feedback.form.comment}
        <textarea
          name="comment"
          required
          rows={5}
          className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none"
        />
      </label>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-wine/20 bg-wine/5 p-4 text-sm text-wine"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center rounded-[var(--radius-pill)] bg-wine px-6 text-sm font-semibold text-white transition-colors hover:bg-wine-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? dict.feedback.form.sending : dict.feedback.form.submit}
      </button>
    </form>
  );
}