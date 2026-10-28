import type { SVGProps } from "react";
import type { ZoneSlug } from "@/content/schema";

/*
 * Iconos de línea propios, en el estilo del logo: trazo uniforme, puntas redondeadas.
 * Hereda el color con currentColor.
 */
const paths: Record<ZoneSlug, React.ReactNode> = {
  rodilla: (
    <>
      <path d="M16 3.5 18 18c.4 4.4 3.6 6.5 8.6 6.5 5.2 0 7.6-2.6 6.8-7.2L31 3.5" />
      <path d="M16.5 30.5c4.2-1.8 12.4-1.8 16.6 0L31.5 44.5M16.5 30.5l1.8 14" />
      <ellipse cx="39.5" cy="24" rx="3" ry="5.5" />
    </>
  ),
  hombro: (
    <>
      <path d="M5 23C5 12 13 6.5 21.5 8.5 28 10 31.5 13.5 32.5 18" />
      <circle cx="29" cy="28" r="8" />
      <path d="M23 34 16 44.5M36 35l2.5 9.5" />
    </>
  ),
  columna: (
    <>
      <rect x="16" y="3.5" width="14" height="8" rx="3.5" />
      <rect x="18" y="14.5" width="14" height="8" rx="3.5" />
      <rect x="18" y="25.5" width="14" height="8" rx="3.5" />
      <rect x="16" y="36.5" width="14" height="8" rx="3.5" />
      <path d="M36 8c3 4 3.6 9 .5 13.5M36.5 28c3 4 2.5 9-.5 12" />
    </>
  ),
  cadera: (
    <>
      <path d="M4 11c4-4.5 14-5 20 .5l5 4.5" />
      <circle cx="31" cy="25" r="7.5" />
      <path d="M26 30.5 14 36.5c-2.5 1.2-3.5 3.5-3 8M38 31l-1.5 13.5" />
    </>
  ),
  "mano-muneca": (
    <>
      <path d="M15 24V11.5a2.5 2.5 0 0 1 5 0V22M20 22V6.5a2.5 2.5 0 0 1 5 0V22M25 22V8.5a2.5 2.5 0 0 1 5 0V24M30 24v-9a2.5 2.5 0 0 1 5 0v13" />
      <path d="M15 24v3.5L9.5 22.5a2.6 2.6 0 0 0-3.8 3.5L15 38c2 2.5 4.5 3.5 8 3.5h2c6 0 10-4 10-10" />
      <path d="M17 44.5h16" />
    </>
  ),
  "pie-tobillo": (
    <>
      <path d="M13 3.5V26c0 3-2 5-3.5 7C8 35 7.5 38 8 40c.5 2 2 2.5 4 2.5h27c5 0 7-4.5 3-6L30 33c-3.5-1-5-3-5-6.5V3.5" />
    </>
  ),
};

export function ZoneIcon({
  slug,
  ...props
}: { slug: ZoneSlug } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[slug]}
    </svg>
  );
}
