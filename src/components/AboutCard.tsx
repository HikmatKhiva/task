import Image from "next/image";
const AboutCard = ({ about }: { about: IAboutCard }) => {
  return (
    <figure className="w-[242px]">
      <div className="w-[60px] h-[60px] relative">
        <Image
          width={about.image.width}
          height={about.image.height}
          className="absolute  -left-3"
          src={about.image.src}
          alt="test"
        />
      </div>
      <figcaption className="mt-[14px]">
        <h3 className="text-xl font-Inter font-medium leading-tight text-white mb-2">{about.title}</h3>
        <p className="text-base text-grey-200 font-Inter font-light">{about.description}</p>
      </figcaption>
    </figure>
  );
};
export default AboutCard;