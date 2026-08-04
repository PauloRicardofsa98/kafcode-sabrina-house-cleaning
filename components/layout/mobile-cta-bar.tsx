import { MessageIcon, PhoneIcon } from "@/components/ui/icons";
import { smsHref, telHref } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

/**
 * Barra fixa de contato no celular.
 *
 * A maior parte do tráfego vem de mobile e o objetivo do site é pedido de
 * orçamento, então o SMS fica sempre a um toque de distância. Some a partir de
 * `md`, onde o CTA do header já cumpre o papel.
 */
export function MobileCtaBar({ dict }: { dict: Dictionary }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden"
      role="region"
      aria-label={dict.mobileBar.label}
    >
      <div className="flex items-center gap-3">
        <a
          href={smsHref(dict.cta.smsBody)}
          className="inline-flex h-13 flex-1 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wine px-5 font-semibold text-white shadow-[var(--shadow-soft)]"
        >
          <MessageIcon className="h-5 w-5" />
          {dict.cta.textBar}
        </a>
        <a
          href={telHref}
          aria-label={dict.cta.call}
          className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white text-ink ring-1 ring-line"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
