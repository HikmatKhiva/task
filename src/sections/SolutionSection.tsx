import SolutionCard from "@/components/SolutionCard";
import Ellipse from "@/components/ui/Ellipse";
import React from "react";

const SolutionSection = () => {
  return (
    <section className="w-[1220px] h-[703px] mt-[152px] mx-auto">
      <h2 className="text-center text-5xl text-white mb-5">
        Innovative solutions <br /> for operational excellence
      </h2>
      <p className="text-center text-grey-200 text-xl leading-normal">
        Tailored DevOps expertise driving your business momentum. <br />
        Personalized solutions for growth and evolution.
      </p>
      <div className="grid-cols-3 grid gap-10 mt-14">
        <SolutionCard />
        <SolutionCard />
        <SolutionCard />
        <Ellipse className="w-[1220px] h-[396px] " />
      </div>
    </section>
  );
};

export default SolutionSection;
