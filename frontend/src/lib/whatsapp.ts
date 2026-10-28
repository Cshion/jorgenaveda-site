/** Valores base de WhatsApp. Sin dependencias para poder usarlos también desde componentes de cliente. */
export const WHATSAPP_NUMBER = "51999658288";
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Dr. Naveda, quisiera agendar una consulta.";

export function buildWhatsAppUrl(message?: string): string {
  const text = message?.trim() ? message.trim() : DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
