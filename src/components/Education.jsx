
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
    institution: "Kismotpur Delowar Hossain College",
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
    <section
      id="education"
      className="min-h-screen overflow-hidden bg-black/90 px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8"
    >
      {/* Heading */}
      <div className="mb-12 text-center sm:mb-16">
        <h2 className="text-xl font-bold tracking-[2px] sm:text-2xl sm:tracking-[3px] md:text-3xl">
          EDUCATION QUALIFICATION
        </h2>

        {/* <div className="mx-auto mt-3 h-[2px] w-12 bg-[#a3ff00]" /> */}
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-gradient-to-b from-[#a3ff00] via-[#527d00] to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-7 sm:space-y-10 md:space-y-12">
          {education.map((item, index) => (
            <div
              key={`${item.year}-${item.title}`}
              className={`relative flex ${
                // Mobile: all cards on the right
                // Tablet/Desktop: alternate left and right
                item.side === "left"
                  ? "sm:justify-start"
                  : "sm:justify-end"
              }`}
            >
              {/* Timeline dot */}
              <span className="absolute left-[9px] top-7 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[#a3ff00] bg-[#030407] shadow-[0_0_10px_#a3ff00] sm:left-1/2 sm:top-8 sm:-translate-x-1/2" />

              {/* Card */}
              <div
                className={`ml-9 w-[calc(100%-2.25rem)] min-w-0 rounded-xl border border-[#1b1e24] bg-[#050609] p-4 transition-colors duration-300 hover:border-[#a3ff00]/50 sm:ml-0 sm:w-[calc(50%-32px)] sm:p-5 md:w-[calc(50%-40px)] md:p-6 ${
                  item.side === "left"
                    ? "sm:mr-8 md:mr-10"
                    : "sm:ml-8 md:ml-10"
                }`}
              >
                {/* Icon + Title */}
                <div className="flex min-w-0 items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg text-white sm:h-10 sm:w-10 ${
                      index === 0
                        ? "bg-gradient-to-br from-lime-500 to-blue-500"
                        : index === 1
                        ? "bg-gradient-to-br from-green-500 to-indigo-500"
                        : index === 2
                        ? "bg-gradient-to-br from-amber-400 to-purple-500"
                        : "bg-gradient-to-br from-cyan-500 to-purple-500"
                    }`}
                  >
                    {item.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-1 text-[10px] font-semibold text-[#a3ff00] sm:text-xs">
                      {item.year}
                    </p>

                    <h3 className="break-words text-sm font-bold leading-5 sm:text-base md:text-lg md:leading-6">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Institution */}
                <p className="mt-3 break-words text-xs italic leading-5 text-gray-300 sm:text-sm">
                  {item.institution}
                </p>

                {/* Department */}
                <span className="mt-3 inline-block max-w-full whitespace-normal break-words rounded-md border border-[#a3ff00]/20 bg-[#a3ff00]/10 px-2 py-1 text-[9px] font-semibold leading-4 tracking-wide text-[#a3ff00] sm:px-2.5 sm:text-[10px]">
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