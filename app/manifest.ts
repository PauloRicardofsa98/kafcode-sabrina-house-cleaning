import type { MetadataRoute } from "next";

import { site } from "@/content/site";
import en from "@/i18n/dictionaries/en";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Sabrina",
    description: en.meta.home.description,
    start_url: "/",
    display: "browser",
    background_color: "#faf7f2",
    theme_color: "#faf7f2",
    lang: "en-US",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/images/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
