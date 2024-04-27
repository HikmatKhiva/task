import { bgTestimonial } from "@/assets";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constant";
const TestimonialSection = () => {
  return (
    <section
      className="h-[850px] w-[1920px] mx-auto mt-8 flex items-center justify-center"
      style={{
        background: `url(${bgTestimonial.src}) no-repeat center/ ${bgTestimonial.width}px ${bgTestimonial.height}px`,
      }}
    >
      <div className="flex gap-[88px]">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};
export default TestimonialSection;
