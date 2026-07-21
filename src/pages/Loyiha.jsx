import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { FaGithub, FaLink } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import Loyiha1 from "../assets/loyiha1.jpg";
import Loyiha2 from "../assets/loyiha2.jpg";
import Loyiha3 from "../assets/loyiha3.jpg";

const projects = [
  {
    titleKey: "onlineStoreTitle",
    descKey: "onlineStoreDesc",
    image: Loyiha1,
    alt: "Online Store",
    github: "https://github.com/mukh4mmadov/4-dars-vazifa111",
    demo: "https://4-dars-vazifa111.vercel.app/",
    accent: "from-rose-700 to-orange-800",
  },
  {
    titleKey: "cryptoTitle",
    descKey: "cryptoDesc",
    image: Loyiha2,
    alt: "Cryptocurrency Dashboard",
    github: "https://github.com/mukh4mmadov/8-oy-imtixon",
    demo: "https://8-oy-imtixon-mu.vercel.app/",
    accent: "from-violet-700 to-purple-800",
  },
  {
    titleKey: "todoTitle",
    descKey: "todoDesc",
    image: Loyiha3,
    alt: "Todo List",
    github: "https://github.com/mukh4mmadov/todo-list",
    demo: "https://todo-list-one-chi-34.vercel.app/",
    accent: "from-cyan-700 to-blue-800",
  },
];

function Loyiha() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900">
      <Head />

      <main className="flex-1 max-w-6xl mx-auto w-full pt-24 pb-12 px-4 sm:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">
          {t.nav.projects}
        </h1>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.titleKey}
              className="bg-slate-800/80 border border-white/5 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-white/10 transition-all"
            >
              <div className={`bg-gradient-to-r ${project.accent} p-6 text-white`}>
                <h2 className="text-2xl font-bold">{t.projects[project.titleKey]}</h2>
                <p className="mt-2 text-white/80 leading-relaxed">
                  {t.projects[project.descKey]}
                </p>
              </div>

              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-56 sm:h-72 object-cover opacity-90"
              />

              <div className="flex justify-between items-center p-6 bg-slate-900/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white font-semibold transition-colors"
                >
                  <FaGithub size={20} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accent} text-white rounded-full font-semibold hover:opacity-90 transition-opacity`}
                >
                  <FaLink size={16} /> {t.projects.liveDemo}
                </a>
              </div>
            </article>
          ))}

          <div className="bg-slate-800/80 border border-white/5 p-8 rounded-2xl shadow-xl text-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {t.projects.githubNote}
            </h2>
            <a
              href="https://github.com/mukh4mmadov"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:scale-105 transition-transform border border-white/10"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Loyiha;
