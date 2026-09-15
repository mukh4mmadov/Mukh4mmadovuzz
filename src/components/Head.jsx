import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const location = useLocation();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/projects", label: t.nav.projects },
    { to: "/skills", label: t.nav.skills },
    { to: "/contact", label: t.nav.contact },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Mukh4mmadov.uz
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(to)
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}

            <button
              onClick={toggleLang}
              className="ml-3 px-3 py-1.5 rounded-lg text-xs font-semibold border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-200 flex items-center gap-1.5"
              aria-label="Toggle language"
            >
              <span className={lang === "en" ? "text-accent-cyan" : "text-slate-500"}>
                EN
              </span>
              <span className="text-slate-600">|</span>
              <span className={lang === "uz" ? "text-accent-cyan" : "text-slate-500"}>
                UZ
              </span>
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold border border-white/10 bg-white/5 text-slate-300"
            >
              {lang === "en" ? "UZ" : "EN"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-white/5">
          <nav className="py-3 px-4 space-y-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(to)
                    ? "text-accent-cyan bg-accent-cyan/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
