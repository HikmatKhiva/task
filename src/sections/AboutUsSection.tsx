import { frame } from "@/assets";
import AboutCard from "@/components/AboutCard";
import Ellipse from "@/components/ui/Ellipse";
import { aboutUs } from "@/constant";
import Image from "next/image";
import React from "react";
const AboutUsSection = () => {
  return (
    <section className="pt-[79px]">
      <div className="w-[1530px] h-[619px] min-[2000px]:mx-auto mr-auto flex items-center gap-[86px]">
        <div className="relative">
          <Image
            src={frame.src}
            alt="frame"
            width={frame.width}
            height={frame.height}
            priority
          />
          <Ellipse className="w-[300px] h-[300px] -top-[50px] -right-[50px] bg-[#141C484D]" />
        </div>
        <div className="w-[630px]">
          <h2 className="text-5xl text-white -tracking-[%1] mb-5 font-aeonik font-normal">
            What is DevOptima?
          </h2>
          <p className="text-grey-200 text-xl font-Inter font-light">
            At DevOptima, we are a team of passionate DevOps experts <br />{" "}
            committed to transforming the way businesses approach software
            development and operations.
          </p>
          <div className="grid grid-cols-2 gap-y-10 gap-x-20 mt-14">
            {aboutUs.map((about: IAboutCard) => (
              <AboutCard key={about.id} about={about} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
