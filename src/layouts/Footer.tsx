import { logo } from "@/assets";
import Ellipse from "@/components/ui/Ellipse";
import { footerLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="2xl:block hidden max-h-[296px]">
      {/* Footer Top */}
      <div className="relative z-10">
        <Ellipse className="w-[600px] h-[600px] bg-[#141C4899] left-[0px] rounded-[800px] -top-[300px] blur-[300px] -translate-x-[300px] " />
        <Ellipse className="w-[600px] h-[600px] bg-[#141C4899] right-[0px] rounded-[600px] -top-[300px] blur-[300px] translate-x-[300px] " />
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-[#172136] mt-40 pt-12 pb-[51px] relative z-20 bg-primary-black">
        <div className="container ">
          <div className="flex flex-wrap gap-y-10 justify-between items-start">
            <Link href={"/"}>
              <Image
                src={logo.src}
                width={144}
                height={40}
                alt="DevOptima footer logo"
              />
            </Link>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[176px] ">
              {footerLinks.map((item: IFooterLink) => (
                <ul key={item.id} className="min-w-[130px]">
                  <li className="text-white mb-4 font-Inter font-medium">
                    {item.title}
                  </li>
                  {item.links.map((link) => (
                    <li
                      className="mb-3 flex items-center gap-2 hover:cursor-pointer hover:text-grey-100 hover:font-medium font-light text-grey-200"
                      key={link.id}
                    >
                      {link.icon ? (
                        <Image
                          src={link.icon.src}
                          width={16}
                          height={16}
                          priority
                          alt={`${link.title} icon`}
                        />
                      ) : null}
                      <Link
                        className="font-Inter leading-normal transition-all duration-300"
                        href={link.path}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <p className="text-grey-200 text-sm font-Inter font-light inline-block leading-normal">
            Devoptima 2024 © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
