import React from "react";
import Head from "../components/Head";
import {
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Head />
      <div className="mt-12 text-center py-12">
        <h1 className="text-3xl font-bold text-blue-600">Bog'lanish</h1>
        <p className="mt-4 text-lg text-gray-700">
          Menga quyidagi tarmoqlar orqali bog'lanishingiz mumkin:
        </p>

      
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
            <a
              href="tel:+998999151260"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500"
            >
              <FaPhone size={40} />
              <span className="mt-2 text-sm">Telefon</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
            <a
              href="mailto:omuhammadov467@gmail.com"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500"
            >
              <FaEnvelope size={40} />
              <span className="mt-2 text-sm">Email</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
            <a
              href="https://github.com/mukh4mmadov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500"
            >
              <FaGithub size={40} />
              <span className="mt-2 text-sm">GitHub</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
            <a
              href="https://www.instagram.com/mukh4mmadov_7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500"
            >
              <FaInstagram size={40} />
              <span className="mt-2 text-sm">Instagram</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-100">
            <a
              href="https://t.me/mukh4mmadov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-700 hover:text-blue-500"
            >
              <FaTelegram size={40} />
              <span className="mt-2 text-sm">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
