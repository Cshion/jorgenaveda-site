import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Símbolo vectorizado desde el PNG del logo (reemplazar por el SVG original cuando exista).
 * El texto es HTML real para que se lea, se seleccione y escale.
 */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  size?: "md" | "lg";
}) {
  const large = size === "lg";
  return (
    <Link
      href="/"
      aria-label={`${site.doctor.name}, ${site.doctor.specialty}. Ir al inicio`}
      className={cn("group inline-flex min-h-11 items-center gap-2.5 sm:gap-3", className)}
    >
      <Image
        src="/brand/simbolo-rodilla.svg"
        alt=""
        width={160}
        height={285}
        unoptimized
        className={large ? "h-16 w-auto" : "h-10 w-auto sm:h-11"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display font-semibold text-brand",
            large ? "text-2xl" : "text-lg min-[360px]:text-xl",
          )}
        >
          {site.doctor.name}
        </span>
        <span
          className={cn(
            "mt-1.5 font-display font-medium tracking-[0.14em] text-brand-deep uppercase",
            large ? "text-[0.8125rem]" : "hidden text-xs sm:block",
          )}
        >
          {site.doctor.specialty}
        </span>
      </span>
    </Link>
  );
}
