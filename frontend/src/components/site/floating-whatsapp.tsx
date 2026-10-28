import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Solo glifo blanco sobre el verde oficial #25D366 (sin texto). El aro oscuro da el contraste 3:1
 * contra fondos claros y el foco usa el contorno global del sitio.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp al Dr. Naveda (abre WhatsApp en otra pestaña)"
      className="fixed z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-on-brand shadow-[0_0_0_2px_var(--whatsapp-edge),0_8px_20px_-6px_oklch(0.27_0.075_260/0.55)] transition-[background-color,transform] duration-200 ease-out-quart hover:bg-whatsapp-hover active:translate-y-px active:bg-whatsapp-active sm:size-16"
      style={{
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <WhatsAppIcon className="size-8 sm:size-9" />
    </a>
  );
}
