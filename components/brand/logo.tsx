import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/site";
import { localizedHref, type Locale } from "@/i18n/config";
import { cx } from "@/lib/cx";

import { RoofMark } from "./roof-mark";

/**
 * Lockup do header e do rodapé: mascote + telhado + wordmark.
 *
 * A mascote é a parte da logo que a cliente aprovou, então ela lidera o lockup.
 * O arranjo é horizontal (e não o quadrado do arquivo original) porque num
 * header de 80px a versão quadrada deixaria o wordmark ilegível.
 *
 * A ilustração é cortada na cintura, então ela fica alinhada pela base e um
 * pouco maior que a altura do texto. É o que dá a ela presença de marca sem
 * empurrar a altura do header.
 */
export function Logo({
  locale,
  tone = "dark",
  className,
  priority = false,
}: {
  locale: Locale;
  tone?: "dark" | "light";
  className?: string;
  /** `true` no header, que é conteúdo de dobra. */
  priority?: boolean;
}) {
  return (
    <Link
      href={localizedHref(locale, "/")}
      className={cx("group inline-flex items-end gap-2.5 sm:gap-3", className)}
    >
      <Image
        src="/images/sabrina-house-cleaning-mascot.webp"
        alt=""
        aria-hidden="true"
        width={718}
        height={900}
        priority={priority}
        sizes="64px"
        className="h-14 w-auto shrink-0 origin-bottom transition-transform duration-300 group-hover:scale-105 sm:h-17"
      />

      {/*
        O nome acessível vem do texto oculto, e a versão visível é escondida da
        árvore de acessibilidade. Sem isso, o nome calculado seria
        "SabrinaCleaning Service" (as duas linhas coladas) e não bateria com o
        rótulo visível.
      */}
      <span className="sr-only">{site.name}</span>

      <span aria-hidden="true" className="flex flex-col pb-0.5 leading-none sm:pb-1">
        <span
          className={cx(
            "font-display text-[1.3rem] leading-none font-semibold tracking-tight sm:text-[1.6rem]",
            tone === "dark" ? "text-wine" : "text-white",
          )}
        >
          Sabrina
        </span>
        <span className="mt-1.5 flex items-center gap-1.5">
          <RoofMark
            className={cx(
              "h-2.5 w-auto shrink-0 sm:h-3",
              tone === "dark" ? "text-blue" : "text-white/80",
            )}
          />
          <span
            className={cx(
              "text-[0.55rem] font-semibold tracking-[0.18em] uppercase sm:text-[0.62rem]",
              tone === "dark" ? "text-ink-soft" : "text-white/70",
            )}
          >
            Cleaning Service
          </span>
        </span>
      </span>
    </Link>
  );
}
