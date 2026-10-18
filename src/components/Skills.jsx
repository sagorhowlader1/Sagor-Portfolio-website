"use client";

import { AiOutlineOpenAI } from "react-icons/ai";
import { FaCss3Alt, FaGitAlt, FaServer } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiShadcnui,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiHeroui,
  SiDaisyui,
  SiClaude,
  SiGooglegemini,
  SiOpencode,
  SiBetterauth,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: RiNextjsFill, color: "#FFFFFF" },
    ],
  },
  {
    title: "Programming Language",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    title: "Styling & Design",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Hero UI", icon: SiHeroui, color: "#ffffff" },
      { name: "Shadcn UI", icon: SiShadcnui, color: "#FFFFFF" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Daisy UI", icon: SiDaisyui, color: "#FBBD23" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
  },
  {
    title: "Libraries & Integrations",
    skills: [
      { name: "BetterAuth", icon: SiBetterauth, color: "#FFFFFF" },
      { name: "REST API", icon: FaServer, color: "#3B82F6" },

    ],
  },
  {
    title: "AI Tools & Integration",
    skills: [
      { name: "ChatGPT", icon: AiOutlineOpenAI, color: "#FFFFFF" },
      { name: "Claude", icon: SiClaude, color: "#D97757" },
      { name: "Gemini", icon: SiGooglegemini, color: "#FFFFFF" },
      { name: "Opencode", icon: SiOpencode, color: "#F5A623" },

    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black px-5 py-16 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 justify-center text-white">
        MY SKILLS
      </h2>
      <p></p>
      <div className="mx-auto grid max-w-[1328px] grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-[#1C1D25] bg-[#07080D] p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="bg-[#172609] px-1 text-lg font-semibold text-[#65A30D]">
                {category.title}
              </h2>

              <span className="flex h-[22px] min-w-[24px] items-center justify-center rounded-full border border-[#31430F] bg-[#111A08] px-1.5 text-xs text-[#65A30D]">
                {category.skills.length}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                if (!Icon) {
                  return null;
                }

                return (
                  <div key={skill.name} title={skill.name} className="flex aspect-square cursor-pointer items-center justify-center rounded-xl border border-[#191A20] bg-black p-3">
                    <div className="flex h-full w-full items-center justify-center bg-[#101807]">
                      <Icon size={64} color={skill.color} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;