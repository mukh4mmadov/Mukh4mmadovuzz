import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function ErrorPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col items-center justify-center text-center px-6">
      <div className="hero-glow opacity-50" />
      <h1 className="text-8xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent relative z-10">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-white mt-4 relative z-10">
        {t.error.title}
      </h2>
      <p className="text-slate-400 mt-2 relative z-10">{t.error.subtitle}</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-xl hover:scale-105 transition-transform relative z-10"
      >
        {t.error.back}
      </Link>
    </div>
  );
}

export default ErrorPage;
