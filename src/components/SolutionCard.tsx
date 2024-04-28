import Image from "next/image";
const SolutionCard = ({ solution }: { solution: ISolution }) => {
  return (
    <figure className="w-[380px] h-[459px] solution-card relative z-20 flex flex-col justify-between">
      <Image
        width={380}
        src={solution.image.src}
        height={277}
        className="rounded-2xl"
        alt={solution.title}
      />
      <figcaption className="p-8 pt-0 h-[180px] flex flex-col justify-center ">
        <h3 className="text-xl font-Inter  text-white mb-3 leading-tight font-medium">
          {solution.title}
        </h3>
        <p className="leading-[1.35] text-base font-Inter font-light text-grey-200">
          {solution.description}
        </p>
      </figcaption>
    </figure>
  );
};
export default SolutionCard;