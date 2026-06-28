import { useEffect, useState } from "react";
import OrbitingSkills from "./OrbitingSkills";
import ProfileImage from "./UI/ProfileImage";
import MotionSection from "./UI/MotionSection";

const words = ["Hello!", "I am Naveen"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let delay = isDeleting ? 55 : 95;

    if (!isDeleting && letterIndex === currentWord.length) {
      delay = 1200;
    }

    if (isDeleting && letterIndex === 0) {
      delay = 350;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && letterIndex < currentWord.length) {
        const nextIndex = letterIndex + 1;

        setText(currentWord.substring(0, nextIndex));
        setLetterIndex(nextIndex);
        return;
      }

      if (!isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (letterIndex > 0) {
        const nextIndex = letterIndex - 1;

        setText(currentWord.substring(0, nextIndex));
        setLetterIndex(nextIndex);
        return;
      }

      setIsDeleting(false);
      setWordIndex((previousIndex) => (previousIndex + 1) % words.length);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, wordIndex]);

  return (
    <MotionSection id="home" className="px-5 py-5 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="text-center lg:text-left">
          <p className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-blue-600 dark:text-blue-300 sm:text-6xl">
            {text}
            <span className="ml-1 inline-block animate-pulse">|</span>
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Full Stack Developer & AI/ML Enthusiast building intelligent and scalable digital solutions. Creative editor passionate about visual storytelling and design.
          </p>
        </div>

        <div className="relative flex min-h-80 w-full items-center justify-center overflow-hidden sm:min-h-104">
          <div className="hidden lg:block w-full">
            <OrbitingSkills />
          </div>
          <div className="block lg:hidden w-full">
            <ProfileImage />
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Hero;
