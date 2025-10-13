import "./Hero.css";
import xImage from "../assets/x.webp";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">EMSInova</span>
              <br />
              <span className="subtitle-text">
                Emsi, Partenaires d'innovation
              </span>
            </h1>
            <p className="hero-description">
              Transformez vos idées en solutions technologiques réelles.
              Rejoignez une communauté d'étudiants passionnés qui collaborent
              avec des entreprises sur des projets innovants.
            </p>
            <div className="hero-buttons">
              <button className="green-btn">Rejoindre le Club</button>
              <button className="blue-btn">Découvrir</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-photo photo-1">
              <img src={xImage} alt="Innovation" />
            </div>
            <div className="floating-photo photo-2">
              <img src={xImage} alt="Développement" />
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <p>
            EMSInova est un club au sein de l’EMSI, dédié à l’apprentissage
            collaboratif et à l’innovation. Il encourage la créativité, la
            pratique et l’esprit d’initiative chez les étudiants.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
