import { aboutImage } from "../assets";
import { motion } from "framer-motion";
import { fadeAnimation } from "../motion/variants";
import { about } from "../config";
import AboutCard from "../components/AboutCard";
const AboutSection = () => {
  return (
    <section>
      <div className="container mr-auto flex gap-x-20 3xl:mx-auto">
        <div className="relative">
          <div className="small-circle__ellipse"></div>
          <motion.img
            variants={fadeAnimation("right", 2)}
            initial="start"
            animate="finished"
            width={1000}
            height={619}
            src={aboutImage}
            alt="about image"
          />
        </div>
        <motion.div
          variants={fadeAnimation("right", 3)}
          initial="start"
          animate="finished"
          className="w-1/2"
        >
          <h2 className="font-aeonik text-white text-5xl font-normal">
            What is DevOptima?
          </h2>
          <p className="font-intern text-xl text-grey-200 leading-[150%] mt-5">
            At DevOptima, we are a team of passionate DevOps experts committed
            to transforming the way businesses approach software development and
            operations.
          </p>
          <div className="flex flex-wrap pt-10 gap-10">
            {about.map((item, index) => (
              <AboutCard key={item.id} about={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
