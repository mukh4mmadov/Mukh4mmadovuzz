import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import AgeCounter from "../components/AgeCounter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const cardStyles = [
  "border-l-4 border-l-blue-500 bg-slate-800/80 border border-white/5",
  "border-l-4 border-l-purple-500 bg-slate-800/80 border border-white/5",
  "border-l-4 border-l-pink-500 bg-slate-800/80 border border-white/5",
  "border-l-4 border-l-orange-500 bg-slate-800/80 border border-white/5",
  "border-l-4 border-l-emerald-500 bg-slate-800/80 border border-white/5",
];

const titleColors = [
  "text-blue-400",
  "text-purple-400",
  "text-pink-400",
  "text-orange-400",
  "text-emerald-400",
];

function About() {
  const { t } = useLanguage();

  const sections = [
    { title: t.about.experienceTitle, content: t.about.experience },
    { title: t.about.skillsTitle, list: t.about.skills },
    { title: t.about.interestsTitle, list: t.about.interests },
    { title: t.about.certificatesTitle, content: t.about.certificates },
    { title: t.about.goalsTitle, content: t.about.goals },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
      <Head />

      <main className="flex-1 max-w-4xl mx-auto w-full pt-24 pb-12 px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">
          {t.nav.about}
        </h1>

        <div className="space-y-5">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className={`p-6 rounded-xl shadow-lg ${cardStyles[i % cardStyles.length]}`}
            >
              <h2 className={`text-xl font-bold mb-3 ${titleColors[i % titleColors.length]}`}>
                {section.title}
              </h2>

              {section.content && (
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              )}

              {section.list && (
                <ul className="text-gray-300 space-y-2">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="p-6 rounded-xl shadow-lg bg-slate-800/80 border border-violet-500/20 border-l-4 border-l-violet-500">
            <h2 className="text-xl font-bold text-violet-400 mb-2">
              {t.about.personalTitle}
            </h2>
            <p className="text-gray-300 mb-1">{t.about.birthDate}</p>
            <p className="text-gray-300 mb-4 flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
                {t.about.ielts}
              </span>
            </p>
            <AgeCounter light />
          </div>

          <div className="p-6 rounded-xl shadow-lg bg-slate-800/80 border border-white/5 text-center">
            <h2 className="text-xl font-bold text-indigo-400 mb-4">
              {t.about.contactTitle}
            </h2>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/mukh4mmadov"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 text-white hover:scale-110 transition-transform border border-white/10"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ozodbek-muhammadov"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-700 text-white hover:scale-110 transition-transform"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
