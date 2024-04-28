import Button from "@/components/ui/Button";
const CTASection = () => {
  return (
    <section className="mt-8 w-[1530px] mx-auto relative">
      <div className="w-[900px]  h-[222px] mx-auto">
        <div className="text-center text-white">
          <h2 className="text-5xl leading-[1.12] hero-title font-aeonik font-normal">
            Ready to elevate your DevOps strategy?
          </h2>
          <p className="text-grey-200 text-xl leading-normal pt-5 px-[60px] font-Inter font-light">
            Join the multitude of companies benefiting from optimized DevOps
            practices. Contact us to discover how DevOptima can help your
            business.
          </p>
        </div>
        <div className="flex justify-center gap-[18px] mt-10">
          <Button className="w-[157px] leading-none h-[48px] rounded-5xl text-white hover:bg-secondary-blue">
            Contact us
          </Button>
          <Button className="w-[157px] leading-none h-[48px] rounded-5xl text-white bg-primary-blue/20 border border-primary-blue hover:bg-primary-blue/50">
            Try for free
          </Button>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
