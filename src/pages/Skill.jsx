import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useLanguage } from "../context/LanguageContext";

const skillData = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500", level: 90 },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500", level: 85 },
  { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400", level: 80 },
  { name: "React", icon: FaReact, color: "text-cyan-400", level: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", level: 85 },
  { name: "Git", icon: FaGitAlt, color: "text-red-400", level: 70 },
];

function Skill() {
  const { t } = useLanguage();

  const getLevelLabel = (level) => {
    if (level >= 85) return t.skills.levels.advanced;
    if (level >= 70) return t.skills.levels.intermediate;
    return t.skills.levels.learning;
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">{t.skills.title}</h1>
          <p className="text-slate-400">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillData.map(({ name, icon: Icon, color, level }) => (
            <div
              key={name}
              className="glass rounded-2xl p-6 hover:border-accent-cyan/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon size={32} className={color} />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{name}</h3>
                  <span className="text-xs text-slate-500">{getLevelLabel(level)}</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-1000"
                  style={{ width: `${level}%` }}
                />
              </div>
              <p className="text-right text-xs text-slate-500 mt-1">{level}%</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Skill;
