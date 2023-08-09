import {
  FcIdea,
  FcBullish,
  FcBiotech,
  FcPortraitMode,
  FcVoicePresentation,
  FcEngineering,
  FcMultipleDevices,
  FcAlarmClock,
} from "react-icons/fc/";

const YrsOfExp = new Date().getFullYear() - 2006;

export const aboutMohit = {
  highlightsData: [
    {
      RibbonText: YrsOfExp + ` years of Experience`,
      CardTitle: "Extensive Experience",
      AvatarIcon: <FcBiotech size="100%" className="p-3" />,
      MetaTitle: "Almost two decades",
      HighlightText: `Over the course of my illustrious ${YrsOfExp}-year journey, I've honed a profound understanding of software development. Each project has been a stepping stone in my continuous pursuit of knowledge and growth.`,
    },
    {
      RibbonText: "Effective Communication",
      CardTitle: "Communication Skills",
      AvatarIcon: <FcVoicePresentation size="100%" className="p-3" />,
      MetaTitle: "Tactful Speaker",
      HighlightText: `Communication is the cornerstone of my success. By attentively listening and articulating ideas with precision, I ensure that every message carries weight and impact.`,
    },
    {
      RibbonText: "Clean Code",
      CardTitle: "Clean Coding",
      AvatarIcon: <FcEngineering size="100%" className="p-3" />,
      MetaTitle: "Beyond formatting",
      HighlightText: `The art of clean coding is second nature to me. With meticulous attention to detail, I architect elegant and maintainable solutions that stand the test of time.`,
    },
    {
      RibbonText: "Delivered 100+ Solutions",
      CardTitle: "Varied Skills",
      AvatarIcon: <FcMultipleDevices size="100%" className="p-3" />,
      MetaTitle: "Fresh Perspective",
      HighlightText: `Venturing into diverse industries has enriched my expertise, fostering adaptability and the ability to offer fresh perspectives on every project.`,
    },
    {
      RibbonText: "Problem Solver",
      CardTitle: "Can-do attitude",
      AvatarIcon: <FcIdea size="100%" className="p-3" />,
      MetaTitle: "Problem-solving skills",
      HighlightText: `With a vast array of tools, algorithms, and analytical prowess at my disposal, I approach every challenge with unwavering determination, delivering innovative solutions that transcend expectations.`,
    },
    {
      RibbonText: "Optimized Code",
      CardTitle: "Optimization",
      AvatarIcon: <FcBullish size="100%" className="p-3" />,
      MetaTitle: "Improvement for Perfection",
      HighlightText: `I leave no stone unturned when it comes to optimizing applications. From crafting efficient SQL queries to enhancing SEO and accessibility, I relentlessly pursue perfection.`,
    },
    {
      RibbonText: "Smart",
      CardTitle: "Fast self learner",
      AvatarIcon: <FcPortraitMode size="100%" className="p-3" />,
      MetaTitle: "High Learning Curve",
      HighlightText: `In a rapidly evolving tech landscape, staying ahead is essential. By embracing the latest tools and technologies, I propel myself and my projects towards unmatched efficiency and accuracy.`,
    },
    {
      RibbonText: "Effective Planner",
      CardTitle: "Task Management",
      AvatarIcon: <FcAlarmClock size="100%" className="p-3" />,
      MetaTitle: "Time and Task Management",
      HighlightText: `Managing expectations is an art I've mastered. With meticulous planning and estimating, I ensure projects flow seamlessly, delivering on time and exceeding goals.`,
    },
  ],
};
