import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode
  variant?: "primary" | "secondary"
  fullWidth?: boolean
}

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg))]"

  const styles = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-500/50",
    secondary:
      "border border-blue-500/50 bg-white/60 text-blue-600 shadow-sm hover:bg-blue-500 hover:text-white dark:bg-slate-900/50 dark:text-blue-300"
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={cn(base, fullWidth && "w-full", styles[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}


export default Button
