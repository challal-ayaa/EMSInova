import "./Objectives.css";
import xImage from "../assets/x.webp";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { LuChartNoAxesColumnIncreasing } from "react-icons/lu";

const Objectives = () => {
  const objectives = [
    {
      icon: <MdOutlineDeveloperMode size={48} color="#2196f3" />,
      title: "Partenariats Entreprises",
      description:
        "Développer des collaborations avec des entreprises afin d'offrir des opportunités de stages et de projets communs.",
    },
    {
      icon: <LuChartNoAxesColumnIncreasing size={48} color="#2196f3" />,
      title: "Création de Startup",
      description:
        "Préparer la création d'une startup issue du club après expérience et développement des compétences.",
    },
    {
      svgIcon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#2196f3">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
      title: "Accompagnement Scolaire",
      description:
        "Aider les étudiants de l'EMSI dans leur parcours scolaire à travers le mentorat et le soutien académique.",
    },
  ];

  return (
    <>
    <section id="objectives" className="objectives">
      <h5 className="section-title">Objectifs du Club</h5>
      <p className="section-subtitle">
        Trois piliers fondamentaux pour transformer les étudiants en leaders de
        l'innovation
      </p>
      <div className="objectives-grid">
        {objectives.map((obj, index) => (
          <div key={index} className="objective-card">
            <div className="objective-svg-icon">{obj.icon || obj.svgIcon}</div>
            <h3 style={{ color: "#2196f3" }}>{obj.title}</h3>
            <p>{obj.description}</p>
          </div>
        ))}
      </div>
    </section>
              <section className="intro-section">
        <div className="intro-content">
          <p>
EMSInova crée un environnement où les étudiants peuvent tester leurs idées, relever des défis et acquérir une expérience concrète dans le numérique et l’innovation.            </p>
        </div>
      </section>
      </>
  );
};

export default Objectives;
