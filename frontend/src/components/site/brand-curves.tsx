import { cn } from "@/lib/utils";

/** Curvas suaves de marca (eco del fondo de la foto y del logo). Puramente decorativas. */
export function BrandCurves({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 900 900"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={cn("pointer-events-none overflow-visible", className)}
    >
      <circle cx="540" cy="450" r="330" fill="var(--blue-soft)" />
      <circle cx="540" cy="450" r="405" stroke="var(--green)" strokeWidth="3" />
      <circle cx="540" cy="450" r="470" stroke="var(--blue-soft)" strokeWidth="2" />
    </svg>
  );
}
