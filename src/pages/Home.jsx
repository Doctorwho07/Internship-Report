import React from "react";
import "../styles/home.css";

const Home = () => (
  <div className="container mt-5">
    <div
      className="jumbotron text-center bg-light p-5 mb-5"
      style={{
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        color: "#fff",
      }}
    >
      <h1 className="display-4 font-weight-bold">Bienvenue sur mon blog</h1>
      <p className="lead">
        Je suis Alexis ROUCHES, étudiant en Cybersécurité à Lyon Ynov Campus.
        Explorez mon parcours et mes réalisations.
      </p>
      <a href="#about" className="btn btn-primary btn-lg mt-4">
        En savoir plus
      </a>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow-sm p-4 mb-4">
          <h3 className="h5 mb-3">Mon Parcours en Un Coup 👁️</h3>
          <p className="mb-3">
            Au fil des années, j'ai eu l'opportunité de travailler sur divers
            projets, tant académiques que professionnels, qui ont façonné mes
            compétences et affiné mes intérêts. Ce site est non seulement une
            vitrine de mon parcours, mais aussi une plateforme où je partage mes
            réflexions et mes projets futurs.
          </p>
          <p className="mb-0">
            Je vous invite à explorer les différentes sections de ce site pour
            en savoir plus sur mon parcours et mes réalisations.
          </p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-8 text-center">
        <h3 className="h4 mb-3">Restons en contact</h3>
        <p className="mb-4">
          Vous avez des questions ou souhaitez collaborer ? N'hésitez pas à me
          contacter.
        </p>
        <a href="#contact" className="btn btn-secondary btn-lg">
          Contactez-moi
        </a>
      </div>
    </div>
  </div>
);

export default Home;
