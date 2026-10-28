import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { navLinks } from "@/components/site/nav-links";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper pt-[env(safe-area-inset-top)]">
      <div className="wrap flex h-(--header-h) items-center justify-between gap-3 sm:gap-6">
        <Logo className="shrink-0" />
        <nav aria-label="Principal" className="hidden min-[1360px]:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 whitespace-nowrap font-display text-base font-medium text-ink transition-colors duration-200 hover:bg-brand-soft hover:text-brand-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton size="sm" className="hidden sm:inline-flex">
            {site.doctor.cta}
          </WhatsAppButton>
          <MobileNav
            cta={site.doctor.cta}
            zones={site.zones.map(({ slug, name }) => ({ slug, name }))}
          />
        </div>
      </div>
    </header>
  );
}
