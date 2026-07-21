import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/skills", label: t.nav.skills },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="bg-slate-950/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mukh4mmadov.uz
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-1.5 rounded-full text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 transition-all font-medium text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-violet-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur shadow-lg border-t border-white/10">
          <nav className="space-y-1 py-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 px-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-600 transition-all font-medium"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
