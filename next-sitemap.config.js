/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://profile-mu-two.vercel.app",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/404", "/500"],
  // transform tidak wajib kecuali kamu mau override nilai default
};
