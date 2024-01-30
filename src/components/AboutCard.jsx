import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeAnimation } from "../motion/variants";
const AboutCard = ({ about, index }) => {
  return (
    <motion.figure
      variants={fadeAnimation("right", 4, 0.5 * index)}
      initial="start"
      animate="finished"
      className="w-[calc(50%_-_40px)] "
    >
      <div className="w-9 h-9 rounded-lg about-card flex justify-center items-center mb-2">
        <img src={about.icon} alt={about.title} />
      </div>
      <figcaption>
        <h3 className="text-white font-intern text-xl font-medium mb-2">
          {about.title}
        </h3>
        <p className="text-grey-200 font-intern">{about.description}</p>
      </figcaption>
    </motion.figure>
  );
};
AboutCard.propTypes = {
  about: PropTypes.object,
  index: PropTypes.number,
};
export default AboutCard;
