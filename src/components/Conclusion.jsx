import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="conclusion-content">
        <div className="ambition-section">
          <h3>Notre Ambition</h3>
          <p>
            Le Club d'Innovation et de Développement de l'EMSI se veut un espace
            d'apprentissage pratique et collaboratif. Il encourage les étudiants
            à transformer leurs idées en solutions technologiques réelles, tout
            en les préparant à devenir les entrepreneurs et ingénieurs innovants
            de demain.
          </p>
        </div>

        <div className="partnership-cta">
          <h3>Vous souhaitez devenir partenaire ?</h3>
          <p>
            Rejoignez notre réseau et contribuez à former la prochaine
            génération d'innovateurs
          </p>
          <button>Nous Contacter</button>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
