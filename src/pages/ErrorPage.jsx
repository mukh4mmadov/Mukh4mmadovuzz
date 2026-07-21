import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

function ErrorPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-red-950 to-slate-900">
      <Head />

      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">404</h1>
        <p className="text-2xl text-white/90 mt-4 font-medium">{t.error.title}</p>
        <Link
          to="/"
          className="mt-8 px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
          {t.error.back}
        </Link>
      </main>

      <Footer />
    </div>
  );
}

export default ErrorPage;
