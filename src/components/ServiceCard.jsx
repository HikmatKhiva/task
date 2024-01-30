import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { fadeAnimation } from "../motion/variants";
const ServiceCard = ({ service, index }) => {
  return (
    <motion.figure
      variants={fadeAnimation("top", 3, index * 0.3)}
      initial="start"
      animate="finished"
      className="service-card w-[390px]"
    >
      <img src={service.icon} alt="" />
      <figcaption className="p-5 px-8 pb-8">
        <h4 className="text-white text-xl font-intern font-medium mb-3">
          {service.title}
        </h4>
        <p className="text-grey-200 font-intern leading-[137%]">
          {service.description}
        </p>
      </figcaption>
    </motion.figure>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
  index: PropTypes.number,
};
export default ServiceCard;
