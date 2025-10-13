import { useState } from "react";
import "./Header.css";
import emsinovaLogo from "../assets/EMSInova2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu first
      setIsMenuOpen(false);

      // Add small delay for mobile menu to close
      setTimeout(
        () => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        },
        isMenuOpen ? 300 : 0
      );
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
          <a onClick={() => scrollToSection("hero")}>Accueil</a>
          <a onClick={() => scrollToSection("discovery")}>À la découverte</a>
          <a onClick={() => scrollToSection("objectives")}>Objectifs</a>
          <a onClick={() => scrollToSection("conclusion")}>Notre Vision</a>
          <a onClick={() => scrollToSection("about")}>Organisation</a>
          <a onClick={() => scrollToSection("contact")}>Nous Contacter</a>
          <button
            className="cta-button"
            onClick={() => scrollToSection("contact")}
          >
            Rejoindre
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
