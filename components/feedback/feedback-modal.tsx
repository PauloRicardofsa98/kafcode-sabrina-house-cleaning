"use client";

import { useEffect, useState } from "react";

type FeedbackModalProps = {
  triggerLabel: string;
  title: string;
  closeLabel: string;
  children: React.ReactNode;
};

export function FeedbackModal({
  triggerLabel,
  title,
  closeLabel,
  children,
}: FeedbackModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex h-12 items-center justify-center rounded-[var(--radius-pill)] bg-wine px-6 text-sm font-semibold text-white transition-colors hover:bg-wine-deep"
      >
        {triggerLabel}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/50 p-4"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
            className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[var(--radius-card)] bg-ivory p-6 shadow-2xl sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={closeLabel}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-ink-soft transition-colors hover:bg-line hover:text-ink"
            >
              ×
            </button>

            <h2
              id="feedback-modal-title"
              className="pr-10 font-display text-3xl text-ink"
            >
              {title}
            </h2>

            <div className="mt-6">
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}