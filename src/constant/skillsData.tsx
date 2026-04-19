import React from "react";

import {
  FaCss3,
  FaHtml5,
  FaLaptopCode,
  FaMobile,
  FaSearchengin,
  FaSquareJs,
} from "react-icons/fa6";

import {
  SiVercel,
} from "react-icons/si";

import { MdApi } from "react-icons/md";

interface LogoProps {
  title: string;
  logoComponent: React.FC;
  color?: string;
}

interface SkillsDataProps {
  title: string;
  data: LogoProps[];
}

export const skillsData: SkillsDataProps[] = [
  {
    title: "Languages & Core",
    data: [
      { title: "HTML5", logoComponent: FaHtml5, color: "#E34F26" },
      { title: "CSS3", logoComponent: FaCss3, color: "#1572B6" },
      { title: "JavaScript", logoComponent: FaSquareJs, color: "#F7DF1E" },
    ],
  },
  {
    title: "Web Development",
    data: [
      {
        title: "Web Development",
        logoComponent: FaLaptopCode,
        color: "#607D8B",
      },
      { title: "Responsive Design", logoComponent: FaMobile, color: "#009688" },
      { title: "API Integration", logoComponent: MdApi, color: "#5C2D91" },
    ],
  },
  {
    title: "Tools & Platforms",
    data: [
      { title: "Vercel", logoComponent: SiVercel, color: "#d4d4d8" },
      {
        title: "SEO Optimization",
        logoComponent: FaSearchengin,
        color: "#FF5722",
      },
    ],
  },
];
