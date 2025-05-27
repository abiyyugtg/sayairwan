import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-300">
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
