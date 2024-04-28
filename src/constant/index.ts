import {
  CI,
  automatic,
  cloud,
  cpu,
  discourse,
  efficient,
  github,
  jane,
  john,
  linkedin,
  server,
  testimonial1,
  testimonial2,
  testing,
  twitter,
} from "@/assets";
// favicon
export const favicon = [
  {
    url: "/favicon/favicon-32x32",
    sizes: "32x32",
    rel: "icon",
    type: "image/png",
  },
  {
    url: "/favicon/favicon-16x16",
    sizes: "16x16",
    rel: "icon",
    type: "image/png",
  },
  {
    url: "/favicon/site.webmanifest",
    rel: "manifest",
  },
];
// Header Nav Links
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
// About Us
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
// Testimonials
export const testimonials: ITestimonial[] = [
  {
    id: 1,
    description:
      "Thanks to DevOptima, our team can focus more on <strong class='text-white font-medium'>innovation</strong> and less on operational challenges. Their <strong class='text-white font-medium'>cloud management solutions</strong> are top-notch.",
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
      "DevOptima has been a game-changer for us. With their support, we've shifted our focus <strong class='text-white font-medium'>from operational hurdles to pushing boundaries in innovation.</strong>",
    icon: testimonial1,
    user: {
      name: "Jane Doe",
      profession: "Tech Lead at Dribble",
      avatar: jane,
    },
  },
];
// Solutions
export const solutions: ISolution[] = [
  {
    id: 1,
    image: CI,
    title: "Continuous Integration & Deployment",
    description:
      "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.",
  },
  {
    id: 2,
    image: cloud,
    title: "Cloud Solutions & Infrastructure Management",
    description:
      "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.",
  },
  {
    id: 3,
    image: testing,
    title: "Automated Testing & Quality Assurance",
    description:
      "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.",
  },
];

export const footerLinks: IFooterLink[] = [
  {
    id: 1,
    title: "Resources",
    links: [
      {
        id: 1,
        title: "Docs",
        path: "/",
      },
      {
        id: 2,
        title: "Release notes",
        path: "/",
      },
      {
        id: 3,
        title: "Security",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Community",
    links: [
      {
        id: 1,
        title: "Twitter",
        icon: twitter,
        path: "/",
      },
      {
        id: 2,
        title: "LinkedIn",
        icon: linkedin,
        path: "/",
      },
      {
        id: 3,
        title: "GitHub",
        icon: github,
        path: "/",
      },
      {
        id: 4,
        title: "Discourse",
        icon: discourse,
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Legal",
    links: [
      {
        id: 1,
        title: "Privacy policy",
        path: "/",
      },
      {
        id: 2,
        title: "Terms of service",
        path: "/",
      },
    ],
  },
];

