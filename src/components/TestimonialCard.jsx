const TestimonialCard = ({ testimonial }) => {
  return (
    <figure className="w-[522px]">
      <img
        src={testimonial.icon}
        alt={testimonial.description}
        className="w-[64px] h-[64px] object-cover"
      />
      <figcaption>
        <p>{testimonial.description}</p>
        <div className="">
          <img
            width={44}
            height={44}
            src={testimonial.user.image}
            alt={testimonial.user.name}
            className="rounded-full w-[44px] h-[44px] object-cover"
          />
          <div>
            <h5>{testimonial.user.name}</h5>
            <p>{testimonial.user.job}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};
export default TestimonialCard;
