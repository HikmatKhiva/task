import { motion } from "framer-motion";
import { svgVariants } from "../variants";
const Error = () => {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1321317536">
        <circle id="Ellipse 2962" cx="22" cy="22" r="22" fill="#BE6AA7" />
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="finished"
          id="Vector 1495"
          d="M29 15L15 29"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="finished"
          id="Vector 1496"
          d="M15 15L29 29"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </motion.svg>
  );
};

export default Error;
