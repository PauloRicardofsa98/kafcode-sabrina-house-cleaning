import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/content/site";
import { isLocale, localeHreflang, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { houseCleaningServiceSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl, defaultOgImage } from "@/lib/seo";

import "../globals.css";

/**
 * Fraunces é serifada variável e de aparência quente, e combina com o wordmark
 * serifado da logo sem imitá-lo. Inter cuida de tudo que precisa ser lido rápido.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  colorScheme: "light",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} · ${dict.meta.home.title}`,
      template: `%s · ${site.name}`,
    },
    description: dict.meta.home.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    formatDetection: { telephone: true, address: false, email: false },
    // O favicon SVG vem da convenção de arquivo (`app/icon.svg`).
    // O apple-touch-icon precisa ser PNG e está pendente em ASSETS.md.
    icons: {
      apple: [{ url: "/images/icons/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      siteName: site.name,
      images: [{ url: absoluteUrl(defaultOgImage), width: 1200, height: 630 }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeHreflang[locale]}
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.nav.skipToContent}
        </a>

        <Header locale={locale} dict={dict} />

        {/* O padding inferior no mobile abre espaço para a barra fixa de contato. */}
        <main id="main" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>

        <Footer locale={locale} dict={dict} />
        <MobileCtaBar dict={dict} />

        <JsonLd data={[houseCleaningServiceSchema(dict), websiteSchema(dict)]} />
      </body>
    </html>
  );
}
