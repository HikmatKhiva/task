import { Logo } from "../motion";
import { footerList } from "../config";
import { githubSvg } from "../assets";
const Footer = () => {
  return (
    <footer className="border-t border-[#172136] py-[60px]">
      <div className="container mx-auto">
        <div className="flex md:justify-between justify-center flex-wrap">
          <a href="" className="relative font-aeonik font-normal mb-5">
            <Logo className="absolute -top-4 -left-7" />
            <span className="text-white text-2xl">DevOptima</span>
          </a>
          <div className="flex gap-x-40 gap-y-10  items-start flex-wrap md:justify-start justify-center">
            <ul className="font-intern">
              <li className="text-white font-medium mb-4">Resources</li>
              {footerList.resource.map((resource) => (
                <li
                  key={resource.id}
                  className="text-grey-200 py-2 hover:text-grey-100 transition-all duration-300"
                >
                  <a href={resource.url}>{resource.title}</a>
                </li>
              ))}
            </ul>
            <ul className="font-intern">
              <li className="text-white font-medium mb-4">Community</li>
              {footerList.community.map((community) => (
                <li
                  key={community.id}
                  className="text-grey-200 py-2 hover:text-grey-100 transition-all duration-300"
                >
                  <a href={community.url} className="flex gap-[10px]">
                    <img src={community.icon} alt={community.title} />
                    <span>{community.title}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="font-intern">
              <li className="text-white font-medium mb-4">Legal</li>
              {footerList.legal.map((legal) => (
                <li
                  key={legal.id}
                  className="text-grey-200 py-2 hover:text-grey-100 transition-all duration-300"
                >
                  <a href={legal.url} className="flex gap-[10px]">
                    {legal.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="font-intern text-grey-200 leading-[150%] text-center sm:text-start">
          Devoptima 2023 © All rights reserved
        </p>
        <div className="flex justify-center mt-3">
          <a
            href="https://github.com/HikmatKhiva/task"
            className="hover:scale-110 transition-all duration-300"
          >
            <img className="w-8" src={githubSvg} alt="github icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
