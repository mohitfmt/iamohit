const robots = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://iamohit.com/sitemap.xml",
  };
};

export default robots;
