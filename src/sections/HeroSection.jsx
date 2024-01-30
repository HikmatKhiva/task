import { heroBg } from "../assets";
import FormEmail from "../components/FormEmail";
import { HeroImage } from "../motion";
const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-no-repeat bg-[100%_0%] bg-[length:1800px_760px] "
    >
      <div className="container mx-auto flex items-center">
        <div className="w-[50%] gap-10">
          <h1 className="font-aeonik text-7xl mb-7 leading-none origin-left">
            Revolutionize your DevOps journey with DevOptima
          </h1>
          <p className="font-intern text-grey-200  w-[90%] leading-normal text-xl">
            Empower teams to innovate faster through streamlined development,
            efficient automated workflows, and reliable scaling.
          </p>
          <FormEmail />
        </div>
        <div className="">
          <HeroImage className="w-[656px] h-[487px] " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
