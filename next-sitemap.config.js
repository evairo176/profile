/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://profile-mu-two.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  transform: async (config, path) => {
    // next-sitemap otomatis baca i18n dari next.config.js
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: config?.transform?.alternateRefs || [],
    };
  },
};
