import { jane, john, testimonialBg } from "../assets";
import { Frame1, Frame2 } from "../motion/";
const Testimonial = () => {
  return (
    <section
      style={{ backgroundImage: `url(${testimonialBg})` }}
      className="bg-no-repeat bg-center bg-cover "
    >
      <div className="container mx-auto flex justify-center gap-10">
        <figure className="w-[522px] text-start">
          <Frame1 />
          <figcaption>
            <p className="text-grey-200 text-2xl">
              Thanks to DevOptima, our team can focus more on{" "}
              <span className="text-white">innovation</span> and less on
              operational challenges. Their{" "}
              <span className="text-white">cloud management solutions</span> are
              top-notch.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <img
                width={44}
                height={44}
                src={john}
                alt={"John Smith"}
                className="rounded-full w-[44px] h-[44px] object-cover"
              />
              <div className="font-intern">
                <h5 className="text-white text-lg  leading-[125%]">
                  John Smith
                </h5>
                <p className="text-[15px] text-grey-200 leading-[125%] ">
                  IT Director at Reflex
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="w-[522px] text-start">
          <Frame2 />
          <figcaption>
            <p className="text-grey-200 text-2xl">
              Thanks to DevOptima, our team can focus more on{" "}
              <span className="text-white">innovation</span> and less on
              operational challenges. Their{" "}
              <span className="text-white">cloud management solutions</span> are
              top-notch.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <img
                width={44}
                height={44}
                src={jane}
                alt={"Jane Doe"}
                className="rounded-full w-[44px] h-[44px] object-cover"
              />
              <div className="font-intern">
                <h5 className="text-white text-lg  leading-[125%]">Jane Doe</h5>
                <p className="text-[15px] text-grey-200 leading-[125%] ">
                  Tech Lead at Dribble
                </p>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
export default Testimonial;
