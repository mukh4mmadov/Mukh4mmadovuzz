import React from "react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-6 text-center text-sm text-slate-500">
      <p>
        &copy; {year} Ozodbek Mukh4mmadov. {t.footer.rights}
      </p>
    </footer>
  );
}

export default Footer;
