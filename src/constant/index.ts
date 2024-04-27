import {
  automatic,
  cpu,
  efficient,
  jane,
  john,
  server,
  testimonial1,
  testimonial2,
} from "@/assets";

export const navLinks: ICustomLink[] = [
  {
    id: 1,
    title: "About us",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    path: "/",
  },
  {
    id: 3,
    title: "Why DevOptima ",
    path: "/",
  },
];

export const aboutUs: IAboutCard[] = [
  {
    id: 1,
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise.",
    image: cpu,
  },
  {
    id: 2,
    title: "Efficient operations",
    description: "Streamline processes for productivity gains.",
    image: efficient,
  },
  {
    id: 3,
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline.",
    image: server,
  },
  {
    id: 4,
    title: "Automation mastery",
    description: "Unlock full automation potential.",
    image: automatic,
  },
];

export const testimonials: ITestimonial[] = [
  {
    id: 1,
    description:
      "Thanks to DevOptima, our team can focus more on <strong class='text-white'>innovation</strong> and less on operational challenges. Their <strong class='text-white'>cloud management solutions</strong> are top-notch.",
    icon: testimonial2,
    user: {
      name: "John Smith",
      profession: "IT Director at Reflex",
      avatar: john,
    },
  },
  {
    id: 2,
    description:
      "DevOptima has been a game-changer for us. With their support, we've shifted our focus <strong class='text-white'>from operational hurdles to pushing boundaries in innovation.</strong>",
    icon: testimonial1,
    user: {
      name: "Jane Doe",
      profession: "Tech Lead at Dribble",
      avatar: jane,
    },
  },
];
