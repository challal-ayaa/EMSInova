import { useState } from "react";
import "./Header.css";
import emsinovaLogo from "../assets/EMSInova2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src={emsinovaLogo} alt="EMSInova Logo" className="logo-img" />
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("about")}>Concept</a>
          <a onClick={() => scrollToSection("objectives")}>Objectifs</a>
          <button className="cta-button">Rejoindre</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
