import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const skillConfig = [
  {
    icon: FaHtml5,
    name: "HTML",
    descKey: "html",
    level: 90,
    card: "from-orange-900/80 to-red-950/80",
    bar: "from-orange-500 to-red-500",
    border: "border-orange-500/20",
  },
  {
    icon: FaCss3Alt,
    name: "CSS",
    descKey: "css",
    level: 85,
    card: "from-blue-900/80 to-indigo-950/80",
    bar: "from-blue-500 to-indigo-500",
    border: "border-blue-500/20",
  },
  {
    icon: FaJsSquare,
    name: "JavaScript",
    descKey: "js",
    level: 80,
    card: "from-yellow-900/80 to-amber-950/80",
    bar: "from-yellow-500 to-amber-500",
    border: "border-yellow-500/20",
  },
  {
    icon: FaReact,
    name: "React",
    descKey: "react",
    level: 75,
    card: "from-cyan-900/80 to-blue-950/80",
    bar: "from-cyan-500 to-blue-500",
    border: "border-cyan-500/20",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    descKey: "tailwind",
    level: 85,
    card: "from-teal-900/80 to-emerald-950/80",
    bar: "from-teal-500 to-emerald-500",
    border: "border-teal-500/20",
  },
];

function Skill() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
      <Head />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-white text-center mb-12">
            {t.skills.title}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillConfig.map(({ icon: Icon, name, descKey, level, card, bar, border }) => (
              <div
                key={name}
                className={`bg-gradient-to-br ${card} border ${border} p-6 rounded-2xl shadow-xl text-white hover:scale-105 transition-transform backdrop-blur-sm`}
              >
                <Icon size={48} className="mx-auto drop-shadow" />
                <h3 className="mt-4 font-bold text-center text-xl">{name}</h3>
                <p className="text-gray-400 text-center text-sm mt-1">
                  {t.skills[descKey]}
                </p>
                <div className="mt-4 h-2.5 bg-black/40 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${bar} rounded-full`}
                    style={{ width: `${level}%` }}
                  />
                </div>
                <p className="text-center text-sm font-mono mt-2 text-gray-300">
                  {level}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Skill;
