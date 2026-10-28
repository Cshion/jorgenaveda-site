"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, TriangleAlert } from "lucide-react";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { ZoneIcon } from "@/components/site/zone-icons";
import type { Zone, ZoneSlug } from "@/content/schema";
import { cn } from "@/lib/utils";

export type ZoneView = {
  slug: ZoneSlug;
  name: string;
  summary: Zone["summary"];
  whatsappMessage: string;
};

const tabId = (slug: string) => `zona-tab-${slug}`;
const panelId = "zona-panel";
const subheading = "font-display text-lg font-semibold text-leaf";

function Bullets({ items, dotClassName = "bg-leaf" }: { items: string[]; dotClassName?: string }) {
  return (
    <ul className="mt-3 flex flex-col gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden="true"
            className={cn("mt-[0.7em] size-2 shrink-0 rounded-full", dotClassName)}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ZoneDetail({ zone }: { zone: ZoneView }) {
  const { summary } = zone;
  return (
    <div className="flex flex-col gap-7 sm:gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <ZoneIcon slug={zone.slug} className="size-12 shrink-0 text-leaf sm:size-14" />
          <h3 className="text-heading font-bold text-on-brand">{zone.name}</h3>
        </div>
        <p className="max-w-[52ch] text-lead text-brand-soft">{summary.intro}</p>
      </div>

      <div className="grid gap-7 sm:gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] xl:gap-12">
        <section aria-labelledby={`${zone.slug}-problemas`}>
          <h4 id={`${zone.slug}-problemas`} className={subheading}>
            Problemas frecuentes
          </h4>
          <ul className="mt-3 flex flex-col gap-2.5">
            {summary.problems.map((problem) => (
              <li key={problem.name} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.7em] size-2 shrink-0 rounded-full bg-leaf"
                />
                <span>
                  <strong className="font-semibold text-on-brand">{problem.name}</strong>: {problem.text}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-7 sm:gap-8">
          <section aria-labelledby={`${zone.slug}-conservador`}>
            <h4 id={`${zone.slug}-conservador`} className={subheading}>
              Primero, tratamiento conservador
            </h4>
            <p className="mt-2 max-w-[52ch]">{summary.first}</p>
          </section>

          <section aria-labelledby={`${zone.slug}-consultar`}>
            <h4 id={`${zone.slug}-consultar`} className={subheading}>
              Cuándo consultar
            </h4>
            <Bullets items={summary.consult} />
          </section>
        </div>
      </div>

      <section aria-labelledby={`${zone.slug}-urgencia`}>
        <h4
          id={`${zone.slug}-urgencia`}
          className="flex items-center gap-2.5 font-display text-lg font-semibold text-amber-wash"
        >
          <TriangleAlert className="size-6 shrink-0" aria-hidden="true" />
          Acude a emergencias de inmediato si hay
        </h4>
        <Bullets items={summary.urgent} dotClassName="bg-amber-wash" />
      </section>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
        <WhatsAppButton message={zone.whatsappMessage} className="w-full sm:w-auto">
          Agenda tu consulta
        </WhatsAppButton>
        <Link
          href={`/${zone.slug}`}
          className="group inline-flex min-h-12 items-center gap-2 font-display text-lg font-semibold text-on-brand underline decoration-leaf decoration-2 underline-offset-[6px] hover:text-leaf"
        >
          Ver más sobre {zone.name.toLowerCase()}
          <ArrowRight
            className="size-5 shrink-0 transition-transform duration-200 ease-out-quart group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}

/**
 * Una sola lista de zonas con patrón de pestañas (flechas, Inicio y Fin) y un panel debajo.
 * Móvil: cuadrícula de 2 columnas con todas las zonas a la vista. Escritorio: lista vertical.
 * Enlazable con ?zona=rodilla (se lee en el cliente, así la página sigue siendo estática).
 */
export function ZoneSelector({ zones }: { zones: ZoneView[] }) {
  const [activeSlug, setActiveSlug] = useState<ZoneSlug>(zones[0].slug);
  const tabRefs = useRef<Partial<Record<ZoneSlug, HTMLButtonElement | null>>>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const zone = zones.find((item) => item.slug === activeSlug) ?? zones[0];

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("zona");
    const match = zones.find((item) => item.slug === requested);
    if (!match) return;
    const frame = requestAnimationFrame(() => {
      setActiveSlug(match.slug);
      if (!window.location.hash) {
        document.getElementById("zonas")?.scrollIntoView();
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [zones]);

  function select(slug: ZoneSlug, source: "pointer" | "keyboard") {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `${window.location.pathname}?zona=${slug}#zonas`);
    if (source === "keyboard") {
      tabRefs.current[slug]?.focus();
      return;
    }
    // En pantallas chicas el panel queda justo debajo; solo se desplaza si quedó fuera de vista.
    requestAnimationFrame(() => {
      const top = panelRef.current?.getBoundingClientRect().top ?? 0;
      if (top > window.innerHeight * 0.7) {
        panelRef.current?.scrollIntoView({ block: "start" });
      }
    });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const index = zones.findIndex((item) => item.slug === activeSlug);
    const last = zones.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = index === last ? 0 : index + 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = index === 0 ? last : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    select(zones[next].slug, "keyboard");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(15rem,19rem)_minmax(0,1fr)] lg:gap-10">
      <div
        role="tablist"
        aria-label="Zonas del cuerpo"
        onKeyDown={handleKeyDown}
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:sticky lg:top-28 lg:grid-cols-1 lg:self-start"
      >
        {zones.map((item) => {
          const selected = item.slug === zone.slug;
          return (
            <button
              key={item.slug}
              ref={(node) => {
                tabRefs.current[item.slug] = node;
              }}
              type="button"
              role="tab"
              id={tabId(item.slug)}
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(item.slug, "pointer")}
              className={cn(
                "flex min-h-16 items-center gap-2 rounded-2xl border-2 px-2.5 text-left font-display text-base leading-tight font-semibold [overflow-wrap:normal] transition-colors duration-200 min-[360px]:gap-2.5 min-[360px]:px-3 sm:gap-3 sm:px-4 lg:text-xl",
                selected
                  ? "border-paper bg-paper text-brand-deep"
                  : "border-on-brand/35 text-on-brand hover:bg-brand-deep active:bg-brand-deep",
              )}
            >
              <ZoneIcon
                slug={item.slug}
                className={cn("size-7 shrink-0 min-[360px]:size-8 lg:size-9", selected ? "text-brand" : "text-leaf")}
              />
              <span className="min-w-0 flex-1">{item.name}</span>
              {selected ? <Check className="hidden size-5 shrink-0 text-brand sm:block" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId(zone.slug)}
        tabIndex={0}
        className="-mx-3 rounded-[1.5rem] bg-brand-deep p-5 outline-offset-4 sm:mx-0 sm:rounded-[1.75rem] sm:p-8 lg:rounded-[2rem] lg:p-10 xl:p-12"
      >
        <div
          key={zone.slug}
          className="animate-in duration-300 ease-out-quart fade-in-0 slide-in-from-bottom-2"
        >
          <ZoneDetail zone={zone} />
        </div>
      </div>
    </div>
  );
}
