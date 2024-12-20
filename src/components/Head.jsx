import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-gray-600"
          >
            Mukh4mmadov.uz
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/men haqimda"
              className="text-gray-700 hover:text-blue-500"
            >
              Men haqimda
            </Link>
            <Link to="/Loyihalar" className="text-gray-700 hover:text-blue-500">
              Loyihalar
            </Link>
            <Link to="/Skill" className="text-gray-700 hover:text-blue-500">
              Skill
            </Link>
            <Link to="/Boglanish" className="text-gray-700 hover:text-blue-500">
              Bog‘lanish
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="space-y-4 py-4 px-4">
            <Link
              to="/men haqimda"
              className="block text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Men haqimda
            </Link>
            <Link
              to="/Loyihalar"
              className="block text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Loyihalar
            </Link>
            <Link
              to="/Skill"
              className="block text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Skill
            </Link>
            <Link
              to="/Boglanish"
              className="block text-gray-700 hover:text-blue-500"
              onClick={toggleMenu}
            >
              Bog‘lanish
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
