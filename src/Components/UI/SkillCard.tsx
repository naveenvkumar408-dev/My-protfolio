import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  Icon: IconType;
  color: string;
}

const SkillCard = ({ name, Icon, color }: SkillCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group flex min-h-32 flex-col items-center justify-center gap-4 rounded-xl border border-blue-100/80 bg-white/85 p-5 text-center shadow-lg shadow-slate-200/70 backdrop-blur-xl transition-all duration-300 hover:border-blue-300 hover:shadow-blue-500/25 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40 dark:hover:border-blue-400/70 dark:hover:shadow-blue-500/20"
    >
      <Icon className="h-14 w-14" style={{ color }} aria-hidden="true" />
      <h3 className="text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-100">
        {name}
      </h3>
    </motion.article>
  );
};

export default SkillCard;
