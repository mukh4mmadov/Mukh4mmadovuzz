import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import HeroBackground from "../components/HeroBackground";
import TypewriterStack from "../components/TypewriterStack";
import QuickLinks from "../components/QuickLinks";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 relative">
      <HeroBackground />
      <Head />

      <main className="relative flex-1 flex flex-col items-center justify-center text-white pt-24 pb-16 px-6">
        <div className="max-w-3xl w-full text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 backdrop-blur border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {t.home.status}
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-indigo-300">
              {t.home.greeting}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto leading-relaxed">
            {t.home.subtitle}
          </p>

          <TypewriterStack />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => navigate("/projects")}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full shadow-lg shadow-violet-500/25 hover:scale-105 hover:shadow-violet-500/40 transition-all"
            >
              {t.home.cta}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white/5 backdrop-blur border border-white/15 text-gray-200 font-bold rounded-full hover:bg-white/10 hover:border-white/25 transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          <QuickLinks />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
