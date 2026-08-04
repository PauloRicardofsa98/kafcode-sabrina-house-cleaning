import Link from "next/link";

import { localizedHref, type Locale } from "@/i18n/config";

import { Container } from "./container";

export type Crumb = { name: string; path: string };

/**
 * Trilha de navegação.
 *
 * O último item não vira link e recebe `aria-current="page"`. O JSON-LD de
 * `BreadcrumbList` correspondente é emitido pela própria página, a partir da
 * mesma lista, então os dois nunca saem de sincronia.
 */
export function Breadcrumbs({
  locale,
  trail,
  label,
}: {
  locale: Locale;
  trail: Crumb[];
  label: string;
}) {
  return (
    <nav aria-label={label} className="border-b border-line/60 bg-ivory">
      <Container width="wide">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-4 text-sm text-ink-muted">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;

            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={localizedHref(locale, crumb.path)}
                    className="transition-colors hover:text-blue"
                  >
                    {crumb.name}
                  </Link>
                )}
                {isLast ? null : (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
