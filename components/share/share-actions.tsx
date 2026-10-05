"use client";

import { useState } from "react";

import { CheckIcon, CopyIcon, ShareIcon } from "@/components/ui/icons";

const CARD_PATH = "/share-card.png";

const buttonClasses =
  "inline-flex h-10 items-center justify-center gap-2 rounded-[var(--radius-pill)] px-4 text-sm font-semibold text-white ring-1 ring-white/25 transition-colors hover:bg-white/10";

type ShareActionsProps = {
  url: string;
  title: string;
  labels: { share: string; copy: string; copied: string };
};

async function loadCard(): Promise<File | null> {
  try {
    const response = await fetch(CARD_PATH);
    if (!response.ok) return null;
    return new File([await response.blob()], "sabrina-cleaning-service.png", { type: "image/png" });
  } catch {
    return null;
  }
}

export function ShareActions({ url, title, labels }: ShareActionsProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    try {
      // Celular: manda o cartão com o QR code pela folha nativa de compartilhamento.
      const card = await loadCard();
      if (card && navigator.canShare?.({ files: [card] })) {
        await navigator.share({ files: [card], title, url });
        return;
      }

      if (navigator.share) {
        await navigator.share({ title, url });
        return;
      }
    } catch {
      // O usuário fechou a folha de compartilhamento: não há o que fazer.
      return;
    }

    // Desktop sem Web Share: baixa o cartão para a pessoa enviar como quiser.
    const link = document.createElement("a");
    link.href = CARD_PATH;
    link.download = "sabrina-cleaning-service.png";
    link.click();
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem permissão de área de transferência: o domínio está escrito no card.
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
      <button type="button" onClick={handleShare} className={buttonClasses}>
        <ShareIcon className="h-4 w-4" />
        {labels.share}
      </button>
      <button type="button" onClick={handleCopy} className={buttonClasses}>
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        <span aria-live="polite">{copied ? labels.copied : labels.copy}</span>
      </button>
    </div>
  );
}
