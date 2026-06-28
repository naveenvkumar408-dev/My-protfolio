import { motion } from "framer-motion";
import Button from "../Components/UI/Button";
import { FiArrowUpRight } from "react-icons/fi";
import myResume from "../assets/my_resume.pdf";
import ProfileImage from "./UI/ProfileImage";
import OrbitingSkills from "./OrbitingSkills";

const About = () => {
  return (
    <section
      id="about"
      className="relative isolate flex flex-col lg:flex-row min-h-screen items-center justify-center lg:justify-end overflow-hidden bg-slate-50 py-5 dark:bg-slate-950 sm:py-15"
    >
      {/* Visual Element for Mobile */}
      <div className="flex lg:hidden w-full justify-center mb-10 z-0">
        <OrbitingSkills />
      </div>

      {/* Visual Element for Desktop */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] hidden lg:flex items-center justify-center z-0 pointer-events-auto">
        <ProfileImage />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
        className="relative z-10 w-[90%] sm:w-[95%] lg:w-[60%] rounded-[30px] sm:rounded-none sm:rounded-l-[120px] border sm:border-r-0 border-white/80 bg-white px-6 py-10 shadow-2xl shadow-blue-800/20 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/80 sm:px-20 sm:py-24"
      >
        <h2 className="text-4xl font-bold tracking-normal text-blue-600 dark:text-white sm:text-5xl">
          About Myself
        </h2>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
          I am a passionate Full Stack Developer with hands-on experience in building modern web applications using React, TypeScript, Python, MongoDB, and Supabase & AI/ML Enthusiast building intelligent and scalable digital solutions. I enjoy creating scalable, user-friendly solutions that combine performance with clean design.

          Alongside development, I have a strong creative side. I work with tools like PicsArt and Adobe Lightroom to produce visually appealing edits, which I showcase on my Instagram page <span className="font-semibold text-blue-600 dark:text-white dark:underline dark:decoration-blue-400"><a href="https://www.instagram.com/navin_creatives?igsh=NWwxcG9yajk5aHA4">navin_creatives</a></span>. I believe in blending technology with creativity to build impactful digital experiences.

          In my free time, I enjoy watching films, listening to music, and exploring creative editing. I am always curious to learn new technologies and continuously improve both my technical and creative skills.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          {/* Resume Download Button */}
          <a href={myResume} download="Naveen_Resume.pdf">
            <Button
              variant="secondary"
              className="relative text-sm font-medium rounded-full h-14 p-1 pl-6 pr-14 group transition-all duration-500 hover:pl-14 hover:pr-6 w-fit overflow-hidden cursor-pointer border-blue-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
            >
              <span className="relative z-10 transition-all font-bold duration-500 text-slate-700 dark:text-slate-200">
                Download Resume
              </span>
              <div className="absolute right-1 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45">
                <FiArrowUpRight size={20} />
              </div>
            </Button>
          </a>

          {/* GitHub Button */}
          <a href="https://github.com/naveenvkumar408-dev" target="_blank" rel="noopener noreferrer">
            <Button
              variant="primary"
              className="relative text-sm font-medium rounded-full h-10 px-5 overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.7)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] cursor-pointer"
            >
              GitHub
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
