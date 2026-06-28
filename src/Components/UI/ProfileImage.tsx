import { useState, type MouseEvent, type CSSProperties } from "react";
import profilePic from "../../assets/profile_pic.jpeg";

export default function ProfileImage() {
  const [tiltStyle, setTiltStyle] = useState<CSSProperties>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
  });

  const handleImageMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height - 0.5) * -18).toFixed(2);
    const rotateY = ((x / rect.width - 0.5) * 18).toFixed(2);

    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
    });
  };

  const resetImageTilt = () => {
    setTiltStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div className="relative flex min-h-80 items-center justify-center overflow-hidden sm:min-h-104 w-full">
      <div
        className="absolute h-[140%] w-[140%] rounded-full opacity-80 dark:opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.4) 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, rgba(0,0,0,0.4) 20%, transparent 80%)",
        }}
      />
      <div
        className="relative h-64 w-64 rounded-full shadow-2xl shadow-blue-500/20 transition-transform duration-150 ease-out sm:h-80 sm:w-80 z-10"
        style={tiltStyle}
        onMouseMove={handleImageMove}
        onMouseLeave={resetImageTilt}
      >
        <img
          src={profilePic}
          alt="Naveen profile"
          className="h-full w-full rounded-full border-4 border-white object-cover dark:border-slate-800"
        />
      </div>
    </div>
  );
}
