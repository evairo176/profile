export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Kirim pageview manual (kalau butuh)
export const pageview = (url: string) => {
  if (!GA_ID) return;
  window.gtag?.("config", GA_ID, { page_path: url });
};

// Kirim event GA4
export const event = (name: string, params: Record<string, any> = {}) => {
  if (!GA_ID) return;
  window.gtag?.("event", name, params);
};
