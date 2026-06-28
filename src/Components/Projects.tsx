import React from "react";
import { FiActivity, FiGithub, FiExternalLink } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";
import Button from "./UI/Button";
import MotionSection from "./UI/MotionSection";
import { PerspectiveFlipCard } from "./UI/PerspectiveFlipCard";
import project1Img from "../assets/project-1.png";
import profilePic from "../assets/project-2.png"

interface ProjectItem {
  id: number;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  gradient: string;
  Icon: React.ElementType;
  badge: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Doctor Appointment System",
    tagline: "Full-stack healthcare booking platform.",
    description: "A complete doctor booking solution featuring dynamic scheduling, secure patient/doctor flows, administrative dashboarding, and database persistence.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary"],
    features: [
      "Secure User Authentication",
      "Dynamic Calendar & Slot Booking",
      "Cloud-based Asset Management via Cloudinary"
    ],
    gradient: "from-blue-600 via-indigo-600 to-violet-500",
    Icon: FiActivity,
    badge: "Full Stack",
    githubUrl: "https://github.com/naveenvkumar408-dev/doc-app-user",
    demoUrl: "https://docapp-frontend-latest.onrender.com",
    image: project1Img
  },
  {
    id: 2,
    title: "My Protfolio",
    tagline: "React Typescript with tailwind",
    description: "This is my protfolio website created using React and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Typscript"],
    features: [
      "Responsive Design",
      "Interactive Animations",
      "Clean UI/UX"
    ],
    gradient: "from-blue-600 via-indigo-600 to-violet-500",
    Icon: IoPersonCircle,
    badge: "Protfolio",
    githubUrl: "https://github.com/naveenvkumar408-dev/My-protfolio",
    demoUrl: "https://my-protfolio-drab-five.vercel.app",
    image: profilePic
  }
];

const Projects = () => {
  return (
    <MotionSection id="projects" className="px-5 pt-16 pb-8 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-center text-3xl font-bold text-blue-600 dark:text-white">
            My Projects
          </h2>
        </div>

        <div className="flex flex-wrap justify-start gap-8">
          {projectsData.map((project) => {
            const Icon = project.Icon;

            const frontFace = (
              <div className="flex h-full flex-col justify-between rounded-xl bg-white p-4 shadow-sm dark:bg-slate-900 [transform-style:preserve-3d]">
                {/* Image Header */}
                <div className="relative h-44 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 shadow-inner [transform:translateZ(40px)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {project.badge}
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="flex-1 py-5 flex flex-col justify-between [transform-style:preserve-3d]">
                  <div className="[transform:translateZ(30px)]">
                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="mt-4 flex flex-wrap gap-1.5 [transform:translateZ(20px)]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom interactive hint */}
                <div className="text-center text-xs font-medium text-slate-400 dark:text-slate-500 animate-bounce [transform:translateZ(10px)]">
                  Hover to reveal details ↺
                </div>
              </div>
            );

            const backFace = (
              <div className="flex h-full w-full flex-col justify-between [transform-style:preserve-3d]">
                <div className="flex flex-col items-center [transform-style:preserve-3d]">
                  {/* Rounded Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 [transform:translateZ(50px)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-950 dark:text-white [transform:translateZ(40px)]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 [transform:translateZ(30px)]">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="mt-5 space-y-2 text-left text-xs text-slate-600 dark:text-slate-400 [transform:translateZ(20px)] w-full max-w-[260px]">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 w-full [transform:translateZ(40px)] mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="secondary" className="w-full text-xs font-semibold py-2">
                      <FiGithub className="h-4 w-4" /> Code
                    </Button>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="primary" className="w-full text-xs font-semibold py-2">
                      <FiExternalLink className="h-4 w-4" /> Live
                    </Button>
                  </a>
                </div>
              </div>
            );

            return (
              <PerspectiveFlipCard
                key={project.id}
                front={frontFace}
                back={backFace}
                h="h-[480px]"
                w="w-full max-w-[340px]"
              />
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
};

export default Projects;
