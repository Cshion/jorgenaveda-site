"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { navLinks } from "@/components/site/nav-links";
import { cn } from "@/lib/utils";

type Props = {
  cta: string;
  zones: { slug: string; name: string }[];
};

const linkBase =
  "flex items-center rounded-xl px-3 font-display font-semibold text-ink transition-colors duration-200 hover:bg-brand-soft active:bg-brand-soft";

/** Sección visible en pantalla: la última cuyo borde superior ya pasó la cabecera. */
function currentSectionId(pathname: string) {
  if (pathname !== "/") return null;
  const header = document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
  let current: string | null = null;
  for (const link of navLinks) {
    const id = link.href.split("#")[1];
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= header + window.innerHeight * 0.35) current = id;
  }
  return current;
}

export function MobileNav({ cta, zones }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const queuedHref = useRef<string | null>(null);

  function handleOpenChange(next: boolean) {
    if (next) setActiveId(currentSectionId(pathname));
    setOpen(next);
  }

  /*
   * Los enlaces no navegan mientras el menú está abierto: el bloqueo de scroll de Radix
   * interrumpía el desplazamiento a la ancla. Se cierra el menú y se navega al terminar de cerrar.
   */
  function handleLinkClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    queuedHref.current = href;
    setOpen(false);
  }

  function navigate(href: string) {
    const [path, hash] = href.split("#");
    if ((path || "/") !== pathname) {
      router.push(href);
      return;
    }
    const target = hash ? document.getElementById(hash) : null;
    if (target) {
      target.scrollIntoView();
      history.pushState(null, "", href);
      // El foco sigue a la ancla para teclado y lectores de pantalla.
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="min-[1360px]:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="size-6" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton
        className="h-dvh gap-0 p-0 data-[side=right]:w-[min(24rem,92vw)] data-[side=right]:sm:max-w-sm"
        onCloseAutoFocus={(event) => {
          const href = queuedHref.current;
          if (!href) return;
          queuedHref.current = null;
          event.preventDefault();
          navigate(href);
        }}
      >
        <SheetHeader className="shrink-0 justify-center border-b border-line px-5 py-4 pr-20">
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription className="sr-only">
            Secciones de la página, zonas del cuerpo y contacto por WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3">
          <nav aria-label="Secciones">
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const id = link.href.split("#")[1];
                const current = activeId === id;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={(event) => handleLinkClick(event, link.href)}
                      aria-current={current ? "location" : undefined}
                      className={cn(
                        linkBase,
                        "min-h-14 justify-between text-lg",
                        current && "bg-brand-soft text-brand-deep",
                      )}
                    >
                      {link.label}
                      {current ? (
                        <span className="size-2.5 rounded-full bg-brand" aria-hidden="true" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <nav aria-labelledby="menu-zonas" className="mt-4 border-t border-line pt-4">
            <p id="menu-zonas" className="px-3 font-display text-base font-semibold text-brand">
              Zonas del cuerpo
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {zones.map((zone) => {
                const href = `/${zone.slug}`;
                const current = pathname === href;
                return (
                  <li key={zone.slug}>
                    <Link
                      href={href}
                      onClick={(event) => handleLinkClick(event, href)}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        linkBase,
                        "min-h-12 border-2 border-line text-base",
                        current && "border-brand bg-brand-soft text-brand-deep",
                      )}
                    >
                      {zone.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex shrink-0 flex-col gap-3 border-t border-line bg-paper p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <WhatsAppButton className="w-full">{cta}</WhatsAppButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
