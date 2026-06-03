import { motion } from "motion/react";

function AnimatedText({
  children,
  className = "",
  delay = 0,
  y = 30,
  duration = 1,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -50,
      }}
      transition={{
        duration: duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedText;
