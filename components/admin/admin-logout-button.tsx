"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

type AdminLogoutButtonProps = {
    loginPath: string;
};

export function AdminLogoutButton({
    loginPath,
}: AdminLogoutButtonProps) {
    const router = useRouter();

    async function handleLogout() {
        const supabase = createClient();

        await supabase.auth.signOut();

        router.push(loginPath);
        router.refresh();
    }

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="rounded-[var(--radius-pill)] border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-wine"
        >
            Sign out
        </button>
    );
}