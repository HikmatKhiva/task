import Image from "next/image";
import { hero, heroIllustrator } from "@/assets";
import Ellipse from "@/components/ui/Ellipse";
import SubmitEmail from "@/components/SubmitEmail";
const HeroSection = () => {
  return (
    <section
      className="pt-20 hero-bg  h-[763px]"
      style={{ backgroundImage: `url(${heroIllustrator.src})` }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 pt-[88px] container relative">
        <div className="hero-round-gradient" />
        <div className="col-span-1 mt-12">
          <h2 className="text-7xl hero-title mb-7 text-white leading-[112.8%]">
            Revolutionize <br /> your DevOps journey with DevOptima
          </h2>
          <p className="text-grey-200 text-xl leading-normal">
            Empower teams to innovate faster through streamlined development,
            efficient automated workflows, and reliable scaling.
          </p>
          <SubmitEmail />
        </div>
        <div className="col-span-1 relative">
          <Ellipse className="w-[716px] h-[396px]  rounded-[716px]" />
          {/* <div className=" absolute z-10 " /> */}
          <Image
            src={hero}
            width={hero.width}
            height={hero.height}
            priority
            className="absolute -right-7 z-20 -top-5"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
