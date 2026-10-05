import { ImageResponse } from "next/og";

import { site } from "@/content/site";
import { siteDomain, siteQrDataUri } from "@/lib/qr";

/** Caminho público do cartão, usado pelo botão de compartilhar. */
export const dynamic = "force-static";

const size = { width: 1080, height: 1300 };

/**
 * Cartão com o QR code do site, pronto para mandar por mensagem ou imprimir.
 *
 * Fica em inglês nos três idiomas: quem recebe a imagem é o cliente americano.
 */
export async function GET() {
  const qr = await siteQrDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#0b2545",
          color: "#ffffff",
        }}
      >
        <div style={{ width: "100%", height: 12, backgroundColor: "#1565c0" }} />
        <div style={{ marginTop: 84, fontSize: 68, fontWeight: 700, letterSpacing: -1 }}>
          {site.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 34, color: "rgba(255,255,255,0.7)" }}>
          House cleaning · Bay Area
        </div>
        <div
          style={{
            marginTop: 64,
            width: 760,
            height: 760,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 48,
            backgroundColor: "#ffffff",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- `next/og` só aceita <img>. */}
          <img src={qr} width={640} height={640} alt="" />
        </div>
        <div style={{ marginTop: 60, fontSize: 40, fontWeight: 700 }}>
          Point your camera and open
        </div>
        <div style={{ marginTop: 14, fontSize: 36, color: "#8fbcf0" }}>{siteDomain}</div>
      </div>
    ),
    size,
  );
}
