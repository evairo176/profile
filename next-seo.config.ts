import type { DefaultSeoProps } from "next-seo";

// Domain produksi kamu:
export const BASE_URL = "https://profile-mu-two.vercel.app";

// OG default (pakai URL absolut). Jika file ada di /public, cukup "/og-default.jpg" lalu gabung dengan BASE_URL.
export const OG_DEFAULT = `${BASE_URL}/assets/proj5.png`;
// atau kalau kamu memang import image: import og from "/public/assets/proj5.png"
// lalu: export const OG_DEFAULT = `${BASE_URL}${og.src}`

export const SEO_BY_LOCALE: Record<string, DefaultSeoProps> = {
  // 🇮🇩 Indonesia
  id: {
    titleTemplate: "%s | Dicki Prasetya (Evairo)",
    defaultTitle: "Dicki Prasetya ( Evairo )",
    description:
      "Portfolio web Dicki Prasetya, seorang Middle Developer yang berfokus pada pengembangan aplikasi web modern, scalable, dan user-friendly. Menampilkan pengalaman, proyek, serta keahlian dalam teknologi web development.",
    openGraph: {
      type: "website",
      siteName: "Dicki Prasetya ( Evairo )",
      url: BASE_URL,
      images: [{ url: OG_DEFAULT }],
    },
    twitter: { cardType: "summary_large_image" },
  },

  // 🇬🇧 English
  en: {
    titleTemplate: "%s | Dicki Prasetya (Evairo)",
    defaultTitle: "Dicki Prasetya ( Evairo )",
    description:
      "Dicki Prasetya’s portfolio website – a Middle Developer specializing in modern, scalable, and user-friendly web applications. Explore my experience, projects, and expertise in web development.",
    openGraph: {
      type: "website",
      siteName: "Dicki Prasetya ( Evairo )",
      url: BASE_URL,
      images: [{ url: OG_DEFAULT }],
    },
    twitter: { cardType: "summary_large_image" },
  },
};
