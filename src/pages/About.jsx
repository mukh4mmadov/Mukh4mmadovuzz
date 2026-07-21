import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useLiveAge } from "../hooks/useLiveAge";

function About() {
  const { t } = useLanguage();
  const age = useLiveAge();

  const sections = [
    { title: t.about.experience.title, content: t.about.experience.text },
    {
      title: t.about.skills.title,
      list: t.about.skills.items,
    },
    {
      title: t.about.interests.title,
      list: t.about.interests.items,
    },
    { title: t.about.goals.title, content: t.about.goals.text },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">{t.about.title}</h1>
          <p className="text-slate-400">{t.about.subtitle}</p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 mb-6 border border-accent-cyan/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">
                {t.about.personal.title}
              </h2>
              <p className="text-slate-400 text-sm">{t.about.personal.birthdate}</p>
              <p className="text-slate-400 text-sm">{t.about.personal.location}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-accent-cyan tabular-nums">
                {age.years}
                <span className="text-lg text-slate-400 ml-1">
                  y {age.months}m {age.days}d
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {t.about.personal.age} · {age.totalDays.toLocaleString()} days
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="glass rounded-2xl p-6 border border-accent-purple/10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple font-bold text-sm">
                EN
              </div>
              <div>
                <h3 className="font-semibold text-white">{t.about.certificates.ielts}</h3>
                <p className="text-xs text-slate-500">International English Language Testing</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              {["Listening", "Reading", "Writing", "Speaking"].map((skill) => (
                <div
                  key={skill}
                  className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden"
                >
                  <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-accent-purple to-accent-cyan" />
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 border border-accent-emerald/10">
            <h3 className="font-semibold text-white mb-2">
              {t.about.certificates.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.about.certificates.text}
            </p>
          </div>
        </div>

        {sections.map(({ title, content, list }) => (
          <div key={title} className="glass rounded-2xl p-6 mb-4">
            <h2 className="text-lg font-semibold text-accent-cyan mb-3">{title}</h2>
            {content && (
              <p className="text-slate-400 leading-relaxed">{content}</p>
            )}
            {list && (
              <ul className="space-y-2">
                {list.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="glass rounded-2xl p-6 text-center">
          <h2 className="text-lg font-semibold text-white mb-4">{t.about.connect}</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/mukh4mmadov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ozodbek-muhammadov"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
