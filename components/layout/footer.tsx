import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { ClockIcon, MailIcon, MessageIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { cities } from "@/content/cities";
import { footerCompanyNav } from "@/content/navigation";
import { services } from "@/content/services";
import { mailHref, site, telHref, whatsappHref } from "@/content/site";
import { defaultLocale, localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

import { LocaleSwitcher } from "./locale-switcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const whatsapp = whatsappHref();

  const socialLinks = [
    { href: site.socials.instagram, label: "Instagram" },
    { href: site.socials.facebook, label: "Facebook" },
    { href: site.socials.google, label: "Google" },
    { href: site.socials.yelp, label: "Yelp" },
    { href: site.socials.nextdoor, label: "Nextdoor" },
    { href: whatsapp, label: "WhatsApp" },
  ].filter((link): link is { href: string; label: string } => Boolean(link.href));

  return (
    <footer className="border-t border-line bg-white">
      <Container width="wide">
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="flex flex-col gap-5">
            <Logo locale={locale} />
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">{dict.footer.blurb}</p>
            <p className="flex items-start gap-2 text-sm text-ink-soft">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
              <span>
                {site.address.locality}, {site.address.region}
              </span>
            </p>
          </div>

          <nav aria-label={dict.footer.servicesTitle} className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
              {dict.footer.servicesTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    // As páginas individuais existem só em inglês; nos outros
                    // idiomas apontamos para a seção correspondente do hub.
                    href={
                      locale === defaultLocale
                        ? localizedHref(locale, `/services/${service.slug}`)
                        : `${localizedHref(locale, "/services")}#${service.slug}`
                    }
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {dict.services.items[service.slug].name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={dict.footer.companyTitle} className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
              {dict.footer.companyTitle}
            </h2>
            <ul className="flex flex-col gap-3">
              {footerCompanyNav.map((link) => (
                <li key={link.path}>
                  <Link
                    href={localizedHref(locale, link.path)}
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {link.label(dict)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
              {dict.footer.contactTitle}
            </h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-blue"
                >
                  <PhoneIcon className="h-4 w-4 text-blue" />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="inline-flex items-center gap-2 break-all text-ink-soft transition-colors hover:text-blue"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-blue" />
                  {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-ink-soft">
                <ClockIcon className="h-4 w-4 shrink-0 text-blue" />
                {dict.footer.hoursValue}
              </li>
            </ul>

            {socialLinks.length > 0 ? (
              <div className="mt-2 flex flex-col gap-3">
                <h2 className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
                  {dict.footer.followTitle}
                </h2>
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-blue"
                      >
                        {link.label === "WhatsApp" ? <MessageIcon className="h-4 w-4" /> : null}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        {/* Cidades atendidas: reforço de SEO local e navegação real ao mesmo tempo. */}
        <div className="border-t border-line py-8">
          <h2 className="text-xs font-semibold tracking-[0.16em] text-ink uppercase">
            {dict.areas.title}
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {cities.map((city) => (
              <li key={city.slug}>
                {locale === defaultLocale ? (
                  <Link
                    href={localizedHref(locale, `/areas/${city.slug}`)}
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {city.name}
                  </Link>
                ) : (
                  <span className="text-sm text-ink-soft">{city.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 border-t border-line py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {year} {site.name}. {dict.footer.rights}
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <nav aria-label={dict.nav.footerLabel} className="flex gap-6">
              <Link
                href={localizedHref(locale, "/privacy")}
                className="text-xs text-ink-muted transition-colors hover:text-blue"
              >
                {dict.footer.privacy}
              </Link>
              <Link
                href={localizedHref(locale, "/terms")}
                className="text-xs text-ink-muted transition-colors hover:text-blue"
              >
                {dict.footer.terms}
              </Link>
            </nav>
            <LocaleSwitcher label={dict.footer.languageTitle} />
          </div>
        </div>
      </Container>
    </footer>
  );
}
