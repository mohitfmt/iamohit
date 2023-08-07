import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, Handlee } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
  display: "swap",
});

export const metadata = {
  title: "iAMohit | Mohit Shrivastava's Web 3.0 & Full Stack Portfolio",
  icon: "icon.svg",
  description:
    "Welcome to Mohit's Portfolio! an Innovative Technocrat with a passion for driving Digital Transformation. Explore my impactful projects and extensive skillset in Full Stack, Web 3.0, and more. Let's create the future together! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${handlee.variable}`}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
