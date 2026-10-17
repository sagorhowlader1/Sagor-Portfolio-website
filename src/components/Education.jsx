"use client";

import {
  FaCode,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

const education = [
  {
    year: "2023 - Present",
    title: "Computer Science & Engineering",
    institution: "Ahsanullah Polytechnic Institute-AITVET",
    department: "COMPUTER SCIENCE & ENGINEERING",
    icon: <FaGraduationCap />,
    side: "left",
  },
  {
    year: "2022",
    title: "Higher Secondary Certificate",
    institution:
      "Kismotpur Delowar Hossain College",
    department: "HUMANITIES GROUP",
    icon: <FaSchool />,
    side: "right",
  },
  {
    year: "2020",
    title: "Secondary School Certificate",
    institution: "Kakrabunia Model High School",
    department: "HUMANITIES GROUP",
    icon: <HiOutlineBookOpen />,
    side: "left",
  },
  {
    year: "2026",
    title: "AI-DRIVEN Full-Stack Web Engineering Bootcamp",
    institution: "Programming Hero",
    department: "Web Development",
    icon: <FaCode />,
    side: "right",
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-black/90 px-4 py-8  text-white">
      {/* Heading */}
      <div className="mb-18 text-center">
        <h2 className="text-2xl font-bold tracking-[3px] text-white sm:text-3xl">
          EDUCATION QUALIFICATION
        </h2>

        {/* <div className="mx-auto mt-2 h-[2px] w-12 bg-[#a3ff00]" /> */}
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-[720px]">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#a3ff00] via-[#527d00] to-transparent" />

        <div className="space-y-[50px]">
          {education.map((item, index) => (
            <div
              key={item.year}
              className={`relative flex ${
                item.side === "left"
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              {/* Timeline dot */}
              <span className="absolute left-1/2 top-[66px] z-10 h-3 w-3 -translate-x-1/2 rounded-full border-[3px] border-[#a3ff00] bg-[#030407] shadow-[0_0_10px_#a3ff00]" />

              {/* Card */}
              <div
                className={`w-[calc(50%-60px)] rounded-xl border border-[#1b1e24] bg-[#050609] p-5 ${
                  item.side === "left"
                    ? "mr-[60px]"
                    : "ml-[60px]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div
                    className={`flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-lg text-lg text-white ${
                      index === 0
                        ? "bg-gradient-to-br from-lime-500 to-blue-500"
                        : index === 1
                        ? "bg-gradient-to-br from-green-500 to-indigo-500"
                        : "bg-gradient-to-br from-amber-400 to-purple-500"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] font-semibold text-[#a3ff00]">
                      {item.year}
                    </p>

                    <h3 className="text-base font-bold leading-5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs italic leading-4 text-gray-300">
                  {item.institution}
                </p>

                <span className="mt-3 inline-block rounded-md border border-[#a3ff00]/20 bg-[#a3ff00]/10 px-2.5 py-1 text-[9px] font-semibold tracking-wide text-[#a3ff00]">
                  {item.department}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;