import { navLinks } from "../config";
import { Logo } from "../motion";
const Header = () => {
  return (
    <header className="absolute z-50 w-full h-20">
      <div className="md:circle-ellipse hidden -top-[400px] -left-[400px] "></div>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <a href="" className="relative font-aeonik font-normal text-white">
            <Logo className="absolute -top-4 -left-7" />
          </a>
          <nav className="md:block hidden">
            <ul className="flex gap-x-12">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-white font-intern opacity-70 hover:opacity-100 -tracking-[.02em] text-base transition-all duration-300 font-medium"
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* I didn't know this Link or Button  */}
          <button
            className="font-semibold h-12 font-intern text-white whitespace-nowrap -tracking-[.02em] text-base	leading-[100%] md:px-9 rounded-[40px] hover:bg-secondary-blue-hover bg-button-color/20 border border-primary-blue transition-all duration-300"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
