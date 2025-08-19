import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useMemo } from "react";
import environment from "@/config/environment";
import { DefaultSeo, WebPageJsonLd, ProfilePageJsonLd } from "next-seo";
import { SEO_BY_LOCALE, BASE_URL } from "@/../next-seo.config"; // atau ganti ke alias "@/next-seo.config"

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// ---- Type gtag (letakkan di file d.ts global project mu kalau mau permanen) ----
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
// -----------------------------------------------------------------------------

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale = "id", locales = [], asPath } = router;
  const lang = locale;
  const seo = SEO_BY_LOCALE[lang] ?? SEO_BY_LOCALE.id;

  const canonical = useMemo(
    () => `${BASE_URL}${asPath === "/" ? "" : asPath}`,
    [asPath],
  );

  const languageAlternates = useMemo(
    () =>
      locales.map((l) => ({
        hrefLang: l,
        href: `${BASE_URL}${l === "id" ? "" : `/${l}`}${
          asPath === "/" ? "" : asPath
        }`,
      })),
    [locales, asPath],
  );

  // GA4 pageview on route change
  useEffect(() => {
    if (!environment.GA_ID) return;
    const handleRouteChange = (url: string) => {
      window.gtag?.("config", environment.GA_ID, { page_path: url });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Deskripsi singkat multi-bahasa (buat JSON-LD)
  const desc =
    lang === "id"
      ? "Portfolio web Dicki Prasetya, seorang Middle Developer yang berfokus pada pengembangan aplikasi web modern, scalable, dan user-friendly."
      : "Dicki Prasetya’s portfolio — a Middle Developer focused on building modern, scalable, and user-friendly web applications.";

  return (
    <NextIntlClientProvider locale={locale} messages={pageProps.messages}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className={cn(dm_sans.className)}>
          {/* GA script (aktif hanya production) */}
          {environment.GA_ID && process.env.NODE_ENV === "production" && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${environment.GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="gtag-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${environment.GA_ID}', { page_path: window.location.pathname });
                `}
              </Script>
            </>
          )}

          {/* Default SEO (i18n-aware) */}
          <DefaultSeo
            {...seo}
            languageAlternates={languageAlternates}
            additionalLinkTags={[
              { rel: "alternate", hrefLang: "x-default", href: canonical },
            ]}
            canonical={canonical}
          />

          {/* JSON-LD lengkap (optional tapi disarankan) */}
          {/* <WebSiteJsonLd
            id={`${BASE_URL}#website`}
            url={BASE_URL}
            name="Dicki Prasetya ( Evairo )"
            alternateName="Evairo Portfolio"
          /> */}
          <WebPageJsonLd
            id={`${canonical}#webpage`}
            url={canonical}
            name="Dicki Prasetya Portfolio"
            description={desc}
            inLanguage={lang}
            primaryImageOfPage={{
              "@type": "ImageObject",
              url: `${BASE_URL}/assets/proj5.png`, // pastikan file ada
            }}
            isPartOf={{
              "@type": "WebSite",
              name: "Dicki Prasetya ( Evairo )",
              url: BASE_URL,
            }}
          />
          <ProfilePageJsonLd
            id={`${canonical}#profile`}
            type="Person"
            breadcrumb={canonical} // diwajibkan di beberapa versi next-seo
            name="Dicki Prasetya"
            jobTitle="Middle Developer"
            url={BASE_URL}
            sameAs={[
              "https://github.com/evairo176",
              "https://www.linkedin.com/in/dicki-prasetya-3a7587195",
            ]}
            image={`${BASE_URL}/avatar.jpg`} // ganti jika punya
            description={desc}
            knowsAbout={[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Tailwind CSS",
            ]}
          />

          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
