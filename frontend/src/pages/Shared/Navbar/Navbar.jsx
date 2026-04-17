import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#7E45EA] font-semibold border-b-2 border-[#7E45EA]"
      : "hover:text-[#7E45EA]";
  return (
    <>
      <header className=" text-black shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="navbar">
            {/* LEFT: Logo + Mobile Menu */}
            <div className="navbar-start">
              {/* Mobile Dropdown */}
              <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  ☰
                </label>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
                >
                  <li>
                    <NavLink to="/" className={navLinkStyle}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/apps" className={navLinkStyle}>
                      Apps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/intallation" className={navLinkStyle}>
                      Installation
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <Link to="/" className="text-xl font-bold ml-2">
                <span className="text-amber-500">Hero</span> IO
              </Link>
            </div>

            {/* CENTER: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-6 font-medium">
                <li>
                  <NavLink to="/" className={navLinkStyle}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apps" className={navLinkStyle}>
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/intallation" className={navLinkStyle}>
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* RIGHT: GitHub Button */}
            <div className="navbar-end">
              {/* <a
                href="https://github.com/Mahmudur-Rahman-Salman"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary bg-[#7E45EA] btn-sm"
              >
                <FaGithub className="rounded text-black" />
                <span>Contribute</span>
              </a> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
