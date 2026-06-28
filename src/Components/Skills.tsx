import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DiJava,
  DiMysql,
  DiPython,
} from "react-icons/di";
import {
  FiBarChart2,
  FiCpu,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";
import {
  SiCloudinary,
  SiCplusplus,
  SiFastapi,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import MotionSection from "./UI/MotionSection";
import SkillCard from "./UI/SkillCard";



const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C/C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Java", Icon: DiJava, color: "#f89820" },
      { name: "Python", Icon: DiPython, color: "#3776ab" },
      { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61dafb" },
      { name: "HTML5", Icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", Icon: IoLogoCss3, color: "#1572b6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Postman", Icon: SiPostman, color: "#ff6c37" },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", Icon: DiMysql, color: "#00758f" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ecf8e" },
      { name: "Cloudinary", Icon: SiCloudinary, color: "#3448c5" },
    ],
  },

  // {
  //   title: "Core Concepts",
  //   skills: [
  //     { name: "DSA", Icon: FiGitBranch, color: "#2563eb" },
  //     { name: "OOP", Icon: FiCpu, color: "#7c3aed" },
  //     { name: "DBMS", Icon: FiDatabase, color: "#0ea5e9" },
  //     { name: "Operating Systems", Icon: FiTool, color: "#475569" },
  //     { name: "Computer Networks", Icon: BsHddNetwork, color: "#06b6d4" },
  //     { name: "Software Engineering", Icon: FiBookOpen, color: "#2563eb" },
  //   ],
  // },

  {
    title: "Developer Tools",
    skills: [
      { name: "Git", Icon: SiGit, color: "#f05032" },
      { name: "GitHub", Icon: SiGithub, color: "#4e4c4c" },
    ],
  },

  {
    title: "Soft Skills",
    skills: [
      { name: "Teamwork", Icon: FiUsers, color: "#2563eb" },
      { name: "Leadership", Icon: FiBarChart2, color: "#16a34a" },
      { name: "Communication", Icon: FiMessageCircle, color: "#0891b2" },
      { name: "Analytical Thinking", Icon: FiCpu, color: "#9333ea" },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].title);

  return (
    <MotionSection id="skills" className="px-5 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-600 dark:text-white">
          Technical & Professional Skills
        </h2>

        <div className="w-full">
          {/* Tabs */}
          <div className="flex items-end gap-3 sm:gap-4 overflow-x-auto pt-4 relative z-10 -mb-[1px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {skillCategories.map((category) => {
              const isActive = activeTab === category.title;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(category.title)}
                  className={`
                    whitespace-nowrap transition-all duration-300 font-medium px-5 flex-shrink-0
                    ${isActive
                      ? "bg-gray-50 text-blue-900 dark:bg-slate-950 dark:text-white rounded-t-xl mb-0 pt-3 pb-[35px] shadow-none border border-blue-500 dark:border-blue-400 border-b-blue-50 dark:border-b-slate-800 relative z-20"
                      : "bg-gray-800 text-white dark:bg-blue-700 dark:text-slate-200 rounded-xl mb-6 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                    }
                  `}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Content Container */}
          <div className={`relative z-0 min-h-[300px] rounded-2xl ${activeTab === skillCategories[0].title ? 'rounded-tl-none' : ''} border border-blue-500 bg-gray-50 p-6 shadow-xl shadow-blue-900/5 sm:p-10 dark:border-blue-400 dark:bg-slate-950 dark:shadow-slate-900/50`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
              >
                {skillCategories
                  .find((c) => c.title === activeTab)
                  ?.skills.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Skills;
