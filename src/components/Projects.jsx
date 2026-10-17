"use client";



import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "DevStack",
    description:
      "DevStack is a modern platform for developers to explore technology, discover useful resources and enhance their development skills.",
    image: "/images/dev-stack.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/sagorhowlader1/technologystack",
    live: "https://technology-stack1.netlify.app/",
  },
  {
    title: "Bazar Dor",
    description:
      "Bazar Dor is a user-friendly platform to explore daily market prices, compare product costs, and make smarter shopping decisions.",
    image: "/images/bazar-dor.png",
    technologies: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/sagorhowlader1/bazar-dor",
    live: "https://bazar-dor-lilac.vercel.app/",
  },
  {
    title: "Fitlog Workout Library",
    description:
      "FitLog is a modern workout library that helps users explore exercises, track their fitness plans, and stay consistent with their fitness goals.",
    image: "/images/filog-workout-library.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/sagorhowlader1/fitlog-workout-library",
    live: "https://fitlog-workout-library-livid.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#030407] px-5 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center mb-6 justify-center text-white">
            MY PROJECTS
          </h2>

          <p className=" text-sm text-gray-400">
            Explore a selection of my projects, showcasing my skills in web development.
          </p>

          {/* <div className="mx-auto mt-3 h-0.5 w-12 bg-[#a3ff00]" /> */}
        </div>

        {/* Project cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-[#08090c] transition duration-300 hover:-translate-y-1 hover:border-[#a3ff00]/50"
            >
              {/* Project image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Project details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#a3ff00]/20 bg-[#a3ff00]/5 px-2 py-1 text-xs text-[#a3ff00]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="text-gray-300 transition hover:text-[#a3ff00]"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live demo of ${project.title}`}
                    className="flex items-center gap-1 text-sm text-[#a3ff00] hover:underline"
                  >
                    Live Demo
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;