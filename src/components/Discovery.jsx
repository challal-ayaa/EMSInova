import "./Discovery.css";
import xImage from "../assets/EmsiLogoGr.png";

const Discovery = () => {
  return (
    <>
    <section id="discovery" className="discovery">
      <h2 className="section-title">À la découverte du Club</h2>
      <div className="discovery-content">
        <div className="discovery-text">
          <p className="discovery-description">
            EMSInova est bien plus qu'un simple club étudiant. C'est un
            écosystème dynamique où l'innovation, la technologie et
            l'entrepreneuriat se rencontrent pour créer des opportunités
            exceptionnelles.
          </p>
          <p className="discovery-description">
            Notre mission est de permettre aux étudiants de collaborer avec des
            entreprises à travers des projets réels, stages et défis techniques.
            Nous offrons un espace d'apprentissage pratique et collaboratif au
            sein de l'EMSI.
          </p>
          <p className="discovery-description">
            Rejoignez une communauté d'étudiants passionnés qui transforment
            leurs idées en solutions technologiques réelles, tout en se
            préparant à devenir les entrepreneurs et ingénieurs innovants de
            demain.
          </p>
        </div>
        <div className="discovery-image">
          <img src={xImage} alt="Découverte EMSInova" />
        </div>
      </div>
    </section>

      </>
  );
};

export default Discovery;
