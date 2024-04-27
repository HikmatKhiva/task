import { logo } from "@/assets";
import Button from "@/components/ui/Button";
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="h-20 absolute bg-transparent left-1/2 -translate-x-1/2 z-20">
      <nav className="flex justify-between items-center h-full container py-4">
        <Link href="/" className="relative z-10 " >
          <Image
            src={logo}
            decoding="async"
            className="mt-6"
            width={logo.width}
            height={logo.height}
            priority
            alt="DevOptima logo"
          />
        </Link>
        <ul className="flex items-center gap-x-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link className="font-base text-white text-lg" href={link.path}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          className="w-[157px] h-[48px] bg-primary-blue/20 py-4 px-8 font-semibold hover:bg-primary-blue/50 text-white rounded-5xl border border-primary-blue "
        >
          Get started
        </Button>
      </nav>
    </header>
  );
};

export default Header;
