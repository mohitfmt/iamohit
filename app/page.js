import AboutCards from "@/components/AboutCards";
import Backend from "@/components/Backend";
import Databases from "@/components/Databases";
import DevTools from "@/components/DevTools";
import Frontend from "@/components/Frontend";
import SkillsCards from "@/components/SkillsCards";
import Web3Block from "@/components/Web3Block";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Heros/Hero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});

export const metadata = {
  keywords: [
    "Web3.0",
    "Blockchain",
    "Frontend",
    "Backend Development",
    "Databases",
    "DevOps",
    "JavaScript Frameworks",
    "UI Libraries",
    "Programming Languages",
    "Microservices Architecture",
    "GraphQL",
    "Digital Excellence",
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
    "Digital Transformation",
    "User-Centric Design",
    "Pixel Perfection",
    "User Experience",
    "Technical Stacks",
    "Blockchain Projects",
    "Ethereum Development",
    "Blockchain Expertise",
    "Backend Mastery",
    "Databases",
    "Cloud Computing",
    "Tools & DevOps",
    "Data Ecosystems",
    "Data Manipulation",
    "Solidity Programming",
    "Ethereum Ecosystem",
    "Web Technologies",
    "Cryptocurrency",
    "NFTs",
    "DAO",
    "DeFi",
    "DApp Development",
    "Innovative Developer",
    "Ethereum Development",
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
    "Solidity",
    "Web3.js",
    "Hardhat",
    "Ethers.js",
    "Metamask",
    "Three.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "C# / C-Sharp",
    "ASP.Net",
    "Node.js",
    "PHP",
    "Express.js",
    "Nest.js",
    "ASP.Net Core",
    "GraphQL",
    "AppSync",
    "Entity Framework",
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
    "Confluence",
    "Docker",
    "Kubernetes",
    "Salesforce",
    "AJAX",
    "MapObjects",
    "AWS",
    "GCP",
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
  ],
  title: "Mohit Shrivastava Full Stack Portfolio | iAMohit",
  description:
    "Welcome to Mohit's Portfolio! An Innovative Technocrat with Full Stack Excellence! Craft Engaging Frontends, Embrace Web 3.0, Architecting Backends",
};

export default function Home() {
  return (
    <section className="items-center">
      <Hero />
      <Web3Block />
      <Frontend />
      <Backend />
      <Databases />
      <DevTools />
      <AboutCards />
      <SkillsCards />
    </section>
  );
}
