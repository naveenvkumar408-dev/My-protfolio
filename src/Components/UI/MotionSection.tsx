import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

const MotionSection = ({ children, className = "", ...props }: MotionSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;
