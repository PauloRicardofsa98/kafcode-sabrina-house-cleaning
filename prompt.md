# Site institucional — Sabrina House Cleaning (Bay Area, CA)

## 1. Contexto

Precisamos construir o site institucional de uma cliente brasileira que mora nos Estados Unidos e presta serviço de limpeza residencial na **Bay Area / San Francisco**.

O site é o principal canal de aquisição dela: o objetivo número um é **gerar pedidos de orçamento**. Tudo (layout, copy, SEO, CTAs) deve servir a essa meta.

**Público-alvo:** moradores americanos de casas e apartamentos na Bay Area, classe média/alta, que buscam limpeza recorrente (weekly / bi-weekly / monthly), deep cleaning ou move-in / move-out.

## 2. Referências

| Referência            | URL                                  | Como usar                                                                                                                                                                                                         |
| --------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Concorrente principal | https://paixaocleaning.com           | Referência de **estrutura, seções e nível de acabamento**. Não temos a mesma gama de copy pronta — a copy deve ser escrita do zero, mais enxuta e direta. **Não copiar textos, imagens ou marca.**                |
| Versão abandonada     | https://sabrinacleaning.lovable.app/ | Site que outro profissional começou e abandonou. Serve como fonte de **conteúdo real da cliente** (serviços, textos, fotos, tom de voz). Aproveitar o que fizer sentido, refazer o resto.(cliente gostou da logo) |

Antes de escrever código: acessar as duas referências, mapear as seções de cada uma e propor a arquitetura de páginas/seções do nosso site.

## 3. Stack (já instalada no repositório)

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **pnpm** como gerenciador de pacotes
- Deploy previsto: **Vercel**

Regras de stack:

- Manter tudo em Server Components por padrão; `"use client"` só onde houver interatividade real.
- Adicionar dependência nova só se houver ganho claro — justificar antes de instalar.
- Zero erro de `pnpm build` e `pnpm lint` ao final — **exceto** erros causados por assets que ainda não gerei (ver 4.5).

## 4. Requisitos obrigatórios

### 4.1 Design

- Visual **extremamente bonito e moderno**, nível de agência — nada de template genérico ou "site de create-next-app estilizado".
- Use a skill **`ui-ux-pro-max`** como **guia**, não como regra: consulte-a para direção de estilo, paleta, pareamento de fontes, espaçamento e padrões de UX. Se o julgamento do projeto apontar para outra direção, siga o julgamento e explique o porquê.
- Definir uma identidade visual coerente: paleta, tipografia, espaçamento, ritmo de seções, microinterações discretas.
- Sensação de **limpeza, confiança e cuidado** (o produto é limpeza — o site precisa parecer limpo).
- **Mobile-first**: a maior parte do tráfego virá de celular. Testar em 375px, 768px, 1440px.
- Acessibilidade: contraste AA, foco visível, HTML semântico, `alt` em todas as imagens.
- Performance: Lighthouse ≥ 90 em Performance, Accessibility, Best Practices e SEO.

### 4.2 Internacionalização

- **English first** — o inglês é o idioma padrão e a versão canônica.
- Suporte a **português (pt-BR)** e **espanhol (es)**.
- Roteamento por locale (`/`, `/pt`, `/es` ou equivalente), com `hreflang` e `alternates` corretos no metadata.
- Seletor de idioma visível, mas discreto (não pode competir com o CTA principal).
- Nenhuma string hardcoded em componente — tudo em arquivos de tradução.

### 4.3 Contato — SMS, não WhatsApp

- Americano quase não usa WhatsApp. O canal primário é **mensagem de texto (SMS)**.
- CTA principal em todo o site: **"Text us for a free quote"**, usando link `sms:+1XXXXXXXXXX?&body=...` com mensagem pré-preenchida.
- Botão de ligação (`tel:`) como canal secundário.
- Formulário de orçamento como terceira opção (para quem prefere não ligar/textar), com campos: nome, e-mail, telefone, ZIP code, tipo de serviço, frequência, tamanho da casa (quartos/banheiros), observações.
- WhatsApp pode existir, mas discreto no rodapé — nunca como CTA principal.
- CTA fixo/sticky no mobile.

### 4.4 SEO local (Bay Area / San Francisco)

- Metadata completa por página e por locale: `title`, `description`, canonical, Open Graph, Twitter Card.
- **JSON-LD** de `LocalBusiness` (ou `HouseCleaningService`) com `areaServed`, endereço/região, telefone, horário e `aggregateRating` quando houver avaliações reais.
- `sitemap.xml` e `robots.txt` gerados pelo Next.
- **Páginas de cidade** para as principais localidades atendidas (ex.: San Francisco, Daly City, South San Francisco, San Mateo, Burlingame, Millbrae, Pacifica) — cada uma com conteúdo próprio, não duplicado.
- Páginas por serviço (deep cleaning, move-in/move-out, recurring, post-construction) com copy própria.
- Headings hierárquicos e uso natural de termos como "house cleaning San Francisco", "cleaning service Bay Area" — sem keyword stuffing.
- Imagens otimizadas via `next/image`, nomes de arquivo descritivos.

### 4.5 Assets

- Temos **assinatura do ChatGPT Pro** disponível para gerar qualquer asset necessário (imagens, ilustrações, ícones, OG image).

**Não espere por mim.** Escreva o código já referenciando o caminho final do asset (`/images/hero-cleaning.webp`, por exemplo) e siga em frente. Eu gero as imagens depois e coloco no caminho combinado. Se o build ou o dev server reclamar de arquivo inexistente, **tudo bem — pode dar erro**, não é bloqueio. Não invente placeholder externo nem serviço de imagem fake só para o erro sumir.

**Arquivo de prompts.** Sempre que o projeto precisar de assets, crie e mantenha atualizado um `ASSETS.md` na raiz, com uma entrada por asset contendo:

- **Nome do asset**
- **Caminho exato** onde o arquivo deve ser salvo (ex.: `public/images/hero-cleaning.webp`)
- **Dimensões e formato** esperados
- **Prompt pronto para copiar e colar** no ChatGPT, em bloco de código próprio, completo e autossuficiente

O prompt precisa funcionar sozinho, sem eu ter que ler o resto do arquivo para entender o contexto. **Pode repetir informação entre os prompts** (estilo, paleta, iluminação, enquadramento) — repetição é preferível a prompt incompleto.

Exemplo de formato:

````markdown
### Hero — foto principal

- **Caminho:** `public/images/hero-cleaning.webp`
- **Dimensões:** 1920x1080 (16:9)
- **Uso:** background do hero da home

```
[prompt completo aqui, pronto para colar]
```
````

- Foto real da cliente e de trabalhos reais têm prioridade sobre imagem gerada (aumenta conversão e confiança) — para esses casos, registre no `ASSETS.md` como pendência minha, sem prompt.

## 5. Estrutura sugerida da home

1. **Hero** — proposta de valor + CTA de SMS + prova social curta (anos de experiência, nº de clientes)
2. **Serviços** — cards com os tipos de limpeza
3. **Como funciona** — 3 passos (text us → agendamos → casa limpa)
4. **Por que escolher a Sabrina** — confiança, seguro, produtos, atenção a detalhes
5. **Áreas atendidas** — lista/mapa das cidades, com link para as páginas de cidade
6. **Depoimentos** — reais; se ainda não houver, deixar a seção pronta e sinalizar a pendência
7. **Preços / faixas** — se a cliente não quiser expor valores, usar "free estimate"
8. **FAQ** — com JSON-LD de `FAQPage`
9. **CTA final + rodapé** — contatos, áreas, idiomas, redes

## 6. Entrega esperada

- Site completo, responsivo e funcional, buildando sem erros (salvo assets pendentes).
- Copy final escrita nos 3 idiomas (inglês primeiro, traduções fiéis e naturais — não literais).
- `ASSETS.md` completo, com prompt, nome, caminho e dimensões de cada asset.
- README atualizado explicando estrutura, como rodar e como editar textos/idiomas.
- Lista de pendências que dependem da cliente.

## 7. Informações que ainda faltam (preencher antes/durante)

- [ ] Nome comercial exato e se existe logo
- [ ] Número de telefone para SMS/ligação
- [ ] E-mail de contato e destino do formulário
- [ ] Lista definitiva de cidades atendidas
- [ ] Faixa de preços ou política de "free estimate"
- [ ] Horário de atendimento
- [ ] Depoimentos reais e link do Google Business / Yelp
- [ ] Fotos reais (da cliente e de serviços)
- [ ] Domínio final
- [ ] Se possui seguro/bonded (forte argumento de conversão no mercado americano)

## 8. Como quero que você trabalhe

1. Primeiro **analise as referências e o repositório** e me apresente um plano: arquitetura de rotas, seções, direção visual (paleta + tipografia) e estratégia de i18n.
2. **Espere meu OK** antes de sair implementando.
3. Implemente em etapas revisáveis: base (layout, design system, i18n) → home → páginas internas → SEO → polimento.
4. Ao final de cada etapa, rode `pnpm build` e `pnpm lint` e me diga o que ficou pendente — separando o que é bug real do que é só asset que eu ainda não gerei.
5. Se algo depender de informação que eu não passei, **assuma um placeholder claro e me avise** — não trave a entrega.
