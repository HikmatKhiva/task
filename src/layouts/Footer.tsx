import { logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="border-t border-[#172136] mt-40 pt-12 pb-[51px] relative z-20 bg-black">
      <div className="container ">
        <div className="flex justify-between items-start">
          <Link href={"/"}>
            <Image src={logo.src} width={144} height={40} alt="" />
          </Link>
          <div className="grid grid-cols-3 gap-[176px]">
            <ul>
              <li className="text-white font-medium mb-4">Resources</li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Docs
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Release notes
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Security
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-white font-medium mb-4">Community</li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Docs
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Release notes
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Security
                </Link>
              </li>
            </ul>
            <ul>
              <li className="text-white font-medium mb-4">Legal</li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Privacy policy
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  className="text-grey-200 leading-snug hover:text-grey-100 transition-all duration-300 font-medium"
                  href="/"
                >
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-grey-200 text-sm leading-normal">Devoptima 2024 © All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
