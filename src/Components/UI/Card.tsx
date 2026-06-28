import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "rounded-2xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-blue-500/10 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-blue-950/30",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card

