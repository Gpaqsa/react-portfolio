// import { useState } from 'react'


import './App.css'
import PersonalInfo from './components/PersonalInfo'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "../src/pages/About";
import Resume from "../src/pages/Resume";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
function App() {
  return (
    <>
      <div className="app">
        <div className="app-block">
          <PersonalInfo />
          <Navbar />
        </div>
        <div className="pages-block">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
