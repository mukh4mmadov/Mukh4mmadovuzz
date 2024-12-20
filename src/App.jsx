import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loyiha from "./pages/Loyiha";
import Skill from "./pages/Skill";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men haqimda" element={<About />}></Route>
        <Route path="/Boglanish" element={<Contact />}></Route>
        <Route path="/Loyihalar" element={<Loyiha />}></Route>
        <Route path="/Skill" element={<Skill />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
