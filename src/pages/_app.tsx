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
import Head from "next/head";

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
          <Head>
            {/* favicon & manifest global (dari kode lamamu) */}
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/ico/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/ico/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/ico/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/ico/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/ico/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/ico/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/ico/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/ico/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/ico/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/ico/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/ico/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/ico/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/ico/favicon-16x16.png"
            />
            <link rel="manifest" href="/ico/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/ico/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff" />
          </Head>

          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
