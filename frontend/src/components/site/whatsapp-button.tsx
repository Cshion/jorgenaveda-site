import type { VariantProps } from "class-variance-authority";
import { Button, type buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Props = {
  message?: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
};

/** Enlace directo a wa.me con mensaje prellenado. Verde oficial de WhatsApp con texto blanco en negrita, borde interior y sombra de texto sutil para compensar el contraste. */
export function WhatsAppButton({
  message,
  children,
  variant = "whatsapp",
  size = "lg",
  className,
}: Props) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        {children}
        <span className="sr-only"> (abre WhatsApp en otra pestaña)</span>
      </a>
    </Button>
  );
}
