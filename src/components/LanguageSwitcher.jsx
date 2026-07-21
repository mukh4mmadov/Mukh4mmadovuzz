import React from "react";
import { useLanguage } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full overflow-hidden text-sm font-bold shadow-md border border-white/10">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1.5 transition-colors ${
          language === "en"
            ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
            : "bg-slate-800 text-gray-400 hover:bg-slate-700"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("uz")}
        className={`px-3 py-1.5 transition-colors ${
          language === "uz"
            ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
            : "bg-slate-800 text-gray-400 hover:bg-slate-700"
        }`}
        aria-label="Switch to Uzbek"
      >
        UZ
      </button>
    </div>
  );
}

export default LanguageSwitcher;
