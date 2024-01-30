import {
  cpu,
  progress,
  reload,
  server,
  cloud,
  github,
  testing,
  twitter,
  linkedIn,
  githubSvg,
  discussion,
} from "../assets";
export const navLinks = [
  {
    id: 1,
    title: "About Us",
    url: "#",
  },
  {
    id: 2,
    title: "Services",
    url: "#",
  },
  {
    id: 3,
    title: "Why DevOptima",
    url: "#",
  },
];

export const about = [
  {
    id: 1,
    icon: cpu,
    title: "DevOps transformation",
    description: "Reshaping businesses with DevOps expertise.",
  },
  {
    id: 2,
    icon: progress,
    title: "Efficient operations",
    description: "Streamline processes for productivity gains.",
  },
  {
    id: 3,
    icon: reload,
    title: "CI/CD implementation",
    description: "Seamless software delivery pipeline.",
  },
  {
    id: 4,
    icon: server,
    title: "Automation mastery",
    description: "Unlock full automation potential.",
  },
];
export const service = [
  {
    id: 1,
    icon: github,
    title: "Continuous Integration & Deployment",
    description:
      "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.",
  },
  {
    id: 2,
    icon: cloud,
    title: "Cloud Solutions & Infrastructure Management",
    description:
      "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.",
  },
  {
    id: 3,
    icon: testing,
    title: "Automated Testing & Quality Assurance",
    description:
      "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.",
  },
];
export const footerList = {
  resource: [
    {
      id: 1,
      title: "Docs",
      url: "",
    },
    {
      id: 2,
      title: "Release notes",
      url: "",
    },
    {
      id: 3,
      title: "Security",
      url: "",
    },
  ],
  community: [
    {
      id: 1,
      icon: twitter,
      title: "Twitter",
      url: "",
    },
    {
      id: 2,
      icon: linkedIn,
      title: "LinkedIn",
      url: "",
    },
    {
      id: 3,
      icon: githubSvg,
      title: "GitHub",
      url: "",
    },
    {
      id: 4,
      icon: discussion,
      title: "Discourse",
      url: "",
    },
  ],
  legal: [
    {
      id: 1,
      title: "Privacy policy",
      url: "",
    },
    {
      id: 2,
      title: "Terms of service",
      url: "",
    },
  ],
};
