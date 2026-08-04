/**
 * Marca gráfica: o telhado azul com brilhos, extraído da logo da cliente.
 *
 * É SVG desenhado à mão em vez de recorte da PNG porque precisa escalar de 24px
 * (favicon) até tamanho grande sem serrilhar e herdar a cor do contexto.
 * O arquivo original completo (com a mascote) vive em
 * `public/images/sabrina-house-cleaning-logo-full.png`.
 */

/** Estrela de quatro pontas, como as da logo. */
function sparkle(cx: number, cy: number, size: number): string {
  const k = size * 0.18;
  return [
    `M${cx} ${cy - size}`,
    `C${cx} ${cy - k} ${cx + k} ${cy} ${cx + size} ${cy}`,
    `C${cx + k} ${cy} ${cx} ${cy + k} ${cx} ${cy + size}`,
    `C${cx} ${cy + k} ${cx - k} ${cy} ${cx - size} ${cy}`,
    `C${cx - k} ${cy} ${cx} ${cy - k} ${cx} ${cy - size}`,
    "Z",
  ].join(" ");
}

export function RoofMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 74 44" fill="currentColor" aria-hidden="true" className={className}>
      {/* Chaminé, atrás do telhado */}
      <path d="M50 10h7v13h-7z" />
      {/* Telhado */}
      <path d="M36 2 71 32h-10.5L36 11 11.5 32H1L36 2Z" />
      {/* Janela com cruzeta */}
      <path d="M30 21h12v12H30z" />
      <path d="M35 21h2v12h-2zM30 26h12v2H30z" fill="#faf7f2" />
      {/* Brilhos */}
      <path d={sparkle(63, 8, 5)} />
      <path d={sparkle(70, 17, 3)} />
      <path d={sparkle(56, 19, 2.4)} />
    </svg>
  );
}
