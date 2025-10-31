import dynamic from "next/dynamic";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyCTA from "@/components/privacy/PrivacyCTA";

export const metadata = {
  title: "Privacy Policy | Your Data Security & Privacy Protection",
  description:
    "Learn how I protect your privacy and handle your data. Transparent privacy policy covering data collection, usage, and your rights. Last updated October 2025.",
  keywords: [
    "Privacy Policy",
    "Data Protection",
    "GDPR Compliance",
    "Personal Information Security",
    "Cookie Policy",
    "Data Privacy",
    "User Rights",
    "Information Security",
    "Transparent Data Handling",
    "Privacy Protection",
    "Contact Privacy",
    "Email Privacy",
    "Data Security",
    "Privacy Rights",
    "Data Collection Policy",
  ],
  openGraph: {
    title: "Privacy Policy | Mohit Shrivastava",
    description:
      "Transparent privacy policy covering how I protect your data and respect your privacy.",
    url: "https://iamohit.com/privacy",
    type: "website",
    images: [
      {
        url: "/privacy.webp",
        width: 1200,
        height: 630,
        alt: "Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Mohit Shrivastava",
    description: "Learn how I protect your privacy and handle your data.",
    images: ["/privacy.webp"],
  },
  alternates: {
    canonical: "https://iamohit.com/privacy",
  },
};

const Privacy = () => {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* Hero Section */}
      <PrivacyHero />

      {/* Main Privacy Content */}
      <PrivacyContent />

      {/* CTA Section */}
      <PrivacyCTA />

      {/* JSON-LD Structured Data for Privacy Policy */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description:
              "Privacy policy for iamohit.com covering data collection, usage, and user rights.",
            url: "https://iamohit.com/privacy",
            datePublished: "2025-10-31",
            dateModified: "2025-10-31",
            author: {
              "@type": "Person",
              name: "Mohit Shrivastava",
              url: "https://iamohit.com",
            },
            inLanguage: "en-US",
          }),
        }}
      />
    </main>
  );
};

export default Privacy;
