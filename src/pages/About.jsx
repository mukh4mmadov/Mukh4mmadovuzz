import React from "react";
import Head from "../components/Head";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Head />

      <div className="max-w-4xl mt-12 mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Professional Tajriba
          </h2>
          <p className="mt-4 text-gray-700">
            Hozircha professional ish tajribam yo'q, lekin 1 yildan beri
            frontend dasturlashni o'rganaman va Najot Talimni 2024 yilda
            muvaffaqiyatli tamomladim. Bu vaqt ichida men ko'plab loyihalar
            ustida ishladim va o'z bilimlarimni rivojlantirishda katta qadamlar
            tashladim.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Ko'nikmalar</h2>
          <ul className="mt-4 text-gray-700">
            <li>Frontend Dasturlash (HTML, CSS, JavaScript, React)</li>
            <li>Web dizayn va responsivlik</li>
            <li>Git va GitHub</li>
            <li>Ingliz tili o'rganish</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Qiziqishlarim
          </h2>
          <ul className="mt-4 text-gray-700">
            <li>Futbol</li>
            <li>Shaxmat</li>
            <li>Kod yozish</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Sertifikatlar
          </h2>
          <p className="mt-4 text-gray-700">
            O'zbekistonning eng yaxshi IT markazlaridan birida o'qib, dasturlash
            bo'yicha sertifikatga ega bo'ldim.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Kelajak Maqsadlarim
          </h2>
          <p className="mt-4 text-gray-700">
            Kelajakda professional dasturchi bo'lishni, yangi texnologiyalarni
            o'rganishni, va chet elda o'qishni rejalashtiraman.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Iqtibos</h2>
          <p className="mt-4 text-gray-700 italic">
            "On a computer, Ctrl+Z fixes mistakes; in life, you learn from
            them."
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Shaxsiy Ma'lumotlar
          </h2>
          <p className="mt-4 text-gray-700">
            Tug'ilgan sana: 2007-yil 19-noyabr
          </p>
          <p className="mt-4 text-gray-700">Yoshim: 17 da</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-600">Aloqa</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/mukh4mmadov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ozodbek-muhammadov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
