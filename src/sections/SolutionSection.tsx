import SolutionCard from "@/components/SolutionCard";
import Ellipse from "@/components/ui/Ellipse";
import { solutions } from "@/constant";
const SolutionSection = () => {
  return (
    <section className="w-[1220px] h-[703px] mt-[152px] mx-auto">
      <h2 className="text-center text-5xl text-white mb-5 font-aeonik font-normal leading-[1.12]">
        Innovative solutions <br /> for operational excellence
      </h2>
      <p className="text-center text-grey-200 text-xl font-Inter font-light leading-normal">
        Tailored DevOps expertise driving your business momentum. <br />
        Personalized solutions for growth and evolution.
      </p>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 mt-14  relative">
        {solutions.map((solution: ISolution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
        <Ellipse className="w-[1220px] h-[396px] rounded-[1220px] blur-[300px]" />
      </div>
    </section>
  );
};
export default SolutionSection;