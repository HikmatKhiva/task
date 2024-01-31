const SmallSection = () => {
  return (
    <section id="small" className="relative overflow-hidden">
      <div className=" mx-auto text-center w-1/2 ">
        <h2 className="text-5xl font-aeonik">
          Ready to elevate your DevOps strategy?
        </h2>
        <p className="font-intern text-xl text-grey-200 mt-5 leading-[150%]">
          Join the multitude of companies benefiting from optimized DevOps
          practices. Contact us to discover how DevOptima can help your
          business.
        </p>
        <div className="flex justify-center gap-10 font-intern mt-10">
          <button
            type="button"
            className="py-4 px-9 bg-primary-blue hover:bg-secondary-blue transition-all duration-300 rounded-[40px] font-medium text-white"
          >
            Contact us
          </button>
          <button
            className="py-4 px-9 bg-button-color hover:bg-secondary-blue-hover transition-all duration-300 border border-primary-blue rounded-[40px] font-medium text-white"
            type="button"
          >
            Try for free
          </button>
        </div>
      </div>
      <div className="circle-ellipse top-[200px] -left-[300px]"></div>
      <div className="circle-ellipse top-[200px] -right-[300px]"></div>
    </section>
  );
};

export default SmallSection;
