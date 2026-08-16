import { notFound } from "next/navigation";

import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { isLocale } from "@/i18n/config";

export default async function AdminLoginPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!isLocale(locale)) {
        notFound();
    }

    return (
        <Section tone="ivory">
            <Container width="wide">
                <div className="flex min-h-[60vh] items-center justify-center">
                    <div className="flex w-full max-w-md flex-col gap-8 rounded-[var(--radius-card)] border border-line bg-white p-8 sm:p-10">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-display text-3xl text-ink">
                                Admin
                            </h1>

                            <p className="text-sm leading-relaxed text-ink-soft">
                                Sign in to manage customer feedback.
                            </p>
                        </div>

                        <AdminLoginForm
                            adminPath={`/${locale}/admin`}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}