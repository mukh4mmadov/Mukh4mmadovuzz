import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import {
  FaGithub,
  FaTelegram,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const contacts = [
  {
    href: "tel:+998999151260",
    icon: FaPhone,
    labelKey: "phone",
    value: "+998 99 915 12 60",
    color: "hover:text-accent-emerald hover:border-accent-emerald/30",
  },
  {
    href: "mailto:omuhammadov467@gmail.com",
    icon: FaEnvelope,
    labelKey: "email",
    value: "omuhammadov467@gmail.com",
    color: "hover:text-accent-cyan hover:border-accent-cyan/30",
  },
  {
    href: "https://github.com/mukh4mmadov",
    icon: FaGithub,
    label: "GitHub",
    value: "@mukh4mmadov",
    color: "hover:text-white hover:border-white/30",
  },
  {
    href: "https://www.linkedin.com/in/ozodbek-muhammadov",
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Ozodbek Muhammadov",
    color: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    href: "https://t.me/mukh4mmadov",
    icon: FaTelegram,
    label: "Telegram",
    value: "@mukh4mmadov",
    color: "hover:text-accent-cyan hover:border-accent-cyan/30",
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">{t.contact.title}</h1>
          <p className="text-slate-400">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map(({ href, icon: Icon, labelKey, label, value, color }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`glass rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 border border-transparent ${color}`}
            >
              <div className="p-4 rounded-2xl bg-white/5 mb-4">
                <Icon size={28} className="text-slate-400" />
              </div>
              <span className="text-sm font-medium text-white mb-1">
                {labelKey ? t.contact[labelKey] : label}
              </span>
              <span className="text-xs text-slate-500">{value}</span>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
