import { NavLink } from "react-router-dom";
import { Icon } from "../Elements/Icon";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk membuka/tutup menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className=" fixed top-0 left-0 w-full z-50 bg-black text-white p-8 flex justify-between pb-1">
        <div className="flex justify-between items-center relative  py-4">
          <div className="absolute left-10 top-4">
            <Icon.Buttom />
          </div>
          <div className="absolute left-5 top-2">
            <Icon.Up />
          </div>
          <h1 className="pb-2 absolute top-6">
            <span className="text-primary">youngbloom</span>studio
          </h1>
          <span className="mt-8">media creative</span>
        </div>

        <div className="flex flex-col mt-6 ">
          {/* Hamburger Button */}
          <button
            className={`lg:hidden focus:outline-none ${
              isOpen ? "hamburger-active" : ""
            }`}
            onClick={toggleMenu}
          >
            <span
              className="block w-8 h-1 bg-white my-1 transition-transform duration-300 transform origin-center"
              style={{
                transform: isOpen
                  ? "rotate(45deg) translateY(10px)"
                  : "rotate(0)",
              }}
            ></span>
            <span
              className={`block w-8 h-1 bg-white my-1 transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className="block w-8 h-1 bg-white my-1 transition-transform duration-300 transform origin-center"
              style={{
                transform: isOpen
                  ? "rotate(-45deg) translateY(-10px)"
                  : "rotate(0)",
              }}
            ></span>
          </button>

          {/* Navigation Menu */}
          <nav
            className={`absolute top-full left-0 w-full bg-black transition-all duration-300 shadow-lg drop-shadow-[0_4px_6px_rgba(226,232,240,0.1)] rounded-b-2xl   ${
              isOpen ? "block" : "hidden"
            } lg:block lg:static lg:w-auto lg:bg-transparent`}
          >
            <ul className="flex flex-col items-center space-y-4 p-4 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0">
              <li>
                <a
                  href="#about"
                  className="text-white text-lg hover:text-gray-400 p-5"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white text-lg hover:text-gray-400 p-5"
                >
                  Postingan
                </a>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="text-white text-lg
                  hover:text-gray-400 p-5"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
