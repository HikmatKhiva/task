import { heroBg, heroBgImage } from "../assets";
import FormEmail from "../components/FormEmail";
const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
      className="bg-no-repeat bg-[100%_0%] bg-[length:1799px_760px] "
    >
      <div className="container mx-auto relative flex items-center gap-10 justify-between pt-[88px]">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[#141C4899] blur-[200px] -left-[400px] -top-[400px]"></div>
        <div className="w-[calc(50%_-_20px)] pt-12">
          <h1 className="font-aeonik text-7xl mb-7 leading-[112.5%] origin-left tracking-[-0.72px]">
            Revolutionize <br /> your DevOps journey with DevOptima
          </h1>
          <p className="text-grey-200 text-xl leading-normal font-light -tracking-[0.4px] pt-0 pb-9 font-intern">
            Empower teams to innovate faster through streamlined development,
            <br />
            efficient automated workflows, and reliable scaling.
          </p>
          <FormEmail />
        </div>
        <div className="relative ">
          <div className="w-[716px] h-[396px] top-[100px] left-0 bg-[#141C4899] blur-[200px] absolute"></div>
          <img src={heroBgImage} alt="hero image " className="translate-x-5" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
