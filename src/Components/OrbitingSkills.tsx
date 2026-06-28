import React from "react";
import { FaReact, FaPython, FaCameraRetro } from "react-icons/fa";
import { SiPicsart, SiInkscape } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { BsOpenai } from "react-icons/bs";

// Simple utility for joining class names
const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

const orbitKeyframes = `
@keyframes orbit {
  0% {
    transform: rotate(var(--angle, 0deg)) translateY(var(--radius, 50px))
      rotate(calc(var(--angle, 0deg) * -1));
  }
  100% {
    transform: rotate(calc(var(--angle, 0deg) + 360deg))
      translateY(var(--radius, 50px))
      rotate(calc(var(--angle, 0deg) * -1 - 360deg));
  }
}
`;

export interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircleIcons({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      <style>{orbitKeyframes}</style>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/15"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          <div
            style={{
              "--angle": `${angle}deg`,
              "--radius": `${radius}px`,
              position: "absolute",
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              transformOrigin: "center center",
              animation: `orbit ${calculatedDuration}s linear ${delay ? `-${delay}s` : "0s"} infinite ${reverse ? "reverse" : "normal"}`,
            } as React.CSSProperties}
            className={className}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

type IconData = {
  IconComponent: React.ElementType;
  bgColor: string;
  textColor: string;
  label: string;
};

const circle1Icons: IconData[] = [
  { IconComponent: FaReact, bgColor: "bg-blue-500/10", textColor: "text-blue-500", label: "React" },
  { IconComponent: GiProcessor, bgColor: "bg-gray-500/10", textColor: "text-black-500", label: "Node.js" },
  { IconComponent: BsOpenai, bgColor: "bg-grya-400/10", textColor: "text-black-400", label: "OpenAI" },
  { IconComponent: FaPython, bgColor: "bg-yellow-500/10", textColor: "text-yellow-500", label: "Python" },
];

const circle2Icons: IconData[] = [
  { IconComponent: SiInkscape, bgColor: "bg-gray-500/10", textColor: "text-gray-500", label: "Inkscape" },
  { IconComponent: SiPicsart, bgColor: "bg-purple-500/10", textColor: "text-purple-500", label: "PicsArt" },
  { IconComponent: FaCameraRetro, bgColor: "bg-blue-400/10", textColor: "text-blue-400", label: "Adobe Lightroom" },
];

export default function OrbitingSkills() {
  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden">
      <OrbitingCircleIcons radius={100} duration={25}>
        {circle1Icons.map(({ IconComponent, bgColor, textColor, label }) => (
          <div key={label} className={cn("p-3 flex items-center justify-center rounded-full", bgColor, textColor)} aria-label={label} title={label}>
            <IconComponent className="size-8" />
          </div>
        ))}
      </OrbitingCircleIcons>

      <OrbitingCircleIcons radius={170} duration={30} reverse>
        {circle2Icons.map(({ IconComponent, bgColor, textColor, label }) => (
          <div key={label} className={cn("p-3 flex items-center justify-center rounded-full", bgColor, textColor)} aria-label={label} title={label}>
            <IconComponent className="size-8" />
          </div>
        ))}
      </OrbitingCircleIcons>
    </div>
  );
}
