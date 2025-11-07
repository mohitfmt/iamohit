import { getAllPosts } from "@/lib/blog";

const sitemap = () => {
  // Get all blog posts dynamically
  const posts = getAllPosts();

  // Static pages
  const staticPages = [
    {
      url: "https://iamohit.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: "https://iamohit.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iamohit.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iamohit.com/experience",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://iamohit.com/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://iamohit.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic blog posts
  const blogPosts = posts.map((post) => ({
    url: `https://iamohit.com/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine static pages and blog posts
  return [...staticPages, ...blogPosts];
};

export default sitemap;
