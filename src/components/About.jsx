import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Concept du Club</h2>
      <p className="section-description">
        Un espace d'innovation où les étudiants transforment leurs idées en
        réalité à travers des projets concrets
      </p>
      <div className="about-content">
        <div className="about-card">
          <div className="card-icon" style={{ color: "#1976d2" }}>
            🎯
          </div>
          <h3 style={{ color: "#1976d2" }}>Notre Mission</h3>
          <p>
            Permettre aux étudiants de collaborer avec des entreprises à travers
            des projets réels, stages et défis techniques.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon" style={{ color: "#1976d2" }}>
            ⚡
          </div>
          <h3 style={{ color: "#1976d2" }}>Notre Approche</h3>
          <p>
            Renforcer les compétences en gestion de projet, conception,
            développement et test, tout en encourageant l'innovation.
          </p>
        </div>
        <div className="about-card">
          <div className="card-icon" style={{ color: "#1976d2" }}>
            🌟
          </div>
          <h3 style={{ color: "#1976d2" }}>Notre Vision</h3>
          <p>
            Former des profils expérimentés capables de lancer une startup issue
            du club après deux ans d'activité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
