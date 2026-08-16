"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

type AdminLoginFormProps = {
    adminPath: string;
};

export function AdminLoginForm({
    adminPath,
}: AdminLoginFormProps) {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();

        setIsSubmitting(true);
        setError(null);

        const supabase = createClient();

        const { error: signInError } =
            await supabase.auth.signInWithPassword({
                email,
                password,
            });

        if (signInError) {
            console.error(signInError);
            setError("Invalid email or password.");
            setIsSubmitting(false);
            return;
        }

        router.push(adminPath);
        router.refresh();
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-5"
        >
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Email
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    autoComplete="email"
                    className="h-12 rounded-xl border border-line bg-white px-4 text-base text-ink focus:border-blue focus:outline-none"
                />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    autoComplete="current-password"
                    className="h-12 rounded-xl border border-line bg-white px-4 text-base text-ink focus:border-blue focus:outline-none"
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
                {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
        </form>
    );
}