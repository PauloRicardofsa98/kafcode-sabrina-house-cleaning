"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { CloseIcon, MenuIcon, MessageIcon, PhoneIcon } from "@/components/ui/icons";

import { LocaleSwitcher } from "./locale-switcher";

type MobileNavProps = {
  links: { href: string; label: string }[];
  quote: { href: string; label: string };
  labels: { open: string; close: string; call: string; text: string; language: string };
  smsHref: string;
  telHref: string;
};

/**
 * Menu do celular.
 *
 * Um dos três únicos componentes de cliente do site. Precisa de estado para
 * abrir e fechar, de `Escape` para sair e de travar o scroll do fundo.
 */
export function MobileNav({ links, quote, labels, smsHref, telHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = () => setOpen(false);

  // Escape fecha, e o fundo não rola enquanto o painel está aberto.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.close : labels.open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-sand lg:hidden"
      >
        <MenuIcon className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label={labels.close}
            onClick={close}
            className="absolute inset-0 h-full w-full bg-ink/40 backdrop-blur-sm"
          />

          <div
            id={panelId}
            className="absolute inset-x-0 top-0 max-h-[92dvh] overflow-y-auto rounded-b-3xl bg-ivory p-6 pb-8 shadow-[var(--shadow-lift)]"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label={labels.close}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink ring-1 ring-line"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            {/* Fechar no clique do link, em vez de reagir ao pathname num efeito. */}
            <nav className="mt-4 flex flex-col">
              {[...links, { href: quote.href, label: quote.label }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="border-b border-line py-4 font-display text-2xl text-ink transition-colors hover:text-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={smsHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wine px-6 font-semibold text-white"
              >
                <MessageIcon className="h-5 w-5" />
                {labels.text}
              </a>
              <a
                href={telHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-white px-6 font-semibold text-ink ring-1 ring-line"
              >
                <PhoneIcon className="h-5 w-5" />
                {labels.call}
              </a>
            </div>

            {/* No celular o header não tem espaço para o seletor, então ele vive aqui. */}
            <div className="mt-6 flex justify-center border-t border-line pt-6">
              <LocaleSwitcher label={labels.language} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
