import "./Hero.css";

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
                Club d'Innovation & Développement
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
            <div className="floating-card card-1">
              <div className="icon"></div>
              <h3>Innovation</h3>
            </div>
            <div className="floating-card card-2">
              <div className="icon"></div>
              <h3>Développement</h3>
            </div>
            <div className="floating-card card-3">
              <div className="icon"></div>
              <h3>Startup</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-content">
          <p>
            Le Club d'Innovation et de Développement Technologique EMSInova est
            un espace d'apprentissage pratique et collaboratif au sein de
            l'EMSI. Nous croyons que l'innovation naît de la collaboration, de
            la pratique et de l'audace d'entreprendre.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
