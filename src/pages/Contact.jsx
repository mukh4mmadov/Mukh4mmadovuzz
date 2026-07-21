import React from "react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import {
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const contactLinks = [
  {
    icon: FaPhone,
    labelKey: "phone",
    href: "tel:+998999151260",
    color: "from-emerald-900/80 to-green-950/80",
    border: "border-emerald-500/20",
  },
  {
    icon: FaEnvelope,
    labelKey: "email",
    href: "mailto:omuhammadov467@gmail.com",
    label: "Email",
    color: "from-blue-900/80 to-indigo-950/80",
    border: "border-blue-500/20",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/mukh4mmadov",
    external: true,
    color: "from-gray-800/80 to-slate-950/80",
    border: "border-gray-500/20",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/mukh4mmadov_7",
    external: true,
    color: "from-pink-900/80 to-purple-950/80",
    border: "border-pink-500/20",
  },
  {
    icon: FaTelegram,
    label: "Telegram",
    href: "https://t.me/mukh4mmadov",
    external: true,
    color: "from-sky-900/80 to-blue-950/80",
    border: "border-sky-500/20",
  },
];

function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Head />

      <main className="flex-1 pt-24 pb-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300">{t.contact.subtitle}</p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {contactLinks.map(({ icon: Icon, labelKey, label, href, external, color, border }) => (
              <a
                key={href}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`bg-gradient-to-br ${color} border ${border} p-6 rounded-2xl shadow-xl text-white hover:scale-110 transition-transform backdrop-blur-sm`}
              >
                <Icon size={36} className="mx-auto" />
                <span className="mt-3 block text-sm font-semibold">
                  {labelKey ? t.contact[labelKey] : label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
