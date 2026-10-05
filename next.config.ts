import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Napa saiu da área atendida. A página já estava indexada, então o
  // endereço antigo aponta para a lista de áreas em vez de virar 404.
  async redirects() {
    return [
      { source: "/areas/napa", destination: "/areas", permanent: true },
      {
        source: "/:locale(pt|es)/areas/napa",
        destination: "/:locale/areas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
