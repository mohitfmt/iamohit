import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Handlee } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
  display: "swap",
});

export const metadata = {
  openGraph: {
    title: "iAMohit | Mohit Shrivastava's Web 3.0 & Full Stack Portfolio",
    description:
      "Welcome to Mohit's Portfolio! an Innovative Technocrat with Full Stack Excellence! Craft Engaging Frontends, Embrace Blockchain Innovations, Architect Backends with Precision.",
    url: "https://iamohit.com",
    siteName: "iamohit.com",
    images: [
      {
        url: "https://iamohit.com/twitter-og.png",
        width: 800,
        height: 800,
        alt: "Square OpenGraph Image for Mohit",
      },
      {
        url: "https://iamohit.com/og.png",
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
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
    images: ["https://iamohit.com/twitter-og.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "3kX8SgptSvdF5fGJMtyEQ7aCWMER-RPtF_qxMPnSBQk",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  alternates: {
    canonical: "https://iamohit.com",
  },
  generator: "iamohit.com",
  applicationName: "iAMohit",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Web3.0",
    "Blockchain",
    "Smart Contracts",
    "Ethereum",
    "Three.js",
    "3D Web Applications",
    "Solidity",
    "Metamask",
    "remix",
    "web3js",
    "ethers.js",
    "OpenZeppelin",
    "Decentralized",
    "Innovation",
    "Frontend",
    "UI/UX",
    "React",
    "Angular",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Backend Development",
    "SQL",
    "NoSQL",
    "DevOps",
    "Continuous Integration",
    "Continuous Deployment",
    "CI/CD",
    "AWS",
    "Azure",
    "Git",
    "Bitbucket",
    "TFS",
    "Kubernetes",
    "Docker",
    "Scalability",
    "Digital Excellence",
    "Communication Skills",
    "Clean Coding",
    "Problem Solver",
    "Optimization",
    "Fast Learner",
    "Task Management",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "MongoDB",
    "Firebase",
    "GraphQL",
    "NestJS",
    "AppSync",
    "NextJS",
    "Gatsby",
    "React Redux",
    "Babel",
    "Web Technologies",
    "Cryptocurrency",
    "NFTs",
    "DAO",
    "DeFi",
    "DApp Development",
    "Digital Transformation",
    "User-Centric Design",
    "Pixel Perfection",
    "User Experience",
    "Technical Stacks",
    "Crypto Solutions",
    "Blockchain Projects",
    "Innovative Developer",
    "Ethereum Development",
    "Blockchain Expertise",
    "Backend Mastery",
    "Databases",
    "Cloud Computing",
    "Creative Developer",
    "Tools & DevOps",
    "Digital Innovation",
    "Data Ecosystems",
    "Data Manipulation",
    "Solidity Programming",
    "Ethereum Ecosystem",
  ],
  authors: [
    { name: "Mohit" },
    { name: "Mohit Shrivastava", url: "https://iamohit.com" },
  ],
  colorScheme: "dark",
  creator: "Mohit Shrivastava",
  publisher: "Mohit Shrivastava",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  title: "iAMohit | Mohit Shrivastava's Web 3.0 & Full Stack Portfolio",
  description:
    "Welcome to Mohit's Portfolio! an Innovative Technocrat with Full Stack Excellence! Craft Engaging Frontends, Embrace Blockchain Innovations, Architect Backends with Precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${handlee.variable}`}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JD9T6QJM69" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-JD9T6QJM69');
        `}
      </Script>
    </html>
  );
}
