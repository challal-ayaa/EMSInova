import "./About.css";
import xImage from "../assets/x.webp";

const About = () => {
  const members = [
    {
      name: "MEZIANI Abderrahmane ",
      role: "Président",
      description: "Supervise, représente le club et coordonne l’équipe",
    },
    {
      name: "EL HATTAB ELIBRAHIMI Elyasse",
      role: "Vice-Président & Designer graphique",
      description: [
        "Assiste le président dans la gestion du club",
        "Conçoit l’identité graphique, les affiches et les supports visuels",
      ],
    },
    {
      name: "OUDRISS Youssef",
      role: "Responsable Technique",
      description:
        "Assure la qualité technique et le bon fonctionnement des outils utilisés",
    },
    {
      name: "CHALLAL Aya",
      role: "Responsable Communication",
      description: [
        "Gère l’image du club et communique avec les entreprises partenaires",
        "Gère et anime les réseaux sociaux du club",
      ],
    },
    {
      name: "EL MOUSSAOUI Aya",
      role: "Rédactrice officielle",
      description:
        "Rédige les documents officiels du club, rapports, présentations et publications.",
    },
    {
      name: "Membres actifs",
      role: "Collaborateurs polyvalents",
      description:
        "Participent aux activités et contribuent à la réalisation des projets du club.",
    },
  ];

  return (
    <section id="about" className="about">
      <h2 className="section-title">Organisation du Club</h2>
      <p className="section-description">
        Une équipe dédiée et structurée pour mener à bien la mission du club
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <div className="member-image">
              <img src={xImage} alt={member.name} />
            </div>
            <h3 style={{ color: "#1976d2" }}>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-description">
              {Array.isArray(member.description)
                ? member.description.map((desc, i) => (
                    <span key={i}>
                      - {desc}
                      {i < member.description.length - 1 && <br />}
                    </span>
                  ))
                : "- " + member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
