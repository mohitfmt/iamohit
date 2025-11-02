import { getAllPosts } from "@/lib/blog";
import BlogListingClient from "./BlogListingClient";

export const metadata = {
  title: "Blog | Technical Insights by Mohit Shrivastava",
  description:
    "Deep dives into Next.js, performance optimization, and scaling platforms that serve millions. Real-world case studies and technical insights from 18 years of experience.",
  keywords: [
    "Next.js blog",
    "performance optimization",
    "scalability",
    "technical writing",
    "web development",
    "case studies",
    "FMT scaling",
    "React best practices",
  ],
  openGraph: {
    title: "Blog | Technical Insights",
    description:
      "Deep dives into Next.js, performance optimization, and scaling platforms.",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogListingClient posts={posts} />;
}
