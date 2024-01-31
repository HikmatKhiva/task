import { navLinks } from "../config";
import { Logo } from "../motion";
const Header = () => {
  return (
    <header className="py-4">
      <div className="md:circle-ellipse hidden -top-[400px] -left-[400px] "></div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="" className="relative font-aeonik font-normal">
            <Logo className="absolute -top-4 -left-7" />
            <span className="text-white text-2xl">DevOptima</span>
          </a>
          <nav className="md:block hidden">
            <ul className="flex gap-x-12">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-white font-intern opacity-70  hover:opacity-100 transition-all duration-300 font-medium"
                  >
                    <a href={link.url}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* I didn't know this Link or Button  */}
          <button
            className="font-semibold font-intern text-white md:py-4 md:px-9 rounded-[40px] hover:bg-secondary-blue-hover bg-button-color border border-primary-blue transition-all duration-300"
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
