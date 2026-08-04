import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // `/en/...` é redirecionado para a raiz pelo proxy; bloquear a variante
      // evita que um crawler gaste orçamento nela antes de seguir o 308.
      disallow: ["/en/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
