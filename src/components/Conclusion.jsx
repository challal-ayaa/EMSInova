import "./Conclusion.css";

const Conclusion = () => {
  return (
    <section className="conclusion">
      <div className="conclusion-content">
        <div className="vision-section">
          <h3 className="section-title">Notre Vision</h3>
          <p className="section-description">
            Une feuille de route claire pour transformer EMSInova en startup
            d'ingénieurs EMSI
          </p>
          <div className="vision-timeline">
            <div className="timeline-line"></div>
            <div className="vision-milestone">
              <div className="milestone-content">
                <div className="milestone-year">2025</div>
                <h4>Fondation & Création du Club</h4>
                <p>
                  Création officielle d'EMSInova, recrutement des membres
                  fondateurs et structuration des premières activités.
                </p>
              </div>
              <div className="milestone-dot"></div>
            </div>
            <div className="vision-milestone">
              <div className="milestone-content">
                <div className="milestone-year">2026</div>
                <h4>Développement & Partenariats</h4>
                <p>
                  Expansion des activités, établissement de partenariats avec
                  les entreprises et développement de projets concrets.
                </p>
              </div>
              <div className="milestone-dot"></div>
            </div>
            <div className="vision-milestone">
              <div className="milestone-content">
                <div className="milestone-year">2027</div>
                <h4>Transformation en Startup</h4>
                <p>
                  Évolution d'EMSInova vers une petite startup dirigée par les
                  ingénieurs diplômés de l'EMSI.
                </p>
              </div>
              <div className="milestone-dot"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
