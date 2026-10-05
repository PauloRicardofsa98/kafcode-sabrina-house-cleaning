import { ShareActions } from "@/components/share/share-actions";
import { site } from "@/content/site";
import type { Dictionary } from "@/i18n/types";
import { siteDomain, siteQrDataUri } from "@/lib/qr";

/**
 * Card de compartilhamento com o QR code do site.
 *
 * Indicação é o principal canal de um negócio de limpeza: o card existe para
 * um cliente mostrar a tela a um vizinho ou mandar o cartão por mensagem.
 */
export async function ShareCard({ dict }: { dict: Dictionary }) {
  const qr = await siteQrDataUri();

  return (
    <aside className="flex flex-col items-center gap-6 rounded-[var(--radius-card)] bg-white/5 p-6 text-center ring-1 ring-white/15 sm:flex-row sm:gap-8 sm:p-8 sm:text-left">
      {/* eslint-disable-next-line @next/next/no-img-element -- data URI gerado no build, sem ganho com next/image. */}
      <img
        src={qr}
        alt={dict.share.qrAlt}
        width={160}
        height={160}
        className="h-40 w-40 shrink-0 rounded-2xl bg-white p-3"
      />
      <div className="flex flex-col items-center gap-3 sm:items-start">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
          {dict.share.eyebrow}
        </p>
        <h3 className="font-display text-2xl text-white">{dict.share.title}</h3>
        <p className="text-sm text-white/70">{siteDomain}</p>
        <ShareActions
          url={site.url}
          title={site.name}
          labels={{ share: dict.share.share, copy: dict.share.copy, copied: dict.share.copied }}
        />
      </div>
    </aside>
  );
}
