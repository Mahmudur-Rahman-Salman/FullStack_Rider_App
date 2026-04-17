import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <h2 className="text-xl font-bold text-white">Hero IO</h2>
              <p className="mt-3 text-sm text-gray-400">
                Discover, explore, and install the best apps in one place.
                Simple, fast, and user-focused.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/apps" className="hover:text-white">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link to="/installations" className="hover:text-white">
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social + GitHub */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase">
                Connect
              </h3>

              <div className="flex gap-4 mt-4 text-xl">
                <Link to="#" className="hover:text-white">
                  <FaFacebook />
                </Link>
                <Link to="#" className="hover:text-white">
                  <FaTwitter />
                </Link>
                <Link to="#" className="hover:text-white">
                  <FaLinkedin />
                </Link>
                <Link
                  to="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <FaGithub />
                </Link>
              </div>

              <Link
                to="https://github.com/Mahmudur-Rahman-Salman"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-[#7E45EA] text-white text-sm rounded hover:opacity-90"
              >
                Contribute
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Hero IO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
