import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const projectLinks = [
  {
    github: "https://github.com/mukh4mmadov/4-dars-vazifa111",
    demo: "https://4-dars-vazifa111.vercel.app/",
    gradient: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
  },
  {
    github: "https://github.com/mukh4mmadov/8-oy-imtixon",
    demo: "https://8-oy-imtixon-mu.vercel.app/",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "text-cyan-400",
  },
  {
    github: "https://github.com/mukh4mmadov/todo-list",
    demo: "https://todo-list-one-chi-34.vercel.app/",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
  },
];

function Projects() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">{t.projects.title}</h1>
          <p className="text-slate-400">{t.projects.subtitle}</p>
        </div>

        <div className="space-y-6">
          {t.projects.items.map((project, i) => {
            const links = projectLinks[i];
            return (
              <div
                key={project.name}
                className="glass rounded-2xl overflow-hidden hover:border-accent-cyan/20 transition-all duration-300 group"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${links.gradient}`}
                />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                        {project.name}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-4">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all text-sm"
                      >
                        <FaGithub size={16} />
                        {t.projects.viewCode}
                      </a>
                      <a
                        href={links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-all text-sm"
                      >
                        <FaExternalLinkAlt size={14} />
                        {t.projects.liveDemo}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/mukh4mmadov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
          >
            <FaGithub size={18} />
            {t.projects.moreOnGithub}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Projects;
