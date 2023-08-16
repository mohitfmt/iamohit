import ExperienceCard from "@/components/ExperienceCard";
import SkillsCards from "@/components/SkillsCards";
import { ExperienceData } from "@/components/data/experience";
import dynamic from "next/dynamic";

const ExpHero = dynamic(() => import("@/components/ExpHero"), {
  loading: () => (
    <p className="h-[900px] justify-center items-center flex">Loading...</p>
  ),
});

const Experience = () => {
  return (
    <section>
      <ExpHero />
      {ExperienceData.sort((a,b)=>new Date(b.startDate)- new Date(a.startDate)).map((exp, index) => (
        <ExperienceCard
          key={index}
          ExpData={...exp}
        />
      ))}
      <SkillsCards show="all" />
    </section>
  );
};

export default Experience;
