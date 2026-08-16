"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

type FeedbackActionsProps = {
    feedbackId: string;
    approved: boolean;
};

export function FeedbackActions({
    feedbackId,
    approved,
}: FeedbackActionsProps) {
    const router = useRouter();

    const [isUpdating, setIsUpdating] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleToggleApproved() {
        setIsUpdating(true);
        setError(null);

        const supabase = createClient();

        const { error: updateError } = await supabase
            .from("feedbacks")
            .update({
                approved: !approved,
            })
            .eq("id", feedbackId);

        if (updateError) {
            console.error(updateError);
            setError("Could not update feedback.");
            setIsUpdating(false);
            return;
        }

        setIsUpdating(false);

        router.refresh();
    }

    async function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this feedback?",
        );

        if (!confirmed) return;

        setIsDeleting(true);
        setError(null);

        const supabase = createClient();

        const { error: deleteError } = await supabase
            .from("feedbacks")
            .delete()
            .eq("id", feedbackId);

        if (deleteError) {
            console.error(deleteError);
            setError("Could not delete feedback.");
            setIsDeleting(false);
            return;
        }

        setIsDeleting(false);

        router.refresh();
    }

    return (
        <div className="flex flex-col gap-3 border-t border-line pt-5">
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={handleToggleApproved}
                    disabled={isUpdating || isDeleting}
                    className="rounded-[var(--radius-pill)] bg-wine px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-wine-deep disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isUpdating
                        ? "Updating..."
                        : approved
                            ? "Unpublish"
                            : "Publish"}
                </button>

                <button
                    type="button"
                    onClick={handleDelete}
                    disabled={isUpdating || isDeleting}
                    className="rounded-[var(--radius-pill)] border border-wine/30 bg-white px-5 py-2.5 text-sm font-semibold text-wine transition-colors hover:bg-wine/5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>
            </div>

            {error ? (
                <p role="alert" className="text-sm text-wine">
                    {error}
                </p>
            ) : null}
        </div>
    );
}