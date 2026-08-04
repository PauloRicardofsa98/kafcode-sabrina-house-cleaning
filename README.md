# Sabrina House Cleaning

Site institucional de um serviço de limpeza residencial na Bay Area / San Francisco. O objetivo único do site é **gerar pedidos de orçamento por SMS**. Layout, copy, CTAs e SEO servem a isso.

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · pnpm
- **Deploy:** Vercel
- **Dependências extras:** nenhuma. Tudo é feito com o que já vinha no repositório.

---

## Como rodar

```bash
pnpm install
pnpm dev          # http://localhost:3002
pnpm build        # build de produção
pnpm start        # serve o build
pnpm lint
pnpm images       # converte e otimiza as imagens de public/
```

### `pnpm images`

Salve o PNG que o ChatGPT gerou na pasta certa dentro de `public/images/`, com o nome final, e rode `pnpm images`. O script (`scripts/optimize-images.sh`) decide formato, tamanho e qualidade pelo diretório: raiz vira WebP de até 2400px, `services/` e `areas/` viram WebP de até 1600px, `og/` vira JPEG exatamente 1200×630, e `icons/` mais a logo do JSON-LD ficam intocados. Rodar de novo não refaz o que já está em dia. Aceita `--dry-run`, `--clean` (apaga o original) e `--force`.

Precisa do ImageMagick (`brew install imagemagick`), que é ferramenta de sistema e não entra no `package.json`.

> Se o `pnpm install` reclamar de build scripts, o `pnpm-workspace.yaml` já resolve: `unrs-resolver` é liberado (precisa do binário nativo) e `sharp` fica bloqueado de propósito, porque os binários dele vêm dos pacotes opcionais `@img/sharp-*` e na Vercel o sharp é fornecido pela plataforma.

Em desenvolvimento você verá erros 500 em `/_next/image` para as imagens que ainda não foram geradas. **Isso é esperado**, porque o código já aponta para os caminhos finais. Ver [`ASSETS.md`](./ASSETS.md).

---

## Estrutura

```
app/
  [locale]/                  ← root layout (não existe app/layout.tsx)
    layout.tsx                 html/body, fontes, header, footer, barra fixa, JSON-LD do negócio
    page.tsx                   home
    services/                  hub (3 idiomas) + [slug] (só inglês)
    areas/                     hub (3 idiomas) + [city] (só inglês)
    about/  faq/  quote/       3 idiomas
    privacy/  terms/           3 idiomas
    not-found.tsx
  sitemap.ts  robots.ts  manifest.ts  icon.svg
  globals.css                design tokens do Tailwind v4

scripts/optimize-images.sh   conversão e otimização das imagens de public/

proxy.ts                     roteamento de idioma (era middleware.ts no Next 15)

i18n/
  config.ts                  locales, prefixos, helpers de rota
  types.ts                   tipo Dictionary
  get-dictionary.ts
  dictionaries/en.ts         ← fonte da verdade
  dictionaries/pt.ts  es.ts

content/                     dados do negócio e copy longa
  site.ts                    NAP, telefone, horário, redes, flags. TODOS os placeholders vivem aqui
  services.ts                4 serviços + copy longa das páginas (inglês)
  cities.ts                  7 cidades + copy longa das páginas (inglês)
  about.ts                   história da Sabrina (vazia até ela escrever)
  reviews.ts                 depoimentos reais (vazio)
  navigation.ts  labels.ts

components/
  brand/                     logo, marca do telhado
  layout/                    header, footer, barra fixa, menu mobile, seletor de idioma
  sections/                  seções reutilizáveis da home e das páginas internas
  quote/quote-form.tsx       formulário → SMS
  ui/                        botão, container, seção, títulos, ícones, JSON-LD

lib/
  seo.ts                     buildMetadata (canonical + hreflang + OG + Twitter)
  schema.ts                  JSON-LD
  cx.ts
```

---

## Como editar textos

**Toda string visível vem de `i18n/dictionaries/`.** Não existe texto solto em componente.

1. Edite `i18n/dictionaries/en.ts`, que é a fonte da verdade.
2. Traduza a mesma chave em `pt.ts` e `es.ts`.

Se você esquecer de traduzir, **o `pnpm build` quebra**. `pt` e `es` são tipados contra `typeof en` (via `i18n/types.ts`), então o TypeScript exige exatamente as mesmas chaves nos três arquivos. É de propósito: é mais fácil corrigir um erro de build do que descobrir um texto em inglês no meio da página em português depois de publicado.

### Copy longa das páginas de SEO

As páginas de serviço individual (`/services/deep-cleaning`) e de cidade (`/areas/san-francisco`) existem **apenas em inglês**, que é onde está o tráfego de busca. Ninguém pesquisa "limpeza em Burlingame" em português. A copy delas fica em `content/services.ts` e `content/cities.ts`, não no dicionário.

Cada cidade tem um ângulo próprio (arquitetura, clima, perfil de morador) porque página de cidade genérica é exatamente o que o Google trata como conteúdo duplicado.

### Dados do negócio

Telefone, e-mail, horário, endereço, redes sociais e domínio ficam **só** em `content/site.ts`. Trocar o telefone lá atualiza header, hero, barra fixa, rodapé, formulário e JSON-LD de uma vez.

---

## Idiomas e rotas

| Idioma | URL | Páginas |
| --- | --- | --- |
| Inglês (canônico) | `/`, `/services`, `/areas/san-francisco` | todas |
| Português | `/pt`, `/pt/services` | home e institucionais |
| Espanhol | `/es`, `/es/services` | home e institucionais |

O `proxy.ts` faz o roteamento:

- Caminho sem prefixo → reescrito para `/en/...` internamente, mas a URL na barra continua limpa.
- `/en/qualquer-coisa` → redirect 308 para `/qualquer-coisa`, para não existir URL duplicada indexável.
- `/pt/...` e `/es/...` batem direto na árvore de rotas.

Páginas que só existem em inglês usam `dynamicParams = false`, então `/pt/areas/san-francisco` devolve **404 limpo** em vez de conteúdo duplicado. O seletor de idioma sabe disso: a partir de uma página EN-only, trocar para PT leva à home em português, não a um link quebrado.

### Adicionar uma cidade

1. Adicione a entrada em `content/cities.ts` com copy própria (ângulo, bairros, ZIPs, FAQ local).
2. Adicione a imagem em `public/images/areas/` e registre o prompt em `ASSETS.md`.

A página, o sitemap, o rodapé, o hub de áreas e o JSON-LD se atualizam sozinhos.

### Adicionar um serviço

1. Adicione em `content/services.ts`.
2. Adicione `name` e `blurb` em `services.items` nos **três** dicionários (o card aparece nos três idiomas).
3. Adicione a imagem e o prompt em `ASSETS.md`.

---

## Contato: por que SMS e não WhatsApp

Americano quase não usa WhatsApp. O canal primário do site é **mensagem de texto**, em todos os CTAs, com o corpo da mensagem já preenchido:

```
sms:+1XXXXXXXXXX?&body=Hi Sabrina! I'd like a free quote...
```

A forma `?&body=` é a única que funciona no iOS **e** no Android. Ligação (`tel:`) é o canal secundário. WhatsApp aparece só como um ícone discreto no rodapé, e apenas se o número estiver preenchido em `content/site.ts`.

### O formulário de orçamento não envia nada

`/quote` **não tem backend**. Os campos são montados numa mensagem de texto legível e o navegador abre o app de mensagens do aparelho já preenchido, como se a pessoa tivesse digitado. Isso elimina servidor, banco, chave de API e política de dados, e converte melhor no celular.

No desktop, onde `sms:` costuma não abrir nada, o formulário mostra um painel "Your message is ready" com o texto composto, botão de copiar e links de telefone e e-mail. Ninguém fica sem saída.

---

## Design

A marca é a logo que a cliente aprovou: **a mascote da bonequinha limpando**. Ela lidera o lockup do header e do rodapé (`components/brand/logo.tsx`), e reaparece grande no CTA final e na página "Sobre". Como o arquivo original é quadrado e ficaria ilegível num header de 96px, os mesmos elementos (mascote, telhado, wordmark) foram reorganizados num arranjo horizontal.

A paleta sai da mesma logo: telhado azul, wordmark bordô. Tokens em `app/globals.css`:

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-ink` | `#0B2545` | texto principal (15.4:1 sobre ivory) |
| `--color-ink-soft` | `#3A5171` | texto secundário (7.9:1) |
| `--color-blue` | `#1565C0` | azul da logo, usado em links e eyebrows |
| `--color-wine` | `#8C1D3F` | bordô da logo, usado no CTA primário (8.6:1 com branco) |
| `--color-ivory` | `#FAF7F2` | fundo padrão |
| `--color-sand` | `#F2EBE2` | fundo alternado de seção |

Tipografia: **Fraunces** (serifada variável) nos títulos, **Inter** no corpo. Ambas via `next/font/google`, sem requisição externa em runtime.

Decisões que valem registrar:

- **Sem dark mode.** Site institucional claro, uma única superfície de contraste para garantir AA em vez de duas.
- **Animações sem JavaScript.** O reveal no scroll usa `animation-timeline: view()` dentro de `@supports` e `prefers-reduced-motion`. Sem suporte, o conteúdo simplesmente aparece. Nenhuma biblioteca, nenhum observer, zero bytes no bundle.
- **FAQ em `<details>` nativo.** Acessível por padrão, sem JavaScript.
- **Só três componentes de cliente:** seletor de idioma, menu mobile e formulário. Todo o resto é Server Component.

---

## SEO

- `lib/seo.ts` monta title, description, canonical, `hreflang` e OG/Twitter numa chamada por página. Os `alternates` listam **apenas** os idiomas em que a página existe de fato.
- `lib/schema.ts` gera `HouseCleaningService`, `Service`, `FAQPage`, `BreadcrumbList` e `WebSite`.
- `sitemap.xml`, `robots.txt` e `manifest.webmanifest` são gerados pelo Next.

**`aggregateRating` não é emitido** enquanto `content/reviews.ts` estiver vazio. Nota inventada viola as diretrizes do Google e derruba o rich snippet inteiro. Assim que houver avaliação real, basta preencher o array e virar `site.stats.confirmed` para `true`.

---

## 🔴 Pendências da cliente

Tudo abaixo está com placeholder no código, marcado com `TODO CLIENTE` em `content/site.ts`. **O site funciona hoje**, mas estes itens precisam ser resolvidos antes de publicar no domínio real.

### Bloqueiam a publicação

| Item | Placeholder atual | Onde trocar |
| --- | --- | --- |
| **Telefone para SMS e ligação** | `+1 (555) 000-0000` | `content/site.ts` → `phone` |
| **E-mail de contato** | `hello@sabrinahousecleaning.com` | `content/site.ts` → `email` |
| **Domínio final** | `https://sabrinahousecleaning.com` | `content/site.ts` → `url` |

> ⚠️ O site antigo (`sabrinacleaning.lovable.app`) é de **Orlando, Flórida**, com telefone `(407) 853-9402`. Aproveitei o tom de voz e a lista de serviços de lá, mas **nada de NAP, cidades ou prova social** foi reaproveitado, porque não se aplica à Bay Area.

### Precisam de confirmação antes de ir ao ar

| Item | Situação | Onde |
| --- | --- | --- |
| **Seguro / bonded** | Desligado. "Licensed & insured" é afirmação legal, e publicar sem ter é risco real. A frase já está pronta e traduzida; é só virar a flag. | `content/site.ts` → `claims.licensedAndInsured` |
| **Background check da equipe** | Desligado, mesma lógica. | `content/site.ts` → `claims.backgroundChecked` |
| **Nome comercial** | Assumi **"Sabrina House Cleaning"** (o da logo). O site antigo usava "Sabrina Mesquita Cleaning Service". | `content/site.ts` → `legalName` |
| **Horário de atendimento** | Assumi segunda a sábado, 8h–18h. | `content/site.ts` → `hours` |
| **Endereço / cidade-base** | Assumi South San Francisco, CA 94080 (usado no `LocalBusiness`). | `content/site.ts` → `address` |

### Prova social

| Item | Situação |
| --- | --- |
| **Números ("500+ casas", "4.9/5", anos de experiência)** | Os números do site de Orlando **não** foram reaproveitados. Enquanto `site.stats.confirmed` for `false`, o hero mostra selos de política ("orçamento grátis", "vagas na mesma semana", "produtos inclusos") em vez de estatística. |
| **Depoimentos** | `content/reviews.ts` está vazio. A seção mostra um estado vazio honesto que ainda converte (oferece pôr o visitante em contato com um cliente do bairro). Assim que houver avaliações reais, os cards aparecem sozinhos. |
| **Google Business / Yelp / redes** | Todos `null` em `site.socials`. Link nulo não é renderizado, então não sobra ícone morto no rodapé. |

### Conteúdo e imagens

| Item | Situação |
| --- | --- |
| **História da Sabrina** | `content/about.ts` → `aboutStory` está vazio. Precisa de 2–3 parágrafos em primeira pessoa. Não inventei biografia. |
| **Foto real da Sabrina** | `content/about.ts` → `aboutPhoto`. Hoje a mascote da logo ocupa o lugar. |
| **13 imagens geradas** | Prompts prontos para colar no ChatGPT em [`ASSETS.md`](./ASSETS.md). |
| **Antes e depois** | Não existe a seção ainda. O concorrente tem 30+ fotos e isso é vantagem real dele. Com os pares em mãos, monto a seção. |

### Definido por mim, aberto a revisão

| Item | Decisão |
| --- | --- |
| **Cidades atendidas** | As 7 do briefing: San Francisco, Daly City, South San Francisco, San Mateo, Burlingame, Millbrae, Pacifica. O concorrente lista 34; se ela atende mais, cada cidade nova é uma página a mais de SEO. |
| **Preços** | Nenhum valor exposto. A seção vende a política de "free estimate" em vez de fingir uma tabela. |
| **Idiomas nas páginas de SEO** | Cidades e serviços individuais só em inglês, por decisão de escopo. |

---

## Deploy na Vercel

1. Importe o repositório. O framework é detectado automaticamente.
2. Não há variável de ambiente para configurar, porque o formulário não usa backend.
3. Antes do primeiro deploy em produção, ajuste `site.url` em `content/site.ts` para o domínio real: ele alimenta canonical, `hreflang`, sitemap e Open Graph.
