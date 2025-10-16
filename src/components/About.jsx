import "./About.css";
import xImage from "../assets/p1.jpg";
import abderrahmaneImg from "../assets/abderrahmane.jpg";
import elyasseImg from "../assets/elyasse.png";
import aya1Img from "../assets/aya1.png";
import aya2Img from "../assets/aya2.png";

const About = () => {
  const members = [
    {
      name: "MEZIANI Abderrahmane ",
      role: "Président",
      description: "Supervise, représente le club et coordonne l'équipe",
      image: abderrahmaneImg,
    },
    {
      name: "EL HATTAB ELIBRAHIMI Elyasse",
      role: "Vice-Président & Designer graphique",
      description: [
        "Assiste le président dans la gestion du club",
        "Conçoit l'identité graphique, les affiches et les supports visuels",
      ],
      image: elyasseImg,
    },
    {
      name: "CHALLAL Aya",
      role: "Responsable Communication",
      description: [
        "Gère l'image du club et communique avec les entreprises partenaires",
        "Gère et anime les réseaux sociaux du club",
      ],
      image: aya1Img,
    },
    {
      name: "EL MOUSSAOUI Aya",
      role: "Rédactrice officielle",
      description:
        "Rédige les documents officiels du club, rapports, présentations et publications.",
      image: aya2Img,
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
              <img src={member.image} alt={member.name} />
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
