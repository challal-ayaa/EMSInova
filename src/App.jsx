import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Objectives from "./components/Objectives";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;
