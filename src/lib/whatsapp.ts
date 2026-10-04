const WHATSAPP_NUMBER = "8801897208737"; // E.164 without leading +

/**
 * Build a wa.me URL with an optional pre-filled message.
 * Used by WhatsAppButton, EngagementModels, and ClosingCta.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
