import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden md:flex items-center gap-8 text-black font-medium capitalize">

      <Link
        to="/"
        className="hover:text-pink-600 transition duration-200"
      >
        Home
      </Link>

      <Link
        to="/about"
        className="hover:text-pink-600 transition duration-200"
      >
        About
      </Link>

      <Link
        to="/contact"
        className="hover:text-pink-600 transition duration-200"
      >
        Contact
      </Link>

      <Link
        to="/services"
        className="hover:text-pink-600 transition duration-200"
      >
        Services
      </Link>

    </div>
  );
};

export default NavLinks;