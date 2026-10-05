import QRCode from "qrcode";

import { site } from "@/content/site";

/** Domínio sem protocolo, como aparece escrito ao lado do QR code. */
export const siteDomain = site.url.replace(/^https?:\/\//, "");

/**
 * QR code do site como data URI em SVG.
 *
 * Gerado no build a partir de `site.url`: trocar o domínio em `content/site.ts`
 * atualiza o código sozinho, sem imagem para regerar à mão.
 */
export async function siteQrDataUri(): Promise<string> {
  const svg = await QRCode.toString(site.url, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 0,
    color: { dark: "#0b2545", light: "#ffffff" },
  });

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
