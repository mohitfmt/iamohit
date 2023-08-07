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
      HighlightText: `My experiences over the last ${YrsOfExp} years have shaped how I view software, 
        and have led me to believe that I am still learning.`,
    },
    {
      RibbonText: "Effective Communication",
      CardTitle: "Communication Skills",
      AvatarIcon: <FcVoicePresentation size="100%" className="p-3" />,
      MetaTitle: "Tactful Speaker",
      HighlightText: `Listening carefully to answer, Quality over quantity without losing the impactful point of the message.`,
    },
    {
      RibbonText: "Clean Code",
      CardTitle: "Clean Coding",
      AvatarIcon: <FcEngineering size="100%" className="p-3" />,
      MetaTitle: "Beyond formatting",
      HighlightText: `Writing easily understandable, modifiable, testable code
        to create concise and elegant solutions.`,
    },
    {
      RibbonText: "Delivered 100+ Solutions",
      CardTitle: "Varied Skills",
      AvatarIcon: <FcMultipleDevices size="100%" className="p-3" />,
      MetaTitle: "Fresh Perspective",
      HighlightText: `Working with variety of industries increases broader
        experience, skills and ability to bring in fresh
        prespective.`,
    },
    {
      RibbonText: "Problem Solver",
      CardTitle: "Can-do attitude",
      AvatarIcon: <FcIdea size="100%" className="p-3" />,
      MetaTitle: "Problem-solving skills",
      HighlightText: `With the right tools, algorithms, and excellent analytical
        skills, I can come up with innovative solutions.`,
    },
    {
      RibbonText: "Optimized Code",
      CardTitle: "Optimization",
      AvatarIcon: <FcBullish size="100%" className="p-3" />,
      MetaTitle: "Improvement for Perfection",
      HighlightText: ` Enhancing SQL query, caching, response optimization, SEO,
        accessibility, UI/UX that impacts the success an
        application.`,
    },
    {
      RibbonText: "Smart",
      CardTitle: "Fast self learner",
      AvatarIcon: <FcPortraitMode size="100%" className="p-3" />,
      MetaTitle: "High Learning Curve",
      HighlightText: `Learning latest tools ranked myself ahead of other peers
        and accomplished greater efficiency, flexibility and
        accuracy.`,
    },
    {
      RibbonText: "Effective Planner",
      CardTitle: "Task Management",
      AvatarIcon: <FcAlarmClock size="100%" className="p-3" />,
      MetaTitle: "Time and Task Management",
      HighlightText: `Managing expectations from stakeholders, estimating the
        amount of time needed to complete tasks.`,
    },
  ],
};
