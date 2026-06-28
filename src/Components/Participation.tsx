import MotionSection from "./UI/MotionSection";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { FiAward, FiExternalLink } from "react-icons/fi";
import participationImg from "../assets/participation-1.png";

const Participation = () => {
  return (
    <MotionSection id="participation" className="px-5 pt-16 pb-8 bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="text-center text-3xl font-bold text-blue-600 dark:text-white">
            My Participation
          </h2>
        </div>

        <div className="flex justify-start">
          <Card className="w-full max-w-[340px] overflow-hidden p-0 bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80">
            {/* Card Image */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-inner">
              <img
                src={participationImg}
                alt="Silver Spectrum Techfest-2025 Hackathon"
                className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                <FiAward className="h-3 w-3" /> Hackathon
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white leading-tight">
                  Silver Spectrum Techfest-2025 Hackathon
                </h3>
                <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  New Horizon, Bangalore
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Participated in the annual techfest hackathon, collaborating on designing and building innovative software solutions.
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <a
                  href="https://drive.google.com/file/d/1PlPxx7_lhSk6coLumCz1vIvbdywA49Ma/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="primary" className="w-full text-xs font-semibold py-2">
                    <FiExternalLink className="h-4 w-4" /> View Certificate
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MotionSection>
  );
};

export default Participation;
