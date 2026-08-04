"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isEnglishOnlyPath } from "@/content/navigation";
import { defaultLocale, locales, localeNames, localeShortNames, localizedHref, stripLocale } from "@/i18n/config";
import { cx } from "@/lib/cx";
import { GlobeIcon } from "@/components/ui/icons";

/**
 * Seletor de idioma.
 *
 * Três opções não justificam um dropdown: um grupo inline é mais rápido de usar,
 * não precisa de estado e não compete com o CTA principal.
 *
 * Páginas de serviço e de cidade existem apenas em inglês. Ao trocar de idioma
 * a partir de uma delas, mandamos o visitante para a home do idioma escolhido
 * em vez de gerar um link que daria 404.
 */
export function LocaleSwitcher({
  label,
  tone = "dark",
  className,
}: {
  label: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const pathname = usePathname() ?? "/";
  const { locale: current, path } = stripLocale(pathname);
  const englishOnly = isEnglishOnlyPath(path);

  return (
    <div
      className={cx(
        "flex items-center gap-1 rounded-[var(--radius-pill)] p-1",
        tone === "dark" ? "bg-sand/70" : "bg-white/10",
        className,
      )}
      role="group"
      aria-label={label}
    >
      <GlobeIcon
        className={cx(
          "ml-2 h-4 w-4 shrink-0",
          tone === "dark" ? "text-ink-soft" : "text-white/60",
        )}
      />
      {locales.map((locale) => {
        const isCurrent = locale === current;
        // Fora do inglês, uma rota EN-only não tem equivalente: vai para a home.
        const target =
          englishOnly && locale !== defaultLocale
            ? localizedHref(locale, "/")
            : localizedHref(locale, path);

        return (
          <Link
            key={locale}
            href={target}
            hrefLang={locale}
            lang={locale}
            aria-current={isCurrent ? "true" : undefined}
            title={localeNames[locale]}
            className={cx(
              "rounded-[var(--radius-pill)] px-2.5 py-1 text-xs font-semibold transition-colors",
              isCurrent
                ? tone === "dark"
                  ? "bg-white text-ink shadow-sm"
                  : "bg-white/90 text-ink"
                : tone === "dark"
                  ? "text-ink-soft hover:text-ink"
                  : "text-white/70 hover:text-white",
            )}
          >
            <span className="sr-only">{localeNames[locale]}</span>
            <span aria-hidden="true">{localeShortNames[locale]}</span>
          </Link>
        );
      })}
    </div>
  );
}
