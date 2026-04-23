import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import { IoLogIn } from "react-icons/io5";
import useAuth from "./../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-[#7E45EA] font-semibold border-b-2 border-[#7E45EA]"
      : "hover:text-[#7E45EA]";

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Logout successful, you can perform any additional actions here if needed
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };
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
                    <NavLink to="/coverage" className={navLinkStyle}>
                      Coverage
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <Logo></Logo>
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
                  <NavLink to="/coverage" className={navLinkStyle}>
                    Coverage
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-end">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-primary bg-[#7E45EA] btn-sm flex items-center gap-2 justify-center"
                >
                  <IoLogIn className="rounded  text-lg" />
                  <span className="text-lg">Log Out</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-primary bg-[#7E45EA] btn-sm flex items-center gap-2 justify-center"
                >
                  <IoLogIn className="rounded  text-lg" />
                  <span className="text-lg">Sign In</span>
                </Link>
              )}
            </div>

             <Link
                  to="/beARider"
                  className="btn btn-primary bg-[rgb(223,109,8)] btn-sm flex items-center gap-2 justify-center ml-4 outline-none border-none"
                >
                  <IoLogIn className="rounded  text-lg" />
                  <span className="text-lg">Be a Rider</span>
                </Link> 
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
