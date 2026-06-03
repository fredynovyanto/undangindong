import { forwardRef } from "react";
import { AnimatePresence } from "motion/react";

import FlowerDecoration from "./FlowerDecoration";

const WeddingSection = forwardRef(
  ({ active, decorations = [], children, className = "" }, ref) => {
    return (
      <section
        ref={ref}
        className={`
          min-h-screen
          flex
          items-center
          justify-center
          relative
          overflow-hidden
          ${className}
        `}
      >
        <AnimatePresence>
          {active &&
            decorations.map((item, index) => (
              <FlowerDecoration
                key={index}
                image={item.image}
                className={item.className}
                animation={item.animation}
                duration={item.duration}
              />
            ))}
        </AnimatePresence>

        <AnimatePresence mode="sync">{active && children}</AnimatePresence>
      </section>
    );
  },
);

WeddingSection.displayName = "WeddingSection";

export default WeddingSection;
