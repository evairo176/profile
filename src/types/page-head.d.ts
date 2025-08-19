// types/PageHeadProps.ts
export type OpenGraphImage = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type OpenGraph = {
  type?: "website" | "article" | "profile" | "product" | string;
  url?: string;
  title?: string;
  description?: string;
  siteName?: string;
  images?: OpenGraphImage[];
};

export type Twitter = {
  card?: "summary" | "summary_large_image" | "app" | "player";
  site?: string; // @handle
  creator?: string; // @handle
};

export type Robots = {
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

export type AdditionalMeta = {
  name?: string;
  property?: string;
  content: string;
};

export type AdditionalLink = React.LinkHTMLAttributes<HTMLLinkElement>;

export type PageHeadProps = {
  /** Judul halaman */
  title?: string;
  /** Template judul, contoh: "%s | Acara" */
  titleTemplate?: string;
  /** Jika tidak ada title, pakai defaultTitle */
  defaultTitle?: string;
  /** Meta description */
  description?: string;
  /** Canonical URL */
  canonical?: string;
  /** Open Graph metadata */
  openGraph?: OpenGraph;
  /** Twitter Card metadata */
  twitter?: Twitter;
  /** Robots directives */
  robots?: Robots;
  /** JSON-LD structured data */
  jsonLd?: Record<string, any> | Record<string, any>[];
  /** Tambahan meta tags */
  additionalMetaTags?: AdditionalMeta[];
  /** Tambahan link tags */
  additionalLinkTags?: AdditionalLink[];
};
