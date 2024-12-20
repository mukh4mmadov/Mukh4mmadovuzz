import React from "react";
import Head from "../components/Head";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleGo() {
    navigate("/Loyihalar");
  }
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      <Head />

      <div className="relative z-10 text-center px-6 md:px-12 lg:px-24 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest text-gray-200">
          Salom, men Ozodbek!
        </h1>

        <p className="text-lg md:text-xl font-light text-gray-300">
          Web dasturlash va interaktiv dizayn yaratish orqali yangi
          imkoniyatlarni ochish uchun doimo izlanaman.
        </p>

        <button
          onClick={handleGo}
          className="mt-8 px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-500 transition duration-300 ease-in-out transform"
        >
          Mening Loyihalarim
        </button>

        <div className="mt-12">
          <p className="text-xl md:text-2xl font-light text-gray-400">
            Texnologiyalarni mukammal boshqarish, o'zgaruvchan bozor talablariga
            moslashish va foydalanuvchi ehtiyojlarini qondirish - bu mening
            asosiy maqsadim.
          </p>
        </div>

        <div className="mt-12 text-xl font-medium text-gray-200 opacity-80">
          <p className="tracking-wide leading-relaxed">
            Har bir loyiha men uchun yangi imkoniyat va o'sishdir. Yangi
            texnologiyalarni o'rganish, interaktiv va foydalanuvchi uchun qulay
            ilovalar yaratish - bu mening jiddiy yondashuvim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
