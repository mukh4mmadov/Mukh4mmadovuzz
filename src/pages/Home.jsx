import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useLiveAge } from "../hooks/useLiveAge";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const age = useLiveAge();

  const stats = [
    { value: age.years, label: t.home.stats.age, suffix: "+" },
    { value: "6.0", label: t.home.stats.ielts },
    { value: "3", label: t.home.stats.projects, suffix: "+" },
    { value: "∞", label: t.home.stats.learning },
  ];

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-grid" />

      <Header />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
          {t.home.role}
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center text-white mb-4 animate-fade-in-up">
          {t.home.greeting}{" "}
          <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald bg-clip-text text-transparent">
            {t.home.name}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 text-center max-w-2xl mb-10 animate-fade-in-up animation-delay-100">
          {t.home.subtitle}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up animation-delay-200">
          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold rounded-xl shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:scale-105 transition-all duration-300"
          >
            {t.home.cta}
          </button>
          <button
            onClick={() => navigate("/skills")}
            className="px-8 py-3 border border-white/10 text-slate-300 font-semibold rounded-xl hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            {t.home.ctaSkills}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl animate-fade-in-up animation-delay-300">
          {stats.map(({ value, label, suffix }) => (
            <div
              key={label}
              className="glass rounded-2xl p-5 text-center hover:border-accent-cyan/20 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white">
                {value}
                {suffix && (
                  <span className="text-accent-cyan text-xl">{suffix}</span>
                )}
              </div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 mt-12 animate-fade-in-up animation-delay-400">
          {[
            { href: "https://github.com/mukh4mmadov", icon: FaGithub },
            {
              href: "https://www.linkedin.com/in/ozodbek-muhammadov",
              icon: FaLinkedin,
            },
            { href: "https://t.me/mukh4mmadov", icon: FaTelegram },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
