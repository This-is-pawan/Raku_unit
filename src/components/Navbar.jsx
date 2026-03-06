import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiTowTruck } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-yellow-300 shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl cursor-pointer">
          <p className="text-pink-600">Raku</p>
          <GiTowTruck className="text-3xl text-black" />
          <span className="bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <Link
            className="hidden md:block bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
            to="/register"
          >
            Signup / Signin
          </Link>

          {/* Mobile Menu Button */}
          <FaBars
            className="text-xl cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-xl font-bold mb-6">Menu</h2>

        <ul className="space-y-4 capitalize">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link
              to="/register"
              className="text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Signup / Signin
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;