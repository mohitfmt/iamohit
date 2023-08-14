import ExpHero from "@/components/ExpHero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillsCards from "@/components/SkillsCards";
import { ExperienceData } from "@/components/data/experience";

const Experience = () => {
  return (
    <section>
      <ExpHero />
      {ExperienceData.sort((a,b)=>new Date(b.StartDate)- new Date(a.StartDate)).map((exp, index) => (
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
