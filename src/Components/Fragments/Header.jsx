import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="bg-black text-white p-10 flex justify-between">
        <div className="flex flex-col ">
          <h1 className="pb-10">youngbloomstudio</h1>
          <span>media creative</span>
        </div>
        <div className="flex flex-col ">
          <span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mb-3 block ${
                  isActive
                    ? "text-white-500 hover:underline "
                    : "text-blue-500 hover:underline"
                }`
              }
            >
              ABOUT
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `mb-3 block ${
                  isActive
                    ? "text-white-500 hover:underline "
                    : "text-blue-500 hover:underline"
                }`
              }
            >
              GALLERY
            </NavLink>
          </span>
          <span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white-500 hover:underline "
                  : "text-blue-500 hover:underline"
              }
            >
              CONTACT US
            </NavLink>
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
