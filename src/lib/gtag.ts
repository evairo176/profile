import environment from "@/config/environment";

// Kirim pageview manual (kalau butuh)
export const pageview = (url: string) => {
  if (!environment.GA_ID) return;
  window.gtag?.("config", environment.GA_ID, { page_path: url });
};

// Kirim event GA4
export const event = (name: string, params: Record<string, any> = {}) => {
  if (!environment.GA_ID) return;
  window.gtag?.("event", name, params);
};
