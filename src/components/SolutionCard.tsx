import { CI } from "@/assets";
import Image from "next/image";
import React from "react";

const SolutionCard = () => {
  return (
    <figure className="w-[380px] solution-card relative z-20">
      <Image src={CI} alt="" />
      <figcaption className="p-8 pt-0">
        <h3 className="text-xl text-white mb-3 leading-tight font-medium">
          Continuous Integration & Deployment
        </h3>
        <p className="leading-tight text-base text-grey-200">
          Streamline your development process with our advanced CI/CD solutions,
          ensuring faster and more reliable code deployment.
        </p>
      </figcaption>
    </figure>
  );
};

export default SolutionCard;
