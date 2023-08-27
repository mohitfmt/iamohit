const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/static/", "/_next/static/media/"],
    },
    sitemap: "https://iamohit.com/sitemap.xml",
  };
};

export default robots;
