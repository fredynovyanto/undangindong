import { createGoogleCalendarUrl } from "../utils/googleCalendar";
import { motion } from "motion/react";

function SaveTheDateButton({
  title,
  description,
  location,
  startDate,
  endDate,
  children = "Save The Date",
  className = "",
}) {
  const handleClick = () => {
    const url = createGoogleCalendarUrl({
      title,
      description,
      location,
      startDate,
      endDate,
    });

    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      className={`
        rounded-lg
                        text-[#faefeb]
                        bg-[#664125]
                        px-5
                        py-2
                        mt-5
        transition
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

export default SaveTheDateButton;
