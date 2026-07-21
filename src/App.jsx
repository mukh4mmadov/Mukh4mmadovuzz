import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loyiha from "./pages/Loyiha";
import Skill from "./pages/Skill";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Loyiha />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/men haqimda" element={<Navigate to="/about" replace />} />
        <Route path="/Loyihalar" element={<Navigate to="/projects" replace />} />
        <Route path="/Skill" element={<Navigate to="/skills" replace />} />
        <Route path="/Boglanish" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
