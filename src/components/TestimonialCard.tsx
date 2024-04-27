import Image from "next/image";
import React from "react";
const TestimonialCard = ({ testimonial }: { testimonial: ITestimonial }) => {
  return (
    <figure className="w-[522px] h-[304px] ">
      <Image
        src={testimonial.icon.src}
        width={testimonial.icon.width}
        height={testimonial.icon.height}
        className="rounded-3xl"
        alt={testimonial.user.profession}
      />
      <figcaption>
        <p
          className="text-grey-200 text-2xl leading-9  mt-5"
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
            <h6 className="text-white text-lg leading-tight">
              {testimonial.user.name}
            </h6>
            <p className="text-grey-200 text-[15px] leading-tight">
              {testimonial.user.profession}
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
