import { motion } from "framer-motion";
import { svgVariants } from "../variants";
const Success = () => {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 1321317535">
        <circle id="Ellipse 2962" cx="22" cy="22" r="22" fill="#4DB29A" />
        <motion.path
          variants={svgVariants}
          initial="start"
          animate="finished"
          id="Vector 862"
          d="M12.9644 22.9361L18.8945 28.7139L30.9644 15.7139"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </motion.svg>
  );
};
export default Success;
