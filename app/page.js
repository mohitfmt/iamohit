import HeroSection from "@/components/homepage/HeroSection";
import MetricsBar from "@/components/homepage/MetricsBar";
import FeaturedWork from "@/components/homepage/FeaturedWork";
import CoreSkills from "@/components/homepage/CoreSkills";
import SocialProof from "@/components/homepage/SocialProof";

export const metadata = {
  title:
    "Mohit Shrivastava | Senior Full-Stack Engineer | Next.js & Performance Specialist",
  description:
    "Senior Full-Stack Engineer specializing in Next.js and scalable news platforms. Scaled FMT to 8.5M monthly users with 184% growth and 60% faster load times.",
  keywords: [
    "Next.js Expert",
    "React Developer",
    "Performance Optimization",
    "Full-Stack Engineer",
    "News Platform Development",
    "Scalability",
    "Malaysia Developer",
    "GCP",
    "Kubernetes",
  ],
  openGraph: {
    title: "Mohit Shrivastava | Senior Full-Stack Engineer",
    description:
      "Scaled FMT to 8.5M monthly users. 18 years experience building systems that serve millions.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsBar />
      <FeaturedWork />
      <CoreSkills />
      <SocialProof />
    </>
  );
}
