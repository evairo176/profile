// components/PageHead.tsx
import Head from "next/head";
import React from "react";

type OpenGraph = {
  type?: "website" | "article" | "profile" | "product" | string;
  title?: string;
  description?: string;
  url?: string;
  images?: Array<{
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }>;
  siteName?: string;
};

type Twitter = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string; // @handle
  creator?: string; // @handle
};

type Robots = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
  noimageindex?: boolean;
  nocache?: boolean;
  maxSnippet?: number;
  maxImagePreview?: "none" | "standard" | "large";
  maxVideoPreview?: number;
};

type Props = {
  /** Judul halaman. Jika pakai titleTemplate, ini akan dijadikan %s */
  title?: string;
  /** Pola judul, contoh: "%s | Acara" */
  titleTemplate?: string;
  /** Jika tidak ada title, pakai defaultTitle */
  defaultTitle?: string;
  /** Meta description */
  description?: string;
  /** Canonical URL */
  canonical?: string;
  /** Open Graph */
  openGraph?: OpenGraph;
  /** Twitter card */
  twitter?: Twitter;
  /** Robots meta */
  robots?: Robots;
  /** JSON-LD structured data */
  jsonLd?: Record<string, any> | Record<string, any>[];
  /** Tambahan meta atau link bila perlu */
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
  additionalLinkTags?: Array<React.LinkHTMLAttributes<HTMLLinkElement>>;
};

const joinTitle = (title?: string, tpl?: string, fallback?: string) => {
  const base = title || fallback;
  if (!base) return undefined;
  return tpl ? tpl.replace("%s", base) : base;
};

const PageHead: React.FC<Props> = ({
  title,
  titleTemplate,
  defaultTitle = "Acara",
  description,
  canonical,
  openGraph,
  twitter,
  robots,
  jsonLd,
  additionalMetaTags = [],
  additionalLinkTags = [],
}) => {
  const fullTitle = joinTitle(title, titleTemplate, defaultTitle);

  // Buat robots string (index/follow & directives lainnya)
  const robotsDirectives: string[] = [];
  if (robots) {
    const {
      index = true,
      follow = true,
      noarchive,
      nosnippet,
      noimageindex,
      nocache,
      maxSnippet,
      maxImagePreview,
      maxVideoPreview,
    } = robots;
    robotsDirectives.push(index ? "index" : "noindex");
    robotsDirectives.push(follow ? "follow" : "nofollow");
    if (noarchive) robotsDirectives.push("noarchive");
    if (nosnippet) robotsDirectives.push("nosnippet");
    if (noimageindex) robotsDirectives.push("noimageindex");
    if (nocache) robotsDirectives.push("nocache");
    if (typeof maxSnippet === "number")
      robotsDirectives.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsDirectives.push(`max-image-preview:${maxImagePreview}`);
    if (typeof maxVideoPreview === "number")
      robotsDirectives.push(`max-video-preview:${maxVideoPreview}`);
  }

  // Catatan: charset & viewport sebaiknya satu kali saja (di _document atau _app).
  // Jadi kita sengaja TIDAK menyertakan <meta charSet> dan <meta name="viewport"> di sini.

  return (
    <Head>
      {fullTitle && <title key="title">{fullTitle}</title>}

      {description && (
        <meta key="desc" name="description" content={description} />
      )}

      {canonical && <link key="canonical" rel="canonical" href={canonical} />}

      {/* Robots */}
      {!!robotsDirectives.length && (
        <meta
          key="robots"
          name="robots"
          content={robotsDirectives.join(", ")}
        />
      )}

      {/* Open Graph */}
      {openGraph?.title && (
        <meta key="og:title" property="og:title" content={openGraph.title} />
      )}
      {openGraph?.description && (
        <meta
          key="og:desc"
          property="og:description"
          content={openGraph.description}
        />
      )}
      {openGraph?.type && (
        <meta key="og:type" property="og:type" content={openGraph.type} />
      )}
      {openGraph?.url && (
        <meta key="og:url" property="og:url" content={openGraph.url} />
      )}
      {openGraph?.siteName && (
        <meta
          key="og:site_name"
          property="og:site_name"
          content={openGraph.siteName}
        />
      )}
      {openGraph?.images?.map((img, i) => (
        <React.Fragment key={`og:image:${i}`}>
          <meta property="og:image" content={img.url} />
          {img.width && (
            <meta property="og:image:width" content={String(img.width)} />
          )}
          {img.height && (
            <meta property="og:image:height" content={String(img.height)} />
          )}
          {img.alt && <meta property="og:image:alt" content={img.alt} />}
        </React.Fragment>
      ))}

      {/* Twitter */}
      {twitter?.card && (
        <meta key="twitter:card" name="twitter:card" content={twitter.card} />
      )}
      {twitter?.site && (
        <meta key="twitter:site" name="twitter:site" content={twitter.site} />
      )}
      {twitter?.creator && (
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={twitter.creator}
        />
      )}

      {/* Tambahan meta/link bila perlu */}
      {additionalMetaTags.map((m, i) => (
        <meta
          key={`add:meta:${i}`}
          {...(m.name ? { name: m.name } : {})}
          {...(m.property ? { property: m.property } : {})}
          content={m.content}
        />
      ))}
      {additionalLinkTags.map((l, i) => (
        <link key={`add:link:${i}`} {...l} />
      ))}

      {/* JSON-LD */}
      {jsonLd && (
        <script
          key="jsonld"
          type="application/ld+json"
          // hindari XSS: stringify object/array
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
};

export default PageHead;
