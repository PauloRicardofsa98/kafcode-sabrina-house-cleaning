"use client";

import { useCallback, useId, useState } from "react";

import { CheckIcon, CopyIcon, MailIcon, MessageIcon, PhoneIcon } from "@/components/ui/icons";
import { mailHref, site, smsHref, telHref } from "@/content/site";
import type { Dictionary } from "@/i18n/types";

type ServiceOption = { value: string; label: string };

/**
 * Formulário de orçamento: compositor de SMS, sem backend.
 *
 * Não existe servidor recebendo isto: os campos viram uma mensagem de texto
 * legível e o navegador abre o app de mensagens do aparelho já preenchido.
 * Isso elimina backend, banco, chave de API e política de dados, e converte
 * melhor no celular, que é de onde vem a maior parte do tráfego.
 *
 * No desktop o `sms:` costuma não resolver, então o painel "mensagem pronta"
 * aparece sempre depois do envio, com botão de copiar e alternativas.
 */
export function QuoteForm({
  dict,
  serviceOptions,
}: {
  dict: Dictionary;
  serviceOptions: ServiceOption[];
}) {
  const formId = useId();
  const [message, setMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const labels = dict.quoteForm.smsLabels;

  /**
   * Traz o painel para a tela assim que ele monta. Sem isso, quem estiver no
   * desktop (onde `sms:` normalmente não abre nada) enviaria o formulário e
   * teria a impressão de que nada aconteceu.
   */
  const focusReadyPanel = useCallback((node: HTMLDivElement | null) => {
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  function composeMessage(data: FormData): string {
    const value = (key: string) => String(data.get(key) ?? "").trim();

    const name = value("name");
    const phone = value("phone");
    const email = value("email");
    const zip = value("zip");
    const service = value("service");
    const frequency = value("frequency");
    const bedrooms = value("bedrooms");
    const bathrooms = value("bathrooms");
    const notes = value("notes");

    const lines = [labels.intro, ""];

    if (name) lines.push(`${labels.name}: ${name}`);
    if (phone) lines.push(`${labels.phone}: ${phone}`);
    if (email) lines.push(`${labels.email}: ${email}`);
    if (zip) lines.push(`${labels.zip}: ${zip}`);
    if (service) lines.push(`${labels.service}: ${service}`);
    if (frequency) lines.push(`${labels.frequency}: ${frequency}`);
    if (bedrooms || bathrooms) {
      const size = [
        bedrooms ? `${bedrooms} ${labels.bedrooms}` : null,
        bathrooms ? `${bathrooms} ${labels.bathrooms}` : null,
      ]
        .filter(Boolean)
        .join(" / ");
      lines.push(`${labels.size}: ${size}`);
    }
    if (notes) lines.push(`${labels.notes}: ${notes}`);

    return lines.join("\n");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const composed = composeMessage(new FormData(event.currentTarget));

    setMessage(composed);
    setCopied(false);

    // Abre o app de mensagens. Em aparelhos sem suporte a `sms:` nada acontece,
    // e o painel abaixo garante que o visitante não fique sem saída.
    window.location.href = smsHref(composed);
  }

  async function handleCopy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      // Navegador sem permissão de área de transferência: o texto continua
      // visível e selecionável no painel, então não há nada a corrigir.
      setCopied(false);
    }
  }

  const fieldClasses =
    "h-12 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none";
  const labelClasses = "flex flex-col gap-2 text-sm font-medium text-ink";

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate={false}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className={labelClasses} htmlFor={`${formId}-name`}>
            {dict.quoteForm.fields.name} *
            <input
              id={`${formId}-name`}
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClasses}
            />
          </label>

          <label className={labelClasses} htmlFor={`${formId}-phone`}>
            {dict.quoteForm.fields.phone} *
            <input
              id={`${formId}-phone`}
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              className={fieldClasses}
            />
          </label>

          <label className={labelClasses} htmlFor={`${formId}-email`}>
            {dict.quoteForm.fields.email}
            <input
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClasses}
            />
          </label>

          <label className={labelClasses} htmlFor={`${formId}-zip`}>
            {dict.quoteForm.fields.zip} *
            <input
              id={`${formId}-zip`}
              name="zip"
              type="text"
              required
              pattern="[0-9]{5}"
              inputMode="numeric"
              maxLength={5}
              autoComplete="postal-code"
              title={dict.quoteForm.zipPattern}
              className={fieldClasses}
            />
          </label>

          <label className={labelClasses} htmlFor={`${formId}-service`}>
            {dict.quoteForm.fields.service} *
            <select
              id={`${formId}-service`}
              name="service"
              required
              defaultValue=""
              className={fieldClasses}
            >
              <option value="" disabled>
                {dict.quoteForm.select}
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className={labelClasses} htmlFor={`${formId}-frequency`}>
            {dict.quoteForm.fields.frequency}
            <select
              id={`${formId}-frequency`}
              name="frequency"
              defaultValue=""
              className={fieldClasses}
            >
              <option value="">{dict.quoteForm.select}</option>
              {Object.values(dict.quoteForm.frequencies).map((frequency) => (
                <option key={frequency} value={frequency}>
                  {frequency}
                </option>
              ))}
            </select>
          </label>

          <label className={labelClasses} htmlFor={`${formId}-bedrooms`}>
            {dict.quoteForm.fields.bedrooms}
            <input
              id={`${formId}-bedrooms`}
              name="bedrooms"
              type="number"
              min={0}
              max={20}
              inputMode="numeric"
              className={fieldClasses}
            />
          </label>

          <label className={labelClasses} htmlFor={`${formId}-bathrooms`}>
            {dict.quoteForm.fields.bathrooms}
            <input
              id={`${formId}-bathrooms`}
              name="bathrooms"
              type="number"
              min={0}
              max={20}
              step={0.5}
              inputMode="decimal"
              className={fieldClasses}
            />
          </label>
        </div>

        <label className={labelClasses} htmlFor={`${formId}-notes`}>
          {dict.quoteForm.fields.notes}
          <textarea
            id={`${formId}-notes`}
            name="notes"
            rows={4}
            placeholder={dict.quoteForm.fields.notesPlaceholder}
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-blue focus:outline-none"
          />
        </label>

        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-wine px-7 font-semibold text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-wine-deep sm:self-start"
        >
          <MessageIcon className="h-5 w-5" />
          {dict.quoteForm.submit}
        </button>
      </form>

      {message ? (
        <div
          ref={focusReadyPanel}
          role="status"
          className="flex flex-col gap-5 rounded-[var(--radius-card)] border border-blue/30 bg-blue-tint/50 p-6 sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl text-ink">{dict.quoteForm.ready.title}</h2>
            <p className="text-base leading-relaxed text-ink-soft">{dict.quoteForm.ready.body}</p>
          </div>

          <pre className="overflow-x-auto rounded-xl border border-line bg-white p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-ink">
            {message}
          </pre>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-pill)] bg-white px-5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:text-blue"
            >
              {copied ? <CheckIcon className="h-4 w-4 text-blue" /> : <CopyIcon className="h-4 w-4" />}
              {copied ? dict.quoteForm.ready.copied : dict.quoteForm.ready.copy}
            </button>

            <a
              href={smsHref(message)}
              className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-pill)] bg-wine px-5 text-sm font-semibold text-white transition-colors hover:bg-wine-deep"
            >
              <MessageIcon className="h-4 w-4" />
              {dict.cta.textShort}
            </a>

            <a
              href={telHref}
              className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-pill)] px-5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:text-blue"
            >
              <PhoneIcon className="h-4 w-4" />
              {dict.quoteForm.ready.orCall} {site.phone.display}
            </a>

            <a
              href={`${mailHref}?subject=${encodeURIComponent(dict.meta.quote.title)}&body=${encodeURIComponent(message)}`}
              className="inline-flex h-12 items-center gap-2 rounded-[var(--radius-pill)] px-5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:text-blue"
            >
              <MailIcon className="h-4 w-4" />
              {dict.quoteForm.ready.orEmail}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMessage(null)}
            className="self-start text-sm font-semibold text-wine underline-offset-4 hover:underline"
          >
            {dict.quoteForm.ready.restart}
          </button>
        </div>
      ) : null}
    </div>
  );
}
