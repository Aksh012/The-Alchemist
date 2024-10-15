import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-12 px-10 shadow-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Left Section: Logo and Description */}
        <div className="mb-8 md:mb-0 md:w-1/3 flex items-center">
          <img
            src="/images/logo-color.png"
            alt="Ayurb Logo"
            className="h-20 w-[50%] mb-4 rounded-full bg-white p-2"
          />
        </div>

        {/* Right Section: Two columns of links */}
        <div className="md:w-2/3 flex flex-wrap">
          {/* First Column */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/health-wellness" className="hover:underline">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="hover:underline">
                  Ayurvedic Quiz
                </Link>
              </li>
              <li>
                <Link to="/ar" className="hover:underline">
                  AR Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Ayurb
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-8 pt-8 border-t border-white/20">
        <p className="text-sm">
          © {new Date().getFullYear()} Ayurb. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
