import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Discovery from "./components/Discovery";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Conclusion from "./components/Conclusion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Discovery />
      <Objectives />
      <Conclusion />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
