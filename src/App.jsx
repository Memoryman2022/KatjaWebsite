import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFound";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Css
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
