import React from "react";

function ErrorPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="text-lg text-gray-700 mt-2">Sahifa topilmadi!</p>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Bosh sahifaga qaytish
      </a>
    </div>
  );
}

export default ErrorPage;
