import ExperienceCard from "@/components/ExperienceCard";
import SkillsCards from "@/components/SkillsCards";
import { ExperienceData } from "@/components/data/experience";
import dynamic from "next/dynamic";

// Dynamically import components for better performance
const ExpHero = dynamic(() => import("@/components/Heros/ExpHero"), {
  loading: () => (
    <p className="h-screen justify-center items-center flex">Loading...</p>
  ),
});

const ImpactMetrics = dynamic(
  () => import("@/components/experience/ImpactMetrics"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const CareerTimeline = dynamic(
  () => import("@/components/experience/CareerTimeline"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const TechEvolution = dynamic(
  () => import("@/components/experience/TechEvolution"),
  {
    loading: () => <div className="h-96"></div>,
  }
);

const FinalCTA = dynamic(() => import("@/components/experience/FinalCTA"), {
  loading: () => <div className="h-96"></div>,
});

// Enhanced metadata with focused keywords
export const metadata = {
  keywords: [
    "Senior Full Stack Engineer Malaysia",
    "Next.js Expert Kuala Lumpur",
    "React Performance Specialist",
    "News Platform Developer",
    "18 Years Experience Developer",
    "Scalability Architect",
    "GCP Cloud Run Expert",
    "Kubernetes Developer Malaysia",
    "Enterprise Solutions Architect",
    "Technology Lead Malaysia",
    "Full Stack Team Lead",
    "Performance Optimization Expert",
  ],
  title:
    "18+ Years Experience | Built Systems Serving 8.5M+ Users | Mohit Shrivastava",
  description:
    "Senior Full-Stack Engineer with 18+ years building scalable platforms. Led FMT to 8.5M users with 184% growth & 60% faster load times. Next.js, React, GCP, Kubernetes expert. Top 3% StackOverflow.",
  openGraph: {
    title:
      "18+ Years Experience | Systems Serving Millions | Mohit Shrivastava",
    description:
      "From Visual Basic (2006) to Next.js (2025). Scaled FMT to 8.5M users. 150+ projects. Top 3% StackOverflow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "18+ Years Experience | Mohit Shrivastava",
    description:
      "Senior Full-Stack Engineer | 8.5M users | 184% growth | Next.js expert",
  },
};

const Experience = () => {
  return (
    <section>
      {/* 1. Enhanced Hero Section */}
      <ExpHero />

      {/* 2. Impact Metrics Bar (NEW) */}
      <ImpactMetrics />

      {/* 3. Career Timeline Overview (NEW) */}
      <CareerTimeline />

      {/* 4. Technology Evolution (NEW) */}
      <TechEvolution />

      {/* 5. Detailed Experience Cards (Enhanced with animations) */}
      <div className="bg-linear-to-b from-[#121212] to-[#1a1a1a] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Detailed <span className="text-[#f5f543]">Work Experience</span>
            </h2>
            <p className="text-xl text-gray-400">
              Deep dive into my achievements at each company
            </p>
          </div>

          {ExperienceData.sort(
            (a, b) => new Date(b.startDate) - new Date(a.startDate)
          ).map((exp, index) => (
            <ExperienceCard key={index} ExpData={exp} />
          ))}
        </div>
      </div>

      {/* 6. Skills Showcase (Reorganized) */}
      <div className="bg-[#121212] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-[#f5f543]">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">
              Technologies I've mastered over 18 years
            </p>
          </div>
          <SkillsCards show="all" />
        </div>
      </div>

      {/* 7. Final CTA Section (NEW) */}
      <FinalCTA />
    </section>
  );
};

export default Experience;
