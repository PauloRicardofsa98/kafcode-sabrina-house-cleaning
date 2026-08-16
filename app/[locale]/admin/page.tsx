import { redirect, notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { isLocale } from "@/i18n/config";
import { createClient } from "@/lib/supabase/server";
import { AdminLogoutButton } from "@/components/admin/admin-logout-button";
import { FeedbackActions } from "@/components/admin/feedback-actions";

export default async function AdminPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect(`/${locale}/admin/login`);
    }

    const { data: feedbacks, error } = await supabase
        .from("feedbacks")
        .select("id, name, city, rating, comment, approved, created_at")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error loading feedbacks:", error);
    }

    return (
        <Section tone="ivory">
            <Container width="wide">
                <div className="flex items-start justify-between gap-6 py-10">
                    <div>
                        <h1 className="font-display text-3xl text-ink">
                            Feedback management
                        </h1>

                        <p className="mt-2 text-sm text-ink-soft">
                            Signed in as {user.email}
                        </p>
                    </div>

                    <AdminLogoutButton
                        loginPath={`/${locale}/admin/login`}
                    />
                </div>
                <div className="grid gap-6 pb-12">
                    {!feedbacks || feedbacks.length === 0 ? (
                        <p className="text-sm text-ink-soft">
                            No feedback has been submitted yet.
                        </p>
                    ) : (
                        feedbacks.map((feedback) => (
                            <article
                                key={feedback.id}
                                className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8"
                            >
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h2 className="font-display text-xl text-ink">
                                                {feedback.name}
                                            </h2>

                                            <p className="text-sm text-ink-soft">
                                                {feedback.city}
                                            </p>
                                        </div>

                                        <span
                                            className={
                                                feedback.approved
                                                    ? "rounded-full bg-blue-tint px-3 py-1 text-xs font-semibold text-blue"
                                                    : "rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-ink-soft"
                                            }
                                        >
                                            {feedback.approved ? "Published" : "Pending"}
                                        </span>
                                    </div>

                                    <div
                                        className="flex gap-1"
                                        aria-label={`${feedback.rating} / 5`}
                                    >
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <span
                                                key={index}
                                                className={
                                                    index < feedback.rating
                                                        ? "text-xl text-wine"
                                                        : "text-xl text-line"
                                                }
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>

                                    <p className="leading-relaxed text-ink">
                                        {feedback.comment}
                                    </p>

                                    <p className="text-xs text-ink-muted">
                                        {new Date(feedback.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                                <FeedbackActions
                                    feedbackId={feedback.id}
                                    approved={feedback.approved}
                                />
                            </article>
                        ))
                    )}
                </div>
            </Container>
        </Section>
    );
}