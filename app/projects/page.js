import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ProjectImpactMetrics from "@/components/ProjectImpactMetrics";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProfessionalDiscretion from "@/components/ProfessionalDiscretion";
import EnhancedProjectCards from "@/components/EnhancedProjectCards";
import ProjectCTA from "@/components/ProjectCTA";

const ProjectHero = dynamic(() => import("@/components/Heros/ProjectHero"), {
  loading: () => (
    <div className="h-[900px] flex justify-center items-center bg-[#121212]">
      <div className="animate-pulse text-[#f5f543] text-xl">Loading...</div>
    </div>
  ),
});

export const metadata = {
  keywords: [
    "150+ Projects Portfolio",
    "Full Stack Developer Malaysia",
    "News Platform Development",
    "Crisis Management Technology",
    "Cost Optimization Expert",
    "Database Performance Tuning",
    "Next.js Projects",
    "React Applications",
    "Enterprise Solutions",
    "Frontend Development",
    "Bootstrap",
    "Ant Design",
    "Tailwind CSS",
    "NextJS",
    "React",
    "Angular",
    "AWS-Amplify",
    "Gatsby",
    "React Redux",
    "Redux Reducer",
    "Redux Saga",
    "Babel",
    "Craco",
    "Webpack",
    "Material UI",
    "ASP Razor Pages",
    "Nebular Theme",
    "jQuery",
    "Backend Development",
    "NodeJS",
    "ExpressJS",
    "GraphQL",
    "NestJS",
    "AppSync",
    "Entity Framework",
    "ASP.Net Web API",
    "SOAP API",
    "AD Auth",
    "Nebular Auth",
    "WCF",
    "Web 3.0",
    "Blockchain Development",
    "Solidity",
    "Web3.js",
    "Hardhat",
    "Ethers.js",
    "Metamask",
    "OpenZeppelin",
    "DevOps & Tools",
    "Confluence",
    "Docker",
    "Kubernetes",
    "Salesforce",
    "AJAX",
    "MapObjects",
    "AWS",
    "Jenkins",
    "Git",
    "GitLab",
    "Bitbucket",
    "JIRA",
    "Trello",
    "SonarQube",
    "Figma",
    "ArcGIS",
    "Microservices",
    "Programming Languages",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "C# / C-Sharp",
    "ASP.Net",
    "DotNet Core",
    "PHP",
    "WPF / XAML",
    "Visual Basic 6.0",
    "Database Management",
    "MySQL",
    "MS Access",
    "SQL Server",
    "MongoDB",
    "DynamoDB",
    "XML",
    "JSON",
    "Free Malaysia Today",
    "FMT Platform",
    "8.5M Users",
    "184% Growth",
    "75% Cost Reduction",
    "RM 540K Annual Savings",
    "Google News Publisher",
    "Crisis Turnaround",
    "Platform Recovery",
    "Aircraft 360°",
    "Changi Airport",
    "Marketing eXperiment Platform 2.0",
    "RTO Automation System",
    "Edify School Software",
    "Kerala Land Records GIS",
    "Help PC Online",
    "IoT Middleware platform",
    "Kerry Warehouse Management System",
    "AIA Biometric Web Application",
    "geoTIME Workforce Management",
    "URL Shortener",
    "Order Management",
    "iAMohit Portfolio",
    "Birth Death Automation System",
    "Arm License Automation System",
    "Tandem Workshop Management",
    "DinBhar News Automation",
    "SADA Special Area Development Authority",
    "Petronas Fire Alarm",
    "Smart Training",
    "Live Pricing Stocks Trading",
    "Mastroify Astrology App",
    "Insurance Frontend",
    "Cloud Digitize",
    "Averis Dashboard",
    "Movie Cinema Films",
    "Vehicle Parking System",
    "Virtualify Softwares",
    "Nakshatra Speaks Astrology",
    "TGV Cinemas",
    "Softec Smart Conference",
    "California University Business Technology",
    "SportsToto Sports Betting",
    "Benz Minting NFTs",
    "Senior Full Stack Engineer",
    "Head of IT",
    "Technology Lead",
    "Project Portfolio",
    "Software Development",
    "Scalable Applications",
    "High Traffic Platforms",
    "Performance Optimization",
    "Professional Discretion",
    "NDA Compliance",
    "Client Confidentiality",
    "Banking Projects",
    "Government Systems",
    "Healthcare Platforms",
    "Enterprise SaaS",
    "Malaysia Developer",
    "Kuala Lumpur",
    "Petaling Jaya",
  ],
  title:
    "150+ Projects Portfolio | 34 Public Showcases | Full Stack Development Expert | Crisis Management",
  description:
    "Explore 150+ production projects spanning 18 years: 34 public showcases including FMT (8.5M users, 184% growth, 75% cost reduction) plus 116 confidential projects under NDA in banking, government, and healthcare. Proven track record in Next.js, React, Node.js, crisis management, and cost-efficient scaling. Professional discretion prioritized.",
  openGraph: {
    title:
      "150+ Projects Portfolio - Crisis Turnaround Expert | Mohit Shrivastava",
    description:
      "From FMT's 184% growth turnaround to Fortune 500 enterprise systems. 150+ projects with 34 public showcases. Specialized in news platforms, cost optimization (75% reduction), and database performance. 116 projects under NDA prove trustworthiness.",
    type: "website",
  },
};

const Projects = () => {
  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <section className="bg-[#121212] min-h-screen">
        {/* Hero Section */}
        <ProjectHero />

        {/* Impact Metrics Section */}
        <ProjectImpactMetrics />

        {/* Featured Projects Section */}
        <FeaturedProjects />

        {/* Professional Discretion Section */}
        <ProfessionalDiscretion />

        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#292929]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-[#121212] px-6 py-2 text-gray-400 text-sm uppercase tracking-wider">
                34 Public Projects Below • 116 Additional Under NDA
              </span>
            </div>
          </div>
        </div>

        {/* All Projects Section with Search, Filter, and Grid */}
        <EnhancedProjectCards />

        {/* Final CTA Section */}
        <ProjectCTA />
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
};

export default Projects;
