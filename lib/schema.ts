import { cities } from "@/content/cities";
import { reviews } from "@/content/reviews";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

import { absoluteUrl } from "./seo";

/** `@id` estável do negócio, para referenciar a mesma entidade em várias páginas. */
export const businessId = `${site.url}/#business`;

type JsonLd = Record<string, unknown>;

function socialProfiles(): string[] {
  return Object.values(site.socials).filter((url): url is string => Boolean(url));
}

/**
 * `HouseCleaningService` é subtipo de `LocalBusiness` e é o mais específico
 * que o schema.org oferece para este negócio.
 */
export function houseCleaningServiceSchema(dict: Dictionary): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "HouseCleaningService",
    "@id": businessId,
    name: site.name,
    legalName: site.legalName,
    description: dict.meta.home.description,
    url: site.url,
    telephone: site.phone.e164,
    email: site.email,
    image: absoluteUrl("/images/sabrina-house-cleaning-logo-full.png"),
    logo: absoluteUrl("/images/sabrina-house-cleaning-logo-full.png"),
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: "CA",
        addressCountry: "US",
      },
    })),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: site.geo.radiusMeters,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.hours.days],
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.title,
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: dict.services.items[service.slug].name,
          description: dict.services.items[service.slug].blurb,
          url: absoluteUrl(`/services/${service.slug}`),
        },
      })),
    },
  };

  const profiles = socialProfiles();
  if (profiles.length > 0) schema.sameAs = profiles;

  // Só emitimos avaliação agregada quando existe avaliação real por trás.
  if (reviews.length > 0 && site.stats.confirmed && site.stats.rating > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.stats.rating,
      reviewCount: site.stats.reviewCount || reviews.length,
      bestRating: 5,
      worstRating: 1,
    };
    schema.review = reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.author },
      datePublished: review.date,
      reviewBody: review.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
    }));
  }

  return schema;
}

export function faqPageSchema(items: { q: string; a: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(
  locale: Locale,
  trail: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(localizedHref(locale, crumb.path)),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: { "@id": businessId },
    areaServed: cities.map((city) => ({ "@type": "City", name: city.name })),
  };
}

export function websiteSchema(dict: Dictionary): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    description: dict.meta.home.description,
    url: site.url,
    publisher: { "@id": businessId },
  };
}
