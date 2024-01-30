export const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finished: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 6,
      ease: "easeInOut",
      type: "spring",
    },
  },
};

export const fadeAnimation = (direction, duration = 0, delay = 0) => {
  return {
    start: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
    },
    finished: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration,
        delay,
      },
    },
  };
};
