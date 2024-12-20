import React from "react";
import Head from "../components/Head";
import { FaGithub, FaLink } from "react-icons/fa";
import Loyiha1 from "../assets/Loyiha1.jpg";
import Loyiha2 from "../assets/Loyiha2.jpg";

function Loyiha() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Head />

      <div className="max-w-6xl mt-12 mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">Online Store</h2>
          <p className="mt-4 text-gray-700">
            Bu loyiha onlayn do'kon yaratish uchun mo'ljallangan.
            Foydalanuvchilar mahsulotlar haqida ma'lumotni ko'rishlari va ularni
            savatga qo'shishlari mumkin. Mahsulotlar dinamik ravishda yuklanadi,
            va foydalanuvchi savatdagi buyurtmalarni ko'rish va tahrirlash
            imkoniyatiga ega.
          </p>

          <div className="mt-4">
            <img
              src={Loyiha1}
              alt="Online Store"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/mukh4mmadov/4-dars-vazifa111"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href="https://4-dars-vazifa111.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaLink size={24} /> Vercel
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-600">
            Cryptocurrency Dashboard
          </h2>
          <p className="mt-4 text-gray-700">
            Bu loyiha TradingView kabi kripto valyutalar bo'yicha ma'lumotlarni
            real vaqt rejimida ko'rsatadi. Foydalanuvchilar kripto
            valyutalarning narxlarini kuzatishlari, ularni tahlil qilishlari va
            so'nggi yangiliklarni o'qishlari mumkin.
          </p>

          <div className="mt-4">
            <img
              src={Loyiha2}
              alt="Cryptocurrency Dashboard"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center mt-4">
            <a
              href="https://github.com/mukh4mmadov/8-oy-imtixon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href="https://8-oy-imtixon-mu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              <FaLink size={24} /> Vercel
            </a>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold text-blue-600">
            Oddiy ishlarga GitHub linkini qo'shishim kerak
          </h2>
          <a
            href="https://github.com/mukh4mmadov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 mt-4 inline-block"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Loyiha;
