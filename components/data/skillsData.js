import {
  FaAngular,
  FaAws,
  FaBitbucket,
  FaBootstrap,
  FaGitAlt,
  FaHardHat,
  FaHtml5,
  FaJenkins,
  FaNodeJs,
  FaReact,
  FaWpforms,
} from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

import {
  SiAmazondynamodb,
  SiAntdesign,
  SiArcgis,
  SiAwsamplify,
  SiBabel,
  SiCss3,
  SiDocker,
  SiDotnet,
  SiEthereum,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGatsby,
  SiGooglecloud,
  SiGraphql,
  SiJira,
  SiKubernetes,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpenzeppelin,
  SiOracle,
  SiPhp,
  SiPostgresql,
  SiRedux,
  SiSolidity,
  SiSonarqube,
  SiTrello,
  SiWeb3Dotjs,
  SiWebpack,
} from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandJavascript,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript,
  TbBrandWindows,
} from "react-icons/tb";
import MetaMaskIcon from "../metamaskicon";

export const AllSkills = [
  {
    techName: "Frontend",
    techList: [
      {
        name: "NextJS",
        icon: <SiNextdotjs size="100%" className="w-8" />,
      },
      {
        name: "React",
        icon: <FaReact size="100%" className="w-8" />,
      },
      {
        name: "Angular",
        icon: <FaAngular size="100%" className="w-8" />,
      },
      {
        name: "AWS-Amplify",
        icon: <SiAwsamplify size="100%" className="w-8" />,
      },
      {
        name: "Gatsby",
        icon: <SiGatsby size="100%" className="w-8" />,
      },
      {
        name: "React Redux",
        icon: <SiRedux size="100%" className="w-8" />,
      },
      {
        name: "Babel",
        icon: <SiBabel size="100%" className="w-8" />,
      },
      {
        name: "Webpack",
        icon: <SiWebpack size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "CSS (UI/UX)",
    techList: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap size="100%" className="w-8" />,
      },
      {
        name: "Ant Design",
        icon: <SiAntdesign size="100%" className="w-8" />,
      },
      {
        name: "Tailwind CSS",
        icon: <TbBrandTailwind size="100%" className="w-8" />,
      },
      {
        name: "Material UI",
        icon: <SiMui size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "Backend",
    techList: [
      {
        name: "NodeJS",
        icon: <FaNodeJs size="100%" className="w-8" />,
      },
      {
        name: "ExpressJS",
        icon: <SiExpress size="100%" className="w-8" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size="100%" className="w-8" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size="100%" className="w-8" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql size="100%" className="w-8" />,
      },
      {
        name: "NestJS",
        icon: <SiNestjs size="100%" className="w-8" />,
      },
      {
        name: "AppSync",
        icon: <FaAws size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "Web 3.0",
    techList: [
      {
        name: "Solidity",
        icon: <SiSolidity size="100%" className="w-8" />,
      },
      {
        name: "Web3.js",
        icon: <SiWeb3Dotjs size="100%" className="w-8" />,
      },
      {
        name: "Hardhat",
        icon: <FaHardHat size="100%" className="w-8" />,
      },
      {
        name: "Ethers.js",
        icon: <SiEthereum size="100%" className="w-8" />,
      },
      {
        name: "Metamask",
        icon: <MetaMaskIcon size="100%" className="w-8" />,
      },
      {
        name: "OpenZeppelin",
        icon: <SiOpenzeppelin size="100%" className="w-8" />,
      },
      {
        name: "Three.js",
        icon: <TbBrandThreejs size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "DevOps & Tools",
    techList: [
      {
        name: "Docker",
        icon: <SiDocker size="100%" className="w-8" />,
      },
      {
        name: "Kubernetes",
        icon: <SiKubernetes size="100%" className="w-8" />,
      },
      {
        name: "AWS",
        icon: <FaAws size="100%" className="w-8" />,
      },
      {
        name: "GCP",
        icon: <SiGooglecloud size="100%" className="w-8" />,
      },
      {
        name: "Jenkins",
        icon: <FaJenkins size="100%" className="w-8" />,
      },
      {
        name: "Git",
        icon: <FaGitAlt size="100%" className="w-8" />,
      },
      {
        name: "Bitbucket",
        icon: <FaBitbucket size="100%" className="w-8" />,
      },
      {
        name: "JIRA",
        icon: <SiJira size="100%" className="w-8" />,
      },
      {
        name: "Trello",
        icon: <SiTrello size="100%" className="w-8" />,
      },
      {
        name: "SonarQube",
        icon: <SiSonarqube size="100%" className="w-8" />,
      },
      {
        name: "Figma",
        icon: <SiFigma size="100%" className="w-8" />,
      },
      {
        name: "ArcGIS",
        icon: <SiArcgis size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "Languages",
    techList: [
      {
        name: "JavaScript",
        icon: <TbBrandJavascript size="100%" className="w-8" />,
      },
      {
        name: "TypeScript",
        icon: <TbBrandTypescript size="100%" className="w-8" />,
      },
      {
        name: "HTML",
        icon: <FaHtml5 size="100%" className="w-8" />,
      },
      {
        name: "CSS",
        icon: <SiCss3 size="100%" className="w-8" />,
      },

      {
        name: "C# / C-Sharp",
        icon: <TbBrandCSharp size="100%" className="w-8" />,
      },
      {
        name: "ASP.Net",
        icon: <SiDotnet size="100%" className="w-8" />,
      },
      {
        name: "DotNet Core",
        icon: <DiDotnet size="100%" className="w-8" />,
      },
      {
        name: "Solidity",
        icon: <SiSolidity size="100%" className="w-8" />,
      },
      {
        name: "PHP",
        icon: <SiPhp size="100%" className="w-8" />,
      },
      {
        name: "WPF / WCF",
        icon: <FaWpforms size="100%" className="w-8" />,
      },
      {
        name: "Visual Basic 6.0",
        icon: <TbBrandWindows size="100%" className="w-8" />,
      },
    ],
  },
  {
    techName: "Databases",
    techList: [
      {
        name: "MySQL",
        icon: <SiMysql size="100%" className="w-8" />,
      },
      {
        name: "SQL Server",
        icon: <SiMicrosoftsqlserver size="100%" className="w-8" />,
      },
      {
        name: "Oracle",
        icon: <SiOracle size="100%" className="w-8" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size="100%" className="w-8" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size="100%" className="w-8" />,
      },
      {
        name: "DynamoDB",
        icon: <SiAmazondynamodb size="100%" className="w-8" />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size="100%" className="w-8" />,
      },
    ],
  },
];
