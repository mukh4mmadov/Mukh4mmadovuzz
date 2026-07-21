import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCode, FaLaptopCode } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const linkConfig = [
  {
    to: "/about",
    icon: FaUser,
    titleKey: "about",
    descKey: "aboutDesc",
    gradient: "from-violet-600/40 to-indigo-700/40",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    to: "/projects",
    icon: FaLaptopCode,
    titleKey: "projects",
    descKey: "projectsDesc",
    gradient: "from-fuchsia-600/40 to-purple-700/40",
    border: "border-fuchsia-500/30",
    iconColor: "text-fuchsia-400",
  },
  {
    to: "/skills",
    icon: FaCode,
    titleKey: "skills",
    descKey: "skillsDesc",
    gradient: "from-cyan-600/40 to-blue-700/40",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
];

function QuickLinks() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
      {linkConfig.map(({ to, icon: Icon, titleKey, descKey, gradient, border, iconColor }) => (
        <button
          key={to}
          onClick={() => navigate(to)}
          className={`group relative overflow-hidden bg-gradient-to-br ${gradient} backdrop-blur-md border ${border} rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/10`}
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
          <Icon size={28} className={`${iconColor} mb-3 relative`} />
          <h3 className="font-bold text-white relative">{t.home.quickLinks[titleKey]}</h3>
          <p className="text-sm text-gray-400 mt-1 relative">{t.home.quickLinks[descKey]}</p>
          <span className="absolute bottom-4 right-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all text-lg">
            →
          </span>
        </button>
      ))}
    </div>
  );
}

export default QuickLinks;
