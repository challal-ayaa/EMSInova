import "./Objectives.css";
import xImage from "../assets/x.webp";

const Objectives = () => {
  return (
    <section id="objectives" className="objectives">
      <h2 className="section-title">Nos Objectifs</h2>
      <p className="section-subtitle">
        ....... piliers fondamentaux pour transformer les étudiants en leaders
        de l'innovation
      </p>
      <div className="objectives-grid">
          <div className="objective-image">
            <img src={xImage} alt="Objectives" />
          </div>
      </div>
    </section>
  );
};

export default Objectives;
