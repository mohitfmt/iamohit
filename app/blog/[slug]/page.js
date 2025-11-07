import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";

// Add this to the metadata for each blog post
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  // Structured data for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? `https://iamohit.com${post.image}` : null,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Mohit Shrivastava",
      url: "https://iamohit.com",
      jobTitle: "Head of IT",
    },
    publisher: {
      "@type": "Person",
      name: "Mohit Shrivastava",
      url: "https://iamohit.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iamohit.com/blog/${post.slug}`,
    },
  };

  return {
    title: `${post.title} | Mohit Shrivastava`,
    description: post.description,
    keywords: post.tags || [],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Mohit Shrivastava"],
      images: post.image ? [{ url: `https://iamohit.com${post.image}` }] : [],
    },
    alternates: {
      canonical: `https://iamohit.com/blog/${post.slug}`,
    },
    other: {
      "script:ld+json": JSON.stringify(jsonLd),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Mohit Shrivastava"],
      images: [
        {
          url: `https://iamohit.com/og-images/${post.slug}.png`, // Custom OG image
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`https://iamohit.com/og-images/${post.slug}.png`],
      creator: "@mohit5783", 
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Mohit Shrivastava`,
    description: post.description,
    keywords: post.tags || [],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Mohit Shrivastava"],
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Pass the raw post with content string to client component
  return <BlogPostClient post={post} />;
}
