import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Handlee } from "next/font/google";
import Footer from "@/components/Footer";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
  display: "swap",
});
const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  name: "Mohit Shrivastava",
  jobTitle: "Full Stack Engineer",
  telephone: "(601) 8355-3290",
  url: "https://iamohit.com",
  sameAs: [
    "https://stackoverflow.com/users/3796048/mohit-shrivastava",
    "https://www.linkedin.com/in/mohit5783",
    "https://github.com/mohit5783/",
    "https://twitter.com/mohit5783",
    "https://www.facebook.com/iamohits/",
    "https://wa.link/yx7qep",
    "https://www.instagram.com/mohit5783/",
    "https://www.youtube.com/@iAMohitBytes",
    "https://www.pinterest.com/mohit5783",
  ],
};
export const metadata = {
  metadataBase: new URL("https://iamohit.com"),
  openGraph: {
    title: "iAMohit | Mohit Shrivastava's Web 3.0 & Full Stack Portfolio",
    description:
      "Welcome to Mohit's Portfolio! an Innovative Technocrat with Full Stack Excellence! Craft Engaging Frontends, Embrace Blockchain Innovations, Architect Backends with Precision.",
    url: "https://iamohit.com",
    siteName: "iamohit.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "OpenGraph Image for Mohit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "iAMohit",
    description:
      "Welcome to Mohit's Portfolio! an Innovative Technocrat with Full Stack Excellence! Craft Engaging Frontends, Embrace Blockchain Innovations, Architect Backends with Precision.",
    siteId: "iamohit",
    creator: "@mohit5783",
    creatorId: "iamohit",
    images: ["/twitter-og.png"],
  },
  verification: {
    google: "3kX8SgptSvdF5fGJMtyEQ7aCWMER-RPtF_qxMPnSBQk",
    yandex: "272368ba1073970f",
    yahoo: "yahoo",
  },
  alternates: {
    canonical: "https://iamohit.com",
  },
  generator: "iamohit.com",
  applicationName: "iAMohit",
  referrer: "origin-when-cross-origin",
  authors: [
    { name: "Mohit" },
    { name: "Mohit Shrivastava", url: "https://iamohit.com" },
  ],
  creator: "Mohit Shrivastava",
  publisher: "Mohit Shrivastava",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 5.0,
  themeColor: "#000000",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${handlee.variable}`}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-LH3YGF0X59" />
      <GoogleTagManager gtmId="GT-M6QW547" />
      <script
        defer
        fetchpriority="low"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}
