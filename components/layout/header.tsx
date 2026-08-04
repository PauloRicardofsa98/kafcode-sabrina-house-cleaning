import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { MessageIcon } from "@/components/ui/icons";
import { navHref, primaryNav } from "@/content/navigation";
import { site, smsHref, telHref } from "@/content/site";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = primaryNav.map((link) => ({
    href: navHref(locale, link),
    label: link.label(dict),
  }));

  const sms = smsHref(dict.cta.smsBody);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ivory/85 backdrop-blur-md">
      <Container width="wide">
        <div className="flex h-20 items-center justify-between gap-4 py-2 sm:h-24">
          <Logo locale={locale} priority />

          <nav aria-label={dict.nav.primaryLabel} className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LocaleSwitcher label={dict.nav.languageLabel} className="hidden sm:flex" />

            {/* Telefone visível no desktop: reforça que existe gente do outro lado. */}
            <a
              href={telHref}
              className="hidden text-sm font-semibold text-ink transition-colors hover:text-blue xl:block"
            >
              {site.phone.display}
            </a>

            <a
              href={sms}
              className="hidden h-11 items-center gap-2 rounded-[var(--radius-pill)] bg-wine px-5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-wine-deep sm:inline-flex"
            >
              <MessageIcon className="h-4 w-4" />
              <span className="hidden lg:inline">{dict.cta.text}</span>
              <span className="lg:hidden">{dict.cta.textShort}</span>
            </a>

            <MobileNav
              links={links}
              quote={{ href: localizedHref(locale, "/quote"), label: dict.nav.quote }}
              labels={{
                open: dict.nav.openMenu,
                close: dict.nav.closeMenu,
                call: dict.cta.call,
                text: dict.cta.textShort,
                language: dict.nav.languageLabel,
              }}
              smsHref={sms}
              telHref={telHref}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
