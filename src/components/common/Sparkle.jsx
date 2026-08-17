// Sparkle.jsx
import React from "react";
import { motion } from "framer-motion";

const Sparkle = ({
  size = 64,
  color = "cuurentColor",
  className = "",
  initial = { scale: 0, rotate: -45 },
  animate = { scale: 1, rotate: 0 },
  transition = { type: "spring", stiffness: 200, damping: 15, delay: 0.2 },
}) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      aria-hidden="true"
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2 Z" />
    </motion.svg>
  );
};

export default Sparkle;
