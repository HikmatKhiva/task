import Image from "next/image";
const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  return (
    <figure className="w-[522px] h-[304px]">
      <Image
        src={testimonial.icon.src}
        width={70}
        height={70}
        className="rounded-3xl"
        alt={testimonial.user.profession}
      />
      <figcaption className="mt-3 ">
        <p
          className="text-grey-200 text-2xl leading-9 font-light  font-Inter"
          dangerouslySetInnerHTML={{ __html: testimonial.description }}
        />
        <div className="flex items-center gap-3 mt-8">
          <Image
            src={testimonial.user.avatar.src}
            width={testimonial.user.avatar.width}
            height={testimonial.user.avatar.height}
            alt={testimonial.user.name}
          />
          <div>
            <h5 className="text-white text-lg leading-[1.20] font-Inter font-light">
              {testimonial.user.name}
            </h5>
            <p className="text-grey-200 text-[15px] font-Inter font-light">
              {testimonial.user.profession}
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};
export default TestimonialCard;