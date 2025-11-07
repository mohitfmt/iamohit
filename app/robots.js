const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: "https://iamohit.com/sitemap.xml",
  };
};

export default robots;
