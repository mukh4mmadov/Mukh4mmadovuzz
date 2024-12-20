import React from "react";
import Head from "../components/Head";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Skill() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <Head />
      <div className="mt-12 text-center py-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">
          Ko'nikmalarim
        </h2>

        <div className="flex justify-center space-x-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-40">
            <FaHtml5 size={40} className="mx-auto text-orange-600" />
            <h3 className="mt-4 font-semibold">HTML</h3>
            <p className="text-gray-700">Markup tili</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-40">
            <FaCss3Alt size={40} className="mx-auto text-blue-500" />
            <h3 className="mt-4 font-semibold">CSS</h3>
            <p className="text-gray-700">Style sheet tilidan foydalanish</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-40">
            <FaJsSquare size={40} className="mx-auto text-yellow-500" />
            <h3 className="mt-4 font-semibold">JavaScript</h3>
            <p className="text-gray-700">Interaktivlik uchun</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-40">
            <FaReact size={40} className="mx-auto text-blue-400" />
            <h3 className="mt-4 font-semibold">React</h3>
            <p className="text-gray-700">UI kutubxonasi</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-40">
            <SiTailwindcss size={40} className="mx-auto text-teal-500" />
            <h3 className="mt-4 font-semibold">Tailwind CSS</h3>
            <p className="text-gray-700">Utility-first CSS framework</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
