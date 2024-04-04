import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { link: "Aperçu", path: "home" },
    { link: "Fonctionnalités", path: "feature" },
    { link: "A propos", path: "about" },
    { link: "Tarifs", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            {/* logo */}
            <a href="/" className="text-2xl font-semibold text-primary">
              ARES
            </a>
          </div>
          {/* links */}
          <ul className="md:flex hidden space-x-12">
            {navItems.map((item) => (
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                key={item.path}
                to={item.path}
                className="block hover:text-gray-300 cursor-pointer"
              >
                {item.link}
              </Link>
            ))}
          </ul>

          {/* langage et signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden md:flex items-center hover:text-secondary"
            >
              <GrLanguage className="mr-2" />
              <span>Langues</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600">
              Inscription
            </button>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* // navItems */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map((item) => (
          <Link
            onClick={toggleMenu}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            key={item.path}
            to={item.path}
            className="block text-white text-xl hover:text-gray-300 cursor-pointer"

          >
            {item.link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
