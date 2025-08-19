import Icons from "@/components/commons/Icons";
import { JSX } from "react";

import { BiLogoPostgresql } from "react-icons/bi";

import {
  SiChakraui,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
  SiMongodb,
  SiDotnet,
  SiShadcnui,
  SiNpm,
  SiGoogle,
  SiXendit,
} from "react-icons/si";

const iconSize = 25;

export type stacksProps = {
  name: string;
  icon?: JSX.Element;
};

export const STACKS: stacksProps[] = [
  {
    name: ".NET",
    icon: <SiDotnet size={iconSize} className="text-blue-600" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    name: "PHP",
    icon: <SiPhp size={iconSize} className="text-blue-500" />,
  },
  {
    name: "React.js",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql size={iconSize} className="text-pink-600" />,
  },
  {
    name: "Material UI",
    icon: <SiMui size={iconSize} className="text-sky-400" />,
  },
  {
    name: "PostgreSql",
    icon: <BiLogoPostgresql size={iconSize} className="text-blue-400" />,
  },
  {
    name: "ChakraUI",
    icon: <SiChakraui size={iconSize} className="text-teal-500" />,
  },
  {
    name: "React Native",
    icon: <SiReact size={iconSize} className="text-sky-600" />,
  },
  {
    name: "Expo",
    icon: <SiExpo size={iconSize} />,
  },

  {
    name: "Firebase",
    icon: <SiFirebase size={iconSize} className="text-yellow-500" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={iconSize} />,
  },
  {
    name: "Jest",
    icon: <SiJest size={iconSize} className="text-orange-600" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={iconSize} className="text-purple-500" />,
  },
  {
    name: "React Query",
    icon: <SiReactquery size={iconSize} className="text-red-600" />,
  },

  {
    name: "Prisma",
    icon: <SiPrisma size={iconSize} className="text-teal-500" />,
  },

  {
    name: "Github",
    icon: <SiGithub size={iconSize} />,
  },
  {
    name: "Zod",
    icon: <SiZod size={iconSize} className="text-blue-500" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={iconSize} className="text-green-600" />,
  },

  {
    name: "React Hook Form",
    icon: <SiReacthookform size={iconSize} className="text-pink-500" />,
  },

  {
    name: "Shadcn/ui",
    icon: <SiShadcnui size={iconSize} className="text-black-500" />,
  },
  {
    name: "NPM",
    icon: <SiNpm size={iconSize} className="text-red-500" />,
  },
  {
    name: "Google",
    icon: <SiGoogle size={iconSize} className="text-gray-300" />,
  },
  {
    name: "Xendit",
    icon: <SiXendit size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Midtrans",
    icon: <Icons.midtrans className={`h-[${iconSize}px] w-[${iconSize}px]`} />,
  },
];
