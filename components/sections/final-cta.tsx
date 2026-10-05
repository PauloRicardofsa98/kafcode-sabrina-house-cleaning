import Image from "next/image";

import { ShareCard } from "@/components/sections/share-card";
import { Container } from "@/components/ui/container";
import { MessageIcon, PhoneIcon } from "@/components/ui/icons";
import { site, smsHref, telHref } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

/**
 * CTA final.
 *
 * A mascote da logo aparece grande aqui porque a seção é sobre falar com uma
 * pessoa, que é justamente quando a ilustração ajuda.
 */
export function FinalCta({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-ink py-20 text-white sm:py-24 lg:py-28">
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-3xl leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
              {dict.finalCta.title}
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-white/75">{dict.finalCta.body}</p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={smsHref(dict.cta.smsBody)}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wine px-7 font-semibold text-white transition-colors hover:bg-wine-deep"
              >
                <MessageIcon className="h-5 w-5" />
                {dict.cta.text}
              </a>
              <a
                href={telHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] px-7 font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phone.display}
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden h-64 w-64 shrink-0 lg:block xl:h-80 xl:w-80">
            <Image
              src="/images/sabrina-house-cleaning-mascot.webp"
              alt={dict.finalCta.imageAlt}
              fill
              sizes="320px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-14 max-w-2xl lg:mt-16">
          <ShareCard dict={dict} />
        </div>
      </Container>
    </section>
  );
}
