import { motion } from "motion/react";

function FlowerDecoration({
  image,
  className,
  animation = "bottom",
  duration = 2,
}) {
  const initial =
    animation === "left"
      ? {
          opacity: 0,
          x: -50,
        }
      : {
          opacity: 0,
          y: 50,
        };

  const animate =
    animation === "left"
      ? {
          opacity: 1,
          x: 0,
        }
      : {
          opacity: 1,
          y: 0,
        };

  return (
    <motion.img
      src={image}
      className={`absolute ${className}`}
      initial={initial}
      animate={animate}
      exit={{
        opacity: 0,
        y: -100,
        scale: 0.8,
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
      }}
    />
  );
}

export default FlowerDecoration;
