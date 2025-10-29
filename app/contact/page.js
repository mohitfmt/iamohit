import dynamic from "next/dynamic";
import QuickContactCards from "@/components/contact/QuickContactCards";
import AvailabilityStatus from "@/components/contact/AvailabilityStatus";
import TrustSignals from "@/components/contact/TrustSignals";
import ContactCTA from "@/components/contact/ContactCTA";

const ContactHero = dynamic(() => import("@/components/Heros/ContactHero"), {
  loading: () => (
    <div className="min-h-screen flex justify-center items-center">
      <p className="text-white text-xl">Loading...</p>
    </div>
  ),
});

export const metadata = {
  keywords: [
    "Contact",
    "Collaboration",
    "Digital Experiences",
    "Frontend",
    "Backend",
    "Full Stack",
    "User Interfaces",
    "Responsive Layouts",
    "Freelance",
    "Collaborations",
    "Consultations",
    "Privacy",
    "Communication",
    "Data Handling",
    "Privacy Policy",
    "Email",
    "Phone",
    "LinkedIn",
    "GitHub",
    "Social Media",
    "Web Development",
    "Projects",
    "Senior Full-Stack Engineer",
    "Next.js Expert",
    "React Developer",
    "Technology Lead",
    "News Platform Developer",
    "Media Technology",
    "Performance Optimization",
    "Scalability Expert",
    "StackOverflow",
    "Malaysia Developer",
    "Kuala Lumpur",
    "Available for Hire",
    "Job Opportunities",
  ],
  title: "Get In Touch | Senior Full-Stack Engineer Available for Hire",
  description:
    "Looking for a Senior Full-Stack Engineer who scaled platforms to 8.5M users? I've achieved 184% traffic growth at FMT. Available for Next.js/React roles in Malaysia's news and media technology companies. Contact me today!",
};

const Contact = () => {
  return (
    <main>
      {/* Hero Section with primary CTAs */}
      <ContactHero />

      {/* Quick Contact Methods */}
      <QuickContactCards />

      {/* Availability and What I'm Looking For */}
      <AvailabilityStatus />

      {/* Trust Signals, Privacy, and StackOverflow Badge */}
      <TrustSignals />

      {/* Final Call-to-Action */}
      <ContactCTA />
    </main>
  );
};

export default Contact;
