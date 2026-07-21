import React from "react";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-gray-300 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {year} Mukh4mmadov.uz — {t.footer.rights}
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/mukh4mmadov"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ozodbek-muhammadov"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://t.me/mukh4mmadov"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <FaTelegram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
